# Praxis Osswald – Website

Statische Website (HTML/CSS/JS) für **Praxis Osswald**, freier Träger der
Kinder- und Jugendhilfe in Berlin-Tempelhof. Modern, warm, vertrauensvoll –
für Eltern, junge Menschen, Fachkräfte und Jugendämter. Ohne Build-Schritt,
ohne Framework, auf jedem Webspace lauffähig.

## Seiten

| Datei | Inhalt |
|-------|--------|
| `index.html` | Startseite: Hero, Werte, Leistungsübersicht, Ablauf, Kontakt-CTA |
| `leitbild.html` | Leitbild, Haltung, vier Werte |
| `leistungen.html` | Alle 6 Hilfen zur Erziehung nach SGB VIII im Detail (Sprungmarken) |
| `kontakt.html` | Kontaktformular, Kontaktdaten, Karte (OpenStreetMap) |
| `impressum.html` | Impressum (Vorlage – bitte rechtlich ergänzen) |
| `datenschutz.html` | Datenschutzerklärung (Vorlage – bitte rechtlich prüfen) |

## Struktur

```
.
├── index.html, leitbild.html, leistungen.html, kontakt.html,
│   impressum.html, datenschutz.html
└── assets/
    ├── css/styles.css   ← Designsystem (Farben, Typo, Komponenten)
    ├── js/main.js       ← Mobilnav, Formular, Jahr (Progressive Enhancement)
    └── img/favicon.svg
```

## Designsystem

- **Farben:** Marken-Türkis (`--teal-*`) als Anker, warmes Creme als Hintergrund,
  ein sparsam eingesetzter Koral-Akzent (`--coral`). Alle Tokens stehen oben in
  `assets/css/styles.css` unter `:root`.
- **Schrift:** *Bricolage Grotesque* (Headlines) + *Inter* (Text), via Google Fonts.
- **Illustrationen & Icons:** Inline-SVG (keine externen Bilder, keine Emojis),
  skalieren scharf und sind dark-/print-freundlich.

## Lokal ansehen

Kein Build nötig. Einfach einen kleinen Server starten:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

(Direktes Öffnen der HTML-Dateien per Doppelklick funktioniert auch, aber ein
Server ist näher am echten Betrieb.)

## Deployment

Alle Dateien auf einen beliebigen Webspace / Static-Host hochladen
(z. B. Netlify, Vercel, GitHub Pages, IONOS, Strato, All-Inkl …). Es ist kein
Server-Backend erforderlich.

## Inhalte pflegen

Texte stehen direkt im jeweiligen HTML. Häufige Anpassungen:

- **Kontaktdaten / Adresse:** in jeder Datei im `<footer>` sowie auf
  `kontakt.html`.
- **Telefon-Link:** `href="tel:+491719188816"` (international formatiert).
- **Karte:** Koordinaten im `iframe` auf `kontakt.html` (`marker=` und `bbox=`).

## Kontaktformular aktivieren

Das Formular ist aktuell ein funktionsfähiges Frontend mit Validierung und
Bestätigungsmeldung, sendet aber noch **nicht** an einen Empfänger. Zum
Scharfschalten eine der Optionen einbauen (in `kontakt.html`):

1. **Formspree / Formsubmit o. ä.** – `action` des `<form>` auf den Endpoint
   setzen und in `assets/js/main.js` den `preventDefault`-Handler entfernen oder
   per `fetch()` abschicken.
2. **E-Mail-Hoster-Skript** – z. B. ein PHP-Mailer auf dem Webspace.

> Hinweis: Vor dem Livegang **Impressum** und **Datenschutzerklärung**
> rechtssicher ausfüllen. Beim Einsatz der OpenStreetMap-Karte ggf. eine
> Einwilligungslösung (Cookie-/Consent-Banner) ergänzen.

## Barrierefreiheit & Qualität

- Semantische Struktur, „Zum Inhalt springen"-Link, sichtbare Fokus-Ringe.
- Kontraste auf WCAG-AA ausgelegt, Touch-Ziele ≥ 44 px.
- `prefers-reduced-motion` wird respektiert; Inhalte sind auch ohne JavaScript
  vollständig sichtbar.
- Responsiv getestet bei 390 / 768 / 1280 px (kein horizontales Scrollen).
