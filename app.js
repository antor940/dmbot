const Discord = require('discord.js');
const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);

const config = require('./config.json');
const bot = new commando.Client({
    commandPrefix:'.',
    owner: config.id
});

const cmdsArray = [
    "dmall <message>",
    "dmrole <role> <message>"
];

bot.user.setActivity('Created By Survvz', { type: 'Watching' });
  bot.user.setStatus('available', null);

bot.on("ready", () => {
    clear();
    console.log('DM Bot v5 Created By Survvz')
});


bot.on("error", (error) => {
    bot.login(config.token);
});

bot.registry.registerGroup('dms', 'help');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

if (process.env.BOT_TOKEN) bot.login(process.env.BOT_TOKEN);
else bot.login(config.token);




function clear() {
    console.clear();
    console.log(figlet.textSync("MassDM v5 By Survvz").green);
    console.log("\n\nMass DM bot for Discord. \n Sends DMs to selected members of guild.\n  Improved And Stable");
    console.log("\n     Errors Contact Me");
    console.log(`\nRandom send time set @ 0.01-${config.wait}s`);
    console.log(` Type  ${config.prefix}help  in a chat.\n\n`);
}
