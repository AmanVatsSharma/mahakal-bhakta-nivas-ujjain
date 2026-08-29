/**
 * Site-wide configuration and content data
 */

export const SITE = {
	name: 'Mahakal Bhakta Nivas',
	tagline: 'Your Spiritual Home Near Mahakaleshwar Temple',
	url: 'https://www.shrimahakalbhaktniwasujjain.com',
	base: '/',
	phone: '+91-9989898989',
	phoneDisplay: '+91 99898 98989',
	email: 'info@mahakalbhakta.in',
	whatsapp: '+919989898989',
	address: 'Near Mahakaleshwar Temple, Gopal Mandir Road, Ujjain, MP 456006',
	defaultImage: '/og-default.jpg',
	description: 'Mahakal Bhakta Nivas is the most trusted dharmashala in Ujjain — clean, affordable, and just a 2-minute walk from Mahakaleshwar Jyotirlinga. Book online now!',
	keywords: [
		'mahakal bhakta nivas',
		'ujjain dharmashala',
		'hotels near mahakaleshwar temple',
		'accommodation near mahakaleshwar',
		'mahakaleshwar temple stay',
		'ujjain pilgrim accommodation',
		'dharamshala ujjain',
		'ujjain mahakal hotel',
		'mahakaleshwar jyotirlinga stay',
		'budget hotel ujjain',
		'kumbh mela ujjain accommodation',
		'ujjain temple stay',
	],
};

export const CONTACT = {
	phone: '+91-9989898989',
	phoneDisplay: '+91 99898 98989',
	whatsapp: '+919989898989',
	email: 'info@mahakalbhakta.in',
	address: 'Near Mahakaleshwar Temple, Gopal Mandir Road, Ujjain, MP 456006',
	coordinates: { lat: 23.1829, lng: 75.7686 },
};

export const NAV_LINKS = [
	{ label: 'Rooms', href: '#rooms' },
	{ label: 'Amenities', href: '#amenities' },
	{ label: 'Location', href: '#location' },
	{ label: 'Reviews', href: '#testimonials' },
	{ label: 'FAQs', href: '#faq' },
	{ label: 'Contact', href: '#contact' },
];

export const ROOMS = [
	{
		id: 'non-ac-dormitory',
		name: 'Non-AC Dormitory',
		slug: 'non-ac-dormitory',
		price: 600,
		priceText: '₹600',
		capacity: '4-6 guests per room',
		size: '12 sq.m',
		image: '/images/rooms/dormitory.webp',
		imageAlt: 'Non-AC Dormitory Room at Mahakal Bhakta Nivas',
		description: 'Budget-friendly dormitory with shared bathrooms. Perfect for solo travellers, groups, or backpackers looking for an affordable stay near Mahakaleshwar.',
		features: ['Shared bathroom', 'Hot water', 'Cot with clean linen', '24/7 power backup', 'Near Mahakaleshwar Temple'],
		badge: 'Most Economical',
	},
	{
		id: 'ac-double',
		name: 'AC Double Room',
		slug: 'ac-double-room',
		price: 1500,
		priceText: '₹1,500',
		capacity: '2 guests',
		size: '14 sq.m',
		image: '/images/rooms/ac-room.webp',
		imageAlt: 'AC Double Room at Mahakal Bhakta Nivas Ujjain',
		description: 'Private air-conditioned room with attached bathroom. Ideal for couples and small families. Clean, comfortable, and just steps from the temple.',
		features: ['Air conditioning', 'Attached bathroom', 'Hot water', 'Cot with mattress', '24/7 power backup'],
		badge: 'Best Value',
	},
	{
		id: 'ac-triple',
		name: 'AC Triple Room',
		slug: 'ac-triple-room',
		price: 1800,
		priceText: '₹1,800',
		capacity: '3 guests',
		size: '16 sq.m',
		image: '/images/rooms/triple-room.webp',
		imageAlt: 'AC Triple Room at Mahakal Bhakta Nivas',
		description: 'Spacious AC room with 3 cots and attached bathroom. Great for families or groups of friends visiting Mahakaleshwar together.',
		features: ['Air conditioning', 'Attached bathroom', 'Hot water', '3 cots', '24/7 power backup'],
		badge: null,
	},
	{
		id: 'ac-family',
		name: 'AC Family Suite',
		slug: 'ac-family-suite',
		price: 2500,
		priceText: '₹2,500',
		capacity: '4-6 guests',
		size: '24 sq.m',
		image: '/images/rooms/family-room.webp',
		imageAlt: 'AC Family Suite at Mahakal Bhakta Nivas',
		description: 'Our largest room with a king-size bed and additional cots. Perfect for larger families visiting for Mahakaleshwar darshan.',
		features: ['Air conditioning', 'Attached bathroom', 'Hot water', 'King-size bed', 'Additional cots', '24/7 power backup', 'TV'],
		badge: 'Premium',
	},
];

