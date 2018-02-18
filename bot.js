const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var prefix = '!';

var dbchar = 'http://optc-db.github.io/characters/#/search/';
var dbcharid = 'http://optc-db.github.io/characters/#/view/';
var dbcharpic = 'https://onepiece-treasurecruise.com/wp-content/uploads/c';
var dbcharicon = 'https://onepiece-treasurecruise.com/wp-content/uploads/f';
var basetrans = 'http://optc-db.github.io/damage/#/transfer/D';

var dpj = require("./database.json");
var dship = require("./ships.json");

var db1 = require("./details1");
db1 = db1.db1;
var db2 = require("./details2");
db2 = db2.db2;

function merge(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

var fulldb = merge(db1, db2);

var cdlist = require("./cooldowns");
cdlist = cdlist.cdlist;

//------------------------------------------------------------------------- START GETLINK FS

function findnum(name, dic) {
  for (var num in dic) {
    if (dic.hasOwnProperty(num)) {
      var aliases = dic[num];
      for (var alias=0; alias<aliases.length; alias++) {
        if (aliases[alias] == name) {
          return num
        }
      }
    }
  }
  return 'X'
}  

function getdblink(content) {
  var link = basetrans;
  var contlist = content.split(';;');
  var chars = contlist.shift().split(';');
  if (chars.length != 6) return "You didn't put a complete team!"
  
  var cottons = contlist.shift();
  var cci = [];
  for(l=0; l<cottons.length; l++) {
    var li = cottons.charAt(l);
    if (li == 'A') cci.push('100:0:0')
    else if (li == 'H') cci.push('0:100:0')
    else if (li == 'R') cci.push('0:0:100')
    else if (li == '2') cci.push('100:100:0')
    else if (li == '3') cci.push('100:50:50')
    else if (li == 'X') cci.push('500:500:500')
    else cci.push('0:0:0')
  }
  cottons = cci;
  
  for(var char=0; char<chars.length; char++) {
    var charid = findnum(chars[char].toLowerCase(), dpj);
    if (charid == 'X') return 'Invalid Character Name!'
    var charcc = cottons[char];
    link += charid;
    link += ':99:';
    link += charcc;
    link += ',';
  }
  link = link.slice(0,-1);
  link += 'C';
  
  if (contlist.length == 0) return "You didn't put a ship!"
  
  var shipid = findnum(contlist[0], dship);
  if (shipid == 'X') return 'Invalid Ship Name!'
  link += shipid;
  link += ',10B0D0E1365Q0L0G0R63S100H'
  
  return link
  
}  

//------------------------------------------------------------------------- END GETLINK FS

//------------------------------------------------------------------------- START SKILLUP FS  

function fact(i) {
  if(i==0) return 1
  else return i*fact(i-1)
}

function Bin_f(k, n, p) {
  var nf = fact(n);
  var kf = fact(k);
  var nkf = fact(n-k);
  var combi = nf/(kf*nkf);
  var pro1 = Math.pow(p, k);
  var pro2 = Math.pow((1-p), (n-k));
  var prob = combi * pro1 * pro2;
  return prob
}

function Bin_F(k, n, p) {
  var sum = 0;
  for(i=0; i<(k+1); i++) {
    var bini = Bin_f(i, n, p);
    sum += bini;
  }
  return sum
}

//Returns the remaining probability R=Pr(X>=k)=Pr(X>(k-1))=1-Pr(X<=(k-1))
function Bin_R(k, n, p) {
  return 1-Bin_F(k-1, n, p)
}

//Probability of getting k skillups with n copies, with event or not, OC rates or not
//OC rates are 1/5 (2/5 with event), normal rates are 1/6 (1/3 with event)
function ProbSkill(k, n, event, OC) {
  if(event == '2') {
    if(OC == 'S' || OC == 'Y') return Bin_R(k, n, 2/5)
    else return Bin_R(k, n, 1/3)
  }
  if(event == '3') {
    if(OC == 'S' || OC == 'Y') return Bin_R(k, n, 3/5)
    else return Bin_R(k, n, 1/2)
  }
  else {
    if(OC == 'S' || OC == 'Y') return Bin_R(k, n, 1/5)
    else return Bin_R(k, n, 1/6)
  }
}

//------------------------------------------------------------------------- END SKILLUP FS

client.on('ready', () => {
  client.user.setGame("!ayuda")
});


client.on('message', msg => {
  if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    
  //Handles arguments to just take the first word
  const args = msg.content.slice('!'.length).split(/ +/);
  const command = args.shift().toLowerCase(); 


//------------------------------------------------------------------------- START HELP  
  
  if (command == 'ayuda') {
    var helptext = "Soy un bot para animar y ayudar en este chat."+
                   "\n Debería estar siempre activo, si no respondo puede que haya algún problema."+
                   "\n \n Me puedes llamar con estos comandos:"+      
                   "\n   **!ayuda** - Muestra este mensaje"+
                   "\n \n **__COMANDOS DE OPTC__**"+
                   "\n   __NOTA:__ Muchos dependen de una lista de IDs que aún no está completa!"+     
                   "\n   **!char** o **!pj** - Busca un personaje o ID en la database (link)"+
                   "\n   **!db** - Responde con la info de un personaje en la database (mensaje)"+        
                   "\n   **!icon** - Muestra el icono de un personaje (Ej.: !icon Croco Legend)"+
                   "\n   **!art** o **!pic** - Muestra el artwork de un personaje (Ej.: !art Croco Legend)"+
                   "\n   **!getlink** - Crea un equipo en la calculadora de la database (link)"+
                   "\n   **!eventoactivo** - Muestra una ayuda para diferenciar Skillup de Supersuccess en JP"+
                   "\n   **!ambush** - Responde qué Ambush hay activo (Raids) en la Japo"+        
                   "\n   **!guiasn** - Envía un enlace a la Guía del Supernova (by Alados5 & DaniHolgado)"+
                   "\n   **!skillup K N E D** - Calcula la probabilidad de obtener K niveles con N copias"+
                   "\n       E y D son parámetros opcionales:"+
                   "\n         E indica si hay evento de skillup, '2' si es x2 y '3' si es x3."+
                   "\n           -> Por defecto está activado en x2, cualquier otro texto será x1."+
                   "\n         D indica el chance base de skillup, 'S' para 1/5 (optc-db), 'N' para 1/6"+
                   "\n \n **__COMANDOS DE THEJOSELU8__**"+
                   "\n   **!thejoselu8** - Cabrea a joselu ¡Gratis!"+
                   "\n   **!directos** - Muestra el horario de los directos";
    
    msg.channel.send({embed: {
      color: 7853583,
      title: "Asistente Automático",
      description: helptext,      
      footer: {
        text: "Soy un bot creado por Alados5",
        icon_url: client.user.avatarURL
      }
      
    }})
  }
  
  if (command == 'directos') {
    msg.channel.send("**__HORARIO DIRECTOS THEJOSELU8 EN TWITCH__**"+
                     "\n \n MARTES y JUEVES de 20:30h a 22:30h \n SÁBADOS y DOMINGOS de 15:00h a 18:00h")
  }
  
  if (command == 'eventoactivo') {
    var image = "https://media.discordapp.net/attachments/391192337562468354/400302400151486477/Screenshot_20180109-085808.jpg?width=1293&height=541";
    msg.channel.send(image)
  }
  
  if (command == 'guiasn') {
    var enlace = "https://docs.google.com/document/d/1pIUvQwcItefsjQkPgDdwg7BsYvc_M5kUY_8mFy-1eqM/edit?usp=sharing";
    msg.channel.send(enlace)
  }
  
  if (command == 'ambush') {
    var fecha = new Date();
    var utc = fecha.getTime();
    var ref = 1518750000000; //Friday Feb 16th, 2018 04:00h (GMT+1)
    var ambushorder = ["Cavendish", "Shanks", "YWB"];
    var oneweek = 604800000;
    
    var diftoref = utc - ref;
    var weeks = Math.floor(diftoref/oneweek);
    var remain = weeks%3;
    
    var text = "Si hay algún Raid, el Ambush de hoy es: ";
    if (remain == 0) {
      msg.channel.send(text+ambushorder[0])
    }
    else if (remain == 1) {
      msg.channel.send(text+ambushorder[1])
    }
    else {
      msg.channel.send(text+ambushorder[2])
    }
  }
  
//------------------------------------------------------------------------- END HELP    
  
//------------------------------------------------------------------------- START MEMES

  if (command == 'thejoselu8') {
    msg.reply('TIIIIOOOO!!!!!')
  }
  
  if (command == 'gettingoverit') {
    msg.reply('Consejo: coge la serpiente')
  }

//------------------------------------------------------------------------- END MEMES  
  
//------------------------------------------------------------------------- START CHAR/PJ    
  
  if (command == 'char' || command == 'pj') {   
    var chartolook = args.toString();
        
    var isaname = isNaN(parseInt(chartolook));
    if (isaname) {
      chartolook = chartolook.replace(',','%20');
      msg.channel.send(dbchar+chartolook)
    }
    else msg.channel.send(dbcharid+chartolook);
  } 

//------------------------------------------------------------------------- END CHAR/PJ
  
//------------------------------------------------------------------------- START ICON  

  if (command == 'icon') {
    var chartolook = msg.content.slice(6).toLowerCase();
    var charid = findnum(chartolook, dpj);
    if (charid == 'X') return msg.channel.send('Character Name Error')
    var iconlink = dbcharicon + charid + '.png';
    msg.channel.send(iconlink)
  }  
  
//------------------------------------------------------------------------- END ICON
  
//------------------------------------------------------------------------- START ART

  if (command == 'art' || command == 'pic') {
    var chartolook = msg.content.slice(5).toLowerCase();
    var charid = findnum(chartolook, dpj);
    if (charid == 'X') return msg.channel.send('Character Name Error')
    var artlink = dbcharpic + charid + '.png';
    msg.channel.send(artlink)
  }  
  
//------------------------------------------------------------------------- END ART

//------------------------------------------------------------------------- START GETLINK  

  if (command == 'getlink') {
    var glink = getdblink(msg.content.slice(9));
    msg.channel.send(glink)
  }  
  
//------------------------------------------------------------------------- END GETLINK
  
//------------------------------------------------------------------------- START DATABASE  
  
  if (command == 'db') {
    var charname = msg.content.slice(4);
    var chartolook = charname.toLowerCase();
    var charid = findnum(chartolook, dpj);
    if (charid == 'X') return msg.channel.send('Character Name Error')
    var charid0 = charid;
    charid = parseInt(charid);
    
    var charinfo = fulldb[charid];
    //Info Names: captain, captainNotes, specialName, special, specialNotes, sailor, limit, potential
    //Captain can be string or object with {"base":"...", "level1":"...", etc}
    //Sailor can also be a string or object like: {"base":"None", "level1":"...", etc} 
    //Limit is the limit tree, like: [{"description":"..."}, {"description":"..."}, etc]
    //Potential are the LB Abilities, like: [{"Name":"...", "description":["Level 1: ...", etc]}, etc]
    
    if (!charinfo) return msg.channel.send("Character not implemented yet")
    if (!charinfo.captain) charinfo.captain = 'None'
    if (!charinfo.special) {
      charinfo.special = ''
      charinfo.specialName = 'None'
    }
    if (!charinfo.sailor) charinfo.sailor = 'None'
    
    if (typeof charinfo.captain == "object") {
      var charCA = charinfo.captain;
      var ctext = "**Limit Breakable Captain Ability:** \n";   
      for (var CAlevel in charCA) {
        if (charCA.hasOwnProperty(CAlevel)) {
          var desc = charCA[CAlevel];
          ctext += "__" + CAlevel + ":__ " + desc + '\n';
        }
      }
      charinfo.captain = ctext;
    }
    if (typeof charinfo.sailor == "object") {
      var charSA = charinfo.sailor;
      var stext = "**Limit Breakable Sailor Ability:** \n";   
      for (var SAlevel in charSA) {
        if (charSA.hasOwnProperty(SAlevel)) {
          var desc = charSA[SAlevel];
          stext += "__" + SAlevel + ":__ " + desc + '\n';
        }
      }
      charinfo.sailor = stext;
    }
    
    var charicon = 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + charid0 + '.png';
      
    var listid = charid-1;
    msg.channel.send(listid)
    var charcd = cdlist[listid];
    if (charcd = null || !charcd) {
      charcd = 'N/A';
    }
    else {
      //charcd = charcd[0].toString() + ' -> ' charcd[1].toString() + ' turns';
      charcd = charcd.toString();
    }
    msg.channel.send(charcd)
      
    msg.channel.send({embed: {
      color: 42751,
      title: "OPTC DATABASE - CHARACTER INFO",
      footer: {
        text: "Bot by Alados5 | Info by optc-db.github.io",
        icon_url: client.user.avatarURL
      },
      thumbnail: {
        "url":charicon
      },
      fields: [
        {
          name: "\n __Character__",
          value: "ID: " + charid + ' - **' + charname + "** \n ~"
        },
        {
          name: "\n __Captain Ability__",
          value: charinfo.captain + "\n ~"
        },
        {
          name: "\n __Sailor Ability__",
          value: charinfo.sailor + "\n ~"
        },
        {
          name: "\n __Special Ability__",
          value: '***' + charinfo.specialName + '*** \n' + charinfo.special + '\n __Cooldown:__ '
        }
      ]
    }})
    
  }
  
//------------------------------------------------------------------------- END DATABASE    
  
//------------------------------------------------------------------------- START SKILLUP
  
  if (command == 'skillup') {
    //ProbSkill(k, n, Event, OC)
    if(args.length < 2) return msg.reply("Enter valid data!")
    var k = args[0];
    var n = args[1];
    
    if(args.length == 2) {
      var Event = '2';
      var OC = 'Y';
    }
    else if(args.length == 3) {
      var Event = args[2];
      var OC = 'Y';
    }
    else {
      var Event = args[2];
      var OC = args[3];
    }
    
    var probability = ProbSkill(k, n, Event, OC);
    
    probability *= 100;
    if(Event != '2' && Event != '3') {
      Event = '1'
    }
    msg.channel.send("The chance of having "+k+" skillups or more with "+n+" copies is: "+probability+"% \n Calculations done with Skillup x"+Event)
    
  }
  
  if (command == 'copies') {
    if(args.length < 2) return msg.reply("Enter valid data!")
    var k = args[0];
    var x = args[1];
    var probbase = x/100;
    
    if(args.length == 2) {
      var Event = '2';
      var OC = 'Y';
    }
    else if(args.length == 3) {
      var Event = args[2];
      var OC = 'Y';
    }
    else {
      var Event = args[2];
      var OC = args[3];
    }
    
    msg.channel.send(k+" skillups - Prob: "+probbase+" - Event: "+Event+" - OC: "+OC)
    //Calculates the number N of copies needed to get k or more successes (skillups)
    //with a probability of x (recommended 75%)
    for(ci=1; ci<100; ci++) {
      var realprob = ProbSkill(k, ci, Event, OC);
      var copies = ci;
      msg.channel.send(copies+" copies - Prob: "+realprob)
      if(realprob >= probbase) { break; }
    }

    msg.channel.send("To be a "+x+"% sure of having "+k+" skillups, you'll need: "+copies+" copies")
    
  }
  
//------------------------------------------------------------------------- END SKILLUP
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
