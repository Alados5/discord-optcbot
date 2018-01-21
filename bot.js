const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var prefix = '!';
var dbchar = 'http://optc-db.github.io/characters/#/search/';
var dbcharid = 'http://optc-db.github.io/characters/#/view/';

client.on('message', msg => {
  if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    
  //Handles arguments to just take the first word
  const args = msg.content.slice('!'.length).split(/ +/);
  const command = args.shift().toLowerCase(); 


//------------------------------------------------------------------------- START HELP  
  
  if (command == 'ayuda') {
    //var helptext = 'Comandos:'+
    //    '\n !ayuda - activa este mensaje.'+
    //    '\n !pj o !char - busca un personaje en la database (nombre o #ID).'+
    //    '\n !thejoselu8 - ¡cabrea a JoseLu gratis!';
    
    msg.channel.send({embed: {
      color: 16757760,
      title: "Asistente Automático"      
    }})
  }  
  
//------------------------------------------------------------------------- END HELP    
  
//------------------------------------------------------------------------- START MEMES

  if (command == 'thejoselu8') {
    msg.reply('TIIIIOOOO!!!!!')
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
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
