const palabras = [
    "gato",
    "perro",
    "pájaro",
    "elefante",
    "tigre",
    "ballena",
    "mariposa",
    "tortuga",
    "conejo",
    "rana",
    "pulpo",
    "ardilla",
    "jirafa",
    "cocodrilo",
    "pingüino",
    "delfín",
    "serpiente",
    "leon",
    "mosquito",
    "abeja",
]

const intentosMaximos = 10

const gam = new Map()

function elegirPalabraAleatoria() {
return palabras[Math.floor(Math.random() * palabras.length)]
}

function ocultarPalabra(palabra, letrasAdivinadas) {
let palabraOculta = ""
for (const letra of palabra) {
if (letrasAdivinadas.includes(letra)) {
palabraOculta += letra
} else {
palabraOculta += "_"
}}
return palabraOculta
}

function mostrarAhorcado(intentos) {
const dibujo = [
" _ _ _ _",
" |  |",
intentos < 6 ? " |  O" : " |",
intentos < 5 ? " | /" : intentos < 4 ? " | / " : intentos < 3 ? " | / \\" : intentos < 2 ? " | / \\ " : " |",
intentos < 2 ? "_|_" : " |",
]
return dibujo.slice(0, intentosMaximos - intentos).join("\n")
}

function juegoTerminado(sender, mensaje, palabra, letrasAdivinadas, intentos) {
if (intentos === 0) {
gam.delete(sender)
return `᥀·࣭࣪̇˖😏◗ 𝙋𝙚𝙧𝙙𝙞𝙨𝙩𝙚!!! 𝙡𝙖 𝙥𝙖𝙡𝙖𝙗𝙧𝙖 𝙚𝙧𝙖: "${palabra}".\n\n${mostrarAhorcado(intentos)}`
} else if (!mensaje.includes("_")) {
gam.delete(sender)
return `᥀·࣭࣪̇˖✨◗ 𝙂𝙖𝙣𝙖𝙨𝙩𝙚!!! 𝙖𝙙𝙞𝙫𝙞𝙣𝙖𝙨𝙩𝙚 𝙡𝙖 𝙥𝙖𝙡𝙖𝙗𝙧𝙖: "${palabra}".`
} else {
return `${mensaje}\n\n${mostrarAhorcado(intentos)}`
}}
let handler = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
if (gam.has(m.sender)) {
return conn.reply(m.chat, "᥀·࣭࣪̇˖🎰◗ 𝙀𝙡 𝙟𝙪𝙚𝙜𝙤 𝙩𝙤𝙙𝙖𝙫𝙞𝙖 𝙣𝙤 𝙩𝙚𝙧𝙢𝙞𝙣𝙖, 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙡𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧.", m)
}
let palabra = elegirPalabraAleatoria()
let letrasAdivinadas = []
let intentos = intentosMaximos
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
let ejemplo = `᥀·࣭࣪̇˖🎰◗ 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼𝙇 𝙅𝙐𝙀𝙂𝙊 𝘿𝙀 𝘼𝙃𝙊𝙍𝘾𝘼𝘿𝙊!!!\n\n• 𝙋𝘼𝙇𝘼𝘽𝙍𝘼:\n${mensaje}\n\n• 𝙄𝙉𝙏𝙀𝙉𝙏𝙊𝙎 𝙍𝙀𝙎𝙏𝘼𝙉𝙏𝙀𝙎:\n${intentos}`
let instrucciones = `᥀·࣭࣪̇˖❕◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙤𝙡𝙤 𝙪𝙣𝙖 𝙡𝙚𝙩𝙧𝙖 𝙦𝙪𝙚 𝙚𝙨𝙩𝙚𝙨 𝙖𝙙𝙞𝙫𝙞𝙣𝙖𝙣𝙙𝙤...`
conn.reply(m.chat, ejemplo + "\n\n" + instrucciones, m)
}

handler.before = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
let juego = gam.get(m.sender)
if (!juego) return
let { palabra, letrasAdivinadas, intentos } = juego
if (m.text.length === 1 && m.text.match(/[a-zA-Z]/)) {
let letra = m.text.toLowerCase()
if (!letrasAdivinadas.includes(letra)) {
letrasAdivinadas.push(letra)
if (!palabra.includes(letra)) {
intentos--
}
}
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
if (respuesta.includes("¡Perdiste!") || respuesta.includes("¡Ganaste!")) {
 conn.reply(m.chat, respuesta, m)
} else {
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
conn.reply(m.chat, respuesta + `\n\n᥀·࣭࣪̇˖🎰◗ 𝙄𝙣𝙩𝙚𝙣𝙩𝙤𝙨 𝙧𝙚𝙨𝙩𝙖𝙣𝙩𝙚𝙨: ${intentos}`, m)
}
} else {
let mensaje = ocultarPalabra(palabra, letrasAdivinadas);
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
conn.reply(m.chat, respuesta, m)
gam.delete(m.sender)
}
}
handler.help = ['ahorcado']
handler.tags = ['game']
handler.command = ['ahorcado']
handler.register = true
export default handler