/*---------------------------------------------------------------------------------------
  🍀 •  𝘉𝘠 𝘑𝘖𝘚𝘛𝘐𝘕
-----------------------------------------------------------------------------------------*/
import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) throw `𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙙𝙚 𝙪𝙨𝙤:\n.𝙨𝙤𝙧𝙩𝙚𝙤 𝙩𝙚𝙭𝙩𝙤`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['ㅤ'])}`
let l = Math.floor(Math.random() * x.length);
let vn = ``
let top = `*${user(a)}* _𝙚𝙨𝙩𝙖𝙨 𝙙𝙚 𝙨𝙪𝙚𝙧𝙩𝙚 , 𝙖𝙘𝙖𝙗𝙖 𝙙𝙚 𝙜𝙖𝙣𝙖𝙧 ${text} 😼💪🏻_
𝐌𝐀𝐗 𝐁𝐎𝐓-𝐌𝐃 𝐓𝐞 𝐃𝐚 𝐒𝐮𝐞𝐫𝐭𝐞 🤖💫

`
let txt = '';
let count = 0;
for (const c of top) {
    await new Promise(resolve => setTimeout(resolve, 15));
    txt += c;
    count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
    await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} );
//m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendFile(m.chat, vn, '🏆𝐀𝐂𝐄𝐑𝐐𝐔𝐄𝐒𝐄 𝐀 𝐑𝐄𝐂𝐋𝐀𝐌𝐀𝐑 𝐒𝐔 𝐏𝐑𝐄𝐌𝐈𝐎🏅', null, m, true, {
type: 'audioMessage',
ptt: true })}
handler.help = handler.command = ['sorteo']
handler.tags = ['fun']
handler.group = true
handler.limit = 0
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}