const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Poine`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`Poine - Güncelleme Notları`, `:mag_right: | **EKLENEN KOMUTLAR**: \n:white_circle: **k!tr**\n:white_circle: **k!sigara**\n:white_circle: **k!yumruk-at**\n:white_circle: **k!sigara**\n:white_circle: **k!fbı**\n \n:mag_right: | **YENİLENEN KOMUTLAR**: \n:white_circle: **k!ping**\n:white_circle: **k!yardım**\n:white_circle: **k!tr**\n \n:mag_right: | **SİLİNEN KOMUTLAR**: \n:white_circle: **k!tag**\n \n:octagonal_sign: **Eklenen:** 7\n:octagonal_sign: **Yenilenen:** 3\n:octagonal_sign: **Silinen:** k!profil k!tag\n \n:cyclone: **Version:** 0.0.6`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['updatelog','u','logs','log','bot-log','bot log','update log','güncelleme','notlar','updatelog',"update-log"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'updatelog',
    description: 'Son güncellemde gelen özellikleri gösterir.',
    usage: 'updatelog'
  };//©Fire Bunny