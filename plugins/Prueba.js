let handler = async (m, { conn, args, isAdmin}) => {
    let who;
    
    if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender;
    } else if (m.mentionedJid && m.mentionedJid.length > 0) {
        who = m.mentionedJid[0];
    } else {
        throw `Siapa yang ingin Anda pilih?`;
    }

    const groupOwner = await (await conn.groupMetadata(m.chat)).owner;
    const tag = await (await conn.groupMetadata(m.chat)).participants.map(a => a.id);

    if (who === m.sender || who === groupOwner || who === conn.user.jid) {
        throw `Anda tidak dapat memilih pembuat grup atau diri Anda sendiri!`;
    }

    let user = global.db.data.users[who];

    if (user.lastVotedBy === m.sender) {
        throw `Anda tidak dapat memilih orang yang sama lagi selama masa pemungutan suara!`;
    }
    if (!user.votekick) {
    user.votekick = 0
    }
    user.lastVotedBy = m.sender;
    user.votekick += 1;
    
    let cap = `@${m.sender.split("@")[0]} Telah memilih @${who.split("@")[0]} untuk dihapus!\n*Total Pemungutan Suara:* ${user.votekick}/5`;

    if (user.votekick >= 5) {
        cap += `\n\nThe user has reached 5 votes and has been removed from the group.`;
if (!isAdmin) {
        conn.groupParticipantsUpdate(m.chat, [who], "remove");
}
        user.votekick = 0;
    } else {
        let timeout = setTimeout(() => {
            user = global.db.data.users[who];
            user.lastVotedBy = '';
            user.votekick = 0;
            conn.reply(m.chat, `Memberikan suara untuk @${who.split("@")[0]} telah berakhir. Target 5 suara tidak tercapai.`, m, { contextInfo: {
            mentionedJid: [who]
            } });
        }, 5 * 60 * 1000);
        user.votingTimeout = timeout;
    }
    
    conn.reply(m.chat, cap, null, { contextInfo:
    {
     mentionedJid: [m.sender, who] 
     }});
};

handler.help = ['vote_kick']
handler.command = /^(vote_kick|vk|votekick)$/i;
handler.tags = ['group'];
handler.group = true;
handler.botAdmin = true;

export default handler;