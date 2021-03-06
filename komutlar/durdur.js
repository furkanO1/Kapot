const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDSiyHBWZI9dDZBWXloNVhrHbpzTTfa0L8');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err1 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Bir sesli kanalda değilsin.`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şuanda herhangi bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Şarkı başarıyla durduruldu ve odadan ayrıldım!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["stop"],
  permLevel: 0,
  kategori: "müzik",
  category: "music"
};

exports.help = {
  name: 'durdur',
  description: 'Çalan/oynatılan şarkıyı kapatır',
  usage: 'stop',
  enname: 'voting',
  endescription: 'Allows .',
  enusage: 'voting <message>'
};
   