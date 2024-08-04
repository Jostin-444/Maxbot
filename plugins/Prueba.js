import fs from 'fs'
import path from 'path'
import SpottyDL from 'spottydl'
import { youtubedl } from '@bochilteam/scraper-sosmed'
import { isUrl } from '../lib/func.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command, __dirname }) => {
        if (!text) throw m.reply(`Ejemplo: ${usedPrefix + command} ICEWHORE! (slowed)`)
        if (isUrl(text)) {
                if (/\/track\//.test(text)) {
                        try {
                                let res = await SpottyDL.getTrack(text)
                                if (typeof res !== 'object') throw m.reply('link de spotify invalido')
                                let tmp = path.join(__dirname, '../tmp')
                                let ttl = tmp+`/${res.title}.mp3`
                                fs.closeSync(fs.openSync(ttl, 'w'))
                                let anu = await SpottyDL.downloadTrack(res, tmp)
                                await conn.sendFAudio(m.chat, { [/mp3/g.test(command) ? 'document' : 'audio']: { url: ttl }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3` }, m, res.title, 'https://telegra.ph/file/2e15408ac5e72fc90bc3f.jpg', text)
                        } catch (e) {
                                console.log(e)
                                let res = await SpottyDL.getTrack(text)
                                let anu = await youtubedl('https://youtu.be/'+res.id)
                                let data = anu.audio[Object.keys(anu.audio)[0]]
                                let url = await data.download()
                                await conn.sendFAudio(m.chat, { [/mp3/g.test(command) ? 'document' : 'audio']: { url: url }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, m, anu.title, anu.thumbnail, text)
                        }
                } else if (/\/album\//.test(text)) {
                        let anu = await SpottyDL.getAlbum(text)
                        anu = anu.tracks
                        if (typeof anu !== 'object' || anu.length == 0) throw m.reply('Link de albun invalido')
                        let txt = `*Se encontro resultados de: ${anu.length}*`
                        for (let x of anu) {
                                txt += `\n\n*Nombre :* ${x.name}\n`
                                + `*Número de pista :* ${x.trackNumber}\n`
                                + `https://www.youtube.com/watch?v=${x.id}\n`
                                + `───────────────────`
                        }
                        m.reply(txt)
                }
        } else {
                let bearer = (await (await fetch('https://accounts.spotify.com/api/token', {
                        method: 'POST',
                        body: new URLSearchParams({
                                grant_type: 'client_credentials',
                                client_id: '6efa7eefe8b84b68962d9b4f93c05d5d',
                                client_secret: '368c159b66d34f01a076b73d361471f4'
                        })
                })).json()).access_token
                let anu = await (await fetch(`https://api.spotify.com/v1/search?q=${text}&type=track&limit=15&include_external=audio&access_token=${bearer}`)).json()
                anu = anu.tracks.items
                if (anu.length == 0) throw m.reply('título no encontrado.')
                let txt = `Encontre resultados para : *${text}*`
                for (let x of anu) {
                        txt += `\n\n*Título :* ${x.name}\n`
                        + `*Artista :* ${x.album.artists[0].name}\n`
                        + `*Publicado :* ${x.album.release_date}\n`
                        + `*Link Spotify:*\n${x.external_urls.spotify}\n`
                        + `${x.preview_url ? `*Link Preview :*\n${x.preview_url}\n` : ''}`
                        + `───────────────────`
                }
                await conn.sendFile(m.chat, anu[0].album.images[0].url, '', txt, m)
        }
}

handler.menudownload = ['spotify <txt>','spotifydl <url>']
handler.tagsdownload = ['downloader']
handler.command = /^(spotifydl)?(mp3|audio)?(dl|search)?)$/i

handler.premium = true
handler.limit = true

export default handler