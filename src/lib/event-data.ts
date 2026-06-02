// Event data configuration for Cyber Security Week 2026

export const eventInfo = {
  name: "Cyber Security Week 2026",
  shortName: "CSW 2026",
  university: "Mandsaur University, Mandsaur",
  tagline: "Defend. Detect. Dominate.",
  dates: "OCT 14 - 20, 2026",
  startDate: "2026-10-14T09:00:00",
  endDate: "2026-10-20T18:00:00",
  venue: "Mandsaur University Campus, Mandsaur, Madhya Pradesh",
  description:
    "A week-long immersive cybersecurity event featuring hands-on workshops, Capture The Flag competitions, expert talks, and networking opportunities. Join us to explore the frontiers of cybersecurity and build the skills to defend the digital world.",
  registrationLink: "#register",
  ctfRegistrationLink: "#ctf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Events", href: "#events" },
  { label: "CTF", href: "#ctf" },
  { label: "Speakers", href: "#speakers" },
  { label: "Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];

export const stats = [
  { label: "Days", value: "7", icon: "Calendar" },
  { label: "Events", value: "15+", icon: "Zap" },
  { label: "Speakers", value: "10+", icon: "Users" },
  { label: "Prizes", value: "₹50K+", icon: "Trophy" },
];

export interface TimelineDay {
  day: number;
  date: string;
  title: string;
  description: string;
  events: { time: string; name: string; type: string }[];
}

export const timeline: TimelineDay[] = [
  {
    day: 1,
    date: "July 14",
    title: "Inauguration Day",
    description: "Grand opening ceremony with chief guest address and keynote session",
    events: [
      { time: "09:00 AM", name: "Registration & Welcome Kit Distribution", type: "registration" },
      { time: "10:00 AM", name: "Inauguration Ceremony & Lamp Lighting", type: "ceremony" },
      { time: "11:00 AM", name: "Chief Guest Address", type: "keynote" },
      { time: "12:00 PM", name: "Keynote: Future of Cybersecurity in India", type: "keynote" },
      { time: "02:00 PM", name: "Ice Breaker: Cyber Trivia Challenge", type: "activity" },
      { time: "04:00 PM", name: "Campus Tour & Networking", type: "networking" },
    ],
  },
  {
    day: 2,
    date: "July 15",
    title: "Ethical Hacking Workshop",
    description: "Hands-on workshop covering penetration testing and ethical hacking methodologies",
    events: [
      { time: "09:00 AM", name: "Session: Introduction to Ethical Hacking", type: "workshop" },
      { time: "11:00 AM", name: "Hands-on: Reconnaissance & Scanning", type: "workshop" },
      { time: "01:00 PM", name: "Lunch Break", type: "break" },
      { time: "02:00 PM", name: "Hands-on: Exploitation Techniques", type: "workshop" },
      { time: "04:00 PM", name: "CTF Practice Session", type: "activity" },
    ],
  },
  {
    day: 3,
    date: "July 16",
    title: "Web Application Security",
    description: "Deep dive into web vulnerabilities, OWASP Top 10, and secure coding practices",
    events: [
      { time: "09:00 AM", name: "Session: OWASP Top 10 Deep Dive", type: "workshop" },
      { time: "11:00 AM", name: "Hands-on: SQL Injection & XSS", type: "workshop" },
      { time: "01:00 PM", name: "Lunch Break", type: "break" },
      { time: "02:00 PM", name: "Hands-on: Authentication Bypass & CSRF", type: "workshop" },
      { time: "04:00 PM", name: "Bug Bounty: Tips & Strategies", type: "talk" },
    ],
  },
  {
    day: 4,
    date: "July 17",
    title: "Digital Forensics & Incident Response",
    description: "Learn forensic investigation techniques and incident handling procedures",
    events: [
      { time: "09:00 AM", name: "Session: Introduction to Digital Forensics", type: "workshop" },
      { time: "11:00 AM", name: "Hands-on: Disk & Memory Forensics", type: "workshop" },
      { time: "01:00 PM", name: "Lunch Break", type: "break" },
      { time: "02:00 PM", name: "Hands-on: Network Forensics & Log Analysis", type: "workshop" },
      { time: "04:00 PM", name: "Case Study: Real-World Incident Response", type: "talk" },
    ],
  },
  {
    day: 5,
    date: "July 18",
    title: "CTF Competition Day",
    description: "The ultimate Capture The Flag challenge — test your hacking skills!",
    events: [
      { time: "09:00 AM", name: "CTF Briefing & Rules", type: "ceremony" },
      { time: "09:30 AM", name: "CTF Competition Begins", type: "competition" },
      { time: "01:00 PM", name: "Lunch Break (Competition Continues)", type: "break" },
      { time: "05:00 PM", name: "CTF Competition Ends", type: "competition" },
      { time: "05:30 PM", name: "CTF Write-up Presentations", type: "activity" },
      { time: "06:30 PM", name: "CTF Results & Awards", type: "ceremony" },
    ],
  },
  {
    day: 6,
    date: "July 19",
    title: "Expert Talks & Panel Discussion",
    description: "Industry experts share insights on cybersecurity careers, threats, and innovations",
    events: [
      { time: "09:00 AM", name: "Talk: AI in Cybersecurity", type: "talk" },
      { time: "10:30 AM", name: "Talk: Cloud Security & Zero Trust", type: "talk" },
      { time: "12:00 PM", name: "Panel: Career Paths in Cybersecurity", type: "panel" },
      { time: "01:00 PM", name: "Lunch Break", type: "break" },
      { time: "02:00 PM", name: "Talk: Threat Intelligence & OSINT", type: "talk" },
      { time: "03:30 PM", name: "Fireside Chat: Women in Cybersecurity", type: "panel" },
      { time: "05:00 PM", name: "Quiz Competition Finals", type: "competition" },
    ],
  },
  {
    day: 7,
    date: "July 20",
    title: "Valedictory Ceremony",
    description: "Grand closing ceremony with prize distribution and closing remarks",
    events: [
      { time: "09:00 AM", name: "Open CTF / Hackathon (Optional)", type: "activity" },
      { time: "11:00 AM", name: "Closing Keynote: Building a Secure Future", type: "keynote" },
      { time: "12:00 PM", name: "Valedictory Address", type: "ceremony" },
      { time: "01:00 PM", name: "Lunch Break", type: "break" },
      { time: "02:00 PM", name: "Prize Distribution & Awards Ceremony", type: "ceremony" },
      { time: "03:30 PM", name: "Vote of Thanks & Group Photo", type: "ceremony" },
      { time: "04:00 PM", name: "Closing Ceremony & Networking", type: "networking" },
    ],
  },
];

export interface EventItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  registrationLink?: string;
}

