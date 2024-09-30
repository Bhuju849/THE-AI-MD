const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👾 𝐀𝐈 MD Repastitory Information*

*| ɴᴀᴍᴇ*: 𝑨𝑰-𝑩𝑶𝑻-𝑴𝑫 𝑽𝑰.9
*| ᴏᴡɴᴇʀ*: ᴛᴄʀᴏɴᴇʙ ʜᴀᴄᴋx ( ᴀɪ-ʙᴏᴛ-ᴍᴅ ᴠ1.9 )
*| ɴᴜᴍʙᴇʀ*: 263716394979
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.9


*📡 REPO LINK*
🔗◦https://github.com/TcronebHackx-Md/THE-AI-BOT.git

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://youtube.com/@cbf_263

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/q0w46d.jpg`}, 

}catch(e){
console.log(e)
reply(`${e}`)
}
})
