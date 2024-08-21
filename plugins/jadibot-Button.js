let media = 'https://i.ibb.co/XSYdHM8/file.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await m.react('☁️');
let str = `${wm}`
await conn.sendButton(m.chat, `᥀·࣭࣪̇˖🤍◗ ¿𝘾𝙊𝙈𝙊 𝘿𝙀𝙎𝙀𝘼 𝙑𝙄𝙉𝘾𝙐𝙇𝘼𝙍?\n\n• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙨𝙤𝙡𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣.\n`, str, media, [
['𝗤𝗥 🤖', '.serbotqr'],
['𝗖𝗢𝗗𝗘 🤖', '.serbotcode']], null, [
['Creador', `https://wa.me/59168683798`]], fkontak)}
handler.command = /^serbot$/i
export default handler
