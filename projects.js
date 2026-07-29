/* ==========================================================================
   Arthur Valente — Project data
   Edit / extend project entries here. Each grid item below references a
   project slug and which image of that project should appear in the grid.
   ========================================================================== */

window.PROJECTS = [
  {
    slug: 'mac-panama',
    title: 'MAC Panama Competition',
    client: 'Lieber Gal & Atelier Tek',
    year: '2026',
    location: 'Panama City, Panama',
    type: 'Cultural · Competition',
    description: 'A proposal for the new Museum of Contemporary Art of Panama City. The renders explore the dialogue between the institutional facade and the tropical light, and the quiet choreography of the exhibition halls inside.',
    images: [
      { src: '2609_LieberGal_PANAMA_MAC_Facade_a3_cleaned_anim_5k.webp', caption: 'Animation' },
      { src: '2609_LieberGal_PANAMA_MAC_Facade_a3_cleaned.webp', position: 'center 60%', caption: 'Facade, afternoon study' },
      { src: '2609_LieberGal_PANAMA_MAC_Exposition_op2_cleaned.webp', caption: 'Exhibition hall' }
    ]
  },
  {
    slug: 'opera-ignis',
    title: 'Opera Ignis',
    client: 'Undisclosed',
    year: '2026',
    location: 'Dubai, UAE',
    type: 'Hospitality',
    description: 'A confidential hospitality project where stone, fire and water orchestrate the arrival sequence. The studies focus on light at dusk and the slow reveal of the inner sanctuaries.',
    images: [
      { src: 'Opera Ignis 1 Anim 1 Apo8 Thf4.mp4', poster: 'OPERA IGNIS 1.webp', caption: 'Animation' },
      { src: 'OPERA IGNIS 1.webp', caption: 'Arrival sequence' }
    ]
  },
  {
    slug: 'magnum-opus',
    title: 'Magnum Opus Resort Competition',
    client: 'Lieber Gal',
    year: '2026',
    location: 'Costa Rica',
    type: 'Hospitality · Competition',
    description: 'A resort proposal nestled within the Costa Rican rainforest. Renders trace the project from the canopy down to the lagoon, balancing the built form against the density of the landscape.',
    images: [
      { src: 'Magnum Opus 1 Anim1 1 Apo8 Thf4.mp4', poster: 'MAGNUM OPUS 1.webp', caption: 'Animation' },
      { src: 'MAGNUM OPUS 1.webp', caption: 'Canopy view', alt: 'Aerial view of a Costa Rican rainforest resort with a circular pavilion among dense canopy — Magnum Opus Resort competition by Lieber Gal' },
      { src: 'MAGNUM OPUS 2.webp', caption: 'Lagoon pavilion' }
    ]
  },
  {
    slug: 'crimson-shore',
    title: 'Crimson Shore',
    client: 'Mixed-Use Development',
    year: '2024',
    location: 'Albania',
    type: 'Mixed-Use',
    description: 'A mixed-use development along the Albanian coast. The studies investigate dusk atmospheres, the warmth of the local stone against the cool of the Adriatic, and the cinematic potential of a built waterfront.',
    images: [
      { src: 'Crimson Shore2_anim_5k.webp', caption: 'Animation' },
      { src: 'Crimson_Shore1.webp', caption: 'Red plaza, daytime', alt: 'Bold red brutalist architecture meeting blue sea — Crimson Shore mixed-use development on the Albanian coast' },
      { src: 'Crimson_Shore8.webp', position: 'center center', caption: 'Plaza at sunset' }
    ]
  },
  {
    slug: 'only-a-small-cabin',
    title: 'Only a Small Cabin',
    client: 'Arthur Valente & Victor Veloso',
    year: '2025',
    location: 'Self-initiated',
    type: 'Research · Residential',
    description: 'A self-initiated study in restraint. A single cabin sitting quietly within a clearing. The renders explore the slowness of forest light and the warmth of a single window seen from outside at night.',
    images: [
      { src: 'ForestCabin_anim_5k.webp', caption: 'Animation' },
      { src: 'ForestCabin.webp', caption: 'Exterior, winter morning' },
      { src: 'ForestCabin2.webp', caption: 'Window, night' }
    ]
  },
  {
    slug: 'fallen-tree-house',
    title: 'Fallen Tree House',
    client: 'Essesi',
    year: '2026',
    location: 'Undisclosed',
    type: 'Residential',
    description: 'A house composed around a fallen tree. The visualization studies tested the project across two seasons (heavy snowfall and a softer winter day) to test how the architecture would carry its atmosphere through the year.',
    images: [
      { src: 'Essesi 2616 Forestaftersnow Emberatelier.Com Anim 1 Apo8 Thf4.mp4', poster: 'Essesi_2616_ForestAfterSnow_emberatelier.com.webp', caption: 'Animation' },
      { src: 'Essesi_2616_ForestAfterSnow_emberatelier.com.webp', caption: 'Forest after snow' },
      { src: 'Essesi_2616_WinterDay_Caramel_emberatelier.com.webp', caption: 'Winter day', alt: 'A residence composed around a fallen tree in a snow-covered Slovak landscape — Fallen Tree House study for Essesi' }
    ]
  },
  {
    slug: 'maan-taller',
    title: 'Maan Taller',
    client: 'Maan Taller',
    year: '2023',
    location: 'Slovakia',
    type: 'Residential',
    description: 'A pair of studies for a residential project in Slovakia. The images sit between document and dream, neither fully neutral nor overly composed.',
    images: [
      { src: 'Maan Taller Anim.mp4', poster: 'MAAN TALLER.webp', caption: 'Animation' },
      { src: 'MAAN TALLER.webp', caption: 'Exterior approach' },
      { src: 'MAAN TALLER 2.webp', caption: 'Living space' }
    ]
  },
  {
    slug: 'where-the-light-sleeps',
    title: 'Where the Light Sleeps',
    client: 'Undisclosed',
    year: '2024',
    location: 'Antarctica',
    type: 'Research · Speculative',
    description: 'A speculative study set in Antarctica. The renders sit somewhere between document and fiction, exploring how architecture might rest within an environment of nearly perpetual light.',
    images: [
      { src: 'Where The Light Sleeps 4 Anim 1 Apo8 Thf4.mp4', poster: 'Where_the_Light_Sleeps_4.webp', caption: 'Animation' },
      { src: 'Where_the_Light_Sleeps_4.webp', position: 'center 35%', caption: 'Polar dawn' },
      { src: 'Where_the_Light_Sleeps_1.webp', position: 'center 25%', caption: 'Interior glow' }
    ]
  },
  {
    slug: 'serpentine-pavilion',
    title: 'Serpentine Pavilion Reimagination',
    client: 'BIG (Bjarke Ingels Group)',
    year: '2024',
    location: 'London, UK',
    type: 'Pavilion · Study',
    description: 'A reimagined visualization of the Serpentine Pavilion, exploring the pavilion within a quieter, more atmospheric light than the originals.',
    images: [
      { src: 'Big.Dk Sp 01 Cleaned Anim 1 Apo8 Thf4.mp4', poster: 'BIG.DK_SP_01_cleaned.webp', caption: 'Animation' },
      { src: 'BIG.DK_SP_01_cleaned.webp', caption: 'Pavilion at dusk', alt: 'Reimagined Serpentine Pavilion with red tiled shell over turquoise water at dusk — architectural study for BIG, Bjarke Ingels Group' }
    ]
  },
  {
    slug: 'not-a-hotel',
    title: 'Not a Hotel Competition',
    client: 'Paulo Merlini Architects',
    year: '2026',
    location: 'Japan',
    type: 'Hospitality · Competition',
    description: 'A competition entry for Not a Hotel, developed with Paulo Merlini Architects. The two final images explore the project at two opposite moments: among the trees in afternoon light, and a moonlit sanctuary at night.',
    images: [
      { src: '2548 Noh Among The Trees Emberatelier.Com Toanim Anim 1 Apo8 Thf4.mp4', poster: '2548_NOH_Among the Trees_emberatelier.com.webp', caption: 'Animation' },
      { src: '2548_NOH_Among the Trees_emberatelier.com.webp', caption: 'Among the trees', alt: 'Architecture nestled in deep Japanese forest with timber roof and large illuminated windows — Not a Hotel by Paulo Merlini Architects' },
      { src: '2548_NOH_Moonlit Sanctuary_emberatelier.com.webp', position: 'center 40%', caption: 'Moonlit sanctuary' }
    ]
  },
  {
    slug: 'hotel-brisa',
    title: 'Hotel Brisa IX Tapas',
    client: 'Ricardo Legorreta',
    year: '2026',
    location: 'Mexico',
    type: 'Hospitality',
    description: 'Visualizations developed around the work of Ricardo Legorreta. The renders try to honour the original light: heavy, coloured, deliberate.',
    images: [
      { src: 'Ix Tapas 1 Anim 1 Apo8 Thf4.mp4', poster: 'IX TAPAS 1.webp', caption: 'Animation' },
      { src: 'IX TAPAS 1.webp', caption: 'Courtyard at noon' },
      { src: 'IX TAPAS 2.webp', caption: 'Pool corridor' }
    ]
  },
  {
    slug: 'albania-residential',
    title: 'Undisclosed Residential',
    client: 'Residential · Private',
    year: '2024',
    location: 'Albania',
    type: 'Residential',
    description: 'A confidential residential project on the Albanian coast. The studies focus on the meeting between the rough stone of the site and the soft, settled light of the late afternoon.',
    images: [
      { src: 'Albania 1.webp', position: 'center top', caption: 'Hillside approach' },
      { src: 'Albania 2.webp', position: 'center top', caption: 'Terrace, golden hour' }
    ]
  },
  {
    slug: 'chinese-museum',
    title: 'Chinese Museum',
    client: 'Undisclosed',
    year: '2026',
    location: 'China',
    type: 'Cultural',
    description: 'A series of studies for a museum project in China. The renders trace the project through several different conditions: exterior light, interior atmosphere, and the dialogue between the two.',
    images: [
      { src: 'Museu Chines 5_anim.mp4', poster: 'Museu Chines 5.webp', caption: 'Animation' },
      { src: 'Museu Chines 1.webp', caption: 'Facade study' },
      { src: 'Museu Chines 2.webp', position: 'center center', caption: 'Interior hall' },
      { src: 'Museu Chines 3.webp', position: 'center 40%', caption: 'Atrium' },
      { src: 'Museu Chines 4.webp', caption: 'Landscape context' },
      { src: 'Museu Chines 5.webp', caption: 'Approach view', alt: 'Approach view of the Chinese Museum across a frozen landscape with low horizontal white volumes and reflecting water' }
    ]
  },
  {
    slug: 'desert-house',
    title: 'Desert House',
    client: 'Arthur Valente',
    year: '2026',
    location: 'Morocco',
    type: 'Residential · Private',
    description: 'A residence rooted in its desert landscape. Corten steel volumes set against the texture of sand, stone, and palm. Architecture and visualization by Arthur Valente.',
    images: [
      { src: 'Desert HOUSE1_anim_5k.webp', caption: 'Animation' },
      { src: 'Desert HOUSE1.webp', caption: 'Exterior, golden hour' }
    ]
  },
  {
    slug: 'guerrilla-bay-house',
    title: 'Guerrilla Bay House',
    client: 'Kringas Architecture',
    year: '2026',
    location: 'Guerrilla Bay, Australia',
    type: 'Residential',
    description: 'A coastal residence by Kringas Architecture, set against the rugged landscape of Guerrilla Bay. The renders explore the dialogue between architecture, light, and the surrounding Australian bush.',
    images: [
      { src: 'Kringas_Arch_GuerrillaHouse_2407_06.webp', caption: 'Approach' },
      { src: 'Kringas_Arch_GuerrillaHouse_2407_08.webp', caption: 'Exterior study' },
      { src: 'Kringas_Arch_GuerrillaHouse_2407_09.webp', caption: 'Landscape view' },
      { src: 'Kringas_Arch_GuerrillaHouse_2407_10.webp', caption: 'Interior, living' },
      { src: 'Kringas_Arch_GuerrillaHouse_2407_13.webp', caption: 'Detail study' },
      { src: 'Kringas_Arch_GuerrillaHouse_2407_15.webp', caption: 'Twilight' }
    ]
  },
  {
    slug: 'villa-t002',
    title: 'Villa T002',
    client: 'Marquet and Partners',
    year: '2026',
    location: 'Seto, Japan',
    type: 'Residential · Private',
    description: 'A residence for Marquet and Partners set into the boulder-strewn forest of Seto. The dark shingled roof and timber frame settle among the native canopy, following the slow shift of light through the surrounding grove.',
    images: [
      { src: 'Villa_T002_1.webp', caption: 'Exterior, summer', alt: 'A dark-shingled residence set into a Japanese forest with granite boulders and native undergrowth — Villa T002 by Marquet and Partners in Seto, Japan' },
      { src: 'Villa_T002_2.webp', caption: 'Approach, morning' }
    ]
  }
];

