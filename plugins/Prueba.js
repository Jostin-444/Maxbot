/*
𝙆𝙮𝙯𝙍𝙮𝙯𝙯 𝙓𝘿
𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
𝘸𝘢: https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q
𝘵𝘦𝘭𝘦: t.me/kyzoffc
𝘸𝘦𝘣: s.id/kyzzxd
╭──────────────────────────────╮
├─────「Di Larang Menghapus Wm Ini」─────┤
╰──────────────────────────────╯
*/

import axios from 'axios'

let handler = async (m, {usedPrefix, command, conn, text }) => {

if (!text) throw `Error!\nMasukan username, *Ex: ${usedPrefix + command} mrbeast`
try {
m.reply(wait)
let ress = await axios.get(`https://www.api-nightmares.my.id/api/tiktok-stalk?q=${text}&apikey=Tio`)
let res = ress.data
let teks = `乂  *STALKER TIKTOK*

◦  Username : ${res.result.username}
◦  Nickname : ${res.result.name}
◦  Pengikut  : ${res.result.followers}
◦  Mengikuti : ${res.result.following}
◦  Deskripsi  : ${res.result.description}`
await conn.sendMessage(m.chat, {image: {url : res.result.pp_user}, caption: teks}, {quoted: m})
} catch (err) {
m.reply('Error Username tidak ditemukan\nSilahkan kirim Username yang valid!')
}

}
handler.help = ['stalktiktok <username>']
handler.tags = ['stalker']
handler.command = /^(tiktokstalk2|stalktiktok|ttstalk)$/i
handler.limit = true
export default handler