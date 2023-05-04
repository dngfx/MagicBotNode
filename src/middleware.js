const logging = require('../inc/logging');

const middleware = {
    MiddlewareCatcher: function() {
       return function(client, raw_events, parsed_events) {
            parsed_events.use(middleware.middlewareHandler);
        }
    },
    middlewareHandler: (command, event, client, next) => {
            //logging.info(`Command: ${command} => Event: ${event}`);
            
            if( command === "message" ) {
                middleware.parseMessage(event);
            }

            next();
    },
    parseMessage: (info) => {
        //console.log(info);
        let type = info.type.toUpperCase();
        let isServer = info.from_server ? "SERVER MESSAGE" : "USER MESSAGE";
        if( !info.from_server ) {
            console.log(info);
        }
        logging.info(`[${isServer}] - [${type}] => ${info.message}` );

        return true;
    }
};

module.exports = middleware;