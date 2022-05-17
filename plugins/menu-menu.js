import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*𝙷𝙾𝙻𝙰 ✨${name}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴  ixxi - 𝙱𝙾𝚃*
╭──────────ꕥ
* 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*

* 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*

* 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
╰─────────✾
╭─────────ꕥ
├─𝕁𝕌𝔼𝔾𝕆𝕊
├─Ejemplo:
├─.puto @sebastian
├─ ❏ ${usedPrefix}mates
├─ ❏ ${usedPrefix}ppt *<papel / tijera /piedra>*
├─ ❏ ${usedPrefix}prostituto
├─ ❏ ${usedPrefix}prostituta 
├─ ❏ ${usedPrefix}gay2
├─ ❏ ${usedPrefix}puto
├─ ❏ ${usedPrefix}pajera
├─ ❏ ${usedPrefix}pajero
├─ ❏ ${usedPrefix}lesbiana
╰─────────✾

╭────ꕥ
┃ *REPORTA FALLOS DE COMANDOS*
┃ *Reporta cualquier comando que falle*   
┃ *para poder solucionarlo*
╰─────✾
╭──────ꕥ
├─ ❏ .bug *tal comando con fallas*
├─ ❏ .report *tal comando con fallas*
├─ ❏ .reporte *tal comando con fallas*
╰───────✾
╭────────ꕥ
┃ *NÚMERO DEl PROPIETARIO*
├─ ❏ .owner
├─ ❏ .contacto
╰──────────✾
╭─────────ꕥ
┃ *UNE UN BOT A TU GRUPO*
╰───────✾
╭──────────ꕥ
├─ ❏ .join *enlace del grupo*
├─ ❏ .unete *enlace del grupo* 
├─ ❏ .bots *ver bots*
╰──────────✾
╭───────ꕥ
┃ *TOPS*
╰────────✾
╭────────ꕥ
├─ ❏ .top10gays 
├─ ❏ .toplind@s 
├─ ❏ .topput@s
├─ ❏ .toppajer@s 
├─ ❏ .topotakus 
╰─────────✾
╭───────────ꕥ
┃ 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ
╰──────────✾
╭──────────ꕥ
├─ ❏ ${usedPrefix}enable *welcome*
├─ ❏ ${usedPrefix}disable *welcome*
├─ ❏ ${usedPrefix}enable *modohorny*
├─ ❏ ${usedPrefix}disable *modohorny*
├─ ❏ ${usedPrefix}enable *antilink*
├─ ❏ ${usedPrefix}disable *antilink*
├─ ❏ ${usedPrefix}enable *antilink2*
├─ ❏ ${usedPrefix}disable *antilink2*
├─ ❏ ${usedPrefix}enable *detect*
├─ ❏ ${usedPrefix}disable *detect*
├─ ❏ ${usedPrefix}enable *audios*
├─ ❏ ${usedPrefix}disable *audios*
├─ ❏ ${usedPrefix}enable *autosticker*
├─ ❏ ${usedPrefix}disable *autosticker*
╰─────────✾
╭─────────ꕥ
┃ *DESCARGAS*
╰───────────✾
╭──────────ꕥ
├─ ❏ .imagen | image | gimage *texto*
├─ ❏ .ytsearch *texto*
├─ ❏ .dlaudio *link yt*
├─ ❏ .dlvid *link yt*
├─ ❏ .ytmp3 *link yt*
├─ ❏ .ytmp4 *link yt*
├─ ❏ .play *titulo del audio*
├─ ❏ .play2 *titulo del vide*
├─ ❏ .play3 *titulo del audio/video*
├─ ❏ .play6 *artista y titulo*
├─ ❏ .letra *nombredelacanción*
├─ ❏ .google *texto*
├─ ❏ .googlef *texto*
╰───────────✾
╭─────────ꕥ
┃ 𝔾ℝ𝕌ℙ𝕆𝕊 
╰─────────✾
╭────────ꕥ
├─ ❏ .admins *texto* 
├─ ❏ .añadir *numero*
├─ ❏ .sacar @tag 
├─ ❏ .promote
├─ ❏ .demote
├─ ❏ .grupo *abierto / cerrado*
├─ ❏ .enable delete
├─ ❏ .disable delete
├─ ❏ .link
├─ ❏ .hidetag *texto*
├─ ❏ .infogrupo
├─ ❏ .invocar *texto*
├─ ❏ .del 
├─ ❏ .fantasmas
├─ ❏ .banchat
├─ ❏ .unbanchat
╰─────────✾
╭───────ꕥ
┃ *CREADORES*
╰────────✾
╭─────────ꕥ
├─ ❏ s
├─ ❏ ${usedPrefix}toimg 
├─ ❏ ${usedPrefix}tomp3 
├─ ❏ ${usedPrefix}toptt 
├─ ❏ ${usedPrefix}tovideo 
├─ ❏ ${usedPrefix}tourl 
├─ ❏ ${usedPrefix}tts 
╰────────────✾
╭──────────ꕥ
┃ *ESTILOS DE TEXTOS*
┃ *¡Una gran variedad de estilos de textos!*
╰──────────✾
╭──────────ꕥ
├─ ❏ .style *texto*
├─ ❏ .estilo *text*
╰────────✾
╭────────ꕥ
┃ *SUBIR ESTADOS A IXXI BOT*
┃ *¡Sube estados!*
╰─────────✾
╭─────────ꕥ
├─ ❏ .subirestado 
╰──────────✾
╭──────────ꕥ
┃ *COMANDOS +18*
┃
┃ *NO nos hacemos responsables*
╰─────────✾
╭────────ꕥ
├─ ❏ .labiblia
╰──────────✾
╭───────ꕥ
┃ *EFECTOS PARA AUDIOS*
╰───────✾
╭────────ꕥ
├─🎤 ${usedPrefix}bass
├─🎤 ${usedPrefix}blown
├─🎤 ${usedPrefix}deep
├─🎤 ${usedPrefix}earrape
├─🎤 ${usedPrefix}fast
├─🎤 ${usedPrefix}fat
├─🎤 ${usedPrefix}nightcore
├─🎤 ${usedPrefix}reverse
├─🎤 ${usedPrefix}robot
├─🎤 ${usedPrefix}slow
├─🎤 ${usedPrefix}smooth
├─🎤 ${usedPrefix}tupai
╰────────✾

