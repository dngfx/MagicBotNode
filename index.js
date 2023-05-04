const IRC = require("irc-framework");
const botConfig = require("./conf/settings");

let bot = new IRC.Client();

bot.on("raw", (event) => {
    console.log(event);
});

bot.on("registered", (event) => {
    bot.join("#premium-test");
});



//console.log(botConfig);

bot.connect(botConfig);
