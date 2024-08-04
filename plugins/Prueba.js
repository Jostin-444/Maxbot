let { MessageType } = (await import('@whiskeysockets/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.wm

let caption = `
▧ Pico 
▧ Armadura
▧ Espada

*❏ Materiales necesitados*
▧ Pico 
〉 10 madera
〉 5 roca
〉 5 hierro
〉 20 cuerda

▧ Espada 
〉 10 Madera 
〉 15 Hierro

▧ Armadura 
〉 30 hierro
〉 1 esmeralda
〉 5 diamante


Nota:
Si quieres craftear
*Escribe .craft (el artículo que deseas crear)*
Ejemplo:
*.craft pico*
Asegúrate de tener los ingredientes
`
  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pico':
          if (user.pickaxe > 0) return m.reply('Ya tienes esto')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return m.reply(`¡No hay suficientes cosas!\nPara hacer un pico. Necesitas : \n10 madera\n5 hierro\n20 cuerda\n5 roca`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 5
            user.rock -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            m.reply("Hizo con éxito 1 pico")
            break
           case 'espada':
          if (user.sword > 0) return m.reply('Ya tienes esto')
            if(user.wood < 10 || user.iron < 15) return m.reply(`Ta falta items!\nItems necesarios:\n10 madera\n15 hierro`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            m.reply("Se creo 1 espada")
            break
          case 'armadura':
          if (user.armor > 0) return m.reply('Ya tienes esto')
            if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return m.reply(`¡No hay suficientes cosas!\nPara hacer una armadura. Necesitas :\n30 Hierro \n1 Esmeralda\n5 Diamantes`)
            global.db.data.users[m.sender].emerald -= 1
            global.db.data.users[m.sender].iron -= 30
            global.db.data.users[m.sender].diamond -= 5
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            m.reply("1 armadura elaborada con éxito ")
            break


          default:
            return await conn.reply(m.chat, caption, m)
        }
    } else if (/encantar|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.reply(m.chat, caption, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)/i
handler.register = true
export default handler