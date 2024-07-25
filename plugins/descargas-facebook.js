import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '🚩 Ingresa el enlace del vídeo de Facebook junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://www.facebook.com/official.trash.gang/videos/873759786348039/?mibextid=rS40aB7S9Ucbxw6v`, m, rcanal)

try {
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: SD || HD }, caption: `🍟 *Titulo ∙* ${title}` }, { quoted: estilo})
} catch {
}}
handler.help = ['facebook <url fb>']
handler.tags = ['descargas']
handler.command = ['fb', 'fbdl', 'facebookdl', 'facebook']
handler.register = true 
//handler.estrellas = 1
export default handler