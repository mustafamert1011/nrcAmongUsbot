const Discord = require("discord.js");
///narcoscode
exports.run = (client, message, args, tools) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(
      "Among Us Bot",
      "https://media.discordapp.net/attachments/405780210265620480/758414219732451328/among-us-icon.png"
    )
    .addField(
      "/code <@someone>",
      "Aramızda Oyun Bilgisini birinden veya kendinizden alın"
    ).addField(
      "Daha fazla komut geliyor!",
      "Bot yakında birçok harika özelliğe sahip olacak! Sunucunuza davet etmek isterseniz : **[Invite the Bot](https://discord.com/api/oauth2/authorize?client_id=760149228441042995&permissions=4508736&scope=bot)**"
    )
    .setColor(process.env.embedColor);
  message.channel.send(embed);
};
///narcoscode