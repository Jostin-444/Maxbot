const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('✅') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `*» INFO :* ${pesan}`;
  let teks = `*!  MENCION GENERAL  !*\n  *PARA ${participants.length} MIEMBROS* 🗣️\n\n ${oi}\n\n╭┈┈✣ 𝙂𝙚𝙣𝙚𝙨𝙞𝙨 𝙋𝙧𝙤 ✣\n`;
  for (const mem of participants) {
    teks += `┊✧ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰┈✣ *${vs}*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;