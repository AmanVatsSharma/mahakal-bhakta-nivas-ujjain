export const meta = {
  name: 'blog-seo-expansion',
  description: 'Expand short blog posts to 200+ lines and create new SEO posts',
  phases: [
    { title: 'Expand Stubs', detail: '14 x 30-line stubs -> 200+ lines' },
    { title: 'Expand Short Posts', detail: '15 x 50-99 line posts -> 200+ lines' },
    { title: 'Create New Posts', detail: '72 new posts (topics 129-200)' },
    { title: 'Expand Medium', detail: '20 medium posts to 200+ lines' },
  ],
}

// PHASE 1: Expand 14 stub posts
phase('Expand Stubs')

const stubs = [
  '12-jyotirlingas-list-mahakaleshwar.md',
  'best-veg-restaurants-near-mahakaleshwar.md',
  'how-to-book-bhasma-aarti-mahakaleshwar.md',
  'jyotirlinga-circuit-guide-ujjain.md',
  'mahakaleshwar-aarti-timings-list.md',
  'mahakaleshwar-mobile-phone-rules.md',
  'mahakaleshwar-prasad-online-delivery.md',
  'mahakaleshwar-rules-dress-code-locker.md',
  'nearest-hotel-mahakaleshwar-temple-gate.md',
  'online-room-booking-ujjain-whatsapp-guide.md',
  'ujjain-avantika-ancient-history.md',
  'ujjain-station-to-mahakaleshwar-guide.md',
  'ujjain-temple-route-map.md',
  'yatra-group-organizer-checklist.md',
]

const stubResults = await pipeline(stubs, async (filename) => {
  return await agent(
    'Read and expand src/content/blog/' + filename + ' to at least 200 lines. ' +
    'Read current file first, expand sections with detailed content, add practical info (timings, routes, tips, costs), ' +
    'add FAQ with 5-8 questions, add practical tips section, keep all frontmatter, add internal links, ' +
    'end with booking CTA. Write in clear English for Indian pilgrims. Target 200+ lines total.',
    { label: 'stub-' + filename.slice(0, 18), phase: 'Expand Stubs' }
  )
})
log('Stubs expanded: ' + stubResults.filter(Boolean).length + '/' + stubs.length)

// PHASE 2: Expand 15 short posts (50-99 lines)
phase('Expand Short Posts')

const shortPosts = [
  'one-day-ujjain-darshan-plan.md',
  'amavasya-darshan-mahakaleshwar.md',
  'vikram-kirti-mandir-ujjain.md',
  'who-is-mahakal-lord-of-time.md',
  'ram-ghat-shipra-river-guide.md',
  'story-of-mahakaleshwar-jyotirlinga.md',
]

const shortResults = await pipeline(shortPosts, async (filename) => {
  return await agent(
    'Read and expand src/content/blog/' + filename + ' to at least 200 lines. ' +
    'Read current file first, expand each section 3-5x, add historical context, legends, practical tips, ' +
    'step-by-step guides, FAQ with 5-8 questions, internal links to /rooms/ and related posts, ' +
    'keep all frontmatter, end with booking CTA.',
    { label: 'short-' + filename.slice(0, 18), phase: 'Expand Short Posts' }
  )
})
log('Short posts expanded: ' + shortResults.filter(Boolean).length + '/' + shortPosts.length)

// PHASE 3: Create 72 new posts
phase('Create New Posts')

const topics = [
  // History & Culture (12)
  'Ujjain Under the Scindias: Maratha Era Architecture and Heritage',
  'The Story of Maharani Ahilyabai Holkar and Mahakaleshwar Temple',
  'Kalidasa and Ujjain: The Greatest Sanskrit Poet and His City',
  'The Vikramaditya Legends: King Vikram and the Betal Tales',
  'Ujjain in the Mahabharata: The Avanti Kingdom and Its Heroes',
  'Bhartrihari and the Bhartrihari Caves: Philosopher-King of Ujjain',
  'Ancient Observatories of Ujjain: Vedh Shala and Jantar Mantar',
  'Ujjain as Avantika: The Ancient Name and Its Significance',
  'The Gupta Empire and Ujjain: A Golden Age of Indian Culture',
  'Ujjain Through the Ages: From Mauryan to Modern Times',
  'The Shipra River: Origin and Sacred Geography of Ujjain',
  'Dashpur Museum Ujjain: Treasure House of Ancient Artifacts',

  // Temple Guides (12)
  'Mangalnath Temple Ujjain: The Mars Temple and Astrology',
  'Bade Ganeshji Temple Ujjain: Famous Ganesha Shrine Near Mahakaleshwar',
  'Kal Bhairav Temple Ujjain: The Fierce Bhairav Temple',
  'Harsiddhi Temple Ujjain: The Divine Temple of Goddess Harsiddhi',
  'Siddhwat Temple Ujjain: The Sacred Tree Temple at Bhairav Garh',
  'Maha Mrityunjay Temple Ujjain: Temple of the Great Mantra',
  'Sundar Bihari Temple Ujjain: The Krishna Leela Temple',
  'Navagraha Temple Ujjain: The Nine Planets Temple',
  'Triveni Ghat Ujjain: The Sacred Confluence Point',
  'Gopal Mandir Ujjain: The Beautiful Krishna Temple by Ahilyabai',
  'Chintaman Ganesh Temple Ujjain: Ancient Ganesha Shrine',
  'Pisa Manki Mata Temple Ujjain: The Unique Mata Temple',

  // Travel Guides (12)
  'How to Reach Mahakaleshwar Temple: Complete Transport Guide 2026',
  'Ujjain Railway Station to Mahakaleshwar: Distance and Options',
  'Ujjain Airport: Flights, Connectivity, and Temple Guide',
  'Indore to Ujjain by Road: Bus, Taxi, Train Compared',
  'Bhopal to Ujjain: Train, Bus, and Taxi Guide',
  'Pune to Ujjain: Distance, Routes, and Best Way to Travel',
  'Mumbai to Ujjain by Train: Complete Guide with Timings',
  'Delhi to Ujjain: Flight, Train, and Bus Options',
  'Ujjain Local Transport: Auto, Taxi, and Bus Guide for Pilgrims',
  'Parking Near Mahakaleshwar Temple: Complete Guide',
  'Ujjain to Omkareshwar: Taxi and Bus Guide',
  'Ujjain to Maheshwar and Mandu: Day Trip Guide',

  // Darshan & Accommodation (12)
  'VIP Darshan at Mahakaleshwar: How to Get Quick Darshan Pass',
  'Mahakaleshwar Darshan for Senior Citizens: Special Facilities',
  'Darshan with Kids at Mahakaleshwar: Family Guide',
  'Free Darshan vs Paid Darshan at Mahakaleshwar: Comparison',
  'Best Time for Darshan at Mahakaleshwar: Avoid Crowds Guide',
  'Mahakaleshwar on Amavasya: What Makes This Day Special',
  'Mahakaleshwar on Purnima: Full Moon Day at the Jyotirlinga',
  'Photography Rules at Mahakaleshwar Temple: Complete Guide',
  'Best Budget Hotels Near Mahakaleshwar Under 500 Rupees',
  'Luxury Hotels Near Mahakaleshwar: Premium Stays in Ujjain',
  'Dharamshala Near Mahakaleshwar: Government and Private Options',
  'Homestays in Ujjain: Budget-Friendly Alternative to Hotels',

  // Food & Shopping (12)
  'Best Street Food in Ujjain: Chole Bature, Poha, and More',
  'Ujjain Special Thali: Traditional Malwa Cuisine Experience',
  'Poha and Jalebi in Ujjain: The City\'s Most Famous Breakfast',
  'Best Restaurants Near Mahakaleshwar Temple: Dining Guide',
  'Pure Veg Restaurants in Ujjain: Vegetarian Dining Guide',
  'Ujjain Sweets and Snacks: What to Buy and Where',
  'Shopping Near Mahakaleshwar: Best Markets and What to Buy',
  'Ujjain Famous Shopping: Religious Items and Handicrafts',
  'Temple Prasad Online: Order Mahakaleshwar Prasad from Home',
  'Ujjain Handicrafts and Souvenirs: What to Buy for Family',
  'Malwa Cuisine: The Rich Food Culture of Ujjain Region',
  'Ujjain Market Areas: Sarafa, Chaugan, and More',

  // Festivals & Rituals (12)
  'Shravan Month in Ujjain: Complete Guide for 2026',
  'Sawan Somvar Vrat: Complete Guide for Ujjain Pilgrims',
  'Maha Shivaratri at Mahakaleshwar: Complete Festival Guide 2026',
  'Simhastha Kumbh Mela Ujjain 2028: Complete Guide for Pilgrims',
  'Kartik Mas at Mahakaleshwar: The Sacred Month of Kartik',
  'Diwali at Mahakaleshwar: Festival of Lights at the Jyotirlinga',
  'Anant Chaturdashi at Ujjain: The Sacred Festival of Immortality',
  'Mahakaleshwar Jyotirlinga Abhishek: Types and Timings',
  'Yatra Preparation Checklist: Things to Carry for Mahakaleshwar',
  'Group Yatra to Ujjain: Tips for Organizing a Pilgrimage Group',
  'Char Dham Yatra from Ujjain: Planning the Complete Circuit',
  'Do and Don\'ts at Mahakaleshwar Temple: Complete Guide',
]

const newResults = await pipeline(topics, async (title) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const lower = title.toLowerCase()
  let tagStr = 'history,mahakaleshwar,ujjain'
  if (lower.includes('food') || lower.includes('cuisine') || lower.includes('restaurant') ||
      lower.includes('thali') || lower.includes('poha') || lower.includes('chole') ||
      lower.includes('sweets') || lower.includes('malwa') || lower.includes('chai') || lower.includes('paan')) {
    tagStr = 'food,mahakaleshwar,ujjain'
  } else if (lower.includes('shop') || lower.includes('market') || lower.includes('handicraft') ||
             lower.includes('souvenir') || lower.includes('rudraksha')) {
    tagStr = 'shopping,mahakaleshwar,ujjain'
  } else if (lower.includes('darshan') || lower.includes('vip') || lower.includes('crowd') ||
             lower.includes('photography') || lower.includes('dress') || lower.includes('mobile') ||
             lower.includes('etiquette')) {
    tagStr = 'darshan,mahakaleshwar,ujjain'
  } else if (lower.includes('hotel') || lower.includes('stay') || lower.includes('homestay') ||
             lower.includes('dharamshala')) {
    tagStr = 'accommodation,mahakaleshwar,ujjain'
  } else if (lower.includes('shivaratri') || lower.includes('diwali') || lower.includes('shravan') ||
             lower.includes('sawan') || lower.includes('kumbh') || lower.includes('kartik') ||
             lower.includes('festival') || lower.includes('vrat') || lower.includes('navratri') ||
             lower.includes('garba')) {
    tagStr = 'festivals,mahakaleshwar,ujjain'
  } else if (lower.includes('temple') || lower.includes('mandir') || lower.includes('ghat')) {
    tagStr = 'temples,mahakaleshwar,ujjain'
  } else if (lower.includes('reach') || lower.includes('train') || lower.includes('bus') ||
             lower.includes('transport') || lower.includes('airport') || lower.includes('station') ||
             lower.includes('indore') || lower.includes('bhopal') || lower.includes('mumbai') ||
             lower.includes('delhi') || lower.includes('parking') || lower.includes('local') ||
             lower.includes('yatra') || lower.includes('checklist') || lower.includes('itinerary')) {
    tagStr = 'travel,mahakaleshwar,ujjain'
  }

  const tagList = tagStr.split(',').map(function(t) { return '- ' + t.trim() }).join('\n')
  const firstKw = title.toLowerCase().split(':')[0].trim()

  const content = '---\n' +
    "title: '" + title + "'\n" +
    "description: 'A comprehensive guide to " + title.toLowerCase() + " - everything you need to know before visiting Mahakaleshwar and Ujjain.'\n" +
    "pubDate: '2026-10-01'\n" +
    "heroImage: /gallery/3.jpg\n" +
    "heroAlt: " + title + "\n" +
    'tags:\n' + tagList + '\n' +
    'keywords:\n- mahakaleshwar\n- ujjain\n- ' + firstKw + '\n---\n\n' +
    'Write a 250-350 line blog post covering: ' + title + '. ' +
    'Include practical info (timings, routes, costs, tips), historical context, 5-8 FAQ questions. ' +
    'Add internal links to /rooms/ and /blog/mahakaleshwar-darshan-guide/. End with booking CTA. ' +
    'Use ## headings, **bold**, bullet lists. Write in clear English for Indian pilgrims. ' +
    'FILE: src/content/blog/' + slug + '.md'

  return await agent(content, {
    label: 'new-' + slug.slice(0, 22),
    phase: 'Create New Posts'
  })
})
log('New posts created: ' + newResults.filter(Boolean).length + '/' + topics.length)

// PHASE 4: Expand 20 medium posts (100-199 lines)
phase('Expand Medium')

const mediumPosts = [
  'mangalnath-temple-ujjain.md',
  'bade-ganeshji-temple-ujjain.md',
  'kal-bhairav-temple-ujjain.md',
  'harsiddhi-temple-ujjain.md',
  'siddhwat-temple-ujjain.md',
  'bhartari-caves-ujjain.md',
  'kailash-palace-ujjain.md',
  'ram-ghat-ujjain.md',
  'maha-mrityunjay-temple-ujjain.md',
  'sundar-bihari-temple-ujjain.md',
  'nagziri-temple-ujjain.md',
  'dharmanath-temple-ujjain.md',
  'pisamanki-mata-ujjain.md',
  'vedh-shala-ujjain.md',
  'gopal-mandir-ujjain-guide.md',
  'chintaman-ganesh-temple-ujjain.md',
  'facilities-at-mahakaleshwar-guide.md',
  'best-veg-restaurants-near-mahakaleshwar.md',
  'nearest-hotel-mahakaleshwar-temple-gate.md',
  'ujjain-temple-route-map.md',
]

log('Expanding ' + mediumPosts.length + ' medium posts')

const medResults = await pipeline(mediumPosts, async (filename) => {
  return await agent(
    'Read and expand src/content/blog/' + filename + ' to at least 200 lines. ' +
    'Read current file first, expand sections 2-3x, add practical tips, FAQs, internal links. ' +
    'Keep all frontmatter, end with booking CTA.',
    { label: 'med-' + filename.slice(0, 20), phase: 'Expand Medium' }
  )
})
log('Medium expanded: ' + medResults.filter(Boolean).length + '/' + mediumPosts.length)

// Summary
log('BLOG EXPANSION COMPLETE')
log('Stubs expanded: ' + stubResults.filter(Boolean).length + '/' + stubs.length)
log('Short posts expanded: ' + shortResults.filter(Boolean).length + '/' + shortPosts.length)
log('New posts created: ' + newResults.filter(Boolean).length + '/' + topics.length)
log('Medium posts expanded: ' + medResults.filter(Boolean).length + '/' + mediumPosts.length)
log('Total new/expanded: ' + (stubResults.filter(Boolean).length + shortResults.filter(Boolean).length + newResults.filter(Boolean).length + medResults.filter(Boolean).length))

return {
  stubsExpanded: stubResults.filter(Boolean).length,
  shortExpanded: shortResults.filter(Boolean).length,
  newCreated: newResults.filter(Boolean).length,
  mediumExpanded: medResults.filter(Boolean).length,
}
