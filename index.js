const IRC = require("irc-framework");
const logging = require('./inc/logging');
const botConfig = require("./conf/settings");
const Middleware = require("./src/middleware");

let bot = new IRC.Client();
bot.use(Middleware.MiddlewareCatcher());
/*
bot.on("raw", (event) => {
    logging.info(JSON.stringify(event));
});*/

bot.on("registered", (event) => {
    bot.join("#premium-test");
});


//console.log(botConfig);

bot.connect(botConfig);
