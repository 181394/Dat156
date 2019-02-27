---
{ 'title': 'Uke 4 - Implementasjon i Python' }
---

# Uke 4

:::tip Timer
Denne uken: 35

:::

## Fredag

Med helgen like rundt hjørnet og peppes pizza til lunsj har dagen gått svært bra! Jeg forstsatt med **_motoren_** jeg nevnte igår, og har fått implementert en god del av den. Foreløpig har jeg ikke skrevet noen kode for å kjøre den, så jeg vet ikke ennå om den virker. :sweat_smile: Men alt til sin tid.

## Torsdag

Idag skulle jeg og på min andre jobb, så dagen ble relativt kort, men jeg fikk begynt på å implementere **_motoren_** (mulig dette er feil ord å bruke, men jeg kommer ikke på noe bedre.) som håndterer og komputerer _config_-filen fra databasen.

## Onsdag

Idag har jeg hatt en lang dag og fått gjort en god del. Jeg har satt opp hele klienten i Python og all kommunikasjon med serveren går knirkefritt, men det er riktig nok et tekstbasert grensesnitt, så det er litt knotete å bruke.

<img :src="$withBase('/images/pyClient_v2.png')" alt="Python client" width="70%">

(Nå fungerer alle kommandoene)

## Tirsdag

Idag skulle jeg og på min andre jobb, så jeg prøvde å komme godt igang med dagen for å få gjort noe i det heletatt.
Jeg startet med å tenke ut hvordan den tekstbaserte klienten skal være og kom tilslutt frem til å gjøre det så enkelt som mulig for å spare tid, men at det fortsatt skal være lett å implementere nye funskjoner, slik at jeg kan jobbe iterativt med den såkalte _løkmodellen_.
Jeg begynte med en evigvarende loop som skriver ut alle mulige commandoer og venter på bruker-input for å utføre dem.

<img :src="$withBase('/images/pyClient_v1.png')" alt="Python client" width="70%">

(Det er bare "Get data" som fungerer foreløpig)

## Mandag

En ny uke er igang og jeg har fortsatt med oppgaven fra slutten av forrige uke. Jeg har fått satt opp et miljø i **_Django_** og får til å snakke med **_nodejs_** serveren. En ting jeg ikke fikk med meg før jeg begynte var at _Django_ setter opp en egen server og oppretter en egen database. Dette var ikke det jeg ønsket, så selvom _Django_ gjorde veldig mye av arbeidet med å manipulerer data i databasen mye lettere, ble alt arbeid forkastet og søket etter et rammeverk ble gjennopplivet.
Jeg bestemte meg for å prøve å sette opp et **_Docker-image_** med alle avhengigheter for å gjøre det lettest mulig for andre å få kjørt klienten. Jeg er ikke noe særlig kjent med _Docker_ fra før, så jeg brukte litt tid på å få åpnet opp porter til og fra _Docker-imaget_ for å kommunisere med serveren som kjører i _localhost_ på maskinen min og sende klienten til _localhost_ for å kunne vise den i nettleseren lokalt på maskinen. Jeg forhørte meg litt med Øystein her på Scout og vi konkluderte med at det greieste kanskje var å droppe alt av rammeverk og skrive klienten i ren _Python_ og bare ha et teksbasert grensesnitt i terminalen. Dette for å bare teste at all kommunikasjon med serveren går knirkefritt. Så da droppet jeg og _Docker_, hvertfall midlertidig, da den eneste avhengigheten er _Python_ og et par utvalgte biblioteker for å sende _http-requests_.
