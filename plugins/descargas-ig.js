// *`Instagram Downloader 🐢`*

import { igdl } from "ruhend-scraper";

let handler = async (m, { args, conn }) => { 
if (!args[0]) {
return conn.reply(m.chat, '*`Ingresa un link de Instagram`*', m, rcanal)}
try {
await m.react(rwait)      
let res = await igdl(args[0])
let data = res.data       
for (let media of data) {
await new Promise(resolve => setTimeout(resolve, 2000))           
await conn.reply(m.chat, media.url, 'instagram.mp4', m, rcanal)
}} catch {
await m.react(error)
conn.reply(m.chat, '🚩 Ocurrió un error.', m, fake)}}

handler.command = ['instagram', 'ig']
handler.tags = ['descargas']
handler.help = ['instagram', 'ig']

export default handler