export const events: EventItem[] = [
  {
    id: "inauguration",
    title: "Inauguration Ceremony",
    description: "Grand opening with lamp lighting, chief guest address, and keynote session on the future of cybersecurity.",
    icon: "Flame",
    category: "Ceremony",
    date: "July 14",
    time: "10:00 AM",
    venue: "Main Auditorium",
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking Workshop",
    description: "Hands-on workshop covering penetration testing, vulnerability assessment, and ethical hacking methodologies using industry tools.",
    icon: "Shield",
    category: "Workshop",
    date: "July 15",
    time: "09:00 AM",
    venue: "CS Lab 1",
  },
  {
    id: "web-security",
    title: "Web Application Security",
    description: "Deep dive into OWASP Top 10 vulnerabilities, SQL injection, XSS, CSRF, and secure coding practices with live demos.",
    icon: "Globe",
    category: "Workshop",
    date: "July 16",
    time: "09:00 AM",
    venue: "CS Lab 2",
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics Workshop",
    description: "Learn forensic investigation techniques including disk forensics, memory analysis, and network forensics with real-world case studies.",
    icon: "Search",
    category: "Workshop",
    date: "July 17",
    time: "09:00 AM",
    venue: "CS Lab 3",
  },
  {
    id: "ctf",
    title: "Capture The Flag (CTF)",
    description: "Jeopardy-style CTF competition with challenges in Web Exploitation, Cryptography, Reverse Engineering, Forensics, OSINT, and Misc categories.",
    icon: "Flag",
    category: "Competition",
    date: "July 18",
    time: "09:30 AM",
    venue: "CS Labs & Online",
  },
  {
    id: "expert-talks",
    title: "Expert Talk Series",
    description: "Industry experts share insights on AI in cybersecurity, cloud security, threat intelligence, and career opportunities in the field.",
    icon: "Mic",
    category: "Talk",
    date: "July 19",
    time: "09:00 AM",
    venue: "Seminar Hall",
  },
  {
    id: "panel-discussion",
    title: "Panel Discussions",
    description: "Interactive panel discussions on career paths in cybersecurity and diversity in the tech industry with Q&A sessions.",
    icon: "MessageSquare",
    category: "Panel",
    date: "July 19",
    time: "12:00 PM",
    venue: "Seminar Hall",
  },
  {
    id: "quiz",
    title: "Cybersecurity Quiz",
    description: "Test your cybersecurity knowledge in an exciting quiz competition covering topics from networking to cryptography and current threats.",
    icon: "Brain",
    category: "Competition",
    date: "July 19",
    time: "05:00 PM",
    venue: "Auditorium",
  },
  {
    id: "valedictory",
    title: "Valedictory Ceremony",
    description: "Grand closing ceremony with prize distribution, awards, closing keynote, and networking session to wrap up the week.",
    icon: "Award",
    category: "Ceremony",
    date: "July 20",
    time: "11:00 AM",
    venue: "Main Auditorium",
  },
];

