const Discord = require('discord.js');
const client = new Discord.Client();

//var alist = [];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bot') {
        //alist.push('xd');
    	message.reply('Hey');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
