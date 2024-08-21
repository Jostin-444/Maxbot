let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `☁️ *EQUIPO DE AYUDANTES*
☕ *Bot:* ${global.botname}
☕ *Versión:* ${global.vs}

🤍 *Propietario:* 🤍

• Angel-OFC
☁️ *Rol:* Propietario
☁️ *Número:* ${creador}
☁️ *GitHub:* https://github.com/Angelito-OFC

🤍 *Colaboradores:* 🤍

• Maxz XB
☁️ *Rol:* Colab
☁️ *Número:* Wa.me/5215610314499
☁️ *GitHub:* https://github.com/Maxz-on

• Alermz XB
☁️ *Rol:* Colab
☁️ *Número:* Wa.me/573147616444
☁️ *GitHub:* https://github.com/ale-rmz

• Sebas XB
☁️ *Rol:* Colab
☁️ *Número:* Wa.me/5214434703586
☁️ *GitHub:* https://github.com/sebas-mod`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `☁️ Colaboradores ☁️`,
body: `🤍 Staff Oficial`,
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
