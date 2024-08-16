import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 100

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!args || !args[0]) return conn.reply(m.chat, `*⭐ Escribe la URL de un video de YouTube que deseas descargar.*`, m)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat,`Verifica que la *URL* sea de YouTube`, m).then(_ => m.react('✖️'))
let q = args[1] || '360p'

await m.react('🕒')
try {
const yt = await fg.ytv(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))

await m.react('📀')
await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n01:26 ━━━━●────── ${vid.timestamp}`, m, fake)
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, dl_url } = yt
let vid = (await yts(text)).all[0]

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))

await m.react('📀')
await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m, fake)
} catch {
await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
//console.error(error)
}}}
handler.help = ['ytmp4 <url yt>']
handler.estrellas = 3
handler.tags = ['dl']
handler.command = /^(fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i;
handler.star = 2
handler.register = true 
export default handler