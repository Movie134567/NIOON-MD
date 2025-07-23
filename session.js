//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0thNEp3eEYxTEVTYXdWYkliNXY2cGJPQ3IxcmwzOFI2clRQbjlxbFdWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjgzSFlZdmhudEZWdzJUMWg0L1NBaDZtSUc2cUk3a2thUlk0WEFnVGdoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRlFEMEU1ZUd1SmJyU0UydHpBTFIrdlBjMjBLTG4yUFQ5Q1o5RWZmQ2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6MDlrS1krV1VCcGtKUUxDcG5FakFoTm9vS1k0RS9PSTRzNjV0d1JEYno4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QSHJ2ZC8wYXlrOFZIb3o1c0w4R2wyS2hpZ1pCbm54V0lDeEF4RUFDMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZvb2hBUHRNQVBGbWhPZVk5YnlmQ3NVbFJRMnpBYTgvSmI3RWdtRlpWWGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVvQ2F3UzErNGVqakdxR2tQOEUxOVNmVFZibDBRQVZGMVBsMDJGRnBHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0hYU3lLMEpMdXJSUHRjdktkZGp5eFpWWnVkeVFIYmQ4YTBKR0FoNlp4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQc1lyWlVKL0xmaTdHeDZZNjlnZmVYWlhER2FmdWU4ckxpQkdGY2xpc2N6VjQ2K2xHU1luY0JSWXlvT3c0cjN0bjhTQ1JwejlYK2VwMEF2NW1sQmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IllUUXhUZW9WMlJkeTk5eEk5SDJqK0luN2NKOFQ5V1NtYXNCY1ZYRzRFNEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVrWEZ5YzItUmVlS0hnZHRKVzNBWFEiLCJwaG9uZUlkIjoiYTZhNzZkMDItODViNS00NmJkLTgxNmEtM2ZhY2MyMTA2Zjc1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndkYld6UmJQcjJvcnphdmJvU083WS9CWFB0Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUTBhY2dIbUhJVTdQR0hwMjFNcW9FSStlalE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDU3SFJRNVEiLCJtZSI6eyJpZCI6Ijk0NzUzNDAwNTM2OjczQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU4NjYxMDQxMjI5ODU5OjczQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVhzdkpnSEVJbmhnY1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNzVuRGVQZTN2ZFNLWkFZTTg5bFZibUsxczFYbjhRQUZlUVJkVExuNnBCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWFArSVdJVWhCUTVYZlhETUZIS0toRndxWE8xVmRYN0tNaTVVMFVUNEtFR094QUtTS3J0ZllxU2lIY3kvMm5XMWN3TFh3NVpKcjBnNGtSMzZ4c1ZWQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkFFWmtka1pHR3JESlBMaHlrU2lZMDduL2g0VjJQMndpRmNjOHoyZVFqV1ROUXUxR21KdWpQaGdhSG52OUNWQWhxU2Qrc2J6ZkRncTYyL1FQRGZiVWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTM0MDA1MzY6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZStadzNqM3Q3M1VpbVFHRFBQWlZXNWl0Yk5WNS9FQUJYa0VYVXk1K3FRVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMjQ3ODk5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729458513", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "vxepmYeGzf0Kb4eROWcmsgNcJhlFST3A6ojO",
  USERNAME: "Movie134567",
  REPO_NAME: "NIOON-MD",
};
