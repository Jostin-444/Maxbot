case 'fotocompartida': {
sock.sendMessage(from, { react: { text: `💕`, key: info.key }})
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
sock.sendMessage(from, { image: { url: random.male }, caption: `*_Foto masculina:_*` }, { quoted: info })
sock.sendMessage(from, { image: { url: random.female }, caption: `*_Foto feminina:_*` }, { quoted: info })
}
break

import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
        m.react('✅')
let anu = (await axios.get(`https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json`)).data  
let random = anu[Math.floor(Math.random() * anu.length)] 
conn.sendFile(m.chat, haha, 'error.jpg', `🍟 *${command}*`, m, null, rcanal);
};  
conn.sendFile(m.chat, haha, 'error.jpg', `🍟 *${command}*`, m, null, rcanal);
};
handler.command = handler.help = ['takeda', 'asuma', 'endeavor']
handler.tags = ['nsfw']
export default handler