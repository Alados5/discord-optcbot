const Discord = require('discord.js');
const client = new Discord.Client();
//var fs = require("fs");

var alist = {};
var i = 1;
var path = "./Test.txt"

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
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
                database += key+' ; ';
                database += alist[key]['ID'] + ' ; ';
                database += alist[key]['Server'] + ' ; ';
                database += alist[key]['Info'] + ' ; ';
                database += alist[key]['Link'] + '\n';
            } 
        }
        message.channel.send(database);
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