export const AMENITIES = [
	{ icon: '🕉️', title: 'Near Mahakaleshwar', desc: '2-minute walk to the temple' },
	{ icon: '❄️', title: 'Air Conditioning', desc: 'Cool comfort in all AC rooms' },
	{ icon: '🍽️', title: 'Pure Veg Meals', desc: 'Satvik thali available' },
	{ icon: '📶', title: 'Free WiFi', desc: 'Stay connected with family' },
	{ icon: '🚿', title: 'Hot Water', desc: '24/7 hot water supply' },
	{ icon: '🔒', title: '24/7 Security', desc: 'Safe and secure premises' },
	{ icon: '🅿️', title: 'Parking', desc: 'Free parking for cars & bikes' },
	{ icon: '🧹', title: 'Housekeeping', desc: 'Daily room cleaning' },
	{ icon: '💊', title: 'Medical', desc: 'First aid & nearby hospitals' },
	{ icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', desc: 'Kids & elders welcome' },
];

export const TESTIMONIALS = [
	{
		name: 'Rajesh Kumar',
		location: 'Mumbai, Maharashtra',
		rating: 5,
		text: 'Best dharmashala in Ujjain. Clean rooms, very close to Mahakaleshwar temple. The staff was extremely helpful and cooperative.',
		date: '2 weeks ago',
	},
	{
		name: 'Priya Sharma',
		location: 'Indore, MP',
		rating: 5,
		text: 'We had a wonderful stay with our family during Mahashivratri. The veg food was excellent and rooms were very clean. Highly recommended!',
		date: '1 month ago',
	},
	{
		name: 'Amit Patel',
		location: 'Ahmedabad, Gujarat',
		rating: 5,
		text: 'Perfect for spiritual travellers. Walking distance to Mahakaleshwar temple. The AC room was very comfortable. Will stay again.',
		date: '2 months ago',
	},
	{
		name: 'Sunita Devi',
		location: 'Delhi',
		rating: 5,
		text: 'Very clean and peaceful place. The staff helped us with all temple timings and arrangements. Very affordable and recommended.',
		date: '3 months ago',
	},
	{
		name: 'Ramesh Iyer',
		location: 'Pune, Maharashtra',
		rating: 4,
		text: 'Good budget option near the temple. Rooms were clean, food was tasty. The only improvement needed is better sound insulation.',
		date: '4 months ago',
	},
	{
		name: 'Kavitha Reddy',
		location: 'Hyderabad, Telangana',
		rating: 5,
		text: 'Excellent stay! The location is unbeatable - just 2 mins from Mahakaleshwar. The AC suite was spacious and well-maintained.',
		date: '5 months ago',
	},
];

export const FAQ_DATA = [
	{
		question: 'How far is Mahakal Bhakta Nivas from Mahakaleshwar Temple?',
		answer: 'We are located just 200 metres (about a 3-minute walk) from the main Mahakaleshwar Temple gates. Our proximity makes it easy for devotees to attend morning and evening aartis without any travel hassle.',
	},
	{
		question: 'How can I reach Mahakal Bhakta Nivas from Ujjain Railway Station?',
		answer: 'Ujjain Railway Station is approximately 3 km away. Auto-rickshaws and local taxis are readily available (10–15 minutes). We can also arrange a pickup on request — just call us in advance.',
	},
	{
		question: 'Do you provide meals with the rooms?',
		answer: 'Yes, we offer pure vegetarian satvik meals as part of select packages. Guests can also enjoy our complimentary morning tea and prasadam. The on-site canteen serves local and North Indian cuisine.',
	},
	{
		question: 'Can I book rooms online?',
		answer: 'Absolutely! You can book directly through our website, call us, or message us on WhatsApp. Online bookings confirm instantly, and we will share booking details and directions via SMS.',
	},
	{
		question: 'What is the check-in and check-out time?',
		answer: 'Standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in or late check-out can be arranged subject to availability — please contact us in advance.',
	},
	{
		question: 'Do you offer group or family booking discounts?',
		answer: 'Yes! We offer special rates for family groups, temple trusts, and large devotional groups. For groups of 10 or more, please contact us directly for custom packages.',
	},
	{
		question: 'Is parking available at the dharmashala?',
		answer: 'Yes, we have dedicated parking space for two-wheelers and four-wheelers. Our premises are secured with CCTV surveillance for the safety of your vehicle.',
	},
	{
		question: 'What payment methods do you accept?',
		answer: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), all major credit and debit cards. Online payments via our website booking engine are also supported.',
	},
	{
		question: 'Are there any nearby temples I should visit?',
		answer: 'Ujjain is one of the 12 Jyotirlinga sites and home to many sacred spots. Key temples near us include: Harsiddhi Temple (1 km), Ram Ghat (500 m), Gopal Mandir (1.5 km), and the famous Kumbh Mela site on the Shipra River.',
	},
];