╭─────────ꕥ
┃ *CHAT ANONIMO*
╰────────✾
╭───────ꕥ
├─ ❏ .start
├─ ❏ .next
├─ ❏ .leave
╰─────────✾

╭───────────ꕥ
┃ 𝔸𝕌𝔻𝕀𝕆𝕊
╰───────────✾
╭──────────ꕥ
├─ Quien es tu sempai botsito 7w7
├─ Te diagnostico con gay
├─ nadie le importa
├─ Fiesta del admin
├─ Fiesta del administrador
├─ Vivan los novios
├─ Feliz cumpleaños
├─ Noche de paz
├─ Buenos dias
├─ Viernes
╰──────────✾
╭────────────ꕥ
┃𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸
╰────────────✾
╭───────────ꕥ
├─ ${usedPrefix}balance
❏ ${usedPrefix}claim
❏ ${usedPrefix}top
❏ ${usedPrefix}levelup
❏ ${usedPrefix}myns
❏ ${usedPrefix}perfil
❏ ${usedPrefix}work
❏ ${usedPrefix}minar
❏ ${usedPrefix}buy
❏ ${usedPrefix}buyall
❏ ${usedPrefix}transfer *<tipo> <cantidad> <@tag>*
❏ ${usedPrefix}verificar
├─${usedPrefix}unreg *<numero de serie>
╰───────────✾
╭────────────ꕥ
┃ 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊
╰─────────────✾
╭───────────ꕥ
👑 ${usedPrefix}enable *restrict*
👑 ${usedPrefix}disable *restrict*
👑 ${usedPrefix}enable *autoread*
👑 ${usedPrefix}disable *autoread*
👑 ${usedPrefix}enable *public*
👑 ${usedPrefix}disable *public*
👑 ${usedPrefix}enable *pconly*
👑 ${usedPrefix}disable *pconly*
👑 ${usedPrefix}enable *gconly*
👑 ${usedPrefix}disable *gconly*
👑 ${usedPrefix}banchat2
👑 ${usedPrefix}unbanchat2
👑 ${usedPrefix}banuser *<@tag>*
👑 ${usedPrefix}unbanuser *<@tag>*
👑 ${usedPrefix}banuser *<@tag>*
👑 ${usedPrefix}bc *<texto>*
👑 ${usedPrefix}bcchats *<texto>*
👑 ${usedPrefix}bcgc *<texto>*
👑 ${usedPrefix}cleartpm
👑 ${usedPrefix}restart
👑 ${usedPrefix}update
👑 ${usedPrefix}addprem *<@tag>*
👑 ${usedPrefix}delprem *<@tag>*
👑 ${usedPrefix}listprem
👑 ${usedPrefix}añadirdiamantes *<@tag> <cantidad>*
👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/ixi666/Bot-2', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
[' 𝙳𝙾𝙽𝙰𝚁 ', '/donasi'],
[' 𝙾𝚆𝙽𝙴𝚁 ', '/owner'],
[' 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 ', '/infobot']
], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
