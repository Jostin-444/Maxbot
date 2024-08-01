//Código creado por: github.com/ale-rmz

var handler = async (m, { conn, participants, usedPrefix, command }) => {
    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    const participantsToKick = participants.filter(user => user !== conn.user.jid && user !== ownerGroup && user !== ownerBot);

    if (!participantsToKick.length) {
        return conn.reply(m.chat, 'No hay miembros para eliminar.', m, rcanal);
    }

    const batchSize = 1;
    for (let i = 0; i < participantsToKick.length; i += batchSize) {
        const batch = participantsToKick.slice(i, i + batchSize);

        try {
            await conn.groupParticipantsUpdate(m.chat, batch, 'remove');
            console.log(`*𝗘𝗟𝗜𝗠𝗜𝗡𝗘 ${batch.length} 𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦`);
        } catch (error) {
            console.error('𝗘𝗥𝗥𝗢𝗥 𝗔𝗟 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗚𝗘𝗡𝗧𝗘 😓:', error);
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    conn.reply(m.chat, ' 𝗘𝗟𝗜𝗠𝗜𝗡𝗘 𝗔 𝗧𝗢𝗗𝗢𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 🌷', m, rcanal);
};

handler.help= ['kickall'];
handler.tags = ['grupo'];
handler.command = /^(kickall|echaratodos|hecharatodos|sacartodos|banall)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;