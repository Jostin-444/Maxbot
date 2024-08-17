let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nezuko`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Nezuko - C.ai',
        body: 'F U R I N A  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/fd03a32e284f69a67114c.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q',
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.command = /^(cainezuko)$/i
handler.help = ['cainezuko']
handler.tags = ['character-ai']
handler.premium = false

export default handler;