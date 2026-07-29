export const siteConfig = {
  name: "Mahakal Bhakta Nivas",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@mahakalbhaktanivas.com",
  address: "Dharamshala Road, Near Mahakaleshwar Temple, Ujjain, Madhya Pradesh 456001",
  lat: "23.1765",
  lng: "75.7685",
  hours: "Open 24 Hours, 7 Days a Week",
  seo: {
    defaultTitle: "Mahakal Bhakta Nivas Ujjain | Best Dharmashala Near Mahakaleshwar Temple",
    defaultDescription:
      "Book your stay at Mahakal Bhakta Nivas, the most trusted dharmashala in Ujjain just 500 meters from Mahakaleshwar Jyotirlinga Temple. Affordable rooms, 24/7 service, pure veg food. Reserve now on WhatsApp!",
    defaultImage: "/og-image.jpg",
    siteUrl: "https://mahakalbhaktanivas.com",
  },
};

export const features = [
  { icon: "🛐", title: "500m from Temple", desc: "Walk to Mahakaleshwar Temple in under 5 minutes for Bhasma Aarti." },
  { icon: "🍽", title: "Pure Veg Meals", desc: "Sattvic, hygienic vegetarian meals prepared with devotion and care." },
  { icon: "🔒", title: "24×7 Secure Stay", desc: "Round-the-clock reception, CCTV, and secure premises." },
  { icon: "💧", title: "Clean & Hygienic", desc: "Daily cleaning, fresh linen, and hot water in all rooms." },
  { icon: "📶", title: "Free Wi-Fi", desc: "Stay connected with complimentary high-speed Wi-Fi." },
  { icon: "💵", title: "Affordable Rates", desc: "Clean, comfortable rooms starting at ₹600 onwards." },
];

export const rooms = [
  { name: "Standard Room", price: "₹600/night", capacity: "2 Guests", size: "120 sq ft", features: ["Single/Double Bed", "Attached Bathroom", "Hot Water", "Free Wi-Fi"], image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80", popular: false },
  { name: "Deluxe Room", price: "₹1,200/night", capacity: "3 Guests", size: "180 sq ft", features: ["Double Bed", "Geyser & AC", "TV", "Study Table", "Free Wi-Fi"], image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", popular: true },
  { name: "Family Dormitory", price: "₹1,800/night", capacity: "6 Guests", size: "350 sq ft", features: ["3 Double Beds", "Common Hall", "AC", "TV", "Free Wi-Fi"], image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80", popular: false },
  { name: "Budget Dorm", price: "₹250/bed/night", capacity: "Shared", size: "Per Bed", features: ["Shared Bathroom", "Fan", "Locker", "Free Wi-Fi"], image: "https://images.unsplash.com/photo-1555854877-bab0e1dac0a7?w=600&q=80", popular: false },
];

export const testimonials = [
  { name: "Rajesh Sharma", location: "Mumbai", text: "Best place to stay during Simhastha! Walking distance from temple, pure veg food and very clean rooms. The staff was extremely helpful with darshan timings.", rating: 5 },
  { name: "Priya & Family", location: "Delhi", text: "We stayed for Mahashivratri. The location is unbeatable — just 2 minutes to the temple. Rooms were clean and affordable. Will definitely come again.", rating: 5 },
  { name: "Amit Patel", location: "Ahmedabad", text: "Very peaceful place right next to Mahakal temple. Good for families and solo pilgrims alike. The booking process via WhatsApp was seamless.", rating: 5 },
];

export const faqs = [
  { question: "How far is Mahakal Bhakta Nivas from Mahakaleshwar Temple?", answer: "We are located just 500 meters (about a 5-minute walk) from the Mahakaleshwar Jyotirlinga Temple. Our prime location makes it convenient for all darshans, especially the famous Bhasma Aarti." },
  { question: "Is the food pure vegetarian?", answer: "Yes, we serve only pure vegetarian (sattvic) meals prepared with devotion. Our kitchen follows strict vegetarian practices, making it ideal for all pilgrims." },
  { question: "Can I book directly via WhatsApp?", answer: "Absolutely! Just click the 'Book on WhatsApp' button on our website or message us at +91 98765 43210. We respond within minutes to confirm your booking." },
  { question: "What is the cancellation policy?", answer: "We offer free cancellation up to 24 hours before check-in. Cancellations within 24 hours will be charged for one night." },
  { question: "Do you offer early check-in or late check-out?", answer: "Early check-in and late check-out are subject to availability. Please contact us in advance so we can arrange it for you." },
];

export const poojas = [
  { name: "Rudrabhishek", desc: "Sacred abhishek of Lord Mahakal with Rudram chanting for prosperity and well-being.", duration: "45 mins", price: "₹1,100" },
  { name: "Mahamrityunjaya Jaap", desc: "108 repetitions of the Mahamrityunjaya mantra for health and longevity.", duration: "30 mins", price: "₹500" },
  { name: "Laghurudri", desc: "Compact Rudram ceremony for spiritual upliftment and removal of obstacles.", duration: "30 mins", price: "₹300" },
  { name: "Maha Aarti Prasad", desc: "Complete prasadam package from the temple's main Aarti for your family.", duration: "Same Day", price: "₹251" },
];

export const festivals = [
  { name: "Maha Shivaratri", date: "Feb/Mar (Hindu Month)", desc: "The grandest night of Lord Shiva — thousands of devotees throng Ujjain for the midnight Bhasma Aarti." },
  { name: "Simhastha (Kumbh Mela)", date: "Every 12 Years", desc: "One of the four sacred Kumbh Melas. Millions gather on the banks of the Kshipra River for holy dip and rituals." },
  { name: "Maha Mrityunjaya Jaap Yagna", date: "Monthly (Amavasya)", desc: "Monthly gathering for chanting the Mahamrityunjaya mantra for peace and protection." },
  { name: "Shravan Mondays", date: "July–August", desc: "Every Monday in the holy month of Shravan is celebrated with special abhishek at Mahakaleshwar." },
];

export const amenities = [
  "Pure Veg Restaurant", "24×7 Hot Water", "Free Wi-Fi", "Room Service",
  "Cloak Room", "Parking", "Drinking Water", "Power Backup",
  "CCTV Security", "First Aid", "Laundry Service", "Travel Desk"
];
