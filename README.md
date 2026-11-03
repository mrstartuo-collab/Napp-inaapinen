# Näppäinaapinen

Maksuton, selaimessa toimiva kirjain- ja näppäinleikki lapsille. Ei asennuksia, ei kirjautumista, ei mainoksia eikä ostoja. Toimii tietokoneella, Chromebookilla ja tabletilla, ja kotivalikkoon lisättynä myös ilman verkkoyhteyttä.

!\[Näppäinaapisen kuvake](icon-192.png)

## Pelitilat

|Tila|Kenelle|Mitä tehdään|
|-|-|-|
|**Vapaa leikki**|4–6-vuotiaat|Jokainen näppäin tuo ruudulle kirjainpalikan, kuvan ja tavutetun sanan (”au·to”). Numerot näyttävät lukumäärän. Tavoitteena löytää kaikki 29 kirjainta.|
|**Etsi kirjain**|5–8-vuotiaat|Ruudulla näkyy kirjain, joka etsitään näppäimistöltä. Puhe kysyy alkuäännettä: ”Millä kirjaimella alkaa auto?”|
|**Kirjoita sana**|2.–4. luokka|30, 60 tai 90 sekunnin kierros. Viisi tasoa (lyhyet sanat → ä ja ö → tuplakirjaimet → pitkät sanat → kahden sanan lauseet) tai opettajan **viikon sanat**. Sanat näytetään tavuina. Haamuauto ajaa oman ennätyksen tahtia.|
|**Lumisade**|1.–4. luokka|Kirjaimet tai sanat sataa hiutaleina. Kirjoita ne ennen kuin ne osuvat maahan. Kultahiutale antaa sydämen takaisin.|
|**Sormikoulu**|3. luokasta alkaen|Kymmensormijärjestelmä 15 oppitunnissa: perusrivi, kaikki kirjaimet, isot kirjaimet ja Shift, välimerkit sekä numerot. Kädet näyttävät, mikä sormi painaa seuraavan näppäimen. Mukana minuutin kirjoitustesti ja edistymiskäyrä.|

Lisäksi: merkit, yllätystarrat, tähdet, dynamiitti pitkästä putkesta, diplomi, taukomuistutus 10 minuutin välein ja jakonäkymä QR-koodilla.

## Aikuisille-osio

Valikko → **Aikuisille**. Osio avautuu, kun aikuinen vastaa kertolaskuun, jotta pienet eivät päädy asetuksiin vahingossa.

* **Viikon sanat:** kirjoita enintään 40 sanaa (tai kahden sanan ilmausta). Ne tulevat Kirjoita sana- ja Lumisade-tiloihin. *Jaa luokalle* tekee listasta linkin ja QR-koodin.
* **Asetukset:** tavut, sormivärit, puhe (jos laitteessa on suomenkielinen ääni), sanakierroksen pituus ja lumisateen vauhti.
* **Pelaajat:** nimien ja tulosten poistaminen tältä laitteelta.

### Sanalista linkissä

Linkin muoto on

```
https://käyttäjänimi.github.io/nappainaapinen/?lista=Viikko%2045\&sanat=kissa,koira,kynä
```

Kun oppilas avaa linkin, lista tallentuu hänen laitteelleen ja on valmiina Kirjoita sana -tilassa.

## Tiedostot

|Tiedosto|Tarkoitus|
|-|-|
|`index.html`|Itse peli (kaikki yhdessä tiedostossa)|
|`manifest.webmanifest`|Nimi ja kuvakkeet, kun peli lisätään kotivalikkoon|
|`sw.js`|Offline-tuki|
|`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`|Kuvakkeet|
|`sormikartta.html`, `sormikartta.pdf`|Tulostettava sormikartta (A4 vaaka)|
|`OPETTAJALLE.md`|Ohje opettajalle tai vanhemmalle|



## Tietosuoja

Nimet, tulokset, merkit, tarrat, testitulokset ja viikon sanat tallentuvat vain kyseisen laitteen selaimeen (localStorage). Mitään ei lähetetä palvelimelle. Pelaajat voi poistaa kohdasta **Hallitse pelaajia**. Selaimen tietojen tyhjentäminen poistaa myös pelin tiedot.

Ulkoiset lataukset: Google Fonts (fontit) ja cdnjs (QR-koodikirjasto, ladataan vain kun jakonäkymä avataan).

## Muokkaaminen

Sanalistat ja asetukset ovat `index.html`-tiedostossa:

* `LEVELS` – Kirjoita sana -tilan tasot ja sanat (sana ja emoji)
* `PICS` – Vapaan leikin kuvasanat kirjaimittain
* `LESSONS` ja `SPECIAL\_DRILLS` – Sormikoulun oppitunnit
* `WORDBANK` – sanat, joista Sormikoulun sanaharjoitukset ja testi kootaan
* `DYN` – putken pituus, josta dynamiitti putoaa eri tiloissa
* `TUKI` – tukilinkki (ks. yllä)

## Tekijät ja lisenssit

* Fontit: [Andika](https://software.sil.org/andika/) (SIL, OFL), lukemaan opetteleville suunniteltu kirjasin, ja [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (OFL).
* QR-koodi: [qrcodejs](https://github.com/davidshimjs/qrcodejs) (MIT).
* Aapiskukko, kädet, dynamiitti ja tunturimaisema on piirretty tätä peliä varten.

