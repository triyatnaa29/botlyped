﻿const fs = require("fs-extra");

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
  return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/triyatna

Instagram: https://instagram.com/triyatna_lesmana/

Best regards, Triyatna.`;
};

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, jame, betime, blockNumber, prem, banned, cts, waver) => {
  return `
*┏━──Information Bot*
*┃*
*┃➥ Library : @open-wa/wa-automate*
*┃➥ Bot Name : ZW-BOT*
*┃➥ Whatsapp Bot Ver : 1.2.2*
*┃➥ Creator : Tytn30 and Friends*
*┃➥ Owner Number : wa.me/62895349086103*
*┃➥ Date : ${betime}*
*┃➥ Time : ${jame}*
*┃➥ Premium : ${blockNumber.length} User*
*┃➥ Banned : ${banned.length} User*
*┃➥ Block  : ${prem.length} User* 
*┃*
*┃━──Sosmed Owner*
*┃*
*┃➥ wa.me/62895349086103*
*┃➥ https://www.linkedin.com/in/triyatna/*
*┃➥ https://github.com/triyatna/*
*┃➥ https://instagram.com/triyatna_lesmana/*
*┃➥ https://www.facebook.com/tri.yatna.710*
*┃*
*┗━──────────────*

*▌│█║▌│ █║▌│█│║▌*
  
