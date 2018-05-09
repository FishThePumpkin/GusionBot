const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
 
   switch (message.content) {
            case 'ping': message.reply = 'pong';
                      break;
             case 'ur mum gay': message.reply = 'no u';
                      break;
             case 'what is my avatar': message.reply(message.author.avatarURL);
                      break;
             
             default:
                      break;
         }
     //voice
});

client.login(process.env.BOT_TOKEN);
