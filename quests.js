/**
 * quests.js — Données des quêtes TravelTrack
 *
 * Chaque quête :
 *   id          : number  — identifiant unique
 *   name        : string  — titre affiché
 *   icon        : string  — emoji (visible sur la carte et dans les panels)
 *   place       : string  — nom du lieu
 *   category    : string  — catégorie (Culture, Gastronomie, Exploration…)
 *   desc        : string  — description de la mission
 *   xp          : number  — points accordés à la validation
 *   latlng      : [lat, lng] — coordonnées GPS du centre de la zone
 *   radiusMeters: number  — rayon de déclenchement en mètres
 *   color       : string  — couleur hexadécimale de la zone sur la carte
 */

const QUESTS = [
    {
      id: 1,
      name: 'Gardien du temps',
      icon: '🏛️',
      place: 'Musée du Louvre',
      category: 'Culture',
      desc: 'Trouvez la salle des antiquités égyptiennes et photographiez la pièce la plus ancienne exposée. Notez son siècle d\'origine.',
      xp: 150,
      latlng: [48.8606, 2.3376],
      radiusMeters: 120,
      color: '#7f77dd',
    },
    {
      id: 2,
      name: 'Chasseur de saveurs',
      icon: '🛒',
      place: 'Marché d\'Aligre',
      category: 'Gastronomie',
      desc: 'Goûtez une spécialité locale que vous n\'avez jamais mangée. Demandez au vendeur son histoire et notez-la.',
      xp: 80,
      latlng: [48.8493, 2.3739],
      radiusMeters: 80,
      color: '#1d9e75',
    },
    {
      id: 3,
      name: 'Vue panoramique',
      icon: '🌆',
      place: 'Tour Montparnasse',
      category: 'Exploration',
      desc: 'Depuis le sommet, identifiez et nommez 5 monuments visibles à l\'œil nu. Capturez-les en une seule photo panoramique.',
      xp: 200,
      latlng: [48.8421, 2.3220],
      radiusMeters: 100,
      color: '#f5a623',
    },
    {
      id: 4,
      name: 'Rue secrète',
      icon: '🔍',
      place: 'Passage des Panoramas',
      category: 'Histoire',
      desc: 'Explorez ce passage couvert parmi les plus anciens de Paris. Trouvez la boutique de timbres et photographiez son enseigne.',
      xp: 120,
      latlng: [48.8718, 2.3447],
      radiusMeters: 60,
      color: '#e05c97',
    },
    {
      id: 5,
      name: 'Gardien du fleuve',
      icon: '🌊',
      place: 'Pont des Arts',
      category: 'Exploration',
      desc: 'Observez la Seine depuis le pont. Comptez le nombre de bateaux qui passent en 5 minutes et notez leur type.',
      xp: 60,
      latlng: [48.8583, 2.3375],
      radiusMeters: 70,
      color: '#4d9fff',
    },
    {
        id: 6,
        name: 'Explorateur urbain',
        icon: '🏙️',
        place: '47 Boulevard de Pessaro, Nanterre',
        category: 'Exploration',
        desc: 'Observe les alentours et trouve un élément architectural ou urbain intéressant (street art, bâtiment atypique, détail caché). Prends-le en photo et décris pourquoi il t’a marqué.',
        xp: 90,
        latlng: [48.893139, 2.226914],
        radiusMeters: 80,
        color: '#9b5de5',
      },
  ];