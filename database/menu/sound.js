const sound = (prefix, ownerBot, botName) => {
        return `
「 NightBot」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: Hyouka
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *SOUND*
  │
  └─ ❏ ${prefix}tts`
}
exports.sound = sound
