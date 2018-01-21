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
    var helptext = "Soy un bot para animar y ayudar en este chat."+
                   "\n Debería estar siempre activo, si no respondo puede que haya algún problema."+
                   "\n Me puedes llamar con estos comandos:"+
                   "\n **!ayuda** - Muestra este mensaje"+
                   "\n **!char** o **!pj** - Busca un personaje o ID en la database"+
                   "\n **!thejoselu8** - Cabrea a joselu ¡Gratis!";
    
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
