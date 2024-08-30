let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `☁️ *EQUIPO DE AYUDANTES*
☕ *Bot:* ${global.botname}
☕ *Versión:* ${global.vs}

🩵 *Propietario:* 🩵

• Jostin-444
☁️ *Rol:* Propietario
☁️ *Número:* ${creador}
☁️ *GitHub:* https://github.com/Jostin-444

🩵 *Colaboradores:* 🩵

• Maxz XB
☁️ *Rol:* Colab
☁️ *GitHub:* https://github.com/Maxz-on

• Alermz XB
☁️ *Rol:* Colab
☁️ *GitHub:* https://github.com/ale-rmz

• Sebas XB
☁️ *Rol:* Colab
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
