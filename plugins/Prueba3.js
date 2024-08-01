let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
  if (!args[0]) return m.reply(`Ingrese el prefijo de número para buscar miembros en el grupo`)
  if (isNaN(args[0])) return m.reply(`Ingrese un número válido`)

  let lol = args[0].replace(/[+]/g, '')
  let ps = participants.map(u => (link unavailable)).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))

  if (ps == '') return m.reply(`No hay miembros con el prefijo +${lol} en este grupo`)

  switch (command) {
    case "kickall":
      if (!isBotAdmin) return m.reply(`El bot no es administrador del grupo`)
      conn.reply(m.chat, `Expulsando a todos los miembros del grupo...`)
      for (let user of ps) {
        await delay(2000)
        let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        if (responseb[0].status === "404") m.reply(`@${user.split("@")[0]} ya ha sido expulsado o abandonado el grupo :v`, m.chat, { mentions: conn.parseMention(`@${user.split("@")[0]}`) })
        await delay(10000)
      }
      break
  }
}

handler.command = /^(kickall)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler