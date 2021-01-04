let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
MAN-BOT 🤖
Rec: ~HilmanMaulanaXD:)

➸ Prefix:  *「 ${_p} 」*
➸ Status: *「 Online 」*


*╔ ═〘 COMMAND 〙═╗*
🌹${_p}menu
🌹${_p}help
╚ ═════════════╝

*╔ ═〘 FUN MENU 〙╗*
🌹${_p}qr <teks>
🌹${_p}sticker (your image)
🌹${_p}bucin
╚ ═════════════╝

*╔ ═〘 INFORMATION 〙╗*
🌹${_p}ssweb <url>
🌹${_p}sswebf <url>
🌹${_p}google <pencarian>
🌹${_p}googlef <pencarian>
🌹${_p}readmore <teks>|<sembunyi>
╚═════════════╝


*╔═〘 GROUP 〙═╗*
🌹${_p}add (62xxxxxxxxxx)
🌹${_p}kick @mention
🌹${_p}promote @mention
🌹${_p}demote @mention
🌹${_p}linkgrup
🌹${_p}pengumuman <teks>
🌹${_p}hidetag <teks>
🌹${_p}listonline [groupid]
🌹${_p}grouplist

*「 EXPERIMENTAL 」*
🌹*${_p}jadibot*
[kode login jika ada / kosongin]
Jangan Lupa Scan QR

*「 Advanced 」*
> return m 'javascript eval' + m.sender

=======*「 INFO 」*=======
Coded using *Vim* on Android \\w Termux
by *@hilmanxd72*
Github: 
https://github.com/hilman-maulana72/man-bot

YouTube: 
https://www.youtube.com/c/hilmanmaulanaxd

OwNer:
*Wa.me/6289504395170*
==================
`.trim(), m)
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
