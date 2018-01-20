const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var prefix = '!';
var dbchar = 'http://optc-db.github.io/characters/#/search/';

//client.on('ready', () => {
//  console.log('I am ready!');
//});

client.on('message', msg => {
  if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    
  //Handles arguments to just take the first word
  const args = msg.content.slice('!'.length).split(/ +/);
  const command = args.shift().toLowerCase(); 
        
  if (command == 'thejoselu8') {
    msg.reply('TIIIIOOOO!!!!!')
  }
    
  if (command == 'char' || command == 'pj') {
    var chartolook = args.toString();
    msg.channel.send(dbchar+chartolook)
  } 
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
