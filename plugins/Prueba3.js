const baileys = require('@adiwajshing/baileys');

const client = baileys();

client.on('groups.update', async (group) => {
  // ...
});

client.on('message.new', async (m) => {
  if (m.message && m.message.text && m.message.text.startsWith('#kickall')) {
    const chat = m.chat;
    const participants = await client.groupMetadata(chat);
    const users = participants.participants.map((user) => (link unavailable));
    for (const user of users) {
      if (user !== (link unavailable)) {
        await client.groupParticipantsUpdate(chat, [user], 'remove');
        console.log(`Expulsado: ${user}`);
      }
    }
  }
});

client.handler({
  command: 'kickall2',
  desc: 'Expulsa a todos los miembros del grupo',
  exec: async (m) => {
    const chat = m.chat;
    const participants = await client.groupMetadata(chat);
    const users = participants.participants.map((user) => (link unavailable));
    for (const user of users) {
      if (user !== (link unavailable)) {
        await client.groupParticipantsUpdate(chat, [user], 'remove');
        console.log(`Expulsado: ${user}`);
      }
    }
    m.reply('Todos los miembros han sido expulsados del grupo');
  }
});