*┏━───────────────╮*
*┃➥${prefix}stc*
*┃➥${prefix}sfull*
*┃➥${prefix}autostik*
*┃➥${prefix}attp*
*┃➥${prefix}ttp*
*┃➥${prefix}stickergif*
*┃➥${prefix}sgiffull*
*┃➥${prefix}startgif*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}meme*
*┃➥${prefix}nulis*
*┃➥${prefix}quotemaker*
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}apakah*
*┃➥${prefix}bisakah*
*┃➥${prefix}infosurah*
*┃➥${prefix}surah*
*┃➥${prefix}tafsir*
*┃➥${prefix}ALaudio*
*┃➥${prefix}jsolat*
*┃➥${prefix}katakasar*
*┃➥${prefix}klasmen*
*┃➥${prefix}tiktokpic*
*┃➥${prefix}artinama*
*┃➥${prefix}cekjodoh*
*┃➥${prefix}zodiak*
*┃➥${prefix}motivasi*
*┃➥${prefix}urgay*
*┃➥${prefix}sreddit*
*┃➥${prefix}resep*
*┃➥${prefix}stalkig*
*┃➥${prefix}cuaca*
*┃➥${prefix}chord*
*┃➥${prefix}lirik*
*┃➥${prefix}whatanime*
*┃➥${prefix}aiquote*
*┃➥${prefix}doggo*
*┃➥${prefix}fakta*
*┃➥${prefix}fakboy*
*┃➥${prefix}katabijak*
*┃➥${prefix}quote*
*┃➥${prefix}brainly*
*┃➥${prefix}cerpen*
*┃➥${prefix}puisi*
*┃➥${prefix}anime*
*┃➥${prefix}kpop*
*┃➥${prefix}memes*
*┃➥${prefix}tts*
*┃➥${prefix}translate*
*┃➥${prefix}resi*
*┃➥${prefix}covidindo*
*┃➥${prefix}ceklokasi*
*┃➥${prefix}bapakfont*
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}me*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}gcinfo*
*┃➥${prefix}dewabatch*
*┃➥${prefix}howmuch*
*┃➥${prefix}mtk*
*┃➥${prefix}google*
*┃➥${prefix}ptl*
*┃➥${prefix}grupbot*
*┃➥${prefix}read*
*┃➥${prefix}getpic @tagmember*
*┃➥${prefix}santet*
*┃➥${prefix}nyenye*
*┃➥${prefix}saylist*
*┃➥${prefix}addsay*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}listbacot*
*┃➥${prefix}addbacot*
*┃➥${prefix}bacot*
*┃➥${prefix}delbacot*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}infogempa*
*┃➥${prefix}tod*
*┃➥${prefix}kbbi*
*┃➥${prefix}logoph*
*┃➥${prefix}infobmkg*
*┃➥${prefix}bucin*
*┃➥${prefix}ytsearch*
*┃➥${prefix}tahta*
*┃➥${prefix}artimimpi*
*┃➥${prefix}family100*
*┃➥${prefix}playstore*
*┃➥${prefix}shopee*
*┃➥${prefix}glitch*
*┃➥${prefix}distance*
*┃➥${prefix}emojisticker*
*┃➥${prefix}jadwalbola*
*┃➥${prefix}caklontong*
*┃➥${prefix}tebakgambar*
*┃➥${prefix}kusonime*
*┃➥${prefix}asupan*
*┃➥${prefix}stalktiktok*
*┃➥${prefix}logoff*
*┃➥${prefix}blackpink*
*┃➥${prefix}glowtext*
*┃➥${prefix}twitter*
*┃➥${prefix}quotesen*
*┃➥${prefix}gsmarena*
*┃➥${prefix}infoalamat*
*┃➥${prefix}detail*
*┃➥${prefix}findsticker*
*┃➥${prefix}imgtourl*
*┃➥${prefix}myzodiak*
*┃➥${prefix}missing*
*┃➥${prefix}stalktwit*
*┃➥${prefix}silverpb*
*┃➥${prefix}goldpb*
*┃➥${prefix}darkjokes*
*┃➥${prefix}trendingtwit*
*┃➥${prefix}githubstalk*
*┃➥${prefix}fakta2*
*┃➥${prefix}memeindo*
*┃➥${prefix}kodenuklir*
*┃➥${prefix}covid19*
*┃➥${prefix}convertduit*
*┃➥${prefix}iplocation*
*┃➥${prefix}simi*
*┃➥${prefix}simi2*
*┃➥${prefix}bot*
*┃➥${prefix}reverseword*
*┃➥${prefix}happymod*
*┃➥${prefix}shortlink*
*┃➥${prefix}stalking*
*┃➥${prefix}linknobg*
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan*
*┃➥${prefix}pinterest*
*┃➥${prefix}pinterest2*
*┃➥${prefix}raingif*
*┃➥${prefix}randomquran*
*┃➥${prefix}translate*
*┃➥${prefix}tr*
*┃➥${prefix}kisahnabi*
*┃➥${prefix}fiersa*
*┃➥${prefix}buatgrup*
*┃➥${prefix}chika*
*┃➥${prefix}afk*
*┃➥${prefix}take*
*┃➥${prefix}sgifwm*
*┃➥${prefix}addstiker*
*┃➥${prefix}delstiker*
*┃➥${prefix}liststiker*
*┃➥${prefix}addvn*
*┃➥${prefix}delvn*
*┃➥${prefix}listvn*
*┃➥${prefix}addimg*
*┃➥${prefix}delimg*
*┃➥${prefix}listimg*
*┃➥${prefix}shitposting*
*┃➥${prefix}stalkyt*
*┃➥${prefix}ayatkursi*
*┃➥${prefix}quotesislam*
*┃➥${prefix}doaharian*
*┃➥${prefix}postig*
*┃➥${prefix}kalender*
*┃➥${prefix}bioskop*
*┃➥${prefix}infoloker*
*┃➥${prefix}luassegitiga*
*┃➥${prefix}kelsegitiga*
*┃➥${prefix}luaspersegi*
*┃➥${prefix}kelpersegi*
*┃➥${prefix}kuadrat*
*┃➥${prefix}kubik*
*┃➥${prefix}perkalian*
*┃➥${prefix}jadwaltvnow*
*┃➥${prefix}jadwaltv*
*┃➥${prefix}randomkpop*
*┃➥${prefix}arrowsigns*
*┃➥${prefix}rcitacita*
*┃➥${prefix}ceritahorror*
*┃➥${prefix}wanted*
*┃➥${prefix}triggered*
*┃➥${prefix}burn*
*┃➥${prefix}trash*
*┃➥${prefix}stickerline*
*┃➥${prefix}readmore*
*┃➥${prefix}3dphoto*
*┃➥${prefix}pensil*
*┃➥${prefix}pensil2
*┃➥${prefix}lolivid*
*┃➥${prefix}ppcp*
*┗━───────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜Movie & Streaming ⌟:

*┏━───────────────╮*
*┃➥${prefix}lk21*
*┃➥${prefix}lk21new*
*┃➥${prefix}lk21comingsoon*
*┃➥${prefix}lk21seriestv*
*┃➥${prefix}lk21genre*
*┃➥${prefix}lk21negara*
*┃➥${prefix}movie*
*┃➥${prefix}filmapik*
*┃➥${prefix}filmkat*
*┃➥${prefix}filmapiknew*
*┃➥${prefix}doramaindo*
*┃➥${prefix}drakorindo*
*┃➥${prefix}youwatch*
*┃➥${prefix}playapik*
*┃➥${prefix}film*
*┗━───────────────╯*


