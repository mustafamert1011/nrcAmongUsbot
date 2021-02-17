
const getGame = require("../ressources/getGame")
///narcoscode
exports.run = (client, message, args, tools) => {console.log(message.author.presence.clientStatus)
  message.channel.send("pong")
}
///narcoscode