const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
 
   //text-based
     if (message.content === 'ping') {
     	message.reply('pong');
   	 }
     if (message.content === 'how are you') {
     	message.reply('i am good');
   	 }
    

     //avatar-based
     if (message.content === 'what is my avatar') {
     message.reply(message.author.avatarURL);
         
     }
    
    
    
     //voice
    
    
  
});

client.login(process.env.BOT_TOKEN);
