---
{ 'title': 'Uke 5 - Tilbake til klienten' }
---

# Uke 5

:::tip Timer
Denne uken: 27

Totalt: 174
:::

## Onsdag

Dagen idag har gått ganske greit. Idag var det karrieredag på HVL, så jeg tok meg noen timers pause fra jobb for å dra bort å prate litt med bedriftene. Da jeg kom tilbake fortsatte jeg med å implementere _søkehjelpen_ jeg snakket om i går, men ble fort avbrutt da økonomisjefen kom og utfordret meg til en runde bordtennis. Det angret han fort på. Jeg har nemlig et sjult talent i grenen.:trophy: Etter en overlegen seier hadde jeg plenti av motivasjon til å fortsette på kodingen.

Jeg har fått til å laste inn "nøklene" til alle _features_ fra databasen og viser de som søkeforslag under søkefeltet når trykker der. Om en trykker på et av forslagene blir det og automatisk fylt ut i søkefeltet.

Videre skal jeg forsøke å få til at forslagene endrer seg basert på hva man skriver.

## Tirsdag

Tirsdagen er kommet og Øystein er tilbake. Jeg viste frem det jeg har gjort og det virket som om det var greit. Jeg spurte om han hadde noen flere oppgaver til meg og etter litt betenknigstid ba han meg om å lage et penere og mer funksjonelt brukergrensesnitt med mulighet for å implmentere **_motoren_**, både på server- og klient-side. Dagen idag har i hovedsak gått til å prøve å forbedre søkemotoren og finne løsninger for hvordan jeg kan implementere en "søkehjelp", som skal komme opp med forslag til søkeord, som hele tiden endrer seg med mer spesifikke forslag etterhvert som man skriver. Det finnes allerede en funskjon som løser dette integrert i **_HTML_**-språket, men denne er ikke støtte for i safari-nettleseren. Så nå er jeg litt bitter på alle apple-brukere som ikke har gått over til _Google Chrome_, for at jeg må skrive en egen funksjon for dette, med støtte for å tolke _javascript_-objekter.
Dette var vanskeligere enn jeg hadde sett for meg...

Så vi får se hvordan det går utover uken.

## Mandag

Uken startet bra, med god kaffe:coffee: og kjekt arbeid. Jeg kom raskt igang med prosjektet fra før helgen og jobbet effektivt med det som gjennstod. Når lunsjen kom hadde jeg bare en liten funksjon igjen å kode. Øystein, som vanligvis gir meg ting å gjøre, var borte idag og jeg hadde ikke fått noe å jobbe videre med, så jeg tenkte at det var ingen vits i å kjappe seg ferdig, for så å se i taket.

Etter lunsjen begynte jeg rolig med siste delen, som igrunn ikke tok mer enn en time. Jeg begynte å teste funksjonaliteten til programmet mitt, som jeg tidligere har kalt _motoren_, og merket fort at noe ikke stemte. Søren. Min langvarige drøm om å skrive feilfri kode på første forsøk var ennå ikke realisert, men til mitt forsvar, er jeg ikke spesielt dreven i _Python_. Etter noe feilsøking fant jeg feilen, men hvordan jeg skulle fikse den, hadde jeg ikke den minste anelse om.

Problemet er veldig lett å forstå for en som er kjent med programmering, men for andre trengs det litt forkunnskaper.

Jeg gjør et forsøk!

I de fleste programmeringsspråk har man en kort og grei måte å inkrementere en variabel med verdi "1".
Den ser slik ut:

```js
i++
// OG
i--
```

som er det samme som å skrive:

```js
i = i + 1
```

Det dette gjør er å ta verdien til variabel **_i_** og legger til 1.

Dette kommer i to forskjellige varianter; Prefix og Postfix.
Om man bruker de selvstendig, slik som vist over er de i essensen helt like, men om man bruker de inni en annen funksjon eller i deklarering av en variabel, er de nokså forskjellig,

Postfix eksempel:

```js
i = 5
print(i++)
```

Dette vil skrive ut verdien til **i**, som er 5, og så å legge til 1.

Prefix eksempel:

```js
i = 5
print(++i)
```

Dette vil legge til 1 til **i**, og så skrive ut verdien, som nå er 6.

Så, tilbake til min utfordring.
I koden min hadde jeg en funksjon som så slik ut:

```py
process_value(js[key], user, path.append(key))
```

Det er mulig dette litt vanskelig å henge med på, men vi prøver.
Her fungerer **_path.append(key)_** på samme måte som postfix eksempelet over. Den prøver å legge til nøkkelen til **_path_** etter funksjonen er ferdig kjørt, men siden jeg ikke får returnert variabelen **_path_** etter den er ferdig, vil det aldri skje noe.

Det jeg trengte var en prefix metode å legge til nøkkelen på, av årsaker som tar altfor lang tid å forklare her.

Så etter timevis med googling og etter å ha spurt flere andre her på jobben, fant jeg ingen god løsning på problemet.

På slutten av dagen prøvde jeg en ting som virket for enkel til å fungere, nemlig å bare "plusse" på nøkkelen, slik:

```py
process_value(js[key], user, path+[key])
```

Dette fungerte helt supert og løste alle problemene med programmet, noe som gjorde meg enda mer irritert enn jeg var fra før, da det var så lett, men jeg ble også litt lettet.

Jeg ble ferdig med løsningen og har testet den på alle måter jeg kunne tenke meg.
Så alt løste seg tilslutt. Jeg klappet megselv på skulderen og gikk hjem med lite smil om munnen.
