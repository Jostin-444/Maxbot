// *`Instagram Downloader 🐢`*

import { igdl } from "ruhend-scraper";

let handler = async (m, { args, conn }) => { 
    if (!args[0]) {
        return conn.reply(m.chat, '*`Ingresa un link de Instagram`*', m);
    }
    
    try {
        await m.react('🕑');
        
        let res = await igdl(args[0]);
        let data = res.data; 
        
        for (let media of data) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            await conn.sendFile(m.chat, media.url, 'instagram.mp4', null, m); 
        }
    } catch {
        await m.react('❌');
    }
}

handler.command = ['instagram'];
handler.tags = ['descargas'];
handler.help = ['instagram'];

export default handler;

// *_`Package`_* 
// "ruhend-scraper": "^*",

/* import Starlights from '@StarlightsTeam/Scraper'
let listo = '🚩 Tu video de instagram'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '🚩 Ingresa un enlace de Instagram.', m, rcanal)
try {
conn.reply(m.chat, '⁖❤️꙰  *Descargando su video de Instagram*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let { dl_url } = await Starlights.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: listo }, { quoted: fkontak})
} catch (e) {
  console.log(e)
  m.reply('🚩 Ocurrió un error inesperado.')
}}
handler.help = ['ig <enlace>']
handler.tags = ['descargas']
handler.command = ['ig', 'instagram']
handler.register = true
handler.estrellas = 1
export default handler */