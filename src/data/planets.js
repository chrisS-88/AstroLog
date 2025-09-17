export const planetProfiles = [
  {
    slug: "mercury",
    title: "Mercury",
    description: "The smallest planet and closest to the Sun, Mercury has no atmosphere and experiences extreme temperature swings.",
    image: "/mercury.jpg",
    longDescription:
      "Mercury is a rocky, cratered world that resembles our Moon. With no substantial atmosphere to retain heat, temperatures swing from scorching highs of 430°C during the day to freezing lows of -180°C at night. Its surface is marked by impact craters and long cliffs called scarps.  Despite being closest to the Sun, Mercury isn’t the hottest planet. It has no moons and completes an orbit in just 88 Earth days, making it the fastest planet in our solar system.",
    facts: [
      "Mercury has no moons.",
      "It takes 88 Earth days to orbit the Sun.",
      "Its surface resembles the Moon.",
      "Temperatures range from 430°C to -180°C.",
      "It has a weak magnetic field.",
    ],
    stats: {
      distanceFromSun: "57.9 million km",
      atmosphere: "Exosphere: oxygen, sodium, hydrogen",
      gravity: "3.7 m/s²",
      diameter: "4,879 km",
    },
  },
  {
    slug: "venus",
    title: "Venus",
    description: "Venus is shrouded in thick clouds of sulfuric acid and has a runaway greenhouse effect, making it the hottest planet.",
    image: "/venus.jpg",
    longDescription:
      "Venus is similar in size to Earth but has a thick, toxic atmosphere that traps heat, making it the hottest planet. Surface temperatures reach 465°C, and the pressure is 90 times that of Earth. Venus rotates slowly and in reverse compared to most planets. A day on Venus lasts longer than its year. Despite its harsh conditions, it remains a key target for planetary science.",
    facts: [
      "Venus is the hottest planet.",
      "It rotates in the opposite direction to most planets.",
      "A day on Venus is longer than its year.",
      "It has no moons.",
      "Its atmosphere is mostly carbon dioxide.",
    ],
    stats: {
      distanceFromSun: "108.2 million km",
      atmosphere: "CO₂, N₂, sulfuric acid clouds",
      gravity: "8.9 m/s²",
      diameter: "12,104 km",
    },
  },
  {
    slug: "earth",
    title: "Earth",
    description: "Our home planet, Earth is the only known world with liquid water on the surface and life in abundance.",
    image: "/earth.jpg",
    longDescription:
      "Earth is the third planet from the Sun and the only one known to support life. Its atmosphere, magnetic field, and liquid water make it uniquely habitable. Earth has one moon and experiences seasons due to its axial tilt. Its dynamic climate system supports a wide range of ecosystems and biodiversity.",
    facts: [
      "Earth has one moon.",
      "71% of its surface is water.",
      "It supports life.",
      "It has a protective magnetic field.",
      "It experiences seasons due to axial tilt.",
    ],
    stats: {
      distanceFromSun: "149.6 million km",
      atmosphere: "N₂, O₂, Ar, CO₂",
      gravity: "9.8 m/s²",
      diameter: "12,742 km",
    },
  },
  {
    slug: "mars",
    title: "Mars",
    description:
      "Known as the Red Planet, Mars has the largest volcano and canyon in the solar system and is a prime target for exploration.",
    image: "/mars.jpg",
    longDescription:
      "Mars is a cold desert world with a thin atmosphere composed mostly of carbon dioxide. Its reddish hue comes from iron oxide on its surface. Mars hosts Olympus Mons, the tallest volcano in the solar system, and Valles Marineris, a canyon system that dwarfs the Grand Canyon. It has two moons: Phobos and Deimos.",
    facts: [
      "Mars has two moons.",
      "It has the tallest volcano in the solar system.",
      "Its surface is covered in iron oxide.",
      "It experiences seasons.",
      "It has a thin atmosphere.",
    ],
    stats: {
      distanceFromSun: "227.9 million km",
      atmosphere: "CO₂, N₂, Ar",
      gravity: "3.7 m/s²",
      diameter: "6,779 km",
    },
  },
  {
    slug: "jupiter",
    title: "Jupiter",
    description: "The largest planet, Jupiter is a gas giant with a massive magnetic field and dozens of moons, including volcanic Io.",
    image: "/jupiter.jpg",
    longDescription:
      "Jupiter is the largest planet in our solar system, composed mostly of hydrogen and helium. Its Great Red Spot is a centuries-old storm larger than Earth. Jupiter has at least 95 moons, including Europa and Ganymede. Its powerful magnetic field and radiation belts make it a dynamic and extreme environment.",
    facts: [
      "Jupiter has at least 95 moons.",
      "It has the Great Red Spot.",
      "It’s mostly hydrogen and helium.",
      "It has the strongest magnetic field.",
      "It emits more heat than it receives.",
    ],
    stats: {
      distanceFromSun: "778.6 million km",
      atmosphere: "H₂, He",
      gravity: "23.1 m/s²",
      diameter: "139,822 km",
    },
  },
  {
    slug: "saturn",
    title: "Saturn",
    description: "Famous for its stunning rings, Saturn is a gas giant with over 80 moons and a low density—it could float in water.",
    image: "/saturn.jpg",
    longDescription:
      "Saturn is best known for its spectacular ring system, made of ice and rock particles. It’s a gas giant composed mostly of hydrogen and helium. Saturn has over 140 moons, including Titan, which has a thick atmosphere and liquid methane lakes. Its low density means it could float in water.",
    facts: [
      "Saturn has over 140 moons.",
      "It has the most extensive ring system.",
      "Titan is its largest moon.",
      "It could float in water.",
      "Its rings are constantly changing.",
    ],
    stats: {
      distanceFromSun: "1.43 billion km",
      atmosphere: "H₂, He",
      gravity: "9.0 m/s²",
      diameter: "116,464 km",
    },
  },
  {
    slug: "uranus",
    title: "Uranus",
    description:
      "Uranus rotates on its side and has a pale blue color due to methane in its atmosphere. It’s an ice giant with faint rings.",
    image: "/uranus.jpg",
    longDescription:
      "Uranus is an ice giant with a unique sideways rotation—its axis is tilted by 98 degrees, causing extreme seasonal variations. Its pale blue color comes from methane in its atmosphere. Uranus has faint rings and 28 known moons. It was discovered in 1781 and visited only once by Voyager 2.",
    facts: [
      "Uranus rotates on its side.",
      "It has faint rings.",
      "Its atmosphere contains methane.",
      "It has 28 known moons.",
      "It was discovered in 1781.",
    ],
    stats: {
      distanceFromSun: "2.87 billion km",
      atmosphere: "H₂, He, CH₄",
      gravity: "8.7 m/s²",
      diameter: "50,724 km",
    },
  },
  {
    slug: "neptune",
    title: "Neptune",
    description: "The farthest planet from the Sun, Neptune is a deep blue ice giant with supersonic winds and a stormy atmosphere.",
    image: "/neptune.jpg",
    longDescription:
      "Neptune is the eighth and most distant planet in our solar system. It’s an ice giant with a deep blue hue caused by methane in its atmosphere. The planet is known for its violent weather, including the fastest winds recorded in the solar system—reaching up to 2,100 km/h. Neptune has 14 known moons, with Triton being the largest. It also has faint rings and completes an orbit around the Sun every 165 Earth years. Its internal heat contributes to its dynamic atmosphere.",
    facts: [
      "Neptune has 14 moons.",
      "It has the fastest winds in the solar system.",
      "Its atmosphere contains methane.",
      "It was discovered in 1846.",
      "It has faint rings.",
    ],
    stats: {
      distanceFromSun: "4.5 billion km",
      atmosphere: "H₂, He, CH₄",
      gravity: "11.15 m",
    },
  },
];