*▌│█║▌│ █║▌│█│║▌*

⌜Downloader & Media ⌟:

*┏━───────────────╮*
*┃➥${prefix}fb*
*┃➥${prefix}ytdl*
*┃➥${prefix}fb2*
*┃➥${prefix}ig*
*┃➥${prefix}ig2*
*┃➥${prefix}igstory*
*┃➥${prefix}play*
*┃➥${prefix}play2*
*┃➥${prefix}tiktok*
*┃➥${prefix}tiktok2*
*┃➥${prefix}tiktok3*
*┃➥${prefix}tiktoknowm*
*┃➥${prefix}tiktokaudio*
*┃➥${prefix}ytmp3*
*┃➥${prefix}ytmp4*
*┃➥${prefix}twitter*
*┃➥${prefix}joox*
*┃➥${prefix}tomp3*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜A̶n̶i̶m̶e̶ ⌟ツ:

*┏━───────────────╮*
*┃Dikarenakan aga Sensitif*
*┃Hubungi Owner untuk*
*┃Menu Private*
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜I̶m̶a̶g̶e̶s̶ ⌟:

*┏━───────────────╮*
*┃➥${prefix}ameliandani*
*┃➥${prefix}pictcogan*
*┃➥${prefix}pictcecan*
*┃➥${prefix}aesthetic*
*┃➥${prefix}images*
*┃➥${prefix}pinimg*
*┃➥${prefix}rbts*
*┃➥${prefix}rexo*
*┃➥${prefix}rblackpink*
*┃➥${prefix}wallhd*
*┃➥${prefix}wallprogramming*
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜t̶e̶n̶t̶a̶n̶g  ̶b̶o̶t̶ ⌟:


*┏━───────────────╮*
*┃➥${prefix}tnc*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot*
*┃➥${prefix}join*
*┃➥${prefix}reportbug*
*┃➥${prefix}runtime*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜Owner Bot⌟:

*┏━───────────────╮*
*┃➥${prefix}ban* <reply msg member>
*┃➥${prefix}pban* <nomor>
*┃➥${prefix}punban* <nomor>
*┃➥${prefix}unban* <reply msg member>
*┃➥${prefix}deleteban*
*┃➥${prefix}oaddprem*
*┃➥${prefix}odelprem*
*┃➥${prefix}bc* 
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall* 
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┃➥${prefix}addcogan*
*┃➥${prefix}addcecan*
*┃➥${prefix}delallstik*
*┃➥${prefix}delallvn*
*┃➥${prefix}delallimg*
*┃➥${prefix}oblock* <reply pesan member>
*┃➥${prefix}block*  <nomor>
*┃➥${prefix}unblock* <reply pesan member>
*┃➥${prefix}unblocked* <nomor>
*┃➥${prefix}deleteleft*
*┃➥${prefix}deletewelcome*
*┃➥${prefix}listleft*
*┃➥${prefix}listwelcome*
*┗━───────────────╯*

*┏━──Contributors*
*┃*
*┃➥ Thoriq Azzikra*
*┃➥ Arugazz*
*┃➥ Triyatna*
*┃➥ AlvioAdjiJanuar*
*┃*
*┗━──────────────*

*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Runtime: ${cts}*
*┃➥WA Version: ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*

Thank's y'all for use to BOT-ZW
`;
};
exports.help = help;

const admin = (prefix) => {
  return `
⚠ [ *Admin Group Only* ] ⚠
*${prefix}mute*
*${prefix}unmute*
*${prefix}welcome*
*${prefix}left*
*${prefix}add*
*${prefix}kick* <reply pesan orang yang ingin dikick>
*${prefix}pkick* <tag member yang ingin dikick>
*${prefix}promote* @tag
*${prefix}opromote* <reply pesan yang ingin dipromote>
*${prefix}odemote* <reply pesan yang ingin didemote>
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon*
*${prefix}revoke link gc*
*${prefix}setgroupname*
*${prefix}resend*
*${prefix}antilink on/off*
*${prefix}edotensei*
*${prefix}oedotensei* <reply pesan member>
*${prefix}inv* <reply pesan member>
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`;
};
exports.admin = admin;

exports.textDonasi = () => {
  return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.
dan ada fitur premium karena api nya juga ada yang beli hehehe...

Pulsa : 0895349086103

OVO : 0895349086103

Terimakasih. -Tytn30`;
};

exports.kodebahasa = () => {
  return `
Kode Bahasa : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`;
};

exports.kodenuklir = () => {
  return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`;
};
