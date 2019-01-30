---
{
    "title": "Uke 1 - Rammeverk og hodeverk",
}
---

# Uke 1

::: tip Timer
Denne uken: 42
:::

## Fredag

Idag har jeg jobbet videre med problemene fra gårdagen. Jeg har sett på hvordan jeg kan lagre endret data fra klienten i ett json objekt for å sende det over til serveren med bare en forespørsel og etter mye om og men er det i boks. Problemet nå er at det jeg mottar på serveren ser forferdelig ut, men det fungerer, så det blir et problem jeg ser på siden.
Jeg har og lagt inn en "legg til" funksjon på klienten slik at jeg slipper å styre så mye med sql-spørringer i terminalen, men foreløpig tar den bare inn ett argument, så det må fikses senere. 

Det har gått opp for meg at jeg har brukt litt mye tid på front-end delen av oppgaven, men når Henrik ligger hjemme syk, var det egentlig nødvendig. Jeg har og lært mye om hvordan systemet fungerer.

Videre har jeg separert funksjonen for legg til og oppdater på serverside, for å få mer kontroll på hva som skjer og for å lettere oppdage om noen feil oppstår.


## Torsdag
Idag startet dagen nok en gang med en god kopp kaffe. :coffee:
Det kommer nok til å være realiteten videre og, så jeg utelater den delen fra nå av. Jeg skal heller syte litt her på bloggen om kaffemaskinen blir ødelagt.

Nå begynner jeg å komme litt inn i ting her og koden git mer og mer mening.
Idag har jeg fått lagt inn en lagre-knapp som lagrer til databasen, via serveren selvfølgelig, tilstanden til variablene jeg nevnte igår, men jeg bruker fortsatt sql spørringer eller konsollen i chrome for å legge til eller slette. Jeg bruker "emit" funksjonen til widgets for å sende tilstanden til variablene oppover i systemet ved endring. I den flotte dokumentasjonen til widgets forklarer de emit-funksjonen som en boble som flyter oppover til den blir fanget, og det er egentilg akkurat det den gjør. Den blir fanget på et høyere nivå i systemet av en funksjon med samme navn som man har sendt inn i emit-funskjonen. Det virker veldig automagisk, men det er bare resutatet av en luring som er noe begavet bak tastaturet.

Videre har jeg en løkke rundt en "fetch-request" som sender alle endringene til server og videre til databasen. Det er riktig nok en svært dårlig løsning å sende forespørsler i en løkke, da dette kan bli svært tidkrevende med mer omfattende databehandling. Målet er å få sendt alle endringer i en og samme request, men det blir en annen dag.



## Onsdag
Onsdagen startet og greit. Jeg kom på jobb og hoppet inn i koden etter å ha fylt opp koppen med den særdeles gode kaffen de har her.
Idag har jeg brukt tid på å sette opp en database og flytte konfigurasjonsfilen dit, ved hjelp av Postgresql og knex.js.

For å kommunisere mellom server og klient bruker jeg express.js for å route requests rundt på serveren, slik at informasjon og spørringer havner der de skal. Henrik har idag meldt seg syk, så jeg har sett endel på front-end delen og, da jeg synes det er lettere å ha kontroll og debugge om jeg ser hva som skjer mot klienten. 

Her på Scout bruker de, sammen med node.js, en "template engine" kalt pug.js (tidligere jade). Det var litt uvandt til å begynne med, men sammen med rammeverket "widgets", som er skrevet internt på huset, er det mye som er helt fantastisk. Det er såklart enkelte "quirks" her, som alle andre steder, men med litt tilvending går det nok bra. Foreløpig bruker jeg sql spøringer direkte i terminalen for å legge til og fjerne inhold i konfigurasjonsdatabasen. 

Jeg får nå vist frem innholdet i databasen på klientsiden og bruker Google Chrome sine utviklerverktøy til å se hvilke forespørsler(requests) som blir sendt til server og responsen som kommer i retur. Jeg får også endret deklarerte variabler direkte i klienten, uten å lagre vell og merke.

<img :src="$withBase('/images/feature-flags-v1.png')" alt="feature flags v1" width="40%">
<p style="color:red; font-weight:bold">Det er ikke lagt ned mye tid i design, dette er bare for å vise data</p>


## Tirsdag
Tirsdagen startet bedre. Da jeg ankom arbeidsplassen var det bare én annen tilstede. Jeg fant meg en kopp kaffe og satt meg godt tilrette på plassen min. Jeg åpnet opp VS Code, kjørte serveren og startet klientsiden. Oppgaven jeg har fått var gitt til en annen for litt over ett år siden, men ble satt på pause. Så det var noe forarbeid som jeg kunne se på og prøve å tolke, men med lite eerfaring fra rammeverkene ble det mye å ta inn. 

Oppgaven går ut på å lage funksjonalitet for noe som kalles "Feature flags" eller "Feature toggles". Dette går ut på å kunne sette begrensninger for hvem og hvor mange som skal ha tilgang til ulike funksjoner, og det skal kunne gjøres fra et eget brukergrensesnitt. Det skal og kunne integreres i alle nivå i applikasjonene og i de fleste programmeringsspråk. Løsningen har med andre ord et svært høyt abstraksjonsnivå, noe som ikke gjør det altfor lett for en nybegynner som megselv. Jeg og Henrik har fått oppgaven sammen, hvor jeg skulle stå for all "back-end" programmering mao. det som er rettet mot serveren, mens han skulle stå for "front-end" programmering, det som er rettet mot klienten og brukeren.

Før jeg kunne begynne ordentlig å kode mot løsningen som jeg ennå ikke helt forstod, ville jeg prøve å sette meg inn i hvordan ting skulle fungere fra server til klient og tilbake. Scout har valgt å bruke json-objekter som kommunikasjonsform mellom klient og server da det er høy støtte for json i veldig mange språk. Så her måtte jeg finne en måte å omforme json til brukervenlig og lettleselig data, samt å omforme brukerinput tilbake til json før det sendes til serveren. Her gikk jeg litt utenfor min arbeidsoppgave for å skaffe mer forståelse for hvordan hele systemet skulle snakke sammen.


## Mandag
Idag har jeg hatt min første arbeidsdag hos SGG, eller SGT (Scout Gaming Tech) som er navnet på avdelingen.
Dagen startet selvfølgelig på mandags vis med total stans på Bybanen. Dette passet strålende, da førsteinntrykk er oppskryt!

Da jeg endelig kom frem ble jeg godt tatt imot og kampen mot teknologien startet.
Jeg og Henrik, en medstudent som og har fått praksisplass hos Scout, ble tildelt et skrivebord med monitor, tastatur og mus og fikk en grundig gjennomgang av det viktigste apparatet på arbeidsplassen, nemlig kaffemaskinen.

Med koppen full av mot og viljen på topp, var det bare å sette igang og etter vel 20 min med slit for å få koblet pc'en til monitoren var vi igang.
Det neste på listen var wifi, noe en gjerne skulle tro var det minste problemet av alt, men ble et relativt stort problem da det var 16 tegn langt og skrevet med forferdelig håndskrift... Men vi seiret tilslutt. :)

Etter en rask gjennomgang av en vagt definert problemstilling, var det ikke annet å gjøre enn å hoppe i koden. 
Hos Scout bruker de et hav av rammeverk, hvor flere er skrevet eller bygget på internt på huset, med svært dårlig dokumentasjon. Det var med andre ord mye hodekløing og frustrasjon.

Etter jeg var kommet igang gikk dagen for det meste i å lese på den "flotte" dokumentasjonen og litt prøving og feiling.


