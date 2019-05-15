const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/572804441237880847/574677218341552128/tumblr_o0yzc5huoj1v1p15bo1_500.gif","https://cdn.discordapp.com/attachments/572804441237880847/574179078597378048/tenor_3.gif","https://cdn.discordapp.com/attachments/572804441237880847/574179374408925194/giphy_4.gif","https://cdn.discordapp.com/attachments/572804441237880847/574179445238398986/tenor_2.gif","https://cdn.discordapp.com/attachments/572804441237880847/574179637236596737/ElectricThriftyDanishswedishfarmdog-small.gif"]

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle(" ")
        .setColor("#FF69B4")
        .setFooter(`Sunucuyu hacklemeye çalışan kişiyi ${message.author.tag}  sordu.`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fbı','fbi','FBİ','FBI'],
  permLevel: 0
};

exports.help = {
  name: 'fbı',
  description: 'Sunucuyu hacklemeye çalışanlara gönder :D',
  usage: 'fbı'
};//©Fire Bunny