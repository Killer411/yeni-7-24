const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/572804441237880847/573960473217728542/giphy_2.gif", "https://cdn.discordapp.com/attachments/572804441237880847/573960501625749513/1516379131_tumblr_op0623jfYh1v22rhuo1_500.gif", "https://cdn.discordapp.com/attachments/572804441237880847/573962017854193675/1545165822_a2036942c487c02d7267a364f179d8a6.gif","https://cdn.discordapp.com/attachments/572804441237880847/573962842617675940/sss.gif","https://cdn.discordapp.com/attachments/572804441237880847/573962964575584256/boo-hacker.gif","https://cdn.discordapp.com/attachments/572804441237880847/573962992903782410/giphy.gif"]

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle(" ")
        .setColor("#FF69B4")
        .setFooter(`Sunucuyu hacklemeye çalışan kişi: ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hack','sunucu hackle','sunucuyu hackle'],
  permLevel: 0
};

exports.help = {
  name: 'hackle',
  description: 'Sunucuyu hacklemeye çalışır.',
  usage: 'hackle'
}; 