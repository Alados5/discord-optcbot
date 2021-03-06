const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var prefix = '!';

var dbchar = 'http://optc-db.github.io/characters/#/search/';
var dbcharid = 'http://optc-db.github.io/characters/#/view/';
var dbcharpic = 'https://onepiece-treasurecruise.com/wp-content/uploads/c';
var dbcharicon = 'https://onepiece-treasurecruise.com/wp-content/uploads/f';
var dbshippic = 'https://onepiece-treasurecruise.com/wp-content/uploads/';
var basetrans = 'http://optc-db.github.io/damage/#/transfer/D';

var dpj = require("./database/names.json");
var dship = require("./database/ships.json");

var db1 = require("./database/details1");
db1 = db1.db1;
var db2 = require("./database/details2");
db2 = db2.db2;
var db3 = require("./database/details3");
db3 = db3.db3;
var db4 = require("./database/details4");
db4 = db4.db4;
var db5 = require("./database/details5");
db5 = db5.db5;
var db6 = require("./database/details6");
db6 = db6.db6;

function merge(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

var db12 = merge(db1, db2);
var db34 = merge(db3, db4);
var db14 = merge(db12, db34);

var db56 = merge(db5, db6);

var fulldb = merge(db14, db56);

var cdlist = require("./database/cooldowns");
cdlist = cdlist.cdlist;
var shipfx = require("./database/shipfx");
shipfx = shipfx.shipfx;

var annisugolist = require("./sugorates/anni.json");
var sugolist = require("./sugorates/jl8rates.json");

var teams = {};

//------------------------------------------------------------------------- START FINDNUM FS

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

//------------------------------------------------------------------------- END FINDNUM FS

//------------------------------------------------------------------------- START DBINFO FS

function dbinfo(charname) {
  var chartolook = charname.toLowerCase();
  var charid = findnum(chartolook, dpj);
  if (charid == 'X') {
    var charnum = parseInt(charname);
    if (!fulldb[charnum]) return "Character Name Error"
    else {
      charid = charnum.toString();
      if (charid.length == 1) charid = '000' + charid;
      else if (charid.length == 2) charid = '00' + charid;
      else if (charid.length == 3) charid = '0' + charid;
    }
  }
  var charid0 = charid;
  charid = parseInt(charid);
  
  var charinfo = fulldb[charid];
    //Info Names: captain, captainNotes, specialName, special, specialNotes, sailor, limit, potential
    //Captain can be string or object with {"base":"...", "level1":"...", etc}
    //Captain Actions are always noted with: ... <br> <b>Action:</b> ...
    //Special can be string or list with [{"description":"...", "cooldown":[M,N]}, {...}] 
    //Sailor can also be a string or object like: {"base":"None", "level1":"...", etc} 
    //Limit is the limit tree, like: [{"description":"..."}, {"description":"..."}, etc]
    //Potential are the LB Abilities, like: [{"Name":"...", "description":["Level 1: ...", etc]}, etc]
    
  if (!charinfo) return "Character not implemented yet"
  if (!charinfo.captain) charinfo.captain = 'None'
  if (!charinfo.special) {
    charinfo.special = ''
    charinfo.specialName = 'None'
  }
  if (!charinfo.sailor) charinfo.sailor = 'None'
  if (typeof charinfo.captain == "object") {
    var charCA = charinfo.captain;
    var ctext = "**Variable Captain Ability:** \n";
    var carray = [];
    var dualunit = false;
    for (var CAlevel in charCA) {
      if (charCA.hasOwnProperty(CAlevel)) {
        var desc = charCA[CAlevel];
        if (CAlevel == "combined") {
          dualunit = true;
        }
        carray.push(desc + '\n');
      }
    }
    
    if (!dualunit) {
      ctext += "__No LB:__ " + carray[0] + "__Full LB:__ " + carray[carray.length-1];
    }
    else {
      ctext += "__Character 1:__ " + carray[0] + "__Character 2:__ " + carray[1] + "__Dual Characters:__ " + carray[2];   
    }
      
    charinfo.captain = ctext;
  }
    
  var multistage = 'False';
  if (typeof charinfo.special == "object") {
    multistage = 'True';
    var charSP = charinfo.special;
    //charSP = [{"description":"...", "cooldown":[M,N]}, {...}]
    var sptext = "";
    var stagei;
    for (stagei = 1; stagei <= charSP.length; stagei++) {
      var SPstage = charSP[stagei-1];
      //SPstage = {"description":"...", "cooldown":[M,N]}
      var stagedesc = "__Stage " + stagei.toString() + ":__ " + SPstage.description;
      var stagecd = SPstage.cooldown[0].toString() + ' -> ' + SPstage.cooldown[1].toString() + ' turns';
      sptext += stagedesc + '\n' + '__Cooldown__ (S' + stagei.toString() + '): ' + stagecd + '\n \n';
    }
    charinfo.special = sptext.slice(0,-3);
  }
  if (typeof charinfo.sailor == "object") {
    var charSA = charinfo.sailor;
    var stext = "**Variable Sailor Ability:** \n";   
    for (var SAlevel in charSA) {
      if (charSA.hasOwnProperty(SAlevel)) {
        var desc = charSA[SAlevel];
        stext += "__" + SAlevel + ":__ " + desc + '\n';
      }
    }
    charinfo.sailor = stext;
  }
    
  var charicon = 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + charid0 + '.png';
    
  var charcd = cdlist[charid-1];      
  if (charcd == null || !charcd) {
    charcd = '';
  }
  else if (multistage == 'True') {
    charcd = '';
  }
  else {
    charcd = '__Cooldown:__ ' + charcd[0].toString() + ' -> ' + charcd[1].toString() + ' turns \n';
  }
  
  var capaction = charinfo.captain.split("<br> <b>Action:</b>");
  if (capaction.length > 1) {
    charinfo.captain = capaction[0] + '\n' + '__Captain Action:__' + capaction[1];
  }
    
  return [charid, charinfo, charcd, charicon] 
  
}

function SummaryLB(lbtree) {
  //Limit is the limit tree, like: [{"description":"..."}, {"description":"..."}, etc]
  var statsup = [0, 0, 0, 0, 0]; //ATK, HP, RCV, Sockets, -CD
  var potnames = [];
  for(lbi=0;lbi<lbtree.length;lbi++) {
    var lblevel = lbtree[lbi].description;
    if (lblevel.indexOf("Boosts base ATK") >= 0) {
      var statincrease = lblevel.slice(lblevel.indexOf("by")+3, lblevel.indexOf("by")+6);
      statsup[0] += parseInt(statincrease);
    }
    else if (lblevel.indexOf("Boosts base HP") >= 0) {
      var statincrease = lblevel.slice(lblevel.indexOf("by")+3, lblevel.indexOf("by")+6);
      statsup[1] += parseInt(statincrease);
    }
    else if (lblevel.indexOf("Boosts base RCV") >= 0) {
      var statincrease = lblevel.slice(lblevel.indexOf("by")+3, lblevel.indexOf("by")+6);
      statsup[2] += parseInt(statincrease);
    }
    else if (lblevel.indexOf("Socket slot") >= 0) {
      statsup[3] += 1;
    }
    else if (lblevel.indexOf("Reduce base Special Cooldown") >= 0) {
      var cddecrease = lblevel.slice(lblevel.indexOf("by")+3, lblevel.indexOf("by")+6);
      statsup[4] += parseInt(cddecrease);
    }
    else if (lblevel.indexOf("Potential") >= 0) {
      potnames.push(lblevel.slice(lblevel.indexOf("Potential")+13));
    }
  }
  var lbtext = "__Stat increase:__ " + statsup[0] + " ATK / " + statsup[1] + " HP / " + statsup[2] + " RCV" +
               "\n" + "__Extra Sockets:__ " + statsup[3] + "\n" + "__CD Reduction:__ " + statsup[4] + " turns";
  
  var pottext = "__Potential Ability 1:__ " + potnames[0] +"\n" + "__Potential Ability 2:__ " + potnames[1];
  if (potnames.length == 3) pottext += "\n" + "__Potential Ability 3:__ " + potnames[2];
 
  return [lbtext, pottext]
}

//------------------------------------------------------------------------- END DBINFO FS

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

//Probability of getting k s with n copies, with event or not, OC rates or not
//OC rates are 1/5 (2/5 with event), normal rates are 1/6 (1/3 with event)
function ProbSkill(k, n, event, OC) {
  
  if(isNaN(event)) event = 1;
  
  if(OC == 'S' || OC == 'Y') return Bin_R(k, n, event/5)
  else return Bin_R(k, n, event/6)

}

//------------------------------------------------------------------------- END SKILLUP FS

//------------------------------------------------------------------------- START MKTEAM FS

function MkUnits(content, useri) {
  if (!teams[useri]) return "You have to begin creating your team first!"
  var units = content.slice(14).toLowerCase();
  units = units.split(', ');
  if (units.length != 6) return "You didn't put a complete team!"
  teams[useri]['Units'] = [];
  for(u=0; u<units.length; u++) {
    var charid = findnum(units[u], dpj);
    if (charid == 'X') return "Invalid character name!"
    teams[useri]['Units'].push(charid);
  }
  return "Units Stored Correctly!"
}

function MkLevels(args, useri) {
  if (!teams[useri]) return "You have to begin creating your team first!"
  var unitlvs = args.slice(1);
  if (unitlvs.length != 6) return "You didn't specify all units' levels!"
  teams[useri]['Levels'] = unitlvs;
  return "Levels Stored Correctly!"
}

function MkCottons(args, useri) {
  if (!teams[useri]) return "You have to begin creating your team first!"
  var unitccs = args.slice(1);
  if (unitccs.length != 6) return "You didn't specify all units' CCs!"
  teams[useri]['Cottons'] = [];
  for(u=0; u<unitccs.length; u++) {
    var cc = unitccs[u];
    if(cc == 'A' || cc == 'ATK' || cc == '100:0:0') teams[useri]['Cottons'].push(':100:0:0')
    else if(cc == 'H' || cc == 'HP' || cc == '0:100:0') teams[useri]['Cottons'].push(':0:100:0')
    else if(cc == 'R' || cc == 'RCV' || cc == '0:0:100') teams[useri]['Cottons'].push(':0:0:100')
    else if (cc == '2' || cc == 'ATK&HP' || cc == '100:100:0') teams[useri]['Cottons'].push(':100:100:0')
    else if (cc == '3' || cc == 'ATK&5050' || cc == '100:50:50') teams[useri]['Cottons'].push(':100:50:50')
    else if (cc == 'X' || cc == 'MAX' || cc == '500:500:500') teams[useri]['Cottons'].push(':500:500:500')
    else teams[useri]['Cottons'].push(':0:0:0')
  }
  return "Cottons Stored Correctly!"
}

function MkOrbs(args, useri) {
  if (!teams[useri]) return "You have to begin creating your team first!"
  var unitorbs = args.slice(1);
  if (unitorbs.length != 6) return "You didn't specify all units' orbs!"
  teams[useri]['Orbs'] = 0;
  var weightsP = [1024, 256, 64, 16, 4, 1];
  var weightsN = [2048, 512, 128, 32, 8, 2];
  var orbnum = 0;
  for(u=0; u<unitorbs.length; u++) {
    var orb = unitorbs[u];
    if(orb == 'Matching' || orb == 'M' || orb == 'Good' || orb == '1') orbnum += weightsP[u];
    else if(orb == 'Negative' || orb == 'B' || orb == 'Bad' || orb == '-1') orbnum += weightsN[u];
    else orbnum += 0;
  }
  teams[useri]['Orbs'] = orbnum.toString();
  return "Orbs Stored Correctly!"
}

function MkShip(content, useri) {
  if (!teams[useri]) return "You have to begin creating your team first!"
  var shipname = content.slice(13).toLowerCase();
  var shipid = findnum(shipname, dship);
  if (shipid == 'X') return "Invalid Ship Name!"
  teams[useri]['Ship'] = shipid;
  return "Ship Stored Correctly!"
}

function MkSpecials(args, useri) {
  if (!teams[useri]) return "You have to begin creating your team first!"
  var unitsp = args.slice(1);
  if (unitsp.length != 6) return "You didn't specify all units' specials!"
  teams[useri]['Specials'] = 0;
  var weightsS = [32, 16, 8, 4, 2, 1];
  var spnum = 0;
  for(u=0; u<unitsp.length; u++) {
    var sp = unitsp[u];
    if(sp == 'Activated' || sp == 'Y' || sp == 'On' || sp == '1') spnum += weightsS[u];
    else spnum += 0;
  }
  teams[useri]['Specials'] = spnum.toString();
  return "Specials Stored Correctly!"  
}


//------------------------------------------------------------------------- END MKTEAM FS




//-------------------------------------------------------------------------------------------
//--------------------------------- BEGIN BOT ACTION ----------------------------------------
//-------------------------------------------------------------------------------------------

client.on('ready', () => {
  client.user.setPresence({ game: { name: '!ayuda' }, status: 'online' });
});


client.on('guildMemberAdd', member => {
  var channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  if (channel.id == 613017080668749835) {
      channel.send(`Muy buenas ${member}, ¿qué tal andamos? ¡Bienvenido al Server!`);
  }
});


client.on('message', msg => {
    
  //Returns if author is a bot
  if(msg.author.bot) return;

//------------------------------------------------------------------------- START NO PREFIX DETECTION 
    
  var lowtext = msg.content.toLowerCase();
  if(lowtext.indexOf("globest") >= 0) {
    var xdoubtlink = "http://i0.kym-cdn.com/entries/icons/mobile/000/023/021/e02e5ffb5f980cd8262cf7f0ae00a4a9_press-x-to-doubt-memes-memesuper-la-noire-doubt-meme_419-238.jpg";
    msg.reply("Did you say Globest? ...", {files: [xdoubtlink]})
  }
  
  if(lowtext.indexOf("http://optc-db.github.io/damage/#/transfer") >= 0) {
    //[...D] 1941:99:0:0:0,1314:99:0:0:0,1916:99:0:0:0,1368:99:0:0:0,2080:99:0:0:0,2109:99:100:0:0C33,10B0D0E1Q0L0G0R63S100H
    
    var viewlink = "http://optc-db.github.io/characters/#/view/";
    var link = lowtext.slice(lowtext.indexOf("transfer") + 10);
    var units = link.split('c')[0].split(',');
    var other = link.split('c')[1];
    var unitstring = "";
      
    for (unitn=0; unitn<6; unitn++) {
      var uniti = units[unitn].split(':')[0];
        
      var namei = "";
      if (!dpj[uniti] || !dpj[uniti][2]) {
        namei = "Common Name not known";
      }
      else namei = dpj[uniti][2].toUpperCase();
        
      var linki = "";
      if (unitn == 0) linki += "Friend Captain: ";
      if (unitn == 1) linki += "Own Captain: ";
        
      linki = linki + "[Unit " + uniti + ": " + namei + "](" + viewlink + uniti + ")\n";
      unitstring += linki;
    }
      
    msg.channel.send({embed: {
      color: 16728832,
      author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL
      },
      title: "TEAM LINK - UNITS:",
      description: unitstring
    }})
         
  }
  
    
  if(lowtext.indexOf("kappa") >= 0) {
    var kappalink = "https://i.imgur.com/9LNAbKY.png";
    msg.channel.send(msg.author.username + ":", {files: [kappalink]})
  }
    
  if(lowtext.indexOf("alexa play") >= 0) {
    var ytquery = msg.content.slice(lowtext.indexOf("alexa play")+11);
    msg.channel.send("__**Now Playing:**__ \n" + ytquery + "\n```[-----o - - - - - - - - - - - - - - - - - - -]``` :track_previous: :pause_button: :track_next:")
  }
    
  if(lowtext.indexOf("hello there") >= 0) {
    var genkenobi = "https://i.imgur.com/VDRXqTn.jpg";
    msg.channel.send("General " + msg.author.username + ", you are a bold one!", {files: [genkenobi]})
  }
    
  if(lowtext.indexOf("perfectly balanced") >= 0) {
    if(lowtext.indexOf("as all things should be") >= 0) {
      msg.channel.send(" ", {files: ["https://pbs.twimg.com/media/DgystgIW4AADpPN.jpg"]})
    }
    else {
      msg.reply("As all things should be.")
    }
  }
    
//------------------------------------------------------------------------- END NO PREFIX DETECTION 

    
  //Returns if message doesn't start with prefix
  if(!msg.content.startsWith(prefix)) return;
    
  //Handles arguments to just take the first word
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase(); 
    
  if(msg.author.id == 399169003249074176) {
    if(command == 'stressful') {
      var stresslink = "https://cdn.discordapp.com/attachments/391192337562468354/585240879305064467/its_stressful.png";
      var stressstring =  msg.content.slice(prefix.length + command.length + 1);
      return msg.channel.send("Dani: \n \n" + stressstring, {files: [stresslink]});
    }
  }
    
    
//------------------------------------------------------------------------- START ADMIN COMMANDS
    
  if (msg.member.permissions.has('ADMINISTRATOR')) {
    if (command == 'clear') {
      var ntoclear = parseInt(args[0]);
      if (!ntoclear || isNaN(ntoclear)) return msg.reply("You didn't say how many messages mate!")
      msg.channel.bulkDelete(ntoclear+1);
    }
       
    if (command == 'kick') {
      const tokick = msg.mentions.members.first();
      if (!tokick) return msg.reply("You didn't say who deserves a Kick")
      msg.delete();
      tokick.kick();
    }
      
    if (command == 'addrole') {
      const userx = msg.mentions.members.first();
      if (!userx) return msg.reply("You didn't say who deserves a new Role")
        
      var rolename = msg.content.split(" | ")[1];
      if (!rolename) return msg.reply("You didn't put a role in there!")
        
      var therole = msg.guild.roles.find("name", rolename);
      if (!therole) return msg.reply("This role does not exist")
        
      userx.addRole(therole);
        
    }
      
    if (command == 'removerole') {
      const userx = msg.mentions.members.first();
      if (!userx) return msg.reply("You didn't say who doesn't deserve his Role")
        
      var rolename = msg.content.split(" | ")[1];
      if (!rolename) return msg.reply("You didn't put a role in there!")
        
      var therole = msg.guild.roles.find("name", rolename);
      if (!therole) return msg.reply("This role does not exist")
        
      userx.removeRole(therole);
        
    }
      
      
      
  }
    
//------------------------------------------------------------------------- END ADMIN COMMANDS
    
//------------------------------------------------------------------------- START CREATOR COMMANDS

  if (msg.author.id == 284104569586450434) {
      if (command == 'leave') {
          msg.delete();
          msg.guild.leave();
      }   
  }
        
//------------------------------------------------------------------------- END CREATOR COMMANDS

//------------------------------------------------------------------------- START HELP  
  
  if (command == 'ayuda') {
    var helptext = "Soy un bot para animar y ayudar en este chat."+
                   "\n \n Me puedes llamar con estos comandos:"+      
                   "\n   **!ayuda** - Muestra este mensaje"+
                   "\n \n **__COMANDOS DE OPTC__**"+
                   "\n   **!char** o **!pj** - Busca un personaje o ID en la database (link)"+
                   "\n   **!db** - Responde con la info de un personaje en la database (mensaje)"+ 
                   "\n   **!lb** - Responde con info detallada sobre el Limit Break de un pj"+
                   "\n   **!icon** - Muestra el icono de un personaje"+
                   "\n   **!art** o **!pic** - Muestra el artwork de un personaje"+
                   "\n   **!mkteam** - Crea un equipo en la calculadora de la database (link)"+
                   "\n   **!names** - Responde con todos los nombres aceptados para un personaje"+        
                   "\n   **!eventoactivo** - Muestra una ayuda para diferenciar Skillup de Supersuccess en JP"+
                   "\n   **!ambush** - Responde qué Ambush hay activo (Raids) en la Japo"+        
                   "\n   **!guiasn** - Envía un enlace a la Guía del Supernova (by Alados5 & DaniHolgado)"+
                   "\n   **!skillup K N E D** - Calcula la probabilidad de obtener K niveles con N copias"+
                   "\n       E y D son parámetros opcionales:"+
                   "\n         E indica si hay evento de skillup, '2' si es x2 y '3' si es x3."+
                   "\n           -> Por defecto está activado en x2, y cualquier otro texto será x1."+
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
  
//------------------------------------------------------------------------- END HELP  
    
//------------------------------------------------------------------------- START RANDOMHELP  
    
  if (command == 'directos') {
    return msg.channel.send("**__HORARIO DIRECTOS THEJOSELU8 EN TWITCH__**"+
                     "\n \n SÁBADOS y DOMINGOS de 14:00h a 18:00h APROX")
  }
  
  if (command == 'eventoactivo') {
    var image = "https://media.discordapp.net/attachments/391192337562468354/400302400151486477/Screenshot_20180109-085808.jpg?width=1293&height=541";
    return msg.channel.send(image)
  }
  
  if (command == 'guiasn') {
    var enlace = "https://docs.google.com/document/d/1pIUvQwcItefsjQkPgDdwg7BsYvc_M5kUY_8mFy-1eqM/edit?usp=sharing";
    return msg.channel.send(enlace)
  }
    
  if (command == 'database') {
    return msg.channel.send("http://optc-db.github.io")
  }
    
  if (command == 'nakamanetwork') {
    return msg.channel.send("http://www.nakama.network")  
  }
    
  if (command == 'calendar') {
    return msg.channel.send("https://optc-agenda.github.io/jap.html")
  }
    
  if (command == 'kanji') {
    var kanjitypes = "力 = STR,   技 = DEX,    速 = QCK,   心 = PSY,   知 = INT";
    var kanjiclass1 = "格闘 = Fighter,       斬撃 = Slasher,    打突 = Striker,      射撃 = Shooter";
    var kanjiclass2 = "自由 = Free Spirit,   博識 = Cerebral,   強靭 = Powerhouse,   野心 = Driven";
    return msg.channel.send("```" + kanjitypes + "\n \n" + kanjiclass1 + "\n" + kanjiclass2 + "```");
  }
  
//  if (command == 'ambush') {
//    var fecha = new Date();
//    var utc = fecha.getTime();
//    var ref = 1518750000000; //Friday Feb 16th, 2018 04:00h (GMT+1)
//    var ambushorder = ["Cavendish", "Shanks", "YWB"];
//    var oneweek = 604800000;
    
//    var diftoref = utc - ref;
//    var weeks = Math.floor(diftoref/oneweek);
//    var remain = weeks%3;
    
//    var text = "Si hay algún Raid, el Ambush de hoy es: ";
//    if (remain == 0) {
//      msg.channel.send(text+ambushorder[0]);
//    }
//    else if (remain == 1) {
//      msg.channel.send(text+ambushorder[1]);
//    }
//    else {
//      msg.channel.send(text+ambushorder[2]);
//    }
//  }


//------------------------------------------------------------------------- END RANDOMHELP    
  
//------------------------------------------------------------------------- START MEMES

  if (command == 'thejoselu8') {
    return msg.reply('TIIIIOOOO!!!!!')
  }
  
  if (command == 'gettingoverit') {
    return msg.reply('Consejo: coge la serpiente')
  }
    
  if (command == 'xdoubt') {
    var xdoubtlink = "http://i0.kym-cdn.com/entries/icons/mobile/000/023/021/e02e5ffb5f980cd8262cf7f0ae00a4a9_press-x-to-doubt-memes-memesuper-la-noire-doubt-meme_419-238.jpg"
    var doubtstring = msg.content.slice(prefix.length + command.length + 1);
    msg.delete();
    return msg.channel.send(msg.author.username + ": \n \n" + doubtstring, {files: [xdoubtlink]});
  }
    
  if (command == 'stressful') {
      
    var stresslink = "https://cdn.discordapp.com/attachments/391192337562468354/585240879305064467/its_stressful.png";
    var stressstring =  msg.content.slice(prefix.length + command.length + 1);
        
    msg.delete();
    return msg.channel.send(msg.author.username + ": \n \n" + stressstring, {files: [stresslink]});
  }
    
  if (command == 'shrug') {
    msg.delete()
    msg.channel.send(msg.author.username + ": \n ¯\\\_(ツ)_/¯")
  }
    
  if (command == 'lenny') {
    msg.delete()
    msg.channel.send(msg.author.username + ": \n ( ͡° ͜ʖ ͡°)")
  }
    
  if (command == 'tableflip') {
    msg.delete()
    msg.channel.send(msg.author.username + ": \n (╯°□°）╯︵ ┻━┻")
  }
    
  if (command == 'chopper') {
    msg.delete()
    var chopperlink = "https://i.imgur.com/9pmsjef.gif";
    msg.channel.send(msg.author.username + ":", {files: [chopperlink]})
  }
    
  if (command == 'mchopper') {
    msg.delete()
    var mchopperlink = "https://media.giphy.com/media/Gj8zvOYXL7rtS/source.gif";
    msg.channel.send(msg.author.username + ":", {files: [mchopperlink]})
  }
    
  if (command == 'moderdonia') {
    msg.delete()
    var moderdonialink = "https://www.eldiario.es/fotos/bandera_EDIIMA20171109_0409_19.jpg";
    msg.channel.send("**__Gora Moderdonia Askatuta!__**", {files: [moderdonialink]})
  }
    
  if (command == 'bestversion') {
    msg.delete()
    var bvlink = "https://www.youtube.com/watch?v=f5thLVGziNQ";
    msg.channel.send(bvlink)
  }
    
  if (command == 'sarcasm') {
    msg.delete()
    var sarcasmlink = "http://oi58.tinypic.com/29cwbp1.jpg";
    msg.channel.send(msg.author.username + ":", {files: [sarcasmlink]})
  }
    
  if (command == 'onlybandaiknows') {
    msg.delete()
    var newscoolink = "https://cdn.discordapp.com/attachments/402992536148377602/438209169930321932/descarga_1.jpeg";
    msg.channel.send(msg.author.username + ":", {files: [newscoolink]})
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
    if (charid == 'X') {
      var charnum = parseInt(chartolook);
      if (!fulldb[charnum]) return msg.channel.send('Character Name Error')
      else {
        charid = charnum.toString();
        if (charid.length == 1) charid = '000' + charid;
        else if (charid.length == 2) charid = '00' + charid;
        else if (charid.length == 3) charid = '0' + charid;
      }
    }
    var iconlink = dbcharicon + charid + '.png';
    msg.channel.send(iconlink)
  }  
  
//------------------------------------------------------------------------- END ICON
  
//------------------------------------------------------------------------- START ART

  if (command == 'art' || command == 'pic') {
    var chartolook = msg.content.slice(5).toLowerCase();
    var charid = findnum(chartolook, dpj);
    if (charid == 'X') {
      var charnum = parseInt(chartolook);
      if (!fulldb[charnum]) return msg.channel.send('Character Name Error')
      else {
        charid = charnum.toString();
        if (charid.length == 1) charid = '000' + charid;
        else if (charid.length == 2) charid = '00' + charid;
        else if (charid.length == 3) charid = '0' + charid;
      }
    } 
    var artlink = dbcharpic + charid + '.png';
    msg.channel.send(artlink)
  }  
  
//------------------------------------------------------------------------- END ART

//------------------------------------------------------------------------- START MKTEAM   
    
  if (command == 'mkteam') {
    var action = args[0];
    var useri = msg.author.username;
    if (!action) return msg.reply("If you want to know how to use this, type `!mkteam help`")
    if (action == 'help') {
      msg.reply("This command is quite complex. You have different actions:" +
                "\n `!mkteam begin` - Starts a new team. You **__MUST__** start with this" +
                "\n `!mkteam units` - Specify the units of your team, separated by commas and single spaces" +
                "\n        The order always goes left to right and top to bottom (1, 2; 3, 4; 5, 6)" +
                "\n `!mkteam levels` - [Optional, Recommended] Specify the levels of your units" +
                "\n `!mkteam cottons` - [Optional] Specify the CC of your units (ATK, HP, ATK&HP, ...)" +
                "\n `!mkteam orbs` - [Optional] Specify the orbs of your units (Matching, Bad, ...)" + 
                "\n `!mkteam specials` - [Optional] Specify the active specials (Active, 1, No, 0, ...)" + 
                "\n `!mkteam ship` - [Optional] Specify the ship of your team (Default: Merry Go)" +
                "\n `!mkteam done` - Finish your editing and make the link!" +
                "\n `!mkteam all` - [NOT IMPLEMENTED] Do all steps at once")
    }
    else if (action == 'begin') {
      msg.reply("You have begun creating a team!")
      teams[useri] = {};
    }
    else if (action == 'units') {
      var stUnits = MkUnits(msg.content, useri);
      msg.reply(stUnits)
    }
    else if (action == 'levels') {
      var stLevels = MkLevels(args, useri);
      msg.reply(stLevels)
    }
    else if (action == 'cottons') {
      var stCottons = MkCottons(args, useri);
      msg.reply(stCottons)
    }
    else if (action == 'orbs') {
      var stOrbs = MkOrbs(args, useri);
      msg.reply(stOrbs)
    }
    else if (action == 'ship') {
      var stShip = MkShip(msg.content, useri);
      msg.reply(stShip)
    }
    else if (action == 'specials') {
      var stSpecials = MkSpecials(args, useri);
      msg.reply(stSpecials)
    }
    else if (action == 'done') {
      if (!teams[useri]) return msg.reply("You have to begin creating your team first!")
      var teamlink = basetrans;
      var warning = '';
      if(!teams[useri]['Units']) return msg.reply("You don't have any units on your team!")
      if(!teams[useri]['Levels']) {
        teams[useri]['Levels'] = ['99','99','99','99','99','99'];
        warning += "All Levels set to 99. Please note this might produce errors."
      }
      if(!teams[useri]['Cottons']) {
        teams[useri]['Cottons'] = ['','','','','',''];
        warning += "\n All CC set to 0"
      }
      if(!teams[useri]['Orbs']) {
        teams[useri]['Orbs'] = '0';
        warning += "\n All orbs set to neutral"
      }
      if(!teams[useri]['Ship']) {
        teams[useri]['Ship'] = "1";
        warning += "\n No ship specified. The Default is the Merry Go"
      }
      if(!teams[useri]['Specials']) {
        teams[useri]['Specials'] = "0";
        warning += "\n No specials activated"
      }
      
      for(u=0; u<6; u++) {
        var unitid = teams[useri]['Units'][u];
        var unitlv = teams[useri]['Levels'][u];
        var unitcc = teams[useri]['Cottons'][u];
        teamlink += unitid + ':' + unitlv + unitcc + ',';
      }
      teamlink = teamlink.slice(0,-1);
      teamlink += 'C' + teams[useri]['Ship'] + ',10';
      teamlink += 'B0D0E' + teams[useri]['Orbs'] + 'Q0L0G0R' + teams[useri]['Specials'] + 'S100H';
      msg.reply(warning)
      msg.channel.send(teamlink)
      teams[useri] = {};
    }
    else if (action == 'all') {
      msg.reply("Action not implemented yet...")
    }
    else return msg.reply("Invalid Action! Try `!mkteam help` to know how to use this command")
      
  }
  
//------------------------------------------------------------------------- END MKTEAM
    

//------------------------------------------------------------------------- START NAMES  

  if (command == 'names') {
    var chartolook = msg.content.slice(7).toLowerCase();
    var charid = findnum(chartolook, dpj);
    if (charid == 'X') return msg.channel.send('Character Name Error')
    var lnames = dpj[charid];
    lnames = lnames.toString();
    lnames = lnames.replace(/,/g, ', ');
    lnames = '```' + lnames + '```';
    msg.channel.send(lnames)
  }  
  
//------------------------------------------------------------------------- END NAMES
  
//------------------------------------------------------------------------- START DATABASE  
  
  if (command == 'db') {
    var charname = msg.content.slice(4);
    var allcharinfo = dbinfo(charname);
      //return [charid, charinfo, charcd, charicon]
    if (typeof allcharinfo == "string") return msg.reply(allcharinfo)
      //return "..." (Errors)
    
    //CHARINFO:
      //Info Names: captain, captainNotes, specialName, special, specialNotes, sailor, limit, potential
      //Captain can be string or object with {"base":"...", "level1":"...", etc}
      //Captain Actions are always noted with: ... <br> <b>Action:</b> ...
      //Special can be string or list with [{"description":"...", "cooldown":[M,N]}, {...}] 
      //Sailor can also be a string or object like: {"base":"None", "level1":"...", etc} 
    
    var charid = allcharinfo[0];
    var charinfo = allcharinfo[1];
    var charcd = allcharinfo[2];
    var charicon = allcharinfo[3];
    var viewindblink = dbcharid + charid;
    
    if (!charinfo.limit) var lbsummary = ["This character has no Limit Break", ""];
    else if (typeof charinfo.limit == "string") var lbsummary = ["This character has a Limit Break Tree", "Not Implemented Yet"];
    else var lbsummary = SummaryLB(charinfo.limit);    //SummaryLB(lbtree) - return [lbtext, pottext]
      
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
      url: viewindblink,     
      fields: [
        {
          name: "__Character__",
          value: "ID: " + charid + ' - **' + charname + "** \n ~"
        },
        {
          name: "__Captain Ability__",
          value: charinfo.captain + "\n ~"
        },
        {
          name: "__Sailor Ability__",
          value: charinfo.sailor + "\n ~"
        },
        {
          name: "__Special Ability__",
          value: '***' + charinfo.specialName + '*** \n' + charinfo.special + '\n' + charcd + "\n ~"
        },
        {
          name: "__Limit Break__",
          value: lbsummary[0] + "\n \n" + lbsummary[1]
        }
      ]
    }})
    
  }
  
