import { ttdl } from 'ruhend-scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args || !args[0]) return conn.reply(m.chat, '*`INGRESA EL LINK DE TIKTOK`*', m, fake, )
    try {
await m.react('🕓'); 
        let {
            title,
            author,
            username,
            published,
            like,
            comment,
            share,
            views,
            bookmark,
            video,
            cover,
            duration,
            music,
            profilePicture
        } = await ttdl(args[0]);

        let txt = '';
        txt += ``;

        await conn.sendFile(m.chat, video, 'tiktok.mp4', dev, m);
        await m.react('✅'); 
    } catch {
        await m.react('❌'); 
    }
};

handler.help = ['tiktok *<link>*']
handler.tags = ['dl'] 
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i;

export default handler;