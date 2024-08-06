import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`᥀·࣭࣪̇˖🔍◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙖𝙣𝙞𝙢𝙚 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧𝙡𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Kimetsu no Yaiba*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
❒ 𝗡𝗢𝗠𝗕𝗥𝗘:
• ${result.title}

❒ 𝗙𝗢𝗥𝗠𝗔𝗧𝗢:
• ${result.type}

❒ 𝗘𝗦𝗧𝗔𝗗𝗢:
• ${result.status.toUpperCase().replace(/\_/g, ' ')}

❒ 𝗘𝗣𝗜𝗦𝗢𝗗𝗜𝗢𝗦 𝗧𝗢𝗧𝗔𝗟𝗘𝗦:
• ${result.episodes}

❒ 𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡:
• ${result.duration}*

❒ 𝗕𝗔𝗦𝗔𝗗𝗢 𝗘𝗡:
• ${result.source.toUpperCase()}

❒ 𝗘𝗦𝗧𝗥𝗘𝗡𝗔𝗗𝗢 𝗘𝗡:
• ${result.aired.from}

❒ 𝗙𝗜𝗡𝗔𝗟𝗜𝗭𝗔𝗗𝗢 𝗘𝗡:
• ${result.aired.to}

❒ 𝗣𝗢𝗣𝗨𝗟𝗔𝗥𝗜𝗗𝗔𝗗:
• ${result.popularity}

❒ 𝗙𝗔𝗩𝗢𝗥𝗜𝗧𝗢𝗦:
• ${result.favorites}

❒ 𝗖𝗟𝗔𝗦𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡:
• ${result.rating}

❒ 𝗥𝗔𝗡𝗚𝗢:
• ${result.rank}

❒ 𝗧𝗥𝗔𝗜𝗟𝗘𝗥:
• ${result.trailer.url}

❒ 𝗘𝗡𝗟𝗔𝗖𝗘:
• ${result.url}

❒ 𝗕𝗔𝗖𝗞𝗚𝗥𝗢𝗨𝗡𝗗:
• ${resultes.text}

❒ 𝗥𝗜𝗡𝗚𝗞𝗔𝗦𝗔𝗡:
• ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `𝗢𝗰𝘂𝗿𝗿𝗶𝗼 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗶𝗻𝗲𝘀𝗽𝗲𝗿𝗮𝗱𝗼, 𝗶𝗻𝘁𝗲𝗻𝘁𝗮𝗹𝗼 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼.`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;