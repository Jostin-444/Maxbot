import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `🚩 Ingresa el enlace del vídeo de Facebook junto al comando.\n\nEjemplo: *${usedPrefix + command}* https://www.facebook.com/share/v/Mqwsfxs8agAHsx4m/?mibextid=xfxF2i`, m, rcanal)
try {
await m.react(rwait)
conn.reply(m.chat, '🚩 Enviando el video...', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: SD || HD }, caption: `🍟 *Aquí está tu video*` }, { quoted: fkontak})
await m.react(done)
} catch {
await m.react(error)
conn.reply(m.chat, '❌️ Ocurrió un error', m, fake)
}}
handler.help = ['facebook <url fb>']
handler.tags = ['descargas']
handler.command = ['fb', 'fbdl', 'facebookdl', 'facebook']
handler.register = true 
//handler.estrellas = 1
export default handler