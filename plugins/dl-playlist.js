
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
                    header: '💿 𝗠 𝗨 𝗦 𝗜 𝗖 𝗔',
                    title: "",
                    description: `💿 𝗧𝗶𝘁𝘂𝗹𝗼 : ${v.title}\n`, 
                    id: `${usedPrefix}fgmp3 ${v.url}`
                },
                {
                    header: "📀 𝗩 𝗜 𝗗 𝗘 𝗢",
                    title: "" ,
                    description: `📀 𝗧𝗶𝘁𝘂𝗹𝗼 : ${v.title}`, 
                    id: `${usedPrefix}fgmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendListB(m.chat, '*GENESIS BOT*🔎', `\n> 🐈‍⬛ *TÍTULO:* ${vid.title}\n> 🍀 *DURACIÓN:* ${vid.timestamp}\n> 👀 *VISTAS:* ${vid.views.toLocaleString()}\n *${text}*`, `OPCIONES`, ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = false

export default handler