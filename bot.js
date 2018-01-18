const Discord = require('discord.js');
const client = new Discord.Client();

var alist = {};
var i = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bot') {
        alist[i.toString()] = {'a':i.toString(), 'b':i.toString()};
        
    	message.reply('Hey');
        message.reply(alist[i.toString()]['a']);
        
        i++;
    }
    
    if (message.content === 'AllData') {
        var database = '';
        for(var key in alist) {
            if (alist.hasOwnProperty(key)) {
                database += alist.key+';;';
                database += alist.key.a+';;';
                database += alist.key.b+'\n';
            } 
        }
        message.channel.send(database);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
