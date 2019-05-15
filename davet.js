const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`[Davet linkim]( https://discordapp.com/oauth2/authorize?client_id=570014052332339203&scope=bot&permissions=805314622) ⬅➡ [Destek Sunucum](https://discord.gg/5urgZXe)`);
    message.channel.send(embed);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Sunucu Davetini Verir.',
  usage: 'davet'
};