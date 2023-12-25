---
title: Kidbot
hero: ./hero.png
developer: Escape 2 Play
time: "+60min"
difficulty: 2. luokka
tags: [funktiot, lukutaidottomille]
slug: kidbot
priority: 500
links:
- title: Kidbot
  url:   https://kidbot.kiv-games.com
---

<!--
- title: iPad/iPhone (maksullinen)
  url:   https://apps.apple.com/us/app.-start/id1090682359
-->

Pelin nettiversion toimii iPadeilla ja Chromebookeilla, joten suosittelen käyttämään sitä (testatkaa toki nettiversion toimivuus laitteillanne ennen tunnin alkua). Tähän mennessä olemme opetelleet pääasiassa `toista`-silmukan käyttöä. Tässä pelissä opettelemme uuden konseption eli `funktion`.

<u>Käytämme sanoja funktio ja aliohjelma toistensa synonyymeinä.</u>

---

## Aliohjelmat eli funktiot

![](./paaohjelma.png)
*A-laatikko on `pääohjelma` eli sen sisään laitetut käskyt suoritetaan aina automaattisesti kun koodi suoritetaan (robotti liikkuu kaksi ruutua eteenpäin)*

![](./aliohjelma.png)
*B-laatikko on `aliohjelma` eli sen sisään laitettuja käskyjä ei suoriteta automaattisesti (kuvan koodi ei tee mitään)*

![](./aliohjelmakutsu.png)
*B-laatikon käskyt suoritetaan ainoastaan kun käytetään B-käskyä (kuvan koodi liikuttaa robottia kahdesti eteenpäin)*

![](./aliohjelmakutsu2.png)
*Esimerkkikoodissa on kaksi B-käskyä eli B-laatikon sisällä olevat käskyt suoritetaan kahdesti (robotti liikkuu neljä ruutua eteenpäin)*

![](./eteen_kaanny_eteen.png)
*Esimerkkikoodissa robotti liikkuu kaksi ruutua eteepäin, kääntyy oikealle ja liikkuu taas kaksi ruutua eteenpäin*

![](./funktio.png)
***Tehtävä 6:** Kentässä käytetään kahdesti B-aliohjelmaa (eli funktiota)*

![](./funktio2.png)
***Tehtävän 8:** esimerkkiratkaisu*

## Rekursio
![](./rekursio.png)
*Jos A-laatikon viimeinen käsky on A-käsky, suoritetaan A-laatikon käskyjä ikuisesti uudestaan. Tällaista kutsutaan **ikuiseksi silmukaksi** *(infinite loop)*.*

![](./rekursiokentta.jpg)
*Koska A-laatikon viimeinen käsky on A-käsky, suoritetaan A-laatikon käskyjä ikuisesti uudestaan (robotti liikkuu ikuisesti eteenpäin)*.

![](./rekursiokentta2.png)
*B-laatikon viimeinen käsky on B-käsky, joten B-laatikon käskyjä toistetaan ikuisesti. Myös A-laatikossa on oltava B-käsky, jotte B-laatikon **ikuinen silmukka** *("infinite loop")* käynnistyy*.

![](./jos-lause.png)
***Tehtävä 17**: Kentässä opitaan uusi käsite eli `jos-lause`, jota on tarkoitus opetella vasta tulevilla tunneilla. Jos joku oppilaista sattuisi tänne saakka pääsemään, voi selittää että nuoli tarkoittaa <u>"JOS eteenpäin ei voi liikkua"</u>. Ylläoleva koodi tarkoittaa siis: </br></br> 1) Mene eteenpäin </br> 2) JOS eteenpäin ei voi liikkua NIIN käänny vasemmalle </br> 3) Suorita A-käsky uudestaan </br></br> (robotti kulkee ikuisesti eteenpäin, kääntyen vasemmalle aina kun seinä tulee vastaan)*


<!--
> **Funktion määritelmä**
>
> Tässä pelissä laatikot ovat aliohjelman (eli funktion) määritelmiä. Niiden sisälle laitetut määrittämät mitä tapahtuu kun esim. A-käskyä käytetään.
>
> A-laatikko on `funktion määritelmä` (laatikon sisälle laitettavilla käskyillä määritellään mitä funktion halutaan tekevän).
>
> A-käsky  on `funktiokutsu`. Se suorittaa kaikki `funktiomääritelmän` sisällä olevat käskyt
-->

<!--
- Funktiot
- Rekursio
- Rekursiosilmukka
- "Ruvetaanpas koodaamaan" => "Oho meiltä loppuu tila" => "Tehdään tilaa siirtämällä käskyt B-laatikkoon" => *Oho mitään ei tapahdu kun suoritetaan peli* => "Ainoastaan A-laatikon koodi suoritetaan automaattisesti, jotta B-laatikon koodi suoritetaan meidän on käytettävä B-käskyä"

- Web-versio toimii mobiililaitteillakin, iOS-versio on maksullinen
- Pelatkaa niin paljon mitä yhdellä tunnilla ehditte
-->
