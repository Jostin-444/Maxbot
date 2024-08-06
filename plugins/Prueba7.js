import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "᥀·࣭࣪̇˖🔍◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙖𝙥𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*#playstore WhatsApp*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `᥀·࣭࣪̇˖🔍◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙖𝙥𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*#playstore WhatsApp*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
`𝘕𝘰𝘮𝘣𝘳𝘦: ${v.title}
𝘊𝘳𝘦𝘢𝘥𝘰𝘳: ${v.developer}
𝘗𝘳𝘦𝘤𝘪𝘰: ${v.priceText}
𝘗𝘶𝘯𝘵𝘶𝘢𝘤𝘪𝘰𝘯: ${v.scoreText}
𝘌𝘯𝘭𝘢𝘤𝘦: ${v.url}`
  ).join`\n•━━━━━━━━━━━━•\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;