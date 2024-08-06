var handler = async (m, { conn, args, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `• *Ingrese el número de un usuario para aprobarlo*\nEjemplo, #${command} 52172999999`, m )
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await conn.groupRequestParticipantsUpdate(m.chat, users, 'approve')

}
handler.help = ['aprobar']
handler.tags = ['grupo']
handler.command = /^(aprueba|aprobar|acepta|aceptar|\+)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler