export const meta = {
  name: 'blog-expansion-round2',
  description: 'Expand remaining short/medium blog posts to 200+ lines and create the 1 failed post',
  phases: [
    { title: 'Expand Short Stubs', detail: '29 posts under 100 lines -> 200+' },
    { title: 'Expand Medium Posts', detail: '75 posts 100-199 lines -> 200+' },
    { title: 'Create Failed Post', detail: 'Recreate the 1 blocked post' },
  ],
}

const fs = require('fs')
const path = require('path')
const basePath = 'C:/Users/ASUS TUF A15/Desktop/DevOPS/Websites/mahakal_bhakta_nivas_ujjain'
const blogDir = path.join(basePath, 'src/content/blog')

// Find all posts under 200 lines
var allFiles = fs.readdirSync(blogDir).filter(function(f) { return f.endsWith('.md') })
var shortPosts = allFiles.filter(function(f) {
  var lines = fs.readFileSync(path.join(blogDir, f), 'utf-8').split('\n').length
  return lines < 200
})

log('Found ' + shortPosts.length + ' posts under 200 lines')

// Split into short (<100) and medium (100-199)
var stubs = shortPosts.filter(function(f) {
  var lines = fs.readFileSync(path.join(blogDir, f), 'utf-8').split('\n').length
  return lines < 100
})
var medium = shortPosts.filter(function(f) {
  var lines = fs.readFileSync(path.join(blogDir, f), 'utf-8').split('\n').length
  return lines >= 100 && lines < 200
})

log('Stubs (<100 lines): ' + stubs.length)
log('Medium (100-199 lines): ' + medium.length)

// PHASE 1: Expand stubs
phase('Expand Short Stubs')

const stubResults = await pipeline(stubs, async (filename) => {
  return await agent(
    'Read and expand src/content/blog/' + filename + ' to at least 200 lines. ' +
    'Read the current file first. Expand every section with 3-5x more detail. ' +
    'Add practical visitor info (timings, routes, costs, tips), historical/cultural context. ' +
    'Add FAQ with 5-8 questions. Add practical tips section. ' +
    'Keep all existing frontmatter. Add internal links to /rooms/ and /blog/mahakaleshwar-darshan-guide/. ' +
    'End with booking CTA paragraph. Write in clear English for Indian pilgrims.',
    { label: 'stub2-' + filename.slice(0, 18), phase: 'Expand Short Stubs' }
  )
})
log('Stubs expanded: ' + stubResults.filter(Boolean).length + '/' + stubs.length)

// PHASE 2: Expand medium posts
phase('Expand Medium Posts')

const medResults = await pipeline(medium, async (filename) => {
  return await agent(
    'Read and expand src/content/blog/' + filename + ' to at least 200 lines. ' +
    'Read the current file first. Expand each section with 2-3x more detail and new subsections. ' +
    'Add practical tips, cost estimates, step-by-step instructions where relevant. ' +
    'Add FAQ with 5-8 questions. Keep all existing frontmatter. ' +
    'Add internal links to /rooms/ and related blog posts. End with booking CTA.',
    { label: 'med2-' + filename.slice(0, 18), phase: 'Expand Medium Posts' }
  )
})
log('Medium expanded: ' + medResults.filter(Boolean).length + '/' + medium.length)

// PHASE 3: Create the failed post (ujjain-through-the-ages)
phase('Create Failed Post')

const failedContent = "---\n" +
  "title: 'Ujjain Through the Ages: From Mauryan to Modern Times'\n" +
  "description: 'A comprehensive history of Ujjain from ancient Mauryan times through the Gupta era, Maratha rule, to modern day - complete with key sites to visit.'\n" +
  "pubDate: '2026-10-01'\n" +
  "heroImage: /gallery/3.jpg\n" +
  "heroAlt: Ujjain Through the Ages\n" +
  "tags:\n- history\n- mahakaleshwar\n- ujjain\n" +
  "keywords:\n- ujjain history\n- ujjain timeline\n- ancient ujjain\n- ujjain historical places\n---\n\n" +
  "Ujjain is one of the oldest continuously inhabited cities in India. Its history spans over 2,000 years, from the Mauryan Empire through the Gupta golden age, the Maratha era, and into modern times. Understanding this layered history transforms a simple temple visit into a journey through living history.\n\n" +
  "## The Mauryan Period (322-185 BCE)\n\n" +
  "Ujjain rose to prominence during the Mauryan Empire as a major administrative and commercial center. Emperor Ashoka served as the viceroy of Ujjain before becoming emperor. The city was an important hub on the trade routes connecting the Gangetic plain to the Deccan plateau.\n\n" +
  "**Key facts about Mauryan Ujjain:**\n\n" +
  "- Ashoka's son Mahinda and daughter Sanghamitta, who spread Buddhism to Sri Lanka, are believed to have been born in Ujjain\n" +
  "- The city had a sophisticated water management system with reservoirs and canals\n" +
  "- Ujjain was a center of learning and attracted scholars from across the subcontinent\n\n" +
  "The Mauryan period established Ujjain as a city of political importance, a status it would maintain for centuries.\n\n" +
  "## The Gupta Golden Age (320-550 CE)\n\n" +
  "The Gupta Empire represents the golden age of Ujjain. Under Gupta patronage, the city became one of the greatest centers of Sanskrit learning, art, and culture in the ancient world.\n\n" +
  "### Kalidasa: Ujjain's Greatest Son\n\n" +
  "The legendary Sanskrit poet Kalidasa lived in Ujjain during the Gupta period. His masterpiece Meghaduta (The Cloud Messenger) begins with a lover in Ujjain sending a message via a cloud to his beloved in the Himalayas. The poem's opening verses describe the city:\n\n" +
  "> There is a city called Ujjain, washed by the bright waters of the Shipra...\n\n" +
  "Kalidasa's works immortalized Ujjain in Sanskrit literature. His descriptions of the city's ghats, temples, and the Shipra river remain some of the most evocative portrayals of ancient Ujjain.\n\n" +
  "**Other Gupta-era achievements in Ujjain:**\n\n" +
  "- The Vikramaditya legend was popularized during this period\n" +
  "- Astronomy and mathematics flourished - Ujjain was the zero-degree longitude of ancient Indian astronomers\n" +
  "- Temple architecture reached new heights of refinement\n\n" +
  "## The Medieval Period (550-1720 CE)\n\n" +
  "After the Gupta decline, Ujjain passed through several dynasties - the Harshavardhana empire, the Pratihara dynasty, and the Paramara dynasty. The most famous Paramara king was Bhoja (1011-1055 CE), a scholar-king who wrote extensively on architecture, science, and religion.\n\n" +
  "### The Delhi Sultanate and Malwa Sultanate\n\n" +
  "Ujjain came under Muslim rule in the 14th century with the Delhi Sultanate. The Malwa Sultanate, based in Mandu, controlled Ujjain for about two centuries. Despite political changes, Ujjain remained a major pilgrimage center. Many temples were damaged during this period, and the city's grandeur declined somewhat.\n\n" +
  "## The Maratha Era (1720-1818 CE)\n\n" +
  "The Marathas, under the Peshwas, brought Ujjain back to prominence. The Holkar dynasty, founded by Malhar Rao Holkar, made Ujjain an important center of their empire.\n\n" +
  "### Maharani Ahilyabai Holkar (1725-1795)\n\n" +
  "Maharani Ahilyabai Holkar is the most revered figure in Ujjain's modern history. She ruled from Maheshwar but invested heavily in Ujjain's development. Her contributions include:\n\n" +
  "- Reconstruction of the Mahakaleshwar Temple after its destruction\n" +
  "- Building the Gopal Mandir, one of Ujjain's most beautiful temples\n" +
  "- Establishing ghats along the Shipra river\n" +
  "- Creating rest houses and water sources for pilgrims\n\n" +
  "Ahilyabai's legacy is visible everywhere in Ujjain. The city's current temple infrastructure largely dates from her reign. For more on her life, read our detailed post on [Ahilyabai Holkar and Mahakaleshwar](/blog/ahilyabai-holkar-mahakaleshwar-story/).\n\n" +
  "### The Scindia Period\n\n" +
  "After the Holkars, the Scindia dynasty of Gwalior took control of Ujjain. They built several palaces and administrative buildings, including parts of what is now the Kailash Palace. The Scindias maintained Ujjain's importance as a pilgrimage center while developing it as an administrative hub.\n\n" +
  "## British Period and Independence (1818-1947)\n\n" +
  "Ujjain became part of British India after the Third Anglo-Maratha War in 1818. The British developed Indore as their primary administrative center in the region, which somewhat reduced Ujjain's political importance. However, the city remained a major pilgrimage destination throughout the colonial period.\n\n" +
  "During the independence movement, Ujjain was relatively peaceful compared to other parts of India. The city's spiritual character meant it was less affected by communal tensions.\n\n" +
  "## Modern Ujjain (1947-Present)\n\n" +
  "After independence, Ujjain became part of Madhya Pradesh. The city has seen steady development while maintaining its sacred character.\n\n" +
  "### Key Modern Developments\n\n" +
  "| Development | Year | Significance |\n" +
  "|------------|------|-------------|\n" +
  "| Mahakal Lok Corridor | 2023 | Modern heritage walkway connecting temple to city |\n" +
  "| Simhastha Kumbh Mela | 2016 | Largest Kumbh, put Ujjain on global map |\n" +
  "| Devi Ahilyabai Holkar Airport | Modern | Improved air connectivity from Indore |\n" +
  "| Smart City Development | Ongoing | Infrastructure upgrades |\n\n" +
  "The Mahakal Lok corridor, inaugurated in 2023, is perhaps the most significant modern development. This underground and overground walkway connects the Mahakaleshwar Temple directly to the city, providing a modern, comfortable path for millions of pilgrims.\n\n" +
  "## Historical Sites to Visit in Ujjain\n\n" +
  "Each era has left its mark on Ujjain. Here are the key historical sites:\n\n" +
  "### Ancient Sites\n\n" +
  "- **Vedh Shala (Jantar Mantar)** - Built by Jai Singh II in the 18th century, this observatory is one of five he built across India. It features instruments for measuring time, tracking planets, and predicting eclipses.\n" +
  "- **Bhartrihari Caves** - Ancient meditation caves on the banks of the Shipra river\n" +
  "- **Dashpur Museum** - Houses artifacts from Ujjain's ancient and medieval periods\n\n" +
  "### Medieval Sites\n\n" +
  "- **Kailash Palace** - Scindia-era palace with Indo-Saracenic architecture\n" +
  "- **Gopal Mandir** - Built by Maharani Ahilyabai Holkar in the 18th century\n" +
  "- **Ram Ghat** - The main ghat along the Shipra, developed during the Maratha era\n\n" +
  "## Planning Your Historical Tour of Ujjain\n\n" +
  "A well-planned historical tour of Ujjain takes 2-3 days. Here is a suggested itinerary:\n\n" +
  "**Day 1: Ancient and Medieval Ujjain**\n" +
  "- Morning: Mahakaleshwar Temple darshan\n" +
  "- Afternoon: Vedh Shala and Dashpur Museum\n" +
  "- Evening: Ram Ghat for sunset\n\n" +
  "**Day 2: Temple Trail**\n" +
  "- Morning: Kal Bhairav Temple\n" +
  "- Late morning: Mangalnath Temple\n" +
  "- Afternoon: Gopal Mandir and Harsiddhi Temple\n" +
  "- Evening: Explore old Ujjain markets\n\n" +
  "## FAQ\n\n" +
  "**Q: How old is Ujjain city?**\n" +
  "A: Ujjain is over 2,500 years old, with evidence of continuous habitation since around 500 BCE. Some traditions claim it is much older, dating back to the Ramayana period.\n\n" +
  "**Q: Which dynasty contributed most to Ujjain's development?**\n" +
  "A: The Gupta Empire and Maharani Ahilyabai Holkar made the most significant contributions. The Guptas made it a center of learning, while Ahilyabai built most of the temples and infrastructure still in use today.\n\n" +
  "**Q: Are there any ancient structures still standing?**\n" +
  "A: Yes. The Vedh Shala observatory (18th century), Bhartrihari Caves (ancient), and several temples rebuilt by Ahilyabai Holkar (18th century) are still standing and open to visitors.\n\n" +
  "**Q: How has Ujjain changed in the last 50 years?**\n" +
  "A: Ujjain has grown from a medium-sized pilgrimage town to a major city. The Kumbh Mela 2016 brought international attention, and the Mahakal Lok corridor has modernized the temple approach. The airport at Indore has made the city much more accessible.\n\n" +
  "**Q: What is the best way to learn about Ujjain's history?**\n" +
  "A: Visit the Dashpur Museum, explore the Vedh Shala, and walk along the Shipra ghats. Hiring a local guide at Mahakaleshwar Temple provides excellent historical context. Our [darshan guide](/blog/mahakaleshwar-darshan-guide/) includes historical notes about each area.\n\n" +
  "## Where to Stay While Exploring Ujjain's History\n\n" +
  "To truly experience Ujjain's history, stay in the old city near the temple. Mahakal Bhakta Nivas offers comfortable rooms within walking distance of Mahakaleshwar Temple and all major historical sites. Our rooms start at affordable rates, and we provide easy [WhatsApp booking](/rooms/) for instant confirmation. Whether you are on a spiritual journey or a historical exploration, our dharamshala-style accommodation gives you the authentic Ujjain experience.\n\n" +
  "For more planning tips, see our [complete Ujjain travel guide](/blog/ujjain-station-to-mahakaleshwar-guide/) and our [room booking guide](/blog/online-room-booking-ujjain-whatsapp-guide/)."

var failedFile = path.join(blogDir, 'ujjain-through-the-ages.md')
fs.writeFileSync(failedFile, failedContent, 'utf-8')
log('Created ujjain-through-the-ages.md')

// Summary
var finalFiles = fs.readdirSync(blogDir).filter(function(f) { return f.endsWith('.md') })
var over200 = finalFiles.filter(function(f) {
  return fs.readFileSync(path.join(blogDir, f), 'utf-8').split('\n').length >= 200
}).length

log('FINAL: ' + finalFiles.length + ' total posts, ' + over200 + ' at 200+ lines')

return {
  totalPosts: finalFiles.length,
  postsOver200Lines: over200,
  stubsExpanded: stubResults.filter(Boolean).length,
  mediumExpanded: medResults.filter(Boolean).length,
  failedPostCreated: 1,
}
