
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://i.ibb.co/YcdFyft/file.jpg'
m.react('🤍')
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `᥀·࣭࣪̇˖☁️◗ 𝘊𝘈𝘕𝘈𝘓:
• ${canal}

᥀·࣭࣪̇˖☁️◗ 𝘛𝘐𝘛𝘈𝘕𝘐𝘜𝘔 𝘛𝘌𝘈𝘔:
• ${canal2}

᥀·࣭࣪̇˖☁️◗ 𝘈𝘝𝘐𝘚𝘖𝘚 🛎️:
• ${bgp} 

᥀·࣭࣪̇˖☁️◗ 𝘎𝘓𝘖𝘉𝘈𝘓 1️⃣:
• ${bgp2}

᥀·࣭࣪̇˖☁️◗ 𝘎𝘓𝘖𝘉𝘈𝘓 2️⃣:
• ${bgp3}

᥀·࣭࣪̇˖☁️◗ 𝘕𝘚𝘍𝘞 +18:
• ${bgp4}
`
await conn.sendButton(m.chat, estado, '@usxr_angelito0', pp, [
['DUEÑO 🤍', '.owner'], ['DONAR 🫧', '.donate']], null, [['CANAL 🐈‍⬛', `${canal}`]], m)
}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^(grupos|groups|support?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
