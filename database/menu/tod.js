const tod = (prefix, ownerBot, botName) => {
        return `
「 NightBot 」

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
◪ *TOD*
  │
  ├─ ❏ ${prefix}trust
  └─ ❏ ${prefix}dare`
}
exports.tod = tod
