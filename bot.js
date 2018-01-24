const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

import { ProbSkill , NCopies } from "./skillup.js";

var prefix = '!';

var dbchar = 'http://optc-db.github.io/characters/#/search/';
var dbcharid = 'http://optc-db.github.io/characters/#/view/';
var basetrans = 'http://optc-db.github.io/damage/#/transfer/D';

//------------------------------------------------------------------------- START GETLINK FS

var dpj = require("./database.json");
var dship = {'33':['Dutchman', 'Flying Dutchman', 'Flying'], '36':['Revolutionary Black Crow','Corvo','Revo Crow']}

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
  return '4'
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
    var charid = findnum(chars[char], dpj);
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
  link += shipid.toString();
  link += ',10B0D0E1365Q0L0G0R63S100H'
  
  return link
  
}  

//------------------------------------------------------------------------- END GETLINK FS

function fact(i) {
  var prod = 1;
  for(j=0; j<(i+1); j++) {
    prod *= j;
  }
  return prod
}

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
                   "\n   **!char** o **!pj** - Busca un personaje o ID en la database"+
                   "\n   **!thejoselu8** - Cabrea a joselu ¡Gratis!";
    
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

//------------------------------------------------------------------------- START GETLINK  

  if (command == 'getlink') {
    var glink = getdblink(msg.content.slice(9));
    msg.channel.send(glink)
  }  
  
//------------------------------------------------------------------------- END GETLINK
  
//------------------------------------------------------------------------- START SKILLUP
  
  if (command == 'skillup') {
    //ProbSkill(k, n, Event, OC)
    if(args.length < 3) return msg.reply("Enter valid data!")
    var k = args[0];
    var n = args[1];
    if(args.length >= 3) var Event = args[2];
    if(args.length >= 4) var OC = args[3];
    var probability = fact(k);
    msg.channel.reply(probability)
  }
  
//------------------------------------------------------------------------- END SKILLUP
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
