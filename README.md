# 🌍 TravelTracker - Proof of Concept (POC)

> **TravelTracker** est un prototype web permettant de visualiser des quêtes géolocalisées sur une carte interactive, de détecter celles situées à proximité de l'utilisateur et de les valider une fois le rayon de proximité atteint.

## ✨ Fonctionnalités implémentées

- 🗺️ **Carte interactive** affichée via [Leaflet.js](https://leafletjs.com/)
- 📍 **Géolocalisation** en temps réel de l'utilisateur (API Geolocation native du navigateur)
- 🎯 **Affichage des quêtes** sous forme de marqueurs sur la carte
- 🔍 **Détection des quêtes à proximité** avec calcul de distance (formule de Haversine)
- ✅ **Validation de quête** lorsqu'on entre dans le rayon défini
- 🎨 Interface légère et rapide en **HTML, CSS et JavaScript vanilla**

## 🛠️ Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| `HTML5` | Structure de la page |
| `CSS3` | Mise en page et style de base |
| `JavaScript (Vanilla)` | Logique métier, gestion de la carte et géolocalisation |
| `Leaflet.js` | Affichage et interaction avec la carte |
| `Geolocation API` | Récupération de la position GPS de l'utilisateur |

## 🚀 Comment lancer le POC

Aucune dépendance ni installation complexe n'est requise. Le projet est 100% frontend.

### Option 1 : Ouverture directe
```bash
# Depuis le dossier racine du projet
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
