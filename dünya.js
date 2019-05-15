const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Dünya ne kadarda güzel bir yer 🧐')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/551783071360483329/571993774125875209/donen-dunya-gif.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['earth', 'Dünya'],
  permLevel: 0
};

exports.help = {
  name: 'dünya',
  description: 'Dönen dünya gifi atar.',
  usage: 'dünya'
};