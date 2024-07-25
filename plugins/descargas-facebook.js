const { savefrom, facebookdl, facebookdlv2 } = require('@bochilteam/scraper') 

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚩 *Ingrese un enlace de facebook*\n\nEjemplo, !fb https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz`, m, rcanal)
if (!text.includes('facebook')) {
return conn.reply(m.chat, '🚩 Enlace invalido', m, rcanal)
}
try {
await m.react(rwait)
conn.reply(m.chat, '🍟 Enviando el video....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
// await conn.reply('Cargando') 
const { result } = await facebookdl(text).catch(async () => await facebookdlv2(text)).catch(async () => await savefrom(text))
for (const { url, isVideo } of result.reverse()) await conn.sendMessage(m.chat, {video: {url: url}, caption: '🍟 Video de facebook'}, {quoted: fkontak})
await m.react(done)
} catch (e) {
await m.react(error)
m.reply(`🚩 *Ocurrió un fallo*\n\n> ${e}`)
}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = true
handler.estrellas = 1

export default handler