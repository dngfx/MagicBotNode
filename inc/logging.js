const winston = require('winston');

const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.prettyPrint(),
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.label({ label: 'Server Fluff' }),
    winston.format.timestamp(),
    myFormat
  ),
  transports: [new winston.transports.Console()]
});

module.exports = logger;