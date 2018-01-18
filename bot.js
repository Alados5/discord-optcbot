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
    
    if (message.content === 'Download') {

        message.reply('Download Detected');
        
        var texttodl = 'test text';
        var filetype = 'text/plain';
        var file = new Blob([texttodl], {type: filetype});
        message.channel.send('Blob created');
        
        //var fileurl = URL.createObjectURL(file);
        //message.channel.send('URL done');
        //message.channel.send(fileurl.toString());
        
        
        
        //function download(text, name, type) {
        //var a = document.getElementById("a");
        //var file = new Blob([text], {type: type});
        //a.href = URL.createObjectURL(file);
        //a.download = name;
        
        //download('file text', 'myfilename.txt', 'text/plain')
      
    } 
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
