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
    
    
    //voice based
    if (!message.guild) return;

    if (message.content === 'Gusion join vc with me!') {
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => { 
            message.reply('Yay I have connected!');
        })
        .catch(console.log);
    } else {
      message.reply('>-< I will only join one if you join one first!');
    }
});

client.login(process.env.BOT_TOKEN);
