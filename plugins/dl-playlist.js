
import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `✳️ ejemplo *${usedPrefix + command}* Lil Peep hate my life`;
    m.react('📀');

    let result = await yts(text);
    let ytres = result.videos;


    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '💿 MP3',
                    title: "",
                    description: `▢ ⌚ *duración:* ${v.timestamp}\n▢ 👀 *vistas:* ${v.views}\n▢ 📌 *titulo* : ${v.title}\n▢ 📆 *subido:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp3 ${v.url}`
                },
                {
                    header: "📀 MP4",
                    title: "" ,
                    description: `▢ ⌚ *duración:* ${v.timestamp}\n▢ 👀 *vistas:* ${v.views}\n▢ 📌 *titulo* : ${v.title}\n▢ 📆 *subido:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendListB(m.chat, '*GENESIS BOT*🔎', `\n 📀 Resultados de:\n *${text}*`, `OPCIONES`, null, [['CANAL 🐈‍⬛', `${canal}`]], ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = false

export default handler