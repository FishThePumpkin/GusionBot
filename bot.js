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
     if (message.content === 'ur mum gay') {
     	message.reply('no u');
   	 }

     //avatar-based
     if (message.content === 'what is my avatar') {
     message.reply(message.author.avatarURL);
         
     }
    
    
    
     //voice
    
    
    if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
    }
});

client.login(process.env.BOT_TOKEN);