export const ctfInfo = {
  title: "Capture The Flag 2026",
  tagline: "Hack. Solve. Conquer.",
  format: "Jeopardy-Style CTF",
  teamSize: "1-4 Members",
  duration: "8 Hours",
  date: "July 18, 2026",
  time: "9:30 AM - 5:30 PM",
  prizePool: "₹25,000+",
  categories: [
    {
      name: "Web Exploitation",
      description: "SQL Injection, XSS, Authentication Bypass, SSRF, and more",
      icon: "Globe",
      difficulty: "Easy to Hard",
    },
    {
      name: "Cryptography",
      description: "Classical ciphers, RSA, AES, hash cracking challenges",
      icon: "Lock",
      difficulty: "Medium to Hard",
    },
    {
      name: "Reverse Engineering",
      description: "Binary analysis, malware reverse, crackmes",
      icon: "Cog",
      difficulty: "Medium to Hard",
    },
    {
      name: "Forensics",
      description: "Disk forensics, memory dumps, network captures, steganography",
      icon: "Search",
      difficulty: "Easy to Medium",
    },
    {
      name: "OSINT",
      description: "Open-source intelligence gathering and analysis",
      icon: "Eye",
      difficulty: "Easy to Medium",
    },
    {
      name: "Miscellaneous",
      description: "Programming, logic puzzles, and surprise challenges",
      icon: "Puzzle",
      difficulty: "Easy to Hard",
    },
  ],
  rules: [
    "Teams of 1-4 members only",
    "No sharing of flags or solutions between teams",
    "No attacking the CTF infrastructure",
    "No brute-forcing of flags",
    "All challenges must be solved ethically",
    "Decisions by organizers are final",
    "Use of automated scanning tools is prohibited unless specified",
    "Flag format: CSW{something_here}",
  ],
  registrationLink: "#register",
};

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  bio: string;
  topic: string;
  image?: string;
  isChiefGuest: boolean;
}