/* Lookup map for fast access by slug. */
window.PROJECT_MAP = window.PROJECTS.reduce(function (map, project) {
  map[project.slug] = project;
  return map;
}, {});

/* Grid layout — flagship-first.
   The 6 opening cards lead with the strongest, most recognized projects:
   Not a Hotel · MAC Panama (night) · Opera Ignis (exterior) ·
   Fallen Tree House · Serpentine Pavilion · Crimson Shore.
   Visual scan order with staggered columns:
     Pos 1 = Left row 1       Pos 4 = Right row 2
     Pos 2 = Right row 1      Pos 5 = Left row 3
     Pos 3 = Left row 2       Pos 6 = Right row 3
*/
/* Note on chinese-museum indices: video added as image 0, so all
   chinese-museum image references shifted +1 (image 5 = Museu Chines 5, etc.) */
/* Note: animations are at images[0] for most projects, so static-image
   references shifted +1. chinese-museum keeps original indices (video
   was already at [0]). albania-residential has no animation. */
window.GRID = {
  left: [
    { slug: 'crimson-shore',        image: 1 },  // Pos 1  · red plaza, daytime
    { slug: 'villa-t002',           image: 0 },  // Pos 3  · NEW · Villa T002 exterior
    { slug: 'magnum-opus',          image: 1 },  // Pos 5
    { slug: 'chinese-museum',       image: 5 },  // Pos 7  · Museu Chines 5
    { slug: 'opera-ignis',          image: 1 },  // Pos 9  · OPERA IGNIS 1
    { slug: 'where-the-light-sleeps', image: 2 }, // Pos 11
    { slug: 'mac-panama',           image: 1 },  // Pos 13 · night facade w/ moon
    { slug: 'chinese-museum',       image: 1 },  // Pos 15 · Museu Chines 1
    { slug: 'maan-taller',          image: 1 },  // Pos 17
    { slug: 'where-the-light-sleeps', image: 1 }, // Pos 19
    { slug: 'only-a-small-cabin',   image: 2 },  // Pos 21
    { slug: 'desert-house',         image: 1 },  // Pos 23
    { slug: 'guerrilla-bay-house',  image: 1 }   // Pos 25 · Guerrilla 08 (exterior study)
  ],
  right: [
    { slug: 'guerrilla-bay-house',  image: 0 },  // Pos 2  · NEW · Guerrilla 06 (cover, after Crimson)
    { slug: 'not-a-hotel',          image: 1 },  // Pos 4  · forest cabin
    { slug: 'serpentine-pavilion',  image: 1 },  // Pos 6
    { slug: 'fallen-tree-house',    image: 2 },  // Pos 8
    { slug: 'only-a-small-cabin',   image: 1 },  // Pos 10
    { slug: 'not-a-hotel',          image: 2 },  // Pos 12 · Moonlit Sanctuary
    { slug: 'hotel-brisa',          image: 1 },  // Pos 14
    { slug: 'crimson-shore',        image: 2 },  // Pos 16 · plaza at sunset
    { slug: 'chinese-museum',       image: 3 },  // Pos 18 · Museu Chines 3 (atrium)
    { slug: 'magnum-opus',          image: 2 },  // Pos 20
    { slug: 'fallen-tree-house',    image: 1 },  // Pos 22
    { slug: 'mac-panama',           image: 2 },  // Pos 24 · exhibition hall
    { slug: 'villa-t002',           image: 1 }   // Pos 26 · NEW · Villa T002 approach
  ]
};
