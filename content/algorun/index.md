---
title: AlgoRun
hero: hero2.jpg
developer: Bitcrumbs
time: "+60min"
difficulty: 2. luokka
tags: [funktiot, lukutaidottomille]
slug: algorun
priority: 550
links:
- title: iPad/iPhone
  url:   https://apps.apple.com/us/app/algorun-learn-to-code/id1517210466
- title: Android
  url: https://play.google.com/store/apps/details?id=com.bitcrumbs.AlgoRunFree&hl=en&gl=US
---


Lisää funktioiden treenausta. Pelin kaksi ensimmäistä osaa (*Basics* ja *Functions*) ovat ohjeistettuna ekaluokkalaistenkin läpäistävissä.  Pelin kolmannen osan (*Recursion*) viimeiset kentät ovat hyvin vaikeita ja vaativat enemmän hahmottamis- kuin koodauskykyjä eli ei kannata olettaa että oppilaat pääsisivät niitä läpi. Tekemistä pitäisi silti riittää tunniksi ennen tehtävien muuttumista liian vaikeiksi.

Youtubesta löytyy [esimerkkiratkaisut rekursio-osion tehtäviin](https://www.youtube.com/watch?v=So8DZuzY2JA&ab_channel=asclimcatch).

> **Huom**: Peli toimii vain mobiililaitteilla, jos sellaisia ei ole käytössä niin suosittelen pelaamaan **Rodocodo**-pelin **Part 2**-osion, jossa harjoitellaan funktioita.

<!--
NOTES: Rekursio-osiossa on mahdotonta selittää käytännön esimerkeillä rekursin ja infinite loopin eroa, sillä pelissä ei ole lopetusehtoja rekursiolle.
-->

<!-- ![](/algorun/aliohjelma_4.jpg)
![](/algorun/kaskysarjat.jpg)
---

# Aliohjelmat eli funktiot

![](/algorun/paaohjelma.jpg)
***F1**-rivi on `pääohjelma` eli sen sisään laitetut käskyt suoritetaan aina automaattisesti kun koodi suoritetaan (robotti liikkuu kaksi ruutua eteenpäin)*

![](/algorun/aliohjelma.jpg)
***F2**-rivi on `aliohjelma` eli sen sisään laitettuja käskyjä ei suoriteta automaattisesti (kuvan koodi ei tee mitään)*

![](/algorun/aliohjelmakutsu.jpg)
***F2**-rivin käskyt suoritetaan ainoastaan kun käytetään **F2**-käskyä (kuvan koodi liikuttaa robottia kahdesti eteenpäin)*

![](/algorun/aliohjelmakutsu-2.jpg)
*Pääohjelmassa on kaksi **F2**-käskyä eli **F2**-rivillä olevat käskyt suoritetaan kahdesti (robotti liikkuu neljä ruutua eteenpäin)*

![](/algorun/aliohjelmakutsu-3.jpg)
*Esimerkkikoodissa robotti liikkuu kaksi ruutua eteepäin, kääntyy oikealle ja liikkuu taas kaksi ruutua eteenpäin*

![](/algorun/functions-1.jpg)
*Functions-maailman 1. tehtävä*

<!-- ![](/algorun/functions-3.jpg) -->
![](/algorun/functions-3-uncomplete.jpg)
*Jos opettajalla on kiire usean oppilaan auttamisessa, joskus on nopeinta koodata aliohjelmat oppilaan puolesta ja palata myöhemmin katsomaan onko oppilas saanut kentän läpäistyä aliohjelmia käyttäen. Miten **F1**- ja **F2**-aliohjelmia pitäisi käyttää kentän läpäisemiseksi?*

# Rekursio-osion ratkaisut
![](/algorun/recursion-1.jpg)
*Jos **F1**-rivin lopussa on **F1**-käsky, suoritetaan **F1**-rivin käskyjä ikuisesti uudestaan. Tällaista kursutaan **ikuiseksi silmukaksi** *(infinite loop)*. Kuvan robotti liikkuu ikuisesti eteenpäin.*
![](/algorun/recursion-2.jpg)
*Robotti mutkittelee eteenpäin yksi "porras" kerrallaan rekursion avulla.*
![](/algorun/recursion-3.jpg)
![](/algorun/recursion-4.jpg)
<!--![](/algorun/recursion-5.jpg)-->
![](/algorun/recursion-5-uncomplete.jpg)
*Mitenköhän `F1` ja `F2`-käskyjä pitäisi käyttää kentän läpäisemiseksi?*
![](/algorun/recursion-6.jpg)
![](/algorun/recursion-7.jpg)
![](/algorun/recursion-8.jpg)
*<u>Rekursio-osan 9. kenttä</u> on jo hyvin kryptinen eikä kukaan oppilaistani ole läpäissyt tätä itsenäisesti.*
![](/algorun/recursion-9.jpg)
