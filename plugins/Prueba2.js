case 'fotocompartida2': {
sock.sendMessage(from, { react: { text: `💕`, key: info.key }})
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
sock.sendMessage(from, { image: { url: random.male }, caption: `*_Foto masculina:_*` }, { quoted: info })
sock.sendMessage(from, { image: { url: random.female }, caption: `*_Foto feminina:_*` }, { quoted: info })
}
break