let media = './Multi_Imagen/Menu1.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `${wm}`
await conn.sendButton(m.chat, `᥀·࣭࣪̇˖🪐◗ ¿𝘾𝙊𝙈𝙊 𝘿𝙀𝙎𝙀𝘼 𝙑𝙄𝙉𝘾𝙐𝙇𝘼𝙍?\n\n• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙨𝙤𝙡𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣.\n`, str, media, [
['𝗤𝗥 🤖', '.esubbot'],
['𝗖𝗢𝗗𝗘 🤖', '#premcode']], null, [
['Creador', `https://wa.me/5493873232212`]], fkontak)}
handler.command = /^serbot2|serbotcode|jadibot|jadibotcode$/i
handler.exp = 35
handler.private = true
export default handler
