const Discord = require("discord.js");
const linkCrack = require("../config.json").linkCrack;
const getGame = require("../ressources/getGame");

const bg = require("../ressources/randomBg.js");
exports.run = (client, message, args, tools) => {
  var cache = tools.cache;
  var member = args[0];
  if (!member) member = message.author;
  else {
    member = message.mentions.users.first();

    if (member) member = message.guild.members.get(member.id);
    if (!member) member = message.guild.members.get(args[0]);
    if (!member) return message.reply("Unknown user");
  }
  var game = getGame(message.author);
  if (!game)
    return message.reply(
      "Bu kullanıcı Aramızda oynamıyor veya Discord Oyun Etkinliğini devre dışı bırakmıyor"
    );
  var party = game.party;
///narcoscode
  if (game.stateType == "GAME" && !cache.get(member.id))
    return message.reply("Bu kullanıcı zaten oynuyor, oyunun bitmesini bekleyin");
  if (game.stateType == "MENU" && !cache.get(member.id))
    return message.reply("Bu kullanıcı oyunda değil");
  
  const embed = new Discord.RichEmbed()
    .setAuthor(
      member.username + "'s Among Us Game",
      "https://media.discordapp.net/attachments/405780210265620480/758414219732451328/among-us-icon.png"
    )
    .addField(
      "Game code <:Liste:410856444813115393>",
      "`" + cache.get(member.id) ? cache.get(member.id).code : party.code+ "`",
      true
    )
    .setColor("fcda42")
    .setImage(bg());
  
  embed.addField(
    "Place",
    cache.get(member.id) ? `${cache.get(member.id).size}/${cache.get(member.id).maxSize} <:Liste:410856444813115393>` : `${party.size}/${party.maxSize} <:Liste:410856444813115393>`,
    true
  );
  embed.addField("Status", game.state, true);
  message.channel.send(embed);
};
///narcoscode