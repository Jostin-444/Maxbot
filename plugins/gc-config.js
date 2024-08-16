var handler = async (m, {conn, args, usedPrefix, command}) => {
const isClose = { 'open': 'not_announcement', 'close': 'announcement', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]
if (isClose === undefined) { return await conn.sendButton(m.chat, packname, '• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖 𝙡𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣.', wm, [
['𝘼𝙗𝙧𝙞𝙧 ✅', '.grupo abrir'],
['𝘾𝙚𝙧𝙧𝙖𝙧 ❌', '.grupo cerrar']], null, null, m)
}
await conn.groupSettingUpdate(m.chat, isClose)
{ 
conn.reply(m.chat, '✅ *Configurado correctamente*', m, rcanal, )
await m.react(done)
}}
handler.help = ['group abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler