import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
        m.react('✅')
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendFile(m.chat, { image: { url: random.male }, caption: `*_Foto masculina:_*` }, { quoted: info })
conn.sendFile(m.chat, { image: { url: random.female }, caption: `*_Foto feminina:_*` }, { quoted: info })
}
handler.command = handler.help = ['fotocompartida2']
handler.tags = ['nsfw']
export default handler