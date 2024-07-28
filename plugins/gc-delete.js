let handler = async (m, { conn, usedPrefix, command, isBotAdmin, isAdmin }) => {

if (!m.quoted) return conn.reply(m.chat, `🚩 Responde al mensaje que deseas eliminar.`, m, rcanal)
if (!isBotAdmin) return conn.reply(m.chat, `🌼 *No soy admin, no puedo eliminar mensajes de otro miembro*`, m, rcanal, )
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
/*return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
} catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}*/

if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, rcanal, )
}

handler.help = ['delete']
handler.tags = ['grupo']
handler.command = /^del(ete)?$/i
//handler.group = false
//handler.admin = true
//handler.botAdmin = true

export default handler