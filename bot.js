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
  
      

      if (message.content === '/join') 
      {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) 
        {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
      } 
      else 
      {
        message.reply('You need to join a voice channel first!');
      }
      
});

client.login(process.env.BOT_TOKEN);
