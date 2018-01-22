const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var prefix = '!';
var dbchar = 'http://optc-db.github.io/characters/#/search/';
var dbcharid = 'http://optc-db.github.io/characters/#/view/';
var basetrans = 'http://optc-db.github.io/damage/#/transfer/D';

var dpj = {1935:'Franky Legend', 865:'Boa Raid'}
var dship = {33:'Dutchman'}

function findnum(name, dic) {
  for (var num in dic) {
    if (dic.hasOwnProperty(num)) {
      var alias = dic.num;
      if (alias == name) {
          return num
      }
    }
  }
  return 1
}  

function getdblink(content) {
  var link = basetrans;
  var contlist = content.split(';;');
  var chars = contlist.shift().split(';');
  if (chars.length != 6) return "You didn't put a complete team!"
  
  for(var char=0; char<chars.length; char++) {
    var charid = findnum(chars[char], dpj);
    link += charid.toString();
    link += ':99,';
  }
  link = link.slice(0,-1);
  link += 'C';
  
  var shipid = findnum(contlist[0], dship);
  link += shipid.toString();
  link += ',10B0D0E1365Q0L0G0R63S100H'
  
  return link
  
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
  
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
