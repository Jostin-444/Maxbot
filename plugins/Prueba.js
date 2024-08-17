import axios from 'axios';
import fs from 'fs'

const handler = async (m, { conn, text }) => {
  if (!text) return m.reply("🐱 Input Text");
  try {
    const ttsResponse = await axios.get('https://api.kimzzoffc.me/api/openai/ttsai', { params: { query: text, apikey: 'OsOKZjWXie' },
      responseType: 'arraybuffer'
    });

    conn.sendMessage(m.chat, { audio: ttsResponse.data, mimetype: 'audio/mpeg', ptt: true, contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        body: author,
        containsAutoReply: true,
        mediaType: 1,
        mediaUrl: sig,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: sig,
        thumbnail: fs.readFileSync('./thumbnail.jpg'),
        title: wm
      }}}, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Error Bang');
  }
};

handler.help = ['ttsai'];
handler.tags = ['ai'];
handler.command = /^(ttsai)$/i;
handler.limit = false;
handler.premium = true;

export default handler;