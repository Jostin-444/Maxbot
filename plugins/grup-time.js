let handler = async ( 
   m, 
   { conn, isAdmin, isOwner, args, usedPrefix, command } 
 ) => { 
   if (!(isAdmin || isOwner)) { 
     global.dfail("admin", m, conn); 
     throw false; 
   } 
   let isClose = { 
     open: "not_announcement", 
     buka: "not_announcement", 
     on: "not_announcement", 
     1: "not_announcement", 
     close: "announcement", 
     tutup: "announcement", 
     off: "announcement", 
     0: "announcement", 
   }[args[0] || ""]; 
   if (isClose === undefined) { 
     let caption = `Contoh: .grouptime open 1
Untuk Membuka Grup Dalam Waktu 1 Jam
Dan
Contoh: .grouptime close 1
Untuk Menutup Grup Dalam Waktu 1 Jam
 `; 

     await conn.sendMessage(m.chat, { text: caption }, { 
       quoted: m, 
       mentions: await conn.parseMention(caption), 
       contextInfo: { forwardingScore: 99999, isForwarded: true }, 
     }); 
     throw false; 
   } 
   let timeoutset = (86400000 * args[1]) / 24; 
   await conn.groupSettingUpdate(m.chat, isClose).then(async (_) => { 
     m.reply( 
       `Sukses Me${isClose == "announcement" ? "nutup" : "mbuka"} Grup${ 
         args[1] ? `, Grup Akan Dibuka Setelah *${clockString(timeoutset)}*` : "" 
       }` 
     ); 
   }); 
   if (args[1]) { 
     setTimeout(async () => { 
       await conn 
         .groupSettingUpdate( 
           m.chat, 
           `${isClose == "announcement" ? "not_announcement" : "announcement"}` 
         ) 
         .then(async (_) => { 
           conn.reply( 
             m.chat, 
             `Grup Telah Di ${ 
               isClose == "not_announcement" 
                 ? "Tutup, Sekarang Hanya Admin Yang Dapat Mengirim Pesan" 
                 : "Buka, Sekarang Semua Peserta Dapat Mengirim Pesan" 
             }!` 
           ); 
         }); 
     }, timeoutset); 
   } 
 }; 
 handler.help = ["grouptime"]; 
 handler.tags = ["group"]; 
 handler.command = /^(grouptime|gctime)$/i; 
 handler.admin = true
 handler.botAdmin = true; 
 handler.group = true; 
  
 export default handler; 
  
 function clockString(ms) { 
   let h = Math.floor(ms / 3600000); 
   let m = Math.floor(ms / 60000) % 60; 
   let s = Math.floor(ms / 1000) % 60; 
   console.log({ ms, h, m, s }); 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":"); 
 }