const { savefrom, facebookdl, facebookdlv2 } = require('@bochilteam/scraper') 

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚩 *Ingrese un enlace de facebook*\n\nEjemplo, !fb https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz`, m, rcanal)
if (!text.includes('facebook')) {
return conn.reply(m.chat, '🚩 Enlace invalido', m, rcanal)
}
try {
// await conn.reply('Cargando') 
const { result } = await facebookdl(text).catch(async () => await facebookdlv2(text)).catch(async () => await savefrom(text))
for (const { url, isVideo } of result.reverse()) await conn.sendMessage(m.chat, {video: {url: url}, caption: '🍟 Video de facebook'}, {quoted: fkontak})
} catch (e) {
m.reply(`🚩 *Ocurrió un fallo*\n\n> ${e}`)
}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = true
handler.estrellas = 1

export default handler