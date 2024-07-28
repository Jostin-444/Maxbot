import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D* 🍂

1- 【 ✰ Ai Yaemori - MD ✰ 】
*✰* ${gp1}

2 - ${namegrupo}
*✰* ${gp2}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Grupos En Colaboración!

1- ${colab1}
*✰* ${gp3}

2- ${colab2}
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

await conn.sendFile(m.chat, imagen2, "yaemori.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos|gruposluffy|gpluffy|linkluffy|luffylink|luffygrupos)$/i
export default handler