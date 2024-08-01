//Código creado por: github.com/ale-rmz

var handler = async (m, { conn, participants, usedPrefix, command }) => {
    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';


    const participantsToKick = participants.filter(user => user !== conn.user.jid && user !== ownerGroup && user !== ownerBot);

    if (!participantsToKick.length) {
        return conn.reply(m.chat, 'No hay miembros para eliminar.', m, rcanal);
    }

    await conn.groupParticipantsUpdate(m.chat, [participantsToKick], 'remove');
    conn.reply(m.chat, '𝗬𝗔 𝗘𝗟𝗜𝗠𝗜𝗡𝗘 𝗔 𝗧𝗢𝗗𝗢𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 🌷', m, rcanal);
};

 handler.help= ['kickall'];
handler.tags = ['grupo'];
handler.command = /^(kickall|echaratodos|hecharatodos|sacartodos|banall)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;