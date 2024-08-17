
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `*\`AVISO ⭐\`*\n\n*INGRESA EL NOMBRE*\n_Ejemplo: ${usedPrefix + command} brattyputy_`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('💿') 
  let play = `> *\`TÍTULO:\`* ${vid.title}
> *\`SUBIDO:\`* ${vid.ago}
> *\`DURACIÓN:\`* ${vid.timestamp}
> *\`VISTAS:\`* ${vid.views.toLocaleString()}`
 await conn.sendButton(m.chat, play, packname, thumbnail, [
    ['💿 𝗠 𝗨 𝗦 𝗜 𝗖 𝗔  𝗠 𝗣 𝟯', `${usedPrefix}fgmp3 ${url}`],
    ['📀 𝗩 𝗜 𝗗 𝗘 𝗢  𝗠 𝗣 𝟰', `${usedPrefix}fgmp4 ${url}`],
['📁 𝗠 𝗨 𝗦 𝗜 𝗖   𝗗 𝗢 𝗖', `${usedPrefix}ytmp3doc ${url}`],
['📁 𝗩 𝗜 𝗗 𝗘 𝗢  𝗗 𝗢 𝗖', `${usedPrefix}ytmp4doc ${url}`]
  ], null, [['🐈‍⬛ 𝗖 𝗔 𝗡 𝗔 𝗟  𝗢 𝗙 𝗖', `${canal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler
