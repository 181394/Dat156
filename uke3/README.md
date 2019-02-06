---
{ 'title': 'Uke 3 - Tidsbegrensing og filtrering' }
---

# Uke 3

:::tip Timer
Denne uken: 16

Totalt: 100
:::

## Onsdag

Idag fikk jeg endelig til å fjerne søkeprefiksen fra resultatet, men det resulterte i andre problemer. Jeg kunne ikke lenger oppdatere verdien på _features_ når jeg søkte, så alt dette ble midlertidig forkastet. Dagen idag har for det meste gått til å prøve ut flere mulige implementasjoner for å fjerne søkeprefiksen fra resultatet, men sålangt har jeg ikke vært fornøyd med noen av dem. Jeg har derrimot konkludert med at det må skje på klientsiden for å gjøre serveren mer kompatibel med andre språk og rammeverk.

Videre har jeg fått en ny oppgave. Jeg skal skrive en helt ny klient i et annet programmeringsspråk, og da har jeg valgt å prøve meg på **_Python_**. Årsaken til dette er at de ønsker en robust serverside som er kompatilbel med et mangfold av språk og rammeverk, så jeg må med andre ord levere høy kvalitet på serveren.

Jeg har og lurt på om jeg skal skrive en klient i det populære og vell omtalte rammeverket **_Vuejs_**. Jeg har brukt det litt smått fra før, blandt annet til denne bloggen, og jeg er sålangt veldig imponert over rammeverket. Vi skal og bruke **_Vuejs_** til å lage brukergrensesnitt til bacheloroppgaven, så det kan være svært nyttig å sette seg ordentlig inn i det her på jobb, men vi får se hva det blir tid til.

## Tirsdag

Denne uken hos Scout startet på tirsdagen da mandagen gikk til å jobbe på min andre jobb.
Idag har jeg startet på søke-funksjonen i systemet. For å angripe denne oppgaven begynte jeg med å friske opp i sql-ferdighetene mine.
Jeg startet med å sette opp en sql spørring på serversiden som henter ut alle oppføringer fra databasen som mathcher en gitt søkestreng.
Deretter brukte jeg **Postman** til å sende _HTTP-requests_ for å sjekke at alt fungerte greit og finne ut hvordan jeg skulle utforme funksjonaliteten på klientsiden. Etter litt prøving og feiling gikk det i boks!
Jeg har og begynt å prøve å fjerne søkestrengen fra resultatene som som blir returnert, men dette har jeg ennå ikke fått til å fungere som ønsket.

Jeg har også oppdatert koden på klientsiden slik at alle endringer på siden skjer automatisk idet man trykker **_enter_**. Tidligere måtte man laste siden på nytt for at dette skulle skje, men nå håndteres alt dette i responsen. Her ble det endel gjentakelse av kode, så dette må jeg ta en nærmere titt på senere om det blir tid.
