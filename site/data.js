// Content for the CCCPB redesigned prototype.
window.CCCPB = {
  event: {
    edition: "27th Annual",
    name: "Collin County Christian Prayer Breakfast",
    short: "CCCPB",
    date: new Date("2026-04-30T07:07:00-05:00"),
    dateLabel: "Thursday, April 30, 2026",
    timeLabel: "Doors 6:30 a.m. • Program begins 7:07 a.m.",
    venue: "Plano Event Center",
    venueAddr: "2000 E. Spring Creek Pkwy.",
    venueCity: "Plano, TX 75074",
    phone: "214-757-7259",
    email: "info@collincountychristianprayerbreakfast.com",
    founded: 1999,
    speakerName: "Elvis Andrus",
    speakerTitle: "Former MLB All‑Star • Texas Rangers Hall of Fame, 2025",
  },

  history: {
    title: "Our History",
    body: "In 1999, seven Collin County business and community leaders gathered around a shared conviction — that a county growing this fast still needed a moment to stop, kneel, and give thanks. From that small breakfast came what is today the Collin County Christian Prayer Breakfast.",
    body2: "Twenty‑seven years later, hundreds gather every National Day of Prayer for fellowship, scripture, and the quiet work of saying grace together.",
  },

  mission: {
    title: "Our Mission",
    body: "“At the name of Jesus every knee shall bow.” Philippians 2:10",
    body2: "We exist to glorify God, to encourage believers, and to invite our neighbors to consider Christ — across denominations, generations, and walks of life in Collin County.",
  },

  whatWeDo: {
    title: "What We Do",
    body: "Each year the all‑volunteer board brings together residents, business leaders, civic officials, students, pastors and families for one morning of testimony, prayer, and worship. Every dollar after expenses returns to Collin County ministries.",
  },

  speaker: {
    name: "Elvis Andrus",
    headline: "From shortstop to servant.",
    short: "Former MLB All‑Star • Devoted Christian • Family Man • Charity Advocate",
    quote: "“The records you set don’t outlast you. The people you love do.”",
    bio: [
      "Elvis Andrus played 15 seasons in Major League Baseball, the bulk of them at shortstop for the Texas Rangers. In 2025 he was inducted into the Rangers Hall of Fame.",
      "Beyond the field, Elvis is a man of deep faith. A devout Christian, he speaks often about how his relationship with God has shaped his career, his marriage, and the way he raises his children.",
      "Since retiring, Elvis has poured his time into charitable work — focused especially on underprivileged children and families in North Texas — proving that true success isn’t measured by records broken, but by the lives touched.",
    ],
    stats: [
      { k: "MLB Seasons", v: "15" },
      { k: "All‑Star Selections", v: "2" },
      { k: "Texas Rangers HOF", v: "2025" },
      { k: "Children's charities supported", v: "12+" },
    ],
  },

  program: [
    { t: "6:30 a.m.", title: "Doors open & breakfast buffet", body: "Coffee, fellowship, and a hot breakfast in the main hall." },
    { t: "7:07 a.m.", title: "Welcome & opening prayer", body: "A word of welcome from the CCCPB board chair." },
    { t: "7:15 a.m.", title: "Scripture & worship", body: "A reading from Philippians 2 followed by a hymn led by the Collin County combined choir." },
    { t: "7:35 a.m.", title: "Keynote: Elvis Andrus", body: "“From shortstop to servant.” A testimony on faith, family, and life after the game." },
    { t: "8:10 a.m.", title: "Community prayer", body: "Prayer for Collin County — our schools, first responders, leaders, and neighbors." },
    { t: "8:25 a.m.", title: "Benediction & dismissal", body: "Closing prayer. Guests dismissed in time for the workday." },
  ],

  tickets: [
    { id: "ind", name: "Individual Ticket", price: 50, desc: "A single seat at a shared table. Breakfast included.", note: "Most popular for first-time attendees." },
    { id: "table", name: "Table of Eight", price: 400, desc: "Reserve a full table to host friends, coworkers, or your ministry team.", note: "Includes premium seating near the stage." },
  ],

  sponsorships: [
    { id: "bronze", name: "Bronze", price: 500, seats: 4, perks: ["4 reserved seats", "Name in program", "Recognition on event slideshow"] },
    { id: "silver", name: "Silver", price: 750, seats: 8, perks: ["Table of 8", "Half-page in program", "Logo on event slideshow"] },
    { id: "gold", name: "Gold", price: 1000, seats: 10, perks: ["Table of 10 — premium seating", "Full-page in program", "Logo on website + slideshow", "Verbal acknowledgement at event"], featured: true },
    { id: "patron", name: "Patron", price: 2500, seats: 16, perks: ["Two premium tables (16 seats)", "Patron page in program", "Logo on website, slideshow + signage", "Seated near keynote speaker"] },
  ],

  donateLevels: [
    { v: 25, label: "Friend" },
    { v: 75, label: "Encourager" },
    { v: 150, label: "Sustainer" },
    { v: 500, label: "Benefactor" },
  ],

  gallery: [
    { y: "2024", caption: "Worship in the main hall" },
    { y: "2024", caption: "Board members in prayer" },
    { y: "2023", caption: "Combined choir, opening hymn" },
    { y: "2023", caption: "A full house, 7:07 a.m." },
    { y: "2022", caption: "Keynote testimony" },
    { y: "2022", caption: "Sponsor reception" },
    { y: "2019", caption: "20th anniversary breakfast" },
    { y: "2018", caption: "Family table" },
  ],

  scriptures: [
    { ref: "Philippians 2:10–11", text: "That at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord." },
    { ref: "2 Chronicles 7:14", text: "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land." },
  ],

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "program", label: "Program", children: [
      { id: "program", label: "Program at a glance" },
      { id: "speaker", label: "Speaker" },
      { id: "gallery", label: "Gallery" },
      { id: "location", label: "Location" },
    ] },
    { id: "tickets", label: "Tickets" },
    { id: "donate", label: "Donate" },
  ],
};