export const speakers: Speaker[] = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    designation: "Director, Cybersecurity Division",
    organization: "NIC, Government of India",
    bio: "Leading cybersecurity initiatives for the Government of India with over 20 years of experience in information security and digital governance.",
    topic: "Keynote: Future of Cybersecurity in India",
    isChiefGuest: true,
  },
  {
    id: "2",
    name: "Prof. Anita Sharma",
    designation: "Professor & Head, Computer Science",
    organization: "IIT Delhi",
    bio: "Renowned researcher in AI-driven security and cryptography. Published 100+ papers in top-tier security conferences and journals.",
    topic: "AI in Cybersecurity: Opportunities & Threats",
    isChiefGuest: false,
  },
  {
    id: "3",
    name: "Vikram Patel",
    designation: "Chief Security Officer",
    organization: "TechSecure India",
    bio: "Cybersecurity veteran with expertise in penetration testing, red teaming, and security architecture for Fortune 500 companies.",
    topic: "Red Team Operations: Lessons from the Field",
    isChiefGuest: false,
  },
  {
    id: "4",
    name: "Priya Mehta",
    designation: "Security Researcher",
    organization: "Bug Crowd",
    bio: "Top bug bounty hunter with 500+ valid vulnerabilities reported. Speaker at DEF CON, BlackHat, and NullCon.",
    topic: "Bug Bounty: From Beginner to Pro",
    isChiefGuest: false,
  },
  {
    id: "5",
    name: "Amit Joshi",
    designation: "Digital Forensics Expert",
    organization: "CDAC",
    bio: "Expert in digital forensics and incident response with experience in solving complex cybercrime cases for law enforcement agencies.",
    topic: "Digital Forensics in Modern Investigations",
    isChiefGuest: false,
  },
  {
    id: "6",
    name: "Dr. Sneha Verma",
    designation: "Cloud Security Architect",
    organization: "AWS India",
    bio: "Specialized in cloud security, zero-trust architecture, and DevSecOps with extensive experience in securing large-scale cloud deployments.",
    topic: "Cloud Security & Zero Trust Architecture",
    isChiefGuest: false,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sanjay Gupta",
    role: "Faculty Coordinator",
    department: "Department of Computer Science",
  },
  {
    id: "2",
    name: "Prof. Meena Tiwari",
    role: "Faculty Coordinator",
    department: "Department of IT",
  },
  {
    id: "3",
    name: "Arjun Singh",
    role: "Student Coordinator",
    department: "B.Tech CSE, 4th Year",
  },
  {
    id: "4",
    name: "Kavya Sharma",
    role: "Co-Coordinator",
    department: "B.Tech CSE, 3rd Year",
  },
  {
    id: "5",
    name: "Rohit Pandey",
    role: "CTF Lead",
    department: "B.Tech CSE, 4th Year",
  },
  {
    id: "6",
    name: "Neha Jain",
    role: "Event Manager",
    department: "B.Tech IT, 3rd Year",
  },
  {
    id: "7",
    name: "Prateek Mishra",
    role: "Technical Lead",
    department: "B.Tech CSE, 3rd Year",
  },
  {
    id: "8",
    name: "Simran Kaur",
    role: "PR & Marketing Lead",
    department: "B.Tech IT, 3rd Year",
  },
  {
    id: "9",
    name: "Aditya Verma",
    role: "Design Lead",
    department: "BCA, 3rd Year",
  },
  {
    id: "10",
    name: "Pooja Rajput",
    role: "Logistics Head",
    department: "B.Tech CSE, 2nd Year",
  },
  {
    id: "11",
    name: "Kunal Deshmukh",
    role: "Workshop Coordinator",
    department: "B.Tech CSE, 3rd Year",
  },
  {
    id: "12",
    name: "Ananya Patel",
    role: "Social Media Manager",
    department: "B.Tech IT, 2nd Year",
  },
];

export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "community";
  description: string;
  website?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "TechSecure India",
    tier: "platinum",
    description: "Leading cybersecurity solutions provider",
    website: "#",
  },
  {
    id: "2",
    name: "CyberShield Corp",
    tier: "platinum",
    description: "Enterprise security & compliance",
    website: "#",
  },
  {
    id: "3",
    name: "HackDefend Labs",
    tier: "gold",
    description: "Penetration testing & red teaming services",
    website: "#",
  },
  {
    id: "4",
    name: "SecureNet Solutions",
    tier: "gold",
    description: "Network security & monitoring",
    website: "#",
  },
  {
    id: "5",
    name: "DataGuard Systems",
    tier: "gold",
    description: "Data protection & encryption",
    website: "#",
  },
  {
    id: "6",
    name: "InfoSec Academy",
    tier: "silver",
    description: "Cybersecurity training & certifications",
    website: "#",
  },
  {
    id: "7",
    name: "CloudVault",
    tier: "silver",
    description: "Secure cloud infrastructure",
    website: "#",
  },
  {
    id: "8",
    name: "Null Community Mandsaur",
    tier: "community",
    description: "Open cybersecurity community",
    website: "#",
  },
  {
    id: "9",
    name: "OWASP India",
    tier: "community",
    description: "Open Web Application Security Project",
    website: "#",
  },
  {
    id: "10",
    name: "ISAC India",
    tier: "community",
    description: "Information Security Awareness Campaign",
    website: "#",
  },
];

export const partners = [
  { id: "1", name: "Mandsaur University", type: "Host Institution" },
  { id: "2", name: "Department of Computer Science", type: "Academic Partner" },
  { id: "3", name: "Department of IT", type: "Academic Partner" },
  { id: "4", name: "MP Cyber Cell", type: "Government Partner" },
  { id: "5", name: "CDAC Mohali", type: "Knowledge Partner" },
  { id: "6", name: "NIC Bhopal", type: "Technology Partner" },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Who can participate in Cyber Security Week 2026?",
    answer: "The event is open to all students, professionals, and cybersecurity enthusiasts. Some workshops may have prerequisites which will be mentioned in the event details. The CTF competition is open to participants of all skill levels.",
  },
  {
    question: "Is there a registration fee?",
    answer: "Registration details and fee structure will be announced soon. Early bird discounts will be available for students. Some community events may be free to attend.",
  },
  {
    question: "Do I need prior cybersecurity knowledge to attend?",
    answer: "Not at all! We have events for all skill levels — from beginners to advanced practitioners. The workshops are designed to take you from the basics, and our CTF has challenges ranging from easy to hard.",
  },
  {
    question: "How do I register for the CTF competition?",
    answer: "CTF registration will be available on this website. You can register as a team of 1-4 members. Registration links will be activated closer to the event date. Stay tuned for updates!",
  },
  {
    question: "What should I bring to the workshops?",
    answer: "Please bring your own laptop with the required software pre-installed (instructions will be shared via email before the event). Make sure your laptop is fully charged and bring your charger. Virtual machines will be provided for hands-on sessions.",
  },
  {
    question: "Are certificates provided?",
    answer: "Yes! Participation certificates will be provided to all registered attendees. Special certificates and prizes will be awarded to CTF winners and quiz competition toppers.",
  },
  {
    question: "Is accommodation available for outstation participants?",
    answer: "Limited accommodation may be arranged for outstation participants on a first-come, first-served basis. Please contact the organizing team for details and reservations.",
  },
  {
    question: "How can I become a sponsor?",
    answer: "We'd love to have you on board! Please reach out to us at csw@mandsauruniversity.edu.in for sponsorship packages and partnership opportunities.",
  },
];

export const socialLinks = {
  instagram: "https://instagram.com/csw_mandsaur",
  twitter: "https://twitter.com/csw_mandsaur",
  linkedin: "https://linkedin.com/company/csw-mandsaur",
  github: "https://github.com/csw-mandsaur",
  email: "csw@mandsauruniversity.edu.in",
  phone: "+91-7422-XXXXXX",
  website: "https://mandsauruniversity.edu.in",
};

export const eventTypes: Record<string, { color: string; label: string }> = {
  ceremony: { color: "bg-amber-500/20 text-amber-400 border-amber-500/30", label: "Ceremony" },
  keynote: { color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", label: "Keynote" },
  workshop: { color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", label: "Workshop" },
  talk: { color: "bg-purple-500/20 text-purple-400 border-purple-500/30", label: "Talk" },
  panel: { color: "bg-pink-500/20 text-pink-400 border-pink-500/30", label: "Panel" },
  competition: { color: "bg-green-500/20 text-green-400 border-green-500/30", label: "Competition" },
  activity: { color: "bg-orange-500/20 text-orange-400 border-orange-500/30", label: "Activity" },
  networking: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", label: "Networking" },
  break: { color: "bg-gray-500/20 text-gray-400 border-gray-500/30", label: "Break" },
  registration: { color: "bg-teal-500/20 text-teal-400 border-teal-500/30", label: "Registration" },
};

