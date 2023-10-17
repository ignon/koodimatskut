---
title: RodoCodo
developer: rodocodo Ltd
time: "+60min"
difficulty: 2. luokka
priority: 400
hero: hero.png
tags: [toista, funktiot, lukutaidottomille]
slug: rodocodo
numbered_links: false
links:
- title: Nettiversio
  url:   https://game.rodocodo.com/hour-of-code/
- title: iPad/iPhone
  url:   https://apps.apple.com/us/app/rodocodo-code-hour/id1597648605
- title: Android
  url:   https://play.google.com/store/apps/details?id=com.rodocodo.codehour
---

**Huom:** Käskypalikoiden raahaaminen ei toimi jostain syystä nettiversiossa kosketusnäytöllä. Käyttäkää nettiversiota ainoastaan hiiren kanssa tai ladatkaa mobiiliversio.


> ### Tietosuoja
> Kirjoitushetkellä (18.10.2023) pelin datankeruusta mainitaan mobiilialustoilla:
> - **App Store**: Data Not Collected: The developer does not collect any data from this app.
> - **Play Store**: No data collected. No data shared with third parties.



---

![Part 1 ja Part 2](./robocodo_selection.png)
*Pelin alussa pelaajan on valittava kummasta vaikeustasosta haluaa aloittaa. Suosittelen aloittamaan **Part 1**:llä (jonka loppupään tehtävissä on kyllä haastetta isommillekin). Nopeimmat saavat sen luultavimmin tehtyä ja voivat siirtyä **Part 2**:n tehtäviin. Jos kaikki aloittavat Part 2:sta, riskinä on että harjoitukset ovat osalle liian vaikeita ja nopeimmat saavat tehtyä ne hetkessä ja heille pitää keksiä lisätehtäviä.*


**Huom:** Pelin Part 2 -osiossa harjoitellaan myös funktioiden käyttöä. Harjoittelemme funktioiden käyttöä enemmän tulevissa harjoituksissa, joten ei haittaa jos/kun suurin osa oppilaista ei niihin saakka todennäköisimmin ehdi. Kannattaa varautua kuitenkin selittämään funktioiden konsepti nopeimmille oppilaille lukemalla tämän ohjeistuksen alaotsikko **Part 2: Funktiot**.

**Huom:** Suosittelen koittamaan peliä ennen esimerkkiratkaisuiden lukemista, sillä käytännön oppiminen on parasta oppimista.


# Part 1:n esimerkkiratkaisuja
Robocodo on sivuston listaamista koodauspeleistä haastavimpia hahmottaa, joten olen listannut tänne esimerkkiratkaisut vaikeimpiin tehtäviin:


![Jumikenttä](./jumikentta.png)
*Tähän kenttään jää jumiin suurin osa oppilaista. Tärkeintä on tajuta, että ensin on kerättävä kaksi lähintä kolikkoa ja sitten palattava puun viereiselle teleportille, ei alanurkassa olevalle.*


![Bugienkorjaus](./buggy_code.png)
***Buggy code** (buginen koodi) -osuudessa oppilaalle annetaan valmiiksi tehtyä, virheellistä koodia, joka hänen on korjattava järjestelemällä käskyt oikein. Tämä on jonkin verran haastava osuus sillä oppilas voi vahingossa raahata tarvittavan käskyn pois koodialueelta, jolloin se tuhoutuu ja <u>kenttä on aloitettava alusta (painamalla roskiskuvaketta koodin oikealla puolella). Oppilas ei välttämättä tajua tätä.</u>*


## Part 1: Silmukat

![Silmukat 1](./silmukat.png)
*Silmukkatehtävissä on tärkeää hahmottaa kentän toistuva osuus. Tässä kentässä pitää kolmesti kävellä ylös teleportilla (ja napata kolikko matkalla)*

![Silmukat 2](./silmukat2.png)
*Tässä tehtävässä on kolme kahden kolikon rypästä eli koodin on toistettava kolmesti käyttäen `toista`-silmukkaa.*

![Silmukat 3](./silmukat3.png)
*Tässä tehtävässä on neljä identtistä saareketta, joten on käytettävä `toista` silmukkaa*

![Silmukat 4](./silmukat4.png)
*Tässä kentässä jokaisen silmukan alussa on käännyttävä. Kenttä koostuu kolmesta L-kirjaimen muotoisesta osasta, jotka pitää kulkea.*

---

# Part 2: Funktiot eli aliohjelmat

---

> ### Funktiot
> Käy katsomassa seuraavien <u>Kidbot</u> ja <u>AlgoRun</u> pelien opettajan materiaalit, jos haluat yksityiskohtaisemman selityksen miten funktiot (eli aliohjelmat) toimivat.

![Funktiot 1](./funktiot.png)
*Aina kun `F`-käsky suoritetaan, <u>Function</u>-laatikon sisällä olevat käskyt suoritetaan. Tässä esimerkissä `F`-käsky liikuttaa kissaa kaksi ruutua eteenpäin ja kerää kolikon.*

![Funktiomäärittely](./funktiomaarittelu.jpg)
*Funktiolaatikon sisällä on käskyt <u>eteen, eteen, kolikko</u>*


![funktiokutsu](./funktiokutsut.jpg)
*Nyt jokaisen `F`-käskyn kohdalla suoritetaan <u>Function</u>-laatikon käskyt eli <u>eteen, eteen, kolikko</u>*



## Part2: Lisää funktiotehtävien ratkaisuita

![Funktiot 2](./funktiot2.png)

![Funktiot 3](./funktiot3.png)

---
## Part 2: Monimutkainen silmukkatehtävä
![part2 silmukat](./part2_silmukat.png)
