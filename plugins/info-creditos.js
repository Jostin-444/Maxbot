let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
💫 *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Angel-OFC
🍟 *Rol:* Propietario
🚩 *Número:* ${creador}
✨️ *GitHub:* https://github.com/Angelito-OFC

🌸  *Colaboradores:*

• Maxz XB
🍟 *Rol:* Colab
🚩 *Número:* Wa.me/5215610314499
✨️ *GitHub:* https://github.com/ArizzVal

• Alermz XB
🍟 *Rol:* Colab
🚩 *Número:* Wa.me/573147616444
✨️ *GitHub:* https://github.com/elrebelde21

• Sebas XB
🍟 *Rol:* Colab
🚩 *Número:* Wa.me/5214434703586
✨️ *GitHub:* https://github.com/AzamiJs`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
