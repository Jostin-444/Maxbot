import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'
let handler = async(m, { conn, usedPrefix, command, text }) => {
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: canal, thumbnail: await(await fetch(gataMenu)).buffer() }}}
if (!text) return await conn.reply(m.chat, `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙦𝙪𝙚 𝙗𝙪𝙨𝙘𝙖.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: *${usedPrefix + command} Erika Lundmoen - Yad*`, fkontak, m) 
try {
const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = `✯ 𝗡𝗢𝗠𝗕𝗥𝗘:
𖦹 _${spty.data.name}_

✯ 𝗔𝗥𝗧𝗜𝗦𝗧𝗔:
𖦹 _${spty.data.artists}_

✯ 𝗘𝗡𝗟𝗔𝗖𝗘:
𖦹 _${linkDL}_`
await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, fkontak, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
await conn.sendMessage(m.chat, {text: waittttt, edit: key})
handler.limit = 1
} catch (e) {
await conn.reply(m.chat, `${errorAB}`, fkontak, m)
console.log(`${errorBB}`)
console.log(e)
handler.limit = false
}}
handler.command = /^(spotify2|music)$/i
export default handler

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Fallo la descarga' }})
return { data: res, audio: await spotify.downloadTrack(url) }}