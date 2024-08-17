let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://apigratis.site/api/search_characters?query=Hatsune%20Miku`)
 //let ouh = await fetch(`https://apigratis.site/api/search_characters?query=Hatsune%20Miku`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Hatsume Miku - C.ai',
        body: 'F U R I N A  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/1d84cf5157bffd783a2fd.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q',
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.command = /^(caimiku)$/i
handler.help = ['caimiku']
handler.tags = ['character-ai']
handler.premium = false

export default handler;