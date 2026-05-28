# Kugghuset – Astro + Tailwind CSS

## Kom igång

### 1. Installera beroenden
```bash
npm install
```

### 2. Starta dev-server
```bash
npm run dev
```
Öppna http://localhost:4321 i din webbläsare.

### 3. Bygg för produktion
```bash
npm run build
```

---

## Bilder
Lägg alla bilder i `public/images/`. Filnamn som används i projektet:

- kugghuset-logo.png
- favicon.png
- hero-data-magic.jpg
- hero-network.jpg
- hero-surface.jpg
- hero-bigdata.jpg
- hero-fiber.jpg
- konrad-leffler.jpg
- elis-lindstrom.jpg
- ulric-delamare.jpg
- christer-hansson.jpg
- mattias-elfgren.jpg
- logo-bambora.png
- logo-midroc.png
- logo-europcar.png
- logo-friskis.png
- logo-fredells.png
- logo-berns.png
- logo-grant-thornton.png
- logo-dedicare.png
- logo-betsson.png
- logo-humana.png
- logo-spotify.png
- logo-formpipe.png

Du kan ladda ned befintliga bilder direkt från kugghuset.se via webbläsarens DevTools (Network-fliken).

---

## Miljövariabler (krävs i produktion)

Kontaktformuläret skickar e-post via Microsoft Graph API. Sätt dessa i Vercel under
*Project → Settings → Environment Variables*:

| Variabel | Beskrivning |
|---|---|
| `AZURE_TENANT_ID` | Azure AD tenant-ID |
| `AZURE_CLIENT_ID` | App-registreringens klient-ID |
| `AZURE_CLIENT_SECRET` | Klienthemlighet för app-registreringen |
| `MAIL_SENDER` | Avsändaradress, t.ex. `info@kugghuset.se` |

Se `.env.example` för exempelformat. Utan dessa variabler returnerar kontaktformuläret
ett fel vid inskickning.

---

## Deploy till Vercel (gratis)
1. Pusha projektet till GitHub
2. Gå till https://vercel.com/new
3. Importera ditt repo – Vercel hittar Astro automatiskt
4. Sätt miljövariablerna ovan under *Environment Variables*
5. Klicka Deploy!
