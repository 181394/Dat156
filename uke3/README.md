---
{ 'title': 'Uke 3 - Tidsbegrensing og filtrering' }
---

# Uke 3

:::tip Timer
Denne uken: 28
:::

## Fredag

Idag har jeg sett mer etter en god løsning for web-klienten i _python_ og etter milevis med googlesøk og mye kritikk og hat for å bruke python i front-end, bestemte jeg meg for å bruke rammeverket **_Django_** for å lage en web-server. Django kan være litt knot å sette opp, men gir veldig mye av prosjektstrukturen gratis, slik at man heller kan fokusere på å kode.

Videre har jeg satt Henrik på oppgaven om å lage et ordentlig design på den gamle klienten. Dette ble mye styr, da han ikke er noe særlig kjent med **_yarn_** eller **_npm_** (Node Package Manager) og i tillegg bruker windows, som jeg har gått vekk ifra og glemt for lengst. Jeg brukte endel tid med å prøve å få serveren og klienten til å kjøre på pc'en hans og etter mye hodeverk konkluderte jeg med at det var lettere å sette opp en virituell maskin som kjører linux, ubuntu. Før jeg fikk fullført oppsettet av ubuntu på den virituelle maskinen så jeg at jeg hadde glemt tiden og var sent ute til trening, så da måtte jeg bare løpe. Jeg tror han fikk noe hjelp av Michael, som jobber hos Scout, med videre oppsett, men jeg er usikker på hvor mye de fikk gjort.

## Torsdag

Dagen i dag har blitt noe amputert da jeg måtte inn å jobbe på min andre jobb fra kl 12:30,så jeg rakk akkurat å spise opp lunsjen min før jeg måtte dra.
Jeg har sett endel på python og forskjellige rammeverk for web-grensesnitt og web-servere, men det må jeg se mer på imorgen.
Det er igrunn ikke stort mer å fortelle om dagen.

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