//------------------------------------------------------------------------- END DATABASE   
    
//------------------------------------------------------------------------- START LIMITBREAK
    
  if (command == 'lb') {
    var charname = msg.content.slice(4);
    var allcharinfo = dbinfo(charname);
      //return [charid, charinfo, charcd, charicon]
    if (typeof allcharinfo == "string") return msg.reply(allcharinfo)
      //return "..." (Errors)
    
    //CHARINFO:
      //Info Names: captain, captainNotes, specialName, special, specialNotes, sailor, limit, potential
      //Captain can be string or object with {"base":"...", "level1":"...", etc}
      //Special can be string or list with [{"description":"...", "cooldown":[M,N]}, {...}] 
      //Sailor can also be a string or object like: {"base":"None", "level1":"...", etc} 
      //Limit is the limit tree, like: [{"description":"..."}, {"description":"..."}, etc]
      //Potential are the LB Abilities, like: [{"Name":"...", "description":["Level 1: ...", etc]}, etc]

    var charid = allcharinfo[0];
    var charinfo = allcharinfo[1];
    var charcd = allcharinfo[2];
    var charicon = allcharinfo[3];
    var viewindblink = dbcharid + charid;
      
    if (!charinfo.limit) return msg.reply("This character has no Limit Break")
    if (typeof charinfo.limit == "string") return msg.reply("This character's Limit Break is not implemented yet")
      
    var lbtree = charinfo.limit;
    var lbsummary = SummaryLB(lbtree)[0];    //SummaryLB return [lbtext, pottext]
      
    var lbfields = [{name: "__Character__", value: "ID: " + charid + ' - **' + charname + "** \n ~"}];
    var ltext = "";   
    for (lbi=0; lbi<lbtree.length; lbi++) {
      var lblevel = lbtree[lbi].description;
      var lbnode = lbi + 1;
      ltext += "__Node " + lbnode + ":__ " + lblevel + "\n";
        
      if (lbnode == 15) {
        lbfields.push({name:"__Limit Break Nodes (1~15)__", value:ltext});
        ltext = "";
      }
      if (lbnode == 30) {
        lbfields.push({name:"__Limit Break Nodes (16~30)__", value:ltext});
        ltext = "";
      }
      if (lbnode == 40) {
        lbfields.push({name:"__Limit Break Nodes (31~40)__", value:ltext});
      }
    }
    
    lbsummary += "\n ~";
    lbfields.push({name:"__Limit Break Summary__", value:lbsummary});
    
    var potab = charinfo.potential;
      //[{"Name":"...", "description":["Level 1: ...", etc]}, etc]
    for (pai=0; pai<potab.length; pai++) {
      var panum = pai+1;
      var pottitle = "__Potential Ability " + panum + ":__ *" + potab[pai].Name + "*";
      var potdesc = potab[pai].description;
      var potvalue = "";
      for (palvi=0; palvi<potdesc.length; palvi++) {
        var paleveldesc = potdesc[palvi].split(': ');
        potvalue += "__" + paleveldesc[0] + ":__ " + paleveldesc[1] + "\n";
      }
      lbfields.push({name: pottitle, value: potvalue});
    }
      
    msg.channel.send({embed: {
      color: 12059383,
      title: "OPTC DATABASE - LIMIT BREAK",
      footer: {
        text: "Bot by Alados5 | Info by optc-db.github.io",
        icon_url: client.user.avatarURL
      },
      url: viewindblink,
      thumbnail: {
        "url":charicon
      },
      fields: lbfields
    }})
 
  }
    
