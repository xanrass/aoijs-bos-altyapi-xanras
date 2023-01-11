const aoijs = require("aoi.js")
const config = require("././config.json")

const bot = new aoijs.Bot({
  prefix: "$getServerVar[prefix]",
  token: config.token,
  intents: "all"
})

  bot.status({
  text: "TEXT",
  type: "PLAYING",
  time: 12
})

bot.variables({
prefix: "!"
})

bot.onMessage()

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/')

