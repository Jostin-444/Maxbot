const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('message', async (message) => {
  if (message.body === '!kickall2') {
    const chat = message.chat;
    const participants = await client.getGroupParticipants(chat);
    for (const participant of participants) {
      if ((link unavailable) !== (link unavailable)) {
        await client.removeParticipant(chat, (link unavailable));
        console.log(`Expulsado: ${(link unavailable)}`);
      }
    }
    message.reply('Todos los miembros han sido expulsados del grupo');
  }
});
