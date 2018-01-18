const Discord = require('discord.js');
const client = new Discord.Client();

var alist = {};
var i = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bot') {
        alist[i.toString()] = {'ID':(100000001*i).toString(), 'Server':"Japan"};
        
    	message.reply('Hey');
        message.reply(alist[i.toString()]['ID']);
        
        i++;
    }
    
    if (message.content === 'AllData') {
        var database = '';
        for(var key in alist) {
            if (alist.hasOwnProperty(key)) {
                database += key+' ; ';
                database += alist[key]['ID']+' ; ';
                database += alist[key]['Server']+'\n';
            } 
        }
        message.channel.send(database);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
