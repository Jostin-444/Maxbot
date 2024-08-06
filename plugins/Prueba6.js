let handler = async (m, { conn, text }) => {
if (!text) return m.reply('᥀·࣭࣪̇˖🪐◗ 𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙥𝙖𝙧𝙖 𝙘𝙧𝙚𝙖𝙧𝙡𝙤.')
try{
m.reply('᥀·࣭࣪̇˖✅◗ 𝘾𝙧𝙚𝙖𝙣𝙙𝙤 𝙜𝙧𝙪𝙥𝙤 𝙖𝙡𝙚𝙖𝙩𝙤𝙧𝙞𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply(`᥀·࣭࣪̇˖👑◗ 𝙂𝙧𝙪𝙥𝙤 𝙘𝙧𝙚𝙖𝙙𝙤 𝙘𝙤𝙣 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿\n\n• https://chat.whatsapp.com/` + url)
} catch (e) {
m.reply(`᥀·࣭࣪̇˖⛔◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
}}
handler.help = ['exoticgroup']
handler.tags = ['owner']
handler.command = /^(creargrupo|creargroup|creargc|gccreate)$/
handler.owner = false
handler.limit = 5
export default handler