export const GALLERY_CATEGORIES = [
	{ id: 'all', label: 'All' },
	{ id: 'rooms', label: 'Rooms' },
	{ id: 'temple', label: 'Temple & Ghats' },
	{ id: 'food', label: 'Food' },
	{ id: 'exterior', label: 'Exterior' },
];

export const GALLERY_ITEMS = [
	{ id: 1, src: '/images/gallery/placeholder.webp', alt: 'Dormitory room at Mahakal Bhakta Nivas', category: 'rooms', featured: true },
	{ id: 2, src: '/images/gallery/placeholder.webp', alt: 'AC room interior with comfortable bedding', category: 'rooms' },
	{ id: 3, src: '/images/gallery/placeholder.webp', alt: 'Mahakaleshwar Temple main entrance', category: 'temple', featured: true },
	{ id: 4, src: '/images/gallery/placeholder.webp', alt: 'Ram Ghat during sunset', category: 'temple' },
	{ id: 5, src: '/images/gallery/placeholder.webp', alt: 'Pure vegetarian thali meal', category: 'food', featured: true },
	{ id: 6, src: '/images/gallery/placeholder.webp', alt: 'Morning prasadam and tea', category: 'food' },
	{ id: 7, src: '/images/gallery/placeholder.webp', alt: 'Exterior view of Mahakal Bhakta Nivas', category: 'exterior', featured: true },
	{ id: 8, src: '/images/gallery/placeholder.webp', alt: 'Reception and lobby area', category: 'exterior' },
	{ id: 9, src: '/images/gallery/placeholder.webp', alt: 'Family suite room', category: 'rooms' },
	{ id: 10, src: '/images/gallery/placeholder.webp', alt: 'Shipra River Ghat at night', category: 'temple' },
	{ id: 11, src: '/images/gallery/placeholder.webp', alt: 'Temple morning aarti crowd', category: 'temple' },
	{ id: 12, src: '/images/gallery/placeholder.webp', alt: 'Parking area at the dharmashala', category: 'exterior' },
];

export const STATS = [
	{ value: '10,000+', label: 'Happy Devotees' },
	{ value: '50+', label: 'Clean Rooms' },
	{ value: '24/7', label: 'Support Available' },
	{ value: '4.8★', label: 'Google Rating' },
];

export const POOJAS = [
	{ name: 'Rudrabhishek', desc: 'Sacred abhishek of Lord Mahakal with Rudram chanting for prosperity and well-being.', duration: '45 mins', price: '₹1,100' },
	{ name: 'Mahamrityunjaya Jaap', desc: '108 repetitions of the Mahamrityunjaya mantra for health and longevity.', duration: '30 mins', price: '₹500' },
	{ name: 'Laghurudri', desc: 'Compact Rudram ceremony for spiritual upliftment and removal of obstacles.', duration: '30 mins', price: '₹300' },
	{ name: 'Maha Aarti Prasad', desc: 'Complete prasadam package from the temple\'s main Aarti for your family.', duration: 'Same Day', price: '₹251' },
];

export const FESTIVALS = [
	{ name: 'Maha Shivaratri', date: 'Feb/Mar (Hindu Month)', desc: 'The grandest night of Lord Shiva — thousands of devotees throng Ujjain for the midnight Bhasma Aarti.' },
	{ name: 'Simhastha (Kumbh Mela)', date: 'Every 12 Years', desc: 'One of the four sacred Kumbh Melas. Millions gather on the banks of the Kshipra River for holy dip and rituals.' },
	{ name: 'Maha Mrityunjaya Jaap Yagna', date: 'Monthly (Amavasya)', desc: 'Monthly gathering for chanting the Mahamrityunjaya mantra for peace and protection.' },
	{ name: 'Shravan Mondays', date: 'July–August', desc: 'Every Monday in the holy month of Shravan is celebrated with special abhishek at Mahakaleshwar.' },
];
