const music = (prefix, ownerBot, botName) => {
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
◪ *MUSIC*
  │
  ├─ ❏ ${prefix}play
  ├─ ❏ ${prefix}joox
  ├─ ❏ ${prefix}lirik
  └─ ❏ ${prefix}chord`
}
exports.music = music
