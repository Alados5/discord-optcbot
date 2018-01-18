const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs");

var path = './IDSave.txt';
var text = 'testtext';

//fs.readFile(path, "utf8", function(error, data) {
//    if(error) {
//        console.error("Read error: " + error.message);
//    }
//    else {
//        text = data;
//    }
//});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply(text);
        fs.appendFile(path, 'pong', function(error) {
            if(error) {
                console.error("Write error: "+error.message);
            }
        });
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
