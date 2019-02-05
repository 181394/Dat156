---
{ 'title': 'Uke 3 - Tidsbegrensing og filtrering' }
---

# Uke 3

:::tip Timer
Denne uken: 8

Totalt: 92
:::

## Tirsdag

Denne uken hos Scout startet på tirsdagen da mandagen gikk til å jobbe på min andre jobb.
Idag har jeg startet på søke-funksjonen i systemet. For å angripe denne oppgaven begynte jeg med å friske opp i sql-ferdighetene mine.
Jeg startet med å sette opp en sql spørring på serversiden som henter ut alle oppføringer fra databasen som mathcher en gitt søkestreng.
Deretter brukte jeg **Postman** til å sende _HTTP-requests_ for å sjekke at alt fungerte greit og finne ut hvordan jeg skulle utforme funksjonaliteten på klientsiden. Etter litt prøving og feiling gikk det i boks!
Jeg har og begynt å prøve å fjerne søkestrengen fra resultatene som som blir returnert, men dette har jeg ennå ikke fått til å fungere som ønsket.

Jeg har også oppdatert koden på klientsiden slik at alle endringer på siden skjer automatisk idet man trykker **_enter_**. Tidligere måtte man laste siden på nytt for at dette skulle skje, men nå håndteres alt dette i responsen. Dette er riktig nok ikke en helt optimal løsning da det fjerner muligheten til å svare med statuskoder i responsen, så dette må jeg ta en nærmere titt på senere om det blir tid.
