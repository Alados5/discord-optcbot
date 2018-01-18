const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var alist = {};
var i = 1;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.author.bot) return;
        
    if (message.content === 'Bot') {
        
        message.reply('Working on it!');
        
        var useri = 'User'+i.toString()
        alist[useri] = {'ID':(100000001*i).toString(), 'Server':"Japan", 'Info':"Some text here", 'Link':"https://imgur.com"};
        
        message.reply(alist[useri]['ID']);
        
        i++;
    }
    
    if (message.content === 'AllData') {
        var database = '';
        for(var key in alist) {
            if (alist.hasOwnProperty(key)) {
                database += key + ' ; ';
                database += alist[key]['ID'] + ' ; ';
                database += alist[key]['Server'] + ' ; ';
                database += alist[key]['Info'] + ' ; ';
                database += alist[key]['Link'] + ';; \n';
            } 
        }
        message.channel.send(database);
    }
    
    var ispreload = (message.content.slice(0, 7) == "Preload");
    if (ispreload) {
        message.reply("Preloading");
        
        var bulkdata = message.content.slice(8);
        var lines = bulkdata.split(';;');
        lines = lines.replace('\n', '');
        
        for(j=0; j<lines.length; j++) {
            var parts = lines[j].split(' ; ');
            var useri = parts[0];
            alist[useri] = {'ID':parts[1], 'Server':parts[2], 'Info':parts[3], 'Link':parts[4]};
        }
        
        message.channel.send("Update complete!");
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
