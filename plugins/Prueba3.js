import axios from 'axios'

let handler = async (m, {usedPrefix, command, conn, text }) => {

if (!text) throw `Error!\nMasukan username, *Ex: ${usedPrefix + command} mrbeast`
try {
m.reply(wait)
let ress = await axios.get(`https://www.api-nightmares.my.id/api/instagram-stalk?q=${text}&apikey=Tio`)
let res = ress.data
let teks = `乂  *STALKER IG*

*◦ NOMBRE :* ${res.result.username}
*◦ USUARIO :* ${res.result.name}
*◦ SEGUIDORES :* ${res.result.followers}
*◦ SIGUIENDO:* ${res.result.following}
*◦ DESCRIPCIÓN :* ${res.result.description}`
await conn.sendMessage(m.chat, {image: {url : res.result.pp_user}, caption: teks}, {quoted: m})
} catch (err) {
m.reply('Error Username tidak ditemukan\nSilahkan kirim Username yang valid!')
}

}
handler.help = ['stalktiktok <username>']
handler.tags = ['stalker']
handler.command = /^(igstalk2|stalkig|igstalk)$/i
handler.limit = true
export default handler