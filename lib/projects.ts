export type Category = 'Landscape' | 'Portrait' | 'Pet'

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  id: string
  slug: string
  title: string
  category: Category
  year: number
  client: string
  location: string
  description: string
  coverImage: string
  coverImageAlt: string
  images: ProjectImage[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'new-york',
    title: 'New York',
    category: 'Landscape',
    year: 2024,
    client: 'Self-directed',
    location: 'New York City, USA',
    description:
      'A study of New York City through its monuments and negative space. From the silent geometry of the 9/11 Memorial to the soaring bones of the Oculus and Lady Liberty standing watch from the harbor, each frame searches for stillness inside one of the world\'s most relentless cities.',
    coverImage: '/images/feature.jpg',
    coverImageAlt: '9/11 Memorial reflecting pool with Manhattan skyline, black and white',
    images: [
      { src: '/images/gallery/09.jpg', alt: 'Central Park Reservoir with Manhattan skyline', width: 1600, height: 900 },
      { src: '/images/gallery/12.jpg', alt: 'WTC Oculus and One World Trade Center', width: 1200, height: 900 },
      { src: '/images/gallery/13.jpg', alt: 'Empire State Building at night', width: 800, height: 1200 },
      { src: '/images/gallery/14.jpg', alt: 'Manhattan Bridge steel detail', width: 800, height: 1200 },
      { src: '/images/works/03.jpg', alt: 'WTC Oculus and One World Trade, black and white', width: 1200, height: 900 },
      { src: '/images/gallery/10.jpg', alt: 'Waterfall and rock garden landscape', width: 1200, height: 900 },
      { src: '/images/gallery/37.jpg', alt: 'One World Trade Center seen from below between mirrored glass towers', width: 1271, height: 1600 },
      { src: '/images/gallery/38.jpg', alt: 'Dandelion seed-head sculpture against a cloudy sky, black and white', width: 1288, height: 1600 },
      { src: '/images/gallery/39.jpg', alt: 'Lower Manhattan skyline from the harbor with a sailboat passing', width: 1600, height: 758 },
      { src: '/images/gallery/40.jpg', alt: 'One World Trade Center and the Oculus from the 9/11 Memorial plaza', width: 1600, height: 897 },
      { src: '/images/gallery/41.jpg', alt: 'Statue of Liberty from the harbor', width: 1600, height: 827 },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'kagome',
    title: 'Kagome',
    category: 'Pet',
    year: 2024,
    client: 'Self-directed',
    location: 'California, USA',
    description:
      'A portrait series following Kagome, a tricolor Corgi whose expression shifts from mischief to quiet contemplation in a single frame. Shot across seasons and settings, the project explores personality through light, environment, and the bond between subject and camera.',
    coverImage: '/images/gallery/02.jpg',
    coverImageAlt: 'Corgi with pink bandana in front of blooming roses',
    images: [
      { src: '/images/hero-portrait.jpg', alt: 'Corgi in floral shirt under cherry blossoms', width: 900, height: 1200 },
      { src: '/images/gallery/15.jpg', alt: 'Tricolor Corgi in a pastel plaid bandana among red roses', width: 1128, height: 1600 },
      { src: '/images/gallery/17.jpg', alt: 'Tricolor Corgi in a black floral dress with a red bow, sitting in greenery', width: 1600, height: 1067 },
      { src: '/images/gallery/18.jpg', alt: 'Tricolor Corgi in a pastel plaid bandana sitting among red roses', width: 1600, height: 1098 },
      { src: '/images/gallery/19.jpg', alt: 'Tricolor Corgi in a black harness among orange marigolds', width: 1110, height: 1600 },
      { src: '/images/gallery/20.jpg', alt: 'Tricolor Corgi with a red snowflake bow tie beside a vintage red truck', width: 1600, height: 1067 },
      { src: '/images/gallery/23.jpg', alt: 'Tricolor Corgi puppy in a plaid shirt sitting on a bed', width: 1600, height: 1600 },
      { src: '/images/gallery/25.jpg', alt: 'Tricolor Corgi in a tartan bow beside a decorated Christmas tree', width: 1156, height: 1600 },
      { src: '/images/gallery/01.jpg', alt: 'Corgi sitting on a tree stump', width: 800, height: 1200 },
      { src: '/images/gallery/06.jpg', alt: 'Corgi with Christmas truck and holiday decor', width: 800, height: 1200 },
      { src: '/images/gallery/07.jpg', alt: 'Corgi in Halloween costume on an antique chair', width: 1200, height: 900 },
      { src: '/images/gallery/08.jpg', alt: 'Corgi black and white portrait in tall grass', width: 1200, height: 900 },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'best-friends',
    title: 'Best Friends',
    category: 'Pet',
    year: 2023,
    client: 'Self-directed',
    location: 'California, USA',
    description:
      'Two dogs, one frame, an ongoing series pairing Corgis and Shih Tzus in natural and styled environments. The work celebrates the distinct personality each animal brings to a shared moment, from sun drenched lawns to intimate indoor studies.',
    coverImage: '/images/gallery/03.jpg',
    coverImageAlt: 'Two Corgis sitting on grass in front of roses',
    images: [
      { src: '/images/gallery/16.jpg', alt: 'Two Corgis cheek to cheek in star-print bandanas among monstera leaves', width: 1600, height: 1177 },
      { src: '/images/works/01.jpg', alt: 'Corgi black and white closeup portrait', width: 1200, height: 900 },
      { src: '/images/gallery/04.jpg', alt: 'Shih Tzu rolling in the grass', width: 1200, height: 900 },
      { src: '/images/gallery/05.jpg', alt: 'Shih Tzu black and white with striped tie', width: 1200, height: 900 },
      { src: '/images/works/02.jpg', alt: 'Shih Tzu with flowers and a blue tie', width: 1200, height: 900 },
      { src: '/images/gallery/21.jpg', alt: 'Small dog in a skull-print bandana resting on its owner\'s shoulder, black and white', width: 1600, height: 1067 },
      { src: '/images/gallery/26.jpg', alt: 'Two Corgis in star-print bandanas sitting side by side among monstera leaves', width: 1600, height: 1177 },
      { src: '/images/gallery/24.jpg', alt: 'Tan Chihuahua looking up wearing a stars-and-stripes bandana', width: 1600, height: 1067 },
      { src: '/images/gallery/27.jpg', alt: 'Gray and white Shih Tzu in a red polka-dot bandana among rose petals', width: 1067, height: 1600 },
      { src: '/images/gallery/28.jpg', alt: 'Tan terrier mix in a sage polka-dot bandana laughing in front of a flower bed', width: 1600, height: 1067 },
      { src: '/images/gallery/29.jpg', alt: 'Tan terrier mix nose to nose with a gray Shih Tzu in an orange harness on the grass', width: 1600, height: 1100 },
      { src: '/images/gallery/30.jpg', alt: 'Tan terrier mix and a gray Shih Tzu standing side by side on a sunny lawn', width: 1600, height: 1162 },
      { src: '/images/gallery/31.jpg', alt: 'Tan Corgi mix in a Spider-Man costume in profile, with a Shih Tzu watching behind', width: 1600, height: 865 },
      { src: '/images/gallery/34.jpg', alt: 'Two Corgis in bumblebee costumes sitting in front of monstera leaves', width: 1600, height: 1067 },
      { src: '/images/gallery/35.jpg', alt: 'Four dogs in holiday pajamas posing by a Christmas tree', width: 1600, height: 1082 },
      { src: '/images/gallery/36.jpg', alt: 'Gray and white Shih Tzu wearing a bone-shaped name tag', width: 605, height: 830 },
      { src: '/images/gallery/32.jpg', alt: 'Tricolor Corgi puppy in a light blue striped hoodie looking up', width: 1103, height: 1600 },
      { src: '/images/gallery/33.jpg', alt: 'Tricolor Corgi puppy in a light blue striped hoodie on a tile floor', width: 1067, height: 1600 },
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'still-life',
    title: 'Still Life',
    category: 'Portrait',
    year: 2022,
    client: 'Self-directed',
    location: 'California, USA',
    description:
      'A quieter side of the pet portrait work: close studies in natural light that prioritize mood over moment. Black and white conversions reduce the subject to its essentials: eyes, expression, and the story held in a single look.',
    coverImage: '/images/works/01.jpg',
    coverImageAlt: 'Corgi black and white portrait closeup',
    images: [
      { src: '/images/gallery/08.jpg', alt: 'Corgi in tall grass, black and white', width: 1200, height: 900 },
      { src: '/images/gallery/05.jpg', alt: 'Shih Tzu with tie, black and white', width: 1200, height: 900 },
      { src: '/images/works/02.jpg', alt: 'Shih Tzu with flowers and blue tie', width: 1200, height: 900 },
      { src: '/images/gallery/22.jpg', alt: 'Shih Tzu in a polka-dot bandana with balloons behind, black and white', width: 1067, height: 1600 },
    ],
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
