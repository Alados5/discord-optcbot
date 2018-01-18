const Discord = require('discord.js');
const client = new Discord.Client();

var list = [];
var i = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bot') {
        list[i] = 'xd';
    	message.reply('Hey');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
