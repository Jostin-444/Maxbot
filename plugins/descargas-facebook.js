

/* import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*`Ingresa Un Link De Facebook`*', m);
  }

  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, '*`Error al obtener datos. Verifica el enlace.`*', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, '*`No se encontraron resultados.`*', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return conn.reply(m.chat, '*`Error al procesar los datos.`*', m);
  }

  if (!data) {
    return conn.reply(m.chat, '*`No se encontró una resolución adecuada.`*', m);
  }

  let video = data.url;
  
  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: null, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return conn.reply(m.chat, '*`Error al enviar el video.`*', m);
  }
};

handler.command = /^(facebook|fb)$/i;

export default handler;       */

                                                                                                                                                                                                                                                     

import { igdl } from 'ruhend-scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `🚩 Ingresa el enlace del vídeo de Facebook junto al comando.\n\nEjemplo:\n> *${usedPrefix + command}* https://www.facebook.com/share/v/Mqwsfxs8agAHsx4m/?mibextid=xfxF2i`, m, rcanal)
try {
await m.react(rwait)
conn.reply(m.chat, '🚩 Enviando el video...', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: SD || HD }, caption: '🍟 *Aquí está tu video*' }, { quoted: fkontak})
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