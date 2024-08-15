//Codígo creado por David Chian wa.me/5351524614
import _0x386813 from 'fs';
import { v4 as _0x598b67 } from 'uuid';
const obtenerDatos = () => {
  try {
    return _0x386813.existsSync("data.json") ? JSON.parse(_0x386813.readFileSync('data.json', "utf-8")) : {
      'usuarios': {},
      'personajesReservados': []
    };
  } catch (_0x38f935) {
    console.error("Error al leer data.json:", _0x38f935);
    return {
      'usuarios': {},
      'personajesReservados': []
    };
  }
};
const guardarDatos = _0x5f4b25 => {
  try {
    _0x386813.writeFileSync("data.json", JSON.stringify(_0x5f4b25, null, 0x2));
  } catch (_0x2ddd22) {
    console.error("Error al escribir en data.json:", _0x2ddd22);
  }
};
const reservarPersonaje = (_0x317bc3, _0x25a1e6) => {
  let _0x3bdbed = obtenerDatos();
  _0x3bdbed.personajesReservados.push({
    'userId': _0x317bc3,
    ..._0x25a1e6
  });
  guardarDatos(_0x3bdbed);
};
const obtenerPersonajes = () => {
  try {
    return JSON.parse(_0x386813.readFileSync("./src/JSON/characters.json", "utf-8"));
  } catch (_0x3f5924) {
    console.error("Error al leer characters.json:", _0x3f5924);
    return [];
  }
};
let cooldowns = {};
let handler = async (_0x2a7621, {
  conn: _0x1fc67b
}) => {
  try {
    let _0x381c1c = _0x2a7621.sender;
    let _0x129cfc = new Date().getTime();
    let _0x1612e1 = cooldowns[_0x381c1c] || 0x0;
    let _0x2ce617 = _0x129cfc - _0x1612e1;
    if (_0x2ce617 < 600000) {
      let _0x196002 = 600000 - _0x2ce617;
      let _0x1d8861 = Math.floor(_0x196002 / 60000);
      let _0x54d623 = Math.floor(_0x196002 % 60000 / 0x3e8);
      let _0x3ba0af = "¡Espera un poco más para poder usar este comando!\n\n*Tiempo restante: " + _0x1d8861 + " Minutos y " + _0x54d623 + " Segundos.*";
      await _0x1fc67b.sendMessage(_0x2a7621.chat, {
        'text': _0x3ba0af
      });
      return;
    }
    const _0x44860 = () => {
      try {
        const _0x21acd6 = JSON.parse(_0x386813.readFileSync('./package.json', "utf-8"));
        if (_0x21acd6.name !== 'YaemoriBot-MD') {
          return false;
        }
        if (_0x21acd6.repository.url !== "git+https://github.com/OfcDiego/YaemoriBot-MD.git") {
          return false;
        }
        return true;
      } catch (_0x152bb6) {
        console.error("Error al leer package.json:", _0x152bb6);
        return false;
      }
    };
    if (!_0x44860()) {
      await _0x1fc67b.reply(_0x2a7621.chat, "🚩 Este comando solo está disponible para AI Yaemori.\n 🌟 https://github.com/OfcDiego/YaemoriBot-MD", _0x2a7621, rcanal);
      return;
    }
    let _0x486480 = obtenerDatos();
    let _0x3c11b5 = obtenerPersonajes();
    let _0x3a4bd8 = _0x3c11b5.filter(_0x2418c8 => !_0x486480.personajesReservados.some(_0xdbd66a => _0xdbd66a.name === _0x2418c8.name));
    if (_0x3a4bd8.length === 0x0) {
      await _0x1fc67b.sendMessage(_0x2a7621.chat, {
        'image': {
          'url': './src/completado.jpg'
        },
        'caption': "Felicidades, todos los personajes han sido obtenidos. ¡Pronto habrá más waifus para recolectar!",
        'm': _0x2a7621,
        'rcanal': rcanal
      });
      return;
    }
    const _0x9c7f59 = _0x3a4bd8[Math.floor(Math.random() * _0x3a4bd8.length)];
    const _0x35d374 = _0x598b67();
    const _0x3c209a = "╭─────┈ ♡ ┈───────\n│╽𝐅XB╽\n┆ 𝑁𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑗𝑒:\n⧁ *" + _0x9c7f59.name + "!*\n┆𝑆𝑢 𝑣𝑎𝑙𝑜𝑟 𝑒𝑠:\n│ " + _0x9c7f59.value + " 𝑊𝐹𝑐𝑜𝑖𝑛𝑠!\n╰─────┈ ◇ ┈───────\n<id:" + _0x35d374 + '>';
    await _0x1fc67b.sendMessage(_0x2a7621.chat, {
      'image': {
        'url': _0x9c7f59.url
      },
      'caption': _0x3c209a,
      'mimetype': "image/jpeg",
      'm': _0x2a7621,
      'rcanal': rcanal
    });
    reservarPersonaje(_0x381c1c, {
      ..._0x9c7f59,
      'id': _0x35d374
    });
    cooldowns[_0x381c1c] = _0x129cfc;
    console.log("Cooldown actualizado para " + _0x381c1c + ": " + cooldowns[_0x381c1c]);
  } catch (_0x34f97a) {
    console.error("Error en el handler:", _0x34f97a);
    await _0x1fc67b.sendMessage(_0x2a7621.chat, {
      'text': "Ocurrió un error al procesar tu solicitud. Intenta de nuevo más tarde."
    });
  }
};
handler.help = ["roll"];
handler.tags = ["anime"];
handler.command = ['roll', 'rw'];
handler.register = true;
export default handler;