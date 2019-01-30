---
{
    "title": "Uke 2 - Backend og conditionals"
}
---

# Uke 2

::: tip Timer
Denne uken: 18
:::


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