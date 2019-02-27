---
{ 'title': 'Uke 2 - Backend og conditionals' }
---

# Uke 2

::: tip Timer
Denne uken: 42
:::

## Fredag

Arbeidsuken er over og helgen kan snart begynne!
Idag har jeg jobbet videre med gårdagens utløpsdato-oppgave. Dagen har for det meste gått til å sette opp serversiden slik at den kan ta imot HTTP-requests, for å bruke **_Postman_** for å sjekke at responsen kommer tilbake i riktig format og at ingenting går gale.
Videre har jeg lagt til valgfri datostempling av _features_ man legger til fra brukerkrensesnittet (ja jeg har klart å rote meg tilbake på klientsiden). Jeg har og endret koden på serversiden slik at alle _features_ som er utgått på dato ikke sendes fra server i det heletatt, men fortsatt ligger i databasen. Dette gjør at programmet ikke tar unødvendig mye tid å laste og det er enkelt å hente frem historikk.

## Torsdag

Idag har jeg lagt til en debugger for mocha og chai i VS code, for å finne ut hva som går gale i koden min og etter mye frem og tilbake mellom linjene fant jeg ut av det. Nå fungerer "IF" kommandoen helt knirkefritt (hvertfall etter hva jeg har klart å teste). Jeg var egentlig nokså ferdig med den opprinnelige oppgaven nå, men det har kommet et par ekstra ønskelige funksjoner på bordet.

De nye funskjonene jeg skal implementere er å legge til mulighet for utløpsdato på forskjellige _features_. Dette vil brukes ved tidsbegrensede arrangement, som f.eks VM eller OL. I tillegg ønsket de en måte å søke på forskjellige _features_, slik at det blir enklere å finne fram etterhvert som det blir lagt inn mer og mer i databasen.

Jeg begynte såvidt på implementasjonen av utløpsdato i dag, ved å legge til en kollonne av typen **TIMESTAMPTZ** i databasen. Den fungerer direkte med Javascript sine Date objekter som igjen er kompatibel med sammenlignings operatørene: **<** og **>**. Dette gjør det svært enkelt å teste om en gitt dato er passert.

## Onsdag

Idag var Henrik tilbake, så jeg har brukt litt tid på å ta ham gjennom det jeg har gjort på front-end delen.
Ellers har jeg jobbet masse med "IF" kommandoen til config'en, men da jeg viste frem arbeidet fikk jeg beskjed om at jeg hadde tolket problemstillingen feil. Så da skrotet jeg det meste av arbeidet og begynte på nytt. Etter en stund var jeg nokså fornøyd og skulle begynne å teste, men testene stemmer ikke helt overens med det jeg forventet, da de alltid viser godkjent, selv når de absolutt ikke skal. Jeg mistenker at dette kan være grunnet mindre forståelse for Node.js sin module.exports funksjon fra min side, så det blir hjemmelekse for meg å sette meg inn i dette.

I håp om å unngå tilsvarende senere vil jeg nok bruke store deler av morgendagen på å sette meg inn i Node.js og Express.js. Dette er og svært relevant for bacheloroppgaven min så der har jeg litt ekstra motivasjon.

## Tirsdag

Denne uken er visst noe forskjøvet, da mandagen kom på tirsdag.
Idag forsov jeg meg litt, så jeg skyntet meg ut og mistet bybanen akkurat og måtte vente i vel 8 min på neste. Jeg fikk meg en god plass og satt meg godt til rette. Så etter et par stopp får vi beskjed om at det er teknisk feil på bybanen og alle må av og vente på neste. Heldigvis var det nå mange som ventet på den neste vognen, som også var ganske full. Så turen endte opp med å stå som sild i tønne med tjukk boblejakke på. :unamused:

Ellers har dagen vært noe dramatisk på Scout. Midt i lunsjen kom det en løpende og skrek ut "CODE RED! ALT ER NEDE!" og alle hoppet opp å kom seg tilbake på plass for å finne problemene og restarte serverne. De har satt opp en raspberry pie til å overvåke alle serverne de har og vise status på en skjerm midt i det åpne landskapet hvor alle utviklerne sitter, og alt lyste rødt. Jeg fikk inntrykk av å være med i en episode av tv-serien "Silicon Valley". Heldigvis gikk det ikke lange tiden før alt var oppe igjen.

Idag har jeg skrevet ferdig sql-spørringen fra server, som oppdaterer alle endringer gjort fra klienten i en engang, og den fungerer knirkefritt.
Jeg har og gått i dybden og analysert flyten i programmet for å få ordentlig oversikt over hvordan konfigurasjonen fra databasen blir håndtert på serveren. Jeg begynner å bli klar for å skrive logikken bak if'statementene.

## Mandag

Idag har jeg hatt en god dag. Jeg har fått skrotet mye unødvendig og dårlig kode, og erstattet det med korte og lettleselige funksjoner.
På klient-siden får jeg nå sendt alle endringer i ett flott og lett håndterlig json objekt. På serversiden har jeg begynt å lage en sql spørring (query) for å oppdaterer alle endringer i en engang, istedenfor å ha det i en løkke (noe som kan bli svært tidkrevende om mange endringer blir gjort).

Jeg har og begynt å skrive tester for "If" statementene Scout ønsker i config-databasen sin. Disse skal igrunn fungere på samme vis som en "if" statement i alle språk, men den skal skrives i json.
Mulige implementasjoner:

```js
// AND-case
// $ - signaliserer et uttrykk som skal evalueres

// Her ligger betingelsene i samme json objekt.
// Dette indikerer at alle betingelsene må være
// oppfylt for at uttrykket skal evaluere "then" klausulen,
// ellers evalueres "else" klausulen.


// Dette eksempelet vil gi kr 20.000,- i spendinglimit
// til 30% av brukerne, og kr 10.000,- til resten
{
  "myFeature": {

    "$Spendinglimit": {
      "if": {
        "test": {
          "role": "user",    // IF has role user
          "percentage": 30   // AND is within 30% of all users
        },
        "then": {
          "limit": 20000
        },
        "else": {
          "limit": 10000
        }
      }
    }
  }
}
```

```js
// Her ligger betingelsene i en tabell (Array) i et json objekt.
// Dette indikerer at minst ett av betingelsene må være
// oppfylt for at uttrykket skal evaluere "then" klausulen,
// ellers evalueres "else" klausulen.

// Dette eksempelet vil gi kr 20.000,- i spendinglimit
// til alle admin-brukere og 20% av brukerne
// og kr 10.000,- til resten
{
  "myFeature": {

    "$Spendinglimit": {
      "if": {
        "test": [
          {"role": "admin"},   // IF has role admin
          {"percentage": 20}   // OR is within 20% of all users
        ],
        "then": {
          "limit": 20000
        },
        "else": {
          "limit": 10000
        }
      }
    }
  }
}
```
