const Discord = require('discord.js');
const client = new Discord.Client();

var alist = [];
var i = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bot') {
        alist.push(i);
    	message.reply('Hey');
    }
    
    if (message.content === 'AllData') {
        message.channel.send(alist.toString());
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
