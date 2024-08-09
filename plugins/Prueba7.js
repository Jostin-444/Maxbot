import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, args }) => {
  try {
    if (!args[0]) return m.reply(`${usedPrefix+command} https://teraboxapp.com/s/1MZ8yZ2Qo_2mp5s_1yo3O7Q`)
    if (!args[0].match(/(https:\/\/teraboxapp.com)/gi)) return m.reply(status.invalid)
    conn.sendMessage(m.chat, { react: { text: "🕛", key: m.key, }})
    const json = await Func.fetchJson(`https://api.alyachan.pro/api/terabox?url=${args[0]}&apikey=3cCZNi`)
    if (!json.status) return m.reply(Func.jsonFormat(json))
    let xSize = Func.sizeLimit(json.data.size, global.max_upload)
    if (xSize.oversize) return m.reply(`The file size (${json.data.size}) is too large, please download it yourself via this link : ${await (await Func.shortlink(json.data.url))}`)
    conn.sendMedia(m.chat, json.data.url, m, {
      fileName: json.data.filename,
      mentions: [m.sender]
    })
    conn.sendMessage(m.chat, { react: { text: "✅", key: m.key, }})
  } catch (e) {
    console.log(e)
    m.reply(Func.jsonFormat(e))
  }
}
handler.help = handler.command = ['terabox']
handler.tags = ['downloader']
handler.limit = true

export default handler