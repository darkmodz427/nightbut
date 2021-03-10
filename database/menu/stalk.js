const stalk = (prefix, ownerBot, botName) => {
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
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk`
}
exports.stalk = stalk
