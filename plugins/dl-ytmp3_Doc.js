import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
let limit = 200

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!args || !args[0]) return star.reply(m.chat, 'ðŸš© Ingresa el enlace del vÃ­deo de YouTube junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, `Verifica que el enlace sea de YouTube.`, m, rcanal).then(_ => m.react('✅'))
let q = '128kbps'

await m.react('✅')
try {
let v = args[0]
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let title = await yt.title
let size = await yt.audio[q].fileSizeH
let thumbnail = await yt.thumbnail

let img = await (await fetch(`${thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '*By: GenesisBot*', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: fkontak })
await m.react('✅')
} catch {
try {
let yt = await fg.yta(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let img = await (await fetch(`${vid.thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '*By: GenesisBot*', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: fkontak })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(args[0], q)
let { title, dl_url, size, thumb } = yt 

let img = await (await fetch(`${thumb}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('✅'))
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '*By: GenesisBot*', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: fkontak })
await m.react('✅')
} catch {
await m.react('✅')
}}}}
handler.help = ['ytmp3doc *<link yt>*']
handler.tags = ['dl']
handler.command = ['ytmp3doc', 'ytadoc'] 
//handler.limit = 1
handler.register = true 

export default handler