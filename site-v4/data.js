// Content for the CCCPB redesigned prototype — V4 (board feedback build).
// Items marked NEEDS-CONTENT are placeholders awaiting client-supplied copy.
window.CCCPB = {
  event: {
    edition: "28th Annual",
    name: "Collin County Christian Prayer Breakfast",
    short: "CCCPB",
    date: new Date("2027-05-06T07:07:00-05:00"),
    dateLabel: "Thursday, May 6, 2027",
    timeLabel: "Doors 6:30 a.m. • Program begins 7:07 a.m.",
    ndop: "Held on the National Day of Prayer",
    venue: "Plano Event Center",
    venueAddr: "2000 E. Spring Creek Pkwy.",
    venueCity: "Plano, TX 75074",
    phone: "214-757-7259",
    email: "info@cccpb.org",
    mailName: "Collin County Christian Prayer Breakfast",
    mailPo: "PO Box 6451",
    mailCity: "McKinney, TX 75071",
    site: "cccpb.org",
    founded: 1999,
    speakerName: "Elvis Andrus",
    speakerTitle: "Former MLB All‑Star • Texas Rangers Hall of Fame, 2025",
  },

  history: {
    title: "Our History",
    body: "In 1999, a handful of Collin County neighbors — business owners, pastors, and public servants — gathered around a shared conviction: that a county is only as strong as the prayers of the people in it. From that first breakfast table came what is today the Collin County Christian Prayer Breakfast.",
    body2: "Twenty‑seven years later, we still meet the same way. Every National Day of Prayer, families, churches, city halls, schools, first responders, and businesses fill one room before the workday begins — to pray for Collin County together.",
  },

  mission: {
    title: "Our Mission",
    body: "“At the name of Jesus every knee shall bow.” Philippians 2:10",
    body2: "We exist to glorify God, to unite Collin County in prayer, and to welcome our neighbors — from every church, industry, office, and household — to seek Him together.",
  },

  whatWeDo: {
    title: "What We Do",
    body: "Each year an all‑volunteer board fills one room with the whole county: church congregations and their pastors, city and county officials, first responders and educators, business owners and young professionals, families and individuals. One morning of prayer, testimony, and a hot breakfast. Every dollar after expenses returns to Collin County ministries.",
  },

  whoComes: [
    { t: "Churches & ministries", b: "Congregations, pastors, and ministry teams — reserve a table for your church family." },
    { t: "City & county leaders", b: "Mayors, council members, county officials, first responders, and school leadership." },
    { t: "Businesses & professionals", b: "Owners, executives, and rising professionals from across Collin County." },
    { t: "Individuals & families", b: "No table, no organization, no invitation needed. One seat is all it takes." },
  ],

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

  // NEEDS-CONTENT: previous speakers — years, names, titles, and one-line summaries.
  pastSpeakers: [
    { y: "2026", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
    { y: "2025", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
    { y: "2024", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
    { y: "2023", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
    { y: "2022", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
    { y: "2021", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
    { y: "2019", name: "Speaker name", title: "Title or affiliation", note: "One line on the message they brought." },
  ],

  // NEEDS-CONTENT: board roster — names, roles, employers, headshots.
  board: [
    { name: "Board member", role: "Chair", org: "Organization" },
    { name: "Board member", role: "Treasurer", org: "Organization" },
    { name: "Board member", role: "Secretary", org: "Organization" },
    { name: "Board member", role: "Program", org: "Organization" },
    { name: "Board member", role: "Sponsorships", org: "Organization" },
    { name: "Board member", role: "Volunteers", org: "Organization" },
    { name: "Board member", role: "Church relations", org: "Organization" },
    { name: "Board member", role: "Civic relations", org: "Organization" },
    { name: "Board member", role: "Communications", org: "Organization" },
    { name: "Board member", role: "At large", org: "Organization" },
    { name: "Board member", role: "At large", org: "Organization" },
  ],

  program: [
    { t: "6:30 a.m.", title: "Doors open — breakfast & fellowship", body: "Coffee, introductions, and a hot breakfast with neighbors from across the county." },
    { t: "7:07 a.m.", title: "Welcome & opening prayer", body: "A word of welcome from the CCCPB board chair." },
    { t: "7:15 a.m.", title: "Scripture & worship", body: "A reading from Philippians 2 followed by a hymn led by the Collin County combined choir." },
    { t: "7:35 a.m.", title: "Keynote: Elvis Andrus", body: "“From shortstop to servant.” A testimony on faith, family, and life after the game." },
    { t: "8:10 a.m.", title: "Prayer for Collin County", body: "Led prayer for our churches, schools, first responders, elected leaders, businesses, and families." },
    { t: "8:25 a.m.", title: "Benediction & dismissal", body: "Closing prayer. Guests dismissed in time for the workday." },
  ],

  tickets: [
    { id: "ind", name: "Individual Seat", price: 50, desc: "One seat at a shared table — breakfast, program, and introductions included.", note: "Most popular for first-time guests." },
    { id: "table", name: "Reserved Table of Eight", price: 400, desc: "Host your church group, staff, department, or family at a reserved table.", note: "Includes premium seating near the stage." },
  ],

  sponsorships: [
    { id: "bronze", name: "Bronze", price: 500, seats: 4, perks: ["4 reserved seats", "Name in program", "Recognition on event slideshow"] },
    { id: "silver", name: "Silver", price: 750, seats: 8, perks: ["Table of 8", "Half-page in program", "Logo on event slideshow"] },
    { id: "gold", name: "Gold", price: 1000, seats: 10, perks: ["Table of 10 — premium seating", "Full-page in program", "Logo on website + slideshow", "Verbal acknowledgement at event"], featured: true },
    { id: "patron", name: "Patron", price: 2500, seats: 16, perks: ["Two premium tables (16 seats)", "Patron page in program", "Logo on website, slideshow + signage", "Seated near keynote speaker"] },
  ],

  inKind: [
    { t: "Printing", b: "Programs, signage, table cards, and sponsor boards." },
    { t: "Audio / visual", b: "Sound, staging, screens, and event photography." },
    { t: "Food & beverage", b: "Coffee service, pastry, or breakfast underwriting." },
    { t: "Décor & flowers", b: "Table centerpieces and stage dressing for 600+ guests." },
    { t: "Guest gifts", b: "Bibles, devotionals, or take-home items for every seat." },
    { t: "Professional services", b: "Web, legal, accounting, or design support for the board." },
  ],

  volunteerRoles: [
    { t: "Table hosts", b: "Welcome guests, make introductions, keep a table connected.", need: "20 needed" },
    { t: "Registration & check-in", b: "Greet, check in, and seat guests from 6:00 a.m.", need: "12 needed" },
    { t: "Set-up & tear-down", b: "Signage, table cards, and room reset. Early morning and post-event.", need: "15 needed" },
    { t: "Church liaisons", b: "Carry the invitation back to your congregation and fill a table.", need: "Ongoing" },
    { t: "Sponsor outreach", b: "Introduce the board to a business or civic partner.", need: "Ongoing" },
    { t: "Photography & media", b: "Capture the morning for the gallery and next year's invitation.", need: "3 needed" },
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
    { id: "about", label: "About", children: [
      { id: "about", label: "Our History" },
      { id: "board", label: "Our Board Members" },
      { id: "speakers", label: "Previous Speakers" },
    ] },
    { id: "program", label: "The Breakfast", children: [
      { id: "program", label: "Program at a glance" },
      { id: "speaker", label: "2026 Speaker" },
      { id: "gallery", label: "Gallery" },
      { id: "location", label: "Location" },
    ] },
    { id: "tickets", label: "Tickets" },
    { id: "involved", label: "Get Involved" },
    { id: "contact", label: "Contact" },
  ],
};
