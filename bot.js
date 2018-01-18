const Discord = require('discord.js');
const client = new Discord.Client();

var list = [];
var i = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bot') {
    	message.reply('Hey');
        list[i] = 'xd';
        i+=1;
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
