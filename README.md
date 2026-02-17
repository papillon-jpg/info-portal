# Info Portal

Info Portal je web aplikacija namijenjena objavljivanju i pregledanju informativnih članaka iz različitih kategorija kao što su vijesti, sport, biznis, kultura i druge oblasti.  
Izvršava sve CRUD operacije koristeći React, Node.js i MySQL.
Aplikacija je realizovana kao full-stack projekat: baze podataka i serverskog dijela, a zatim izradu React frontenda za interakciju s bazom.

---

## ✨ Funkcionalnosti

- pregled svih objavljenih članaka
- prikaz pojedinačnog članka
- registracija i prijava korisnika
- kreiranje, uređivanje i brisanje objava (samo za autorizovane korisnike)
- upload slika uz objave
- kategorizacija sadržaja

---

## 🛠 Tehnologije

### Frontend

- **React** – JavaScript biblioteka koja se koristi za izgradnju dinamičkih korisničkih interfejsa zasnovanih na komponentama.
- **SCSS** – Koristi se za stilizaciju aplikacije, omogućavajući fleksibilnije, organizovanije i lakše održive stilove pomoću varijabli, ugniježđavanja i ponovo upotrebljivih komponenti.
- **Axios** – Biblioteka za slanje HTTP zahtjeva sa frontenda radi komunikacije sa backend API-jem.

### Backend

- **Node.js** – JavaScript runtime okruženje koje se koristi za izvršavanje serverskog koda.
- **Express.js** – Web aplikacijski framework za Node.js koji se koristi za izradu REST API-ja i upravljanje rutama.
- **MySQL** – Relacioni sistem za upravljanje bazama podataka koji se koristi za pohranu i upravljanje podacima aplikacije.

---

Backend dio aplikacije radi na portu **8800**.  
Frontend dio aplikacije radi na portu **3000**.

## 🔐 Autentifikacija i autorizacija

Aplikacija koristi autentifikaciju korisnika putem korisničkog imena i lozinke.  
Prilikom prijave, sistem provjerava validnost unesenih podataka i omogućava pristup zaštićenim dijelovima aplikacije samo prijavljenim korisnicima.

Autorizacija je implementirana tako da samo prijavljeni korisnici mogu:

- kreirati nove objave
- uređivati postojeće objave
- brisati svoje objave

Neautorizovani korisnici imaju pristup isključivo javnom sadržaju aplikacije.