//------------------------------------------------------------------------- END LIMITBREAK
    
//------------------------------------------------------------------------- START SHIP FX 
    
  if (command == 'ship') {
    //shipfx
    var searchship = msg.content.slice(6).toLowerCase();
    var shipid = findnum(searchship, dship);
    if (shipid == 'X') return msg.reply("Invalid ship name!");
    shipid = parseInt(shipid);
    var shipinfo = shipfx[shipid];
      
    msg.channel.send({embed: {
      color: 11362048,
      title: "OPTC DATABASE - SHIP INFO",
      footer: {
        text: "Bot by Alados5 | Info by optc-db.github.io",
        icon_url: client.user.avatarURL
      },
      image: {
        "url": dbshippic + shipinfo.thumb
      },
      fields: [
        {
          "name": "Ship Name",
          "value":shipinfo.name + "\n ~"
        },
        {
          "name": "Ship Effects (Max Level)",
          "value":shipinfo.description
        }
      ]
    }})     
  }
    
//------------------------------------------------------------------------- END SHIP FX
    
//------------------------------------------------------------------------- START SKILLUP
  
  if (command == 'skillup') {
    //ProbSkill(k, n, Event, OC)
    if(args.length < 2) return msg.reply("Enter valid data!")
    var k = args[0];
    var n = args[1];
    if (parseInt(n) < parseInt(k)) return msg.reply("It goes the other way around: [skillups] [copies]")
    
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
    //if(Event != '2' && Event != '3' && Event != '4') {
    //  Event = '1'
    //}
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

//------------------------------------------------------------------------- START ANNIPULL
    
  if (command == 'annipull') {
    //annisugolist
    var numofpulls = 1;
    if (args.length > 0 && args[0].toLowerCase() == 'multi') {
      if (args.length == 2) {
        numofpulls = 11*parseInt(args[1]);
        if (isNaN(numofpulls)) numofpulls = 11;
      }
      else {
        numofpulls = 11;
      }
    }

    var pulls = [];
    for(pulli=0; pulli<numofpulls; pulli++) {
      var randnum = Math.random()*100;
      
      if ((pulli+1)%22 != 0) {
        for (var chname in annisugolist) {
          if (annisugolist.hasOwnProperty(chname)) {
            var prange = annisugolist[chname];
            if (randnum >= prange[0] && randnum < prange[1]) {
              if ((pulli+1)%11 == 0) pulls.push("Extra pull (+1):");
              pulls.push(chname);
              if ((pulli+1)%11 == 0) pulls.push(" ");
            }
          }
        }
      }
      else { //Extra pull with Legend!
        pulls.push("Extra RED pull (+1):");
        for (var chname in annisugolist) {
          if (annisugolist.hasOwnProperty(chname) && chname.slice(0,6) == "(RED!)") {
            var prange = annisugolist[chname];
            if (randnum >= prange[2] && randnum < prange[3]) {
              pulls.push(chname);
              pulls.push(" ");
            }
          }
        }
      }
    }
    msg.channel.send(pulls)  
      
  }
    
//------------------------------------------------------------------------- END ANNIPULL
    
//------------------------------------------------------------------------- START JPULL
    
  if (command == 'jpull') {
    //sugolist = {"type":["name", "name"], "type":["name", "name"]}
    // 3%Blue, 7%Red, 50%Gold, 40%Silver
    var numofpulls = 1;
    var pulls = [];
    if (args.length > 0 && args[0].toLowerCase() == 'multi') {
      if (args.length == 2) {
        numofpulls = 11*parseInt(args[1]);
        if (isNaN(numofpulls)) numofpulls = 11;
      }
      else {
        numofpulls = 11;
      }
    }
      
    var probs = [1, 1, 1, 1];
    probs[0] = 3/sugolist["gods"].length;
    probs[1] = 7/sugolist["legends"].length;
    probs[2] = 50/sugolist["golds"].length;
    probs[3] = 40/sugolist["silvers"].length;

    for(pulli=0; pulli<numofpulls; pulli++) {
      if ((pulli+1)%11 == 0) pulls.push("__Extra pull (+1):__");
      var multinum = "**__MULTI " + parseInt(pulli/11 + 1) + "__**";
      if (pulli%11 == 0 && numofpulls>1) pulls.push(multinum);
      var randnum = Math.random()*100;
        
      if (randnum < 3) {
        var unitindex = parseInt(randnum/probs[0]);
        var pulltxt = '```prolog\n"' + sugolist["gods"][unitindex] + '" ```';
      }
      else if (randnum < 10) {
        randnum -= 3;
        var unitindex = parseInt(randnum/probs[1]);
        var pulltxt = "```prolog\n" + sugolist["legends"][unitindex] + " ```";
      }
      else if (randnum < 60) {
        randnum -= 10;
        var unitindex = parseInt(randnum/probs[2]);
        var pulltxt = "`" + sugolist["golds"][unitindex] + "`";
      }
      else {
        randnum -= 60;
        var unitindex = parseInt(randnum/probs[3]);
        var pulltxt = "`" + sugolist["silvers"][unitindex] + "`";
      }
      pulls.push(pulltxt);
      if ((pulli+1)%11 == 0) pulls.push(" \n ");

    }
    msg.channel.send(pulls)   
      
  }
    
//------------------------------------------------------------------------- END JPULL
    
//------------------------------------------------------------------------- START PULL
    
  if (command == 'pull') {
    //sugolist = {"type":["name", "name"], "type":["name", "name"]}
    // 7%Red, 53%Gold, 40%Silver
    var numofpulls = 1;
    var pulls = [];
    if (args.length > 0 && args[0].toLowerCase() == 'multi') {
      if (args.length == 2) {
        numofpulls = 11*parseInt(args[1]);
        if (isNaN(numofpulls)) numofpulls = 11;
      }
      else {
        numofpulls = 11;
      }
    }
      
    var probs = [1, 1, 1];
    probs[0] = 7/sugolist["legends"].length;
    probs[1] = 53/sugolist["golds"].length;
    probs[2] = 40/sugolist["silvers"].length;

    for(pulli=0; pulli<numofpulls; pulli++) {
      if ((pulli+1)%11 == 0) pulls.push("__Extra pull (+1):__");
      var multinum = "**__MULTI " + parseInt(pulli/11 + 1) + "__**";
      if (pulli%11 == 0 && numofpulls>1) pulls.push(multinum);
      var randnum = Math.random()*100;
        
      if (randnum < 7) {
        var unitindex = parseInt(randnum/probs[0]);
        var pulltxt = "```prolog\n" + sugolist["legends"][unitindex] + " ```";
      }
      else if (randnum < 60) {
        randnum -= 7;
        var unitindex = parseInt(randnum/probs[1]);
        var pulltxt = "`" + sugolist["golds"][unitindex] + "`";
      }
      else {
        randnum -= 60;
        var unitindex = parseInt(randnum/probs[2]);
        var pulltxt = "`" + sugolist["silvers"][unitindex] + "`";
      }
      pulls.push(pulltxt);
      if ((pulli+1)%11 == 0) pulls.push(" \n ");

    }
    msg.channel.send(pulls)   
      
  }
    
//------------------------------------------------------------------------- END PULL
    
//------------------------------------------------------------------------- START EMBED
    
  if (command == 'embed') {
    var alltext = msg.content.slice(7).split('|');
    var notembed = alltext[0];
    var msgtitle = alltext[1];
    var desctext = alltext[2];
    var msgcolor = parseInt(alltext[3]);
    msg.channel.send(" ", {files: [notembed]})
    msg.channel.send({embed: {
      color: msgcolor,
      author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL
      },
      description:desctext,
      title: msgtitle,
      //fields: [
      //  {
      //    name: "CAMPO 1",
      //    value: "Texto 1"
      //  },
      //  {
      //    name: "CAMPO 2",
      //    value: "Texto 2"
      //  }
      //]
    }})
  }
    
//------------------------------------------------------------------------- END EMBED
    
//------------------------------------------------------------------------- START WELCOME
    
  if (command == 'reply') {
    msg.delete()
    msg.channel.send(msg.content.slice(7))
  }
    
  if (command == 'file') {
    msg.channel.send(" ", {files: [msg.content.slice(6)]})
  }
    
//------------------------------------------------------------------------- END WELCOME    
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
