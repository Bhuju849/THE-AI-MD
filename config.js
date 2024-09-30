const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gyV1GbYT#FjeMeHfvR2mJfqGBTzRgHWd-8-Sg3bz21XfL-THo1Ok",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/70ssfa.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi AI-MD V1.9 Is Online Now 💻\n*💻 Owner* - TCRONEB HACKX\n\n*💻 Owner Number* -263716394979",
SUDO_NB: process.env.SUDO_NB || "263716394979",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
