import fetch from 'node-fetch'

var handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {

let text
if (args.length >= 1) {
text = args.slice(0).join(' ')
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `『✦』Ingresa un texto para crear una imagen con dall-e.`, m, fpay, )

try {

conn.reply(m.chat, '『✦』Creando imagen, espere un momento...', m, fpay, )
await Draw(text).then((img) => {
conn.sendFile(m.chat, img, text, `『✦』 ${text}\n\n¡¡¡Realizado!!!`, m, fpay, )
})
} catch (e) {
return conn.reply(m.chat, `『✦』 *Ocurrio un error inesperado en el comando.*`, m, fpay, )
}

}
handler.help = ['dalle']
handler.tags = ['ai']
handler.command = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)/i

export default handler 

async function Draw(propmt) {
const Blobs = await fetch(
'https://api-inference.huggingface.co/models/prompthero/openjourney-v2',
{
method: 'POST',
headers: {
'content-type': 'application/json',
Authorization: 'Bearer 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',
},
body: JSON.stringify({ inputs: propmt }),
})
.then((res) => res.blob())
const arrayBuffer = await Blobs.arrayBuffer()
const buffer = Buffer.from(arrayBuffer)
return buffer
}