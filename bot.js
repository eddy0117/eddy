const commando = require('discord.js-commando');
const bot = new commando.CommandoClient();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerCommandsIn(__dirname + "/commands")
bot.registry.registerDefaults();

global.currentTeamMembers = [];
global.servers = {};
bot.on("ready",async () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setGame("庫璇蝦蝦蛋起司");
});

bot.login('process.env,BOT_TOKEN');
