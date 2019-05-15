const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .addField('k!aşkölçer @kullanıcı', 'Aşkınız ne kadar?')
    .addField('k!herkesebendençay', 'Çay ısmarlarsınız')
    .addField('k!düello @kullanıcı', 'Arkadaşınızla düello yaparsınız')
    .addField('k!dünya', 'dünya gifini atar')
    .addField('k!emojiyazı yazı', 'yazınız emoji olsun')
    .addField('k!hackle', 'Sunucuyu hacklemeye çalışırsınız')
    .addField('k!hapishane', 'avatara hapis effekti atar')
    .addField('k!yumruk-at', 'Yapıştır suratına')
    .addField('k!çekiç @kullanıcı', 'Çekiç fırlatır')
    .addField('k!sigara', 'Çek bir duman')
    .addField('k!fbı', 'Open the door!!')
    .addField('k!nahçek', 'Nahh sanaa')//ne kadar Ekstra komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
      .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: '',
  usage: ''
};