const group = (prefix, ownerBot, botName) => {
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
◪ *GROUP*
  │
  ├─ ❏ ${prefix}opengc
  ├─ ❏ ${prefix}closegc
  ├─ ❏ ${prefix}promote
  ├─ ❏ ${prefix}demote
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}tagall2
  ├─ ❏ ${prefix}tagall3
  ├─ ❏ ${prefix}tagall4
  ├─ ❏ ${prefix}tagall5
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}kick
  ├─ ❏ ${prefix}listadmins
  ├─ ❏ ${prefix}linkgroup
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}welcome
  ├─ ❏ ${prefix}nsfw
  ├─ ❏ ${prefix}leveling
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}delete
  ├─ ❏ ${prefix}simih
  └─ ❏ ${prefix}ownergroup`
}
exports.group = group
