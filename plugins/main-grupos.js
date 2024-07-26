import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D* 🍂

1- 【 ✰ Luffy Bot - MD ✰ 】
*✰* ${gp1}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Grupos En Colaboración!

1- ${colab1}
*✰* ${gp2}

2- ${colab2}
*✰* ${gp3}

3- ${colab3}
*✰* ${gp4}

4- ${namecomu}
*✰* ${comunidad1}

5- ${namecomu2}
*✰* ${comunidad2}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

Canal :
*✰* ${channel}

> ${dev}`
await conn.sendFile(m.chat, imagen2, "Thumbnail.jpg", txt, m, null, rcanal)
await m.react(emojis)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos|gruposluffy|gpluffy|linkluffy|luffylink|luffygrupos)$/i
export default handler

/*let handler = async (m, { conn, command }) => {
let gps = `*◜💙 GRUPOS OFICIALES 💙◞*

🚩 ${packname} 
${gp1}

 *◜🤍 COLABORACIONES 🤍◞*

🍟 ${colab1}
${gp2}

🍟 ${colab2}
${gp3}

🍟 ${colab3}
${gp4}

🍟 ${namecomu}
${comunidad1}

🍟 ${namecomu2}
${comunidad2}

 *◜🌸 CANALES OFICIALES 🌸◞*

🍭 ${namechannel}
${channel}

🍭 ${namechannel2}
${channel2}`

await m.react(emojis) 

await conn.sendFile(m.chat, imagen2, 'luffy.jpg', gps, fkontak, null, rcanal)}

handler.tags = ['main']
handler.help = ['grupos']
handler.command = /^grupos|gruposluffy|linkre|luffygp|gpluffy|gruposofc|gruposoficiales$/i
handler.register = true

export default handler*/
