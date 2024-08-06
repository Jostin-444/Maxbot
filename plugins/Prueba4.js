import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/EXOTICO/NSFW/hot-${command}.json`)).data  
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `❮❌❯ » 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨.`
let haha = await res[Math.floor(res.length * Math.random())] 

conn.sendButton(m.chat, `🍷🔥 *_Horny_* 🔥🍷`.trim(), wm, haha, [['𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `${usedPrefix + command}`]], null, null, m)    
}
handler.command = handler.help = ['xporn1', 'xporn2', 'xporn3', 'xporn4', 'xporn5', 'xporn6', 'xporn7', 'xporn8', 'xporn9', 'xporn10', 'xporn11', 'xporn13', 'xporn14', 'xporn15', 'xporn17', 'xporn18', 'xporn19', 'xporn20', 'xporn21', 'xporn22', 'xporn23']
handler.tags = ['hots']
handler.register = true
export default handler