import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
        m.react('✅')
let anu = (await axios.get(`https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json`)).data    
let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendFile(m.chat, { image: { url: random.male }, caption: `*_Foto masculina:_*` }, { quoted: m })
conn.sendFile(m.chat, { image: { url: random.female }, caption: `*_Foto feminina:_*` }, { quoted: m })
};
handler.command = handler.help = ['fotocompartida']
handler.tags = ['nsfw']
export default handler