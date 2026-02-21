export interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rules: string[];
  date: string;
  time: string;
  image: string;
  category: 'Engineering' | 'MBA' | 'Pharmacy';
  registrationLinks?: {
    [key: string]: string | undefined;
  };
  singleRegistrationLink?: string;
}

export const events: Event[] = [
  // Engineering Events
  {
    id: "ppt",
    title: "COGITO",
    subtitle: "Paper Presentation",
    description: "Showcase your research and innovative ideas. Shortlist intimation on March 4, 2026.",
    rules: [
      "Eligibility: Undergraduate students. Individual or Team (2-3 members). One paper per team.",
      "Submission: PDF format, 6-8 pages, Times New Roman 12, 1.5 spacing. IEEE format references.",
      "Structure: Title, Authors, Abstract (150-250 words), Keywords, Intro, Review, Method, Results, Conclusion.",
      "Mandatory: Proper diagrams and technical analysis/results required.",
      "Presentation: Max 12 slides, 8-10 mins + 2 mins Q&A. Font size ≥ 24.",
      "Evaluation: Originality, Technical Content, Methodology, Results, Presentation, Q&A."
    ],
    date: "March 5, 2026",
    time: "10:30 AM onwards",
    image: "https://picsum.photos/seed/ppt/800/600",
    category: "Engineering",
    registrationLinks: {
      "CIVIL": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "EEE": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "MECH": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "ECE": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "CSE": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "CSE-AIML": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "CSE-CS": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "CSE-IOT": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform",
      "MCA": "https://docs.google.com/forms/d/e/1FAIpQLSdYI7mjL1rNz8GDE7UYeMSQJuVLPO-U-iQU0XQriPlm-llQ4A/viewform"
    }
  },
  {
    id: "project-expo",
    title: "VISION X",
    subtitle: "Project Expo",
    description: "Transform your ideas into reality. Display your working models and prototypes to industry experts. Projects should be innovative and socially relevant.",
    rules: [
      "Eligibility: Individual or Team (Max 3-4 members). Open to school/college students.",
      "Registration: Prior online registration required with abstract (150-250 words).",
      "Requirements: Working model/prototype preferred.",
      "Presentation: 5-10 mins presentation + 2-3 mins Q&A.",
      "Setup: Teams must bring their own materials.",
      "Judging Criteria: Innovation, Technical Knowledge, Practical Application, Presentation, Demo.",
      "Safety: No hazardous materials without permission.",
      "Judges' decision is final."
    ],
    date: "March 6, 2026",
    time: "10:00 AM - 11:00 AM",
    image: "https://picsum.photos/seed/project/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PROJECT_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_PROJECT_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_PROJECT_FORM/viewform",
      CIVIL: "https://docs.google.com/forms/d/e/1FAIpQLSe_CIVIL_PROJECT_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_PROJECT_FORM/viewform"
    }
  },
  {
    id: "quiz",
    title: "TECHTRECK",
    subtitle: "Technical Quiz",
    description: "A comprehensive quiz competition spanning three rounds: Screening (Internal), Technical, and Audio/Visual Final. Test your mettle in General Knowledge, Core Subjects, and Visual Reasoning.",
    rules: [
      "Format: 3 Rounds - Screening (Internal only), Technical, and Audio/Visual Final.",
      "Team Composition: 3 members per team.",
      "External Teams: Direct entry to Round 2 (Technical Round).",
      "Internal Students: Must clear Round 1 (Screening - GK, Aptitude) to form teams.",
      "Round 2 Syllabus: Core Technical Subjects.",
      "Round 3 Syllabus: Personality, Logo, Audio, and Video identification.",
      "No electronic gadgets allowed.",
      "College ID card is mandatory."
    ],
    date: "March 6, 2026",
    time: "11:00 AM - 12:00 PM",
    image: "https://picsum.photos/seed/quiz/800/600",
    category: "Engineering",
    registrationLinks: {
      "CIVIL": "https://docs.google.com/forms/d/e/1FAIpQLSe_CIVIL_QUIZ_FORM/viewform",
      "EEE": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_QUIZ_FORM/viewform",
      "MECH": "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_QUIZ_FORM/viewform",
      "ECE": "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_QUIZ_FORM/viewform",
      "CSE": "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_QUIZ_FORM/viewform",
      "CSE-AIML": "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_AIML_QUIZ_FORM/viewform",
      "CSE-CS": "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_CS_QUIZ_FORM/viewform",
      "CSE-IOT": "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_QUIZ_FORM/viewform",
      "MCA": "https://docs.google.com/forms/d/e/1FAIpQLSe_MCA_QUIZ_FORM/viewform"
    }
  },
  {
    id: "idea-pitch",
    title: "PITCH PERFECT",
    subtitle: "Idea Pitching",
    description: "Have a startup idea? Pitch it to our panel of investors and entrepreneurs. Convince them why your idea is the next big thing.",
    rules: [
      "Individual or team of up to 3.",
      "5 minutes for pitch + 3 minutes Q&A.",
      "Prototype is optional but recommended.",
      "Focus on feasibility and innovation.",
      "Presentation slides are allowed."
    ],
    date: "March 5, 2026",
    time: "02:00 PM - 04:00 PM",
    image: "https://picsum.photos/seed/pitch/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PITCH_FORM/viewform"
    }
  },
  {
    id: "hackathon",
    title: "SPRINT X",
    subtitle: "Silver Jubilee Hackathon",
    description: "A high-energy, one-day event dedicated to creation, collaboration, and problem-solving. Move from idea to prototype in a single, focused sprint. Get guidance from industry experts and senior faculty.",
    rules: [
      "Team Formation: 2-4 members. Interdisciplinary teams allowed. One Team Leader.",
      "Eligibility: Currently enrolled students with valid college ID.",
      "Development: Original code only. No pre-built projects.",
      "Internet: Allowed for reference/APIs. No copying complete projects.",
      "Submission: Source code, Report, Demo, Slides before deadline.",
      "Presentation: 5-10 mins. All members must participate.",
      "Judging: Innovation, Complexity, Usefulness, Design, Demo.",
      "Mentors: One mentor per team allowed (guidance only).",
      "General: Bring own laptops. Maintain discipline.",
      "Disqualification: Plagiarism, misconduct, or rule violations."
    ],
    date: "March 5, 2026",
    time: "12:00 PM - 04:00 PM",
    image: "https://picsum.photos/seed/hackathon/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_HACKATHON_FORM/viewform"
    }
  },
  {
    id: "ai-event",
    title: "GEMINI & I",
    subtitle: "Two Brains. One Goal. Zero Limits.",
    description: "Join us for a one-hour battle of creativity and intelligence. Redefine innovation at SACET! Round 1: Logo Design (5 mins). Round 2: Webpage Creation.",
    rules: [
      "Round 1 (Fast & Furious): Design a logo using Gemini AI in 5 mins.",
      "Round 2 (The Creative Genius): Create a webpage using Gemini AI.",
      "Eligibility: Individual participation. Basic AI/programming knowledge required.",
      "Tools Allowed: Gemini AI, VS Code, Firebase. NO ChatGPT.",
      "Evaluation: Winner, Runner-Up, Best Performer selected by judges.",
      "General: All tasks during event. No copying/inappropriate content."
    ],
    date: "March 6, 2026",
    time: "01:00 PM - 02:30 PM",
    image: "https://picsum.photos/seed/ai/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_AI_FORM/viewform"
    }
  },
  {
    id: "photography",
    title: "PIC STORY",
    subtitle: "Photography Contest",
    description: "Capture the essence of the fest. Submit your best shots and let your pictures tell a story. Photos must be taken in the college premises only.",
    rules: [
      "Participation: Individual only. One entry per participant.",
      "Submission: Original, unpublished photos taken in college premises within specified time.",
      "Technical: JPEG/JPG format, Max 10MB. Coordinates Tagging required.",
      "Editing: Basic editing allowed. No advanced manipulation.",
      "Content: No inappropriate/offensive content. No watermarks/borders.",
      "Theme: Must align with announced theme.",
      "Originals: Keep high-res originals for verification.",
      "File Naming: Follow instructions provided after enrolment."
    ],
    date: "March 5, 2026",
    time: "12:00 PM - 04:00 PM",
    image: "https://picsum.photos/seed/photo/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PHOTO_FORM/viewform"
    }
  },
  {
    id: "esports",
    title: "HEADSHOT HUNT",
    subtitle: "Online Gaming",
    description: "Battle it out in the virtual arena. Freefire (Boys & Girls) and LUDO (Girls only) tournaments. Only for SACET / SACP / SACET Polytechnic students.",
    rules: [
      "Eligibility: Only SACET / SACP / SACET Polytechnic students.",
      "Format: Prelims within each branch -> 1 team per branch to finals. (Polytechnic sends 1 team total).",
      "Games: Freefire (Team size: 4, Boys & Girls separate), LUDO (Team size: 2, Girls only).",
      "Team: Members must belong to the same branch. No substitution after prelims.",
      "Prizes: Top two teams from finals will be awarded.",
      "Requirements: Headphones/earphones and mobile data mandatory.",
      "Fee: NO Registration fee.",
      "Note: Prelims date/time/venue TBA. Finals on March 6, 2026.",
      "Disclaimer: Coordinators not responsible for technical issues. Decision is final."
    ],
    date: "March 6, 2026",
    time: "Finals: 06th March 2026",
    image: "https://picsum.photos/seed/game/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_ESPORTS_FORM/viewform"
    }
  },
  {
    id: "ipl-bidding",
    title: "FANTASY FEVER",
    subtitle: "SPL Bidding",
    description: "Experience the thrill of the SPL bidding. Manage your budget, bid for players, and build the dream team.",
    rules: [
      "Team of 3 members.",
      "Virtual currency provided.",
      "Standard auction rules apply.",
      "Highest team rating wins.",
      "Tie-breaker based on remaining budget."
    ],
    date: "March 6, 2026",
    time: "10:00 AM - 12:00 PM",
    image: "https://picsum.photos/seed/ipl/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_IPL_FORM/viewform"
    }
  },
  {
    id: "culturals",
    title: "RAMPAGE",
    subtitle: "Cultural Night",
    description: "A night of music, dance, and fashion. Unleash your creativity and set the stage on fire.",
    rules: [
      "Group and solo performances allowed.",
      "Time limit: 5-7 minutes.",
      "Submit audio tracks in advance.",
      "Decent attire mandatory.",
      "Judges' decision is final."
    ],
    date: "March 6, 2026",
    time: "06:00 PM",
    image: "https://picsum.photos/seed/dance/800/600",
    category: "Engineering",
    registrationLinks: {
      "Anyone Can Participate": "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_CULTURALS_FORM/viewform"
    }
  },

  // MBA Events
  {
    id: "mba-entrepreneur",
    title: "YOUNG ENTREPRENEUR",
    subtitle: "Business Plan",
    description: "Present a PPT on Innovative Business Ideas. Showcase your entrepreneurial spirit.",
    rules: [
      "Participants: 2 members per team.",
      "Format: Present a PPT on Innovative Business Ideas.",
      "Time Duration: 15 Minutes.",
      "Registration: Spot Registration on the day of event (05-03-2026).",
      "Coordinator: Dr S CHAND BASHA (9866087091)."
    ],
    date: "March 5, 2026",
    time: "10:00 AM",
    image: "https://picsum.photos/seed/mba1/800/600",
    category: "MBA",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_MBA_ENTREPRENEUR_FORM/viewform"
  },
  {
    id: "mba-ppt",
    title: "PAPER PRESENTATION",
    subtitle: "Paper Presentation",
    description: "Present papers on Contemporary Issues in Business Management - 2026.",
    rules: [
      "Participants: 3 members per team.",
      "Topic: Contemporary Issues in Business Management - 2026.",
      "Time Duration: 15 Minutes.",
      "Submission: Last date for abstract submission is 02-03-2026.",
      "Send abstract to: mbahod@sacet.ac.in",
      "Coordinator: SD AMEER JANI (9989873020)."
    ],
    date: "March 5, 2026",
    time: "11:30 AM",
    image: "https://picsum.photos/seed/mba2/800/600",
    category: "MBA",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_MBA_PPT_FORM/viewform"
  },
  {
    id: "mba-quiz",
    title: "BUSINESS QUIZ",
    subtitle: "Business Quiz",
    description: "Test your business acumen. Topic: Covered all business related issues.",
    rules: [
      "Participants: 3 members per team.",
      "Topic: Covered all business related issues.",
      "Registration: Spot Registration on the day of event (05-03-2026).",
      "Coordinator: V. URMILA (9010941753)."
    ],
    date: "March 5, 2026",
    time: "02:00 PM",
    image: "https://picsum.photos/seed/mba3/800/600",
    category: "MBA",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_MBA_QUIZ_FORM/viewform"
  },

  // Pharmacy Events
  {
    id: "pharma-oral",
    title: "PHARMA EXPOSITIO ORIS",
    subtitle: "Oral Presentation",
    description: "Submit research/Review papers in Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmaceutical Biotechnology, or Pharmacognosy. LCD projector provided.",
    rules: [
      "Disciplines: Pharmaceutics, Pharm. Chemistry, Pharmacology, Pharm. Biotech, Pharmacognosy.",
      "Format: Times New Roman font, white background.",
      "Abstract: Submit soft copy to sacppharmavaibhav@gmail.com by 25th Feb 2026.",
      "Registration Fee: Rs.300/- (UPI: 9849406570). Spot: Rs.350/-.",
      "Prizes (Per Discipline): 1st: Rs 1500/-, 2nd: Rs 1000/-.",
      "Note: Bring bonafide certificate & ID card. Bus from Chirala Rly Stn at 7:00 AM."
    ],
    date: "March 5, 2026",
    time: "10:00 AM",
    image: "https://picsum.photos/seed/pharma2/800/600",
    category: "Pharmacy",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_PHARMA_ORAL_FORM/viewform"
  },
  {
    id: "pharma-poster",
    title: "PHARMA IPHOSTA",
    subtitle: "Poster Presentation",
    description: "Present your research findings. Disciplines: Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmaceutical Biotechnology, Pharmacognosy.",
    rules: [
      "Poster Size: 1 x 1.2 Mts.",
      "Team: Max 2 presenters per poster.",
      "Format: Times New Roman font, white background.",
      "Abstract: Submit soft copy to sacppharmavaibhav@gmail.com by 25th Feb 2026.",
      "Registration Fee: Rs.300/- (UPI: 9849406570). Spot: Rs.350/-.",
      "Prizes (Per Discipline): 1st: Rs 1000/-, 2nd: Rs 750/-.",
      "Note: Bring bonafide certificate & ID card. Bus from Chirala Rly Stn at 7:00 AM."
    ],
    date: "March 5, 2026",
    time: "10:00 AM",
    image: "https://picsum.photos/seed/pharma3/800/600",
    category: "Pharmacy",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_PHARMA_POSTER_FORM/viewform"
  },
  {
    id: "pharma-quiz",
    title: "PHARMA VIKTORINA",
    subtitle: "Quiz!",
    description: "A battle of wits for future pharmacists. Test your knowledge in various pharmaceutical disciplines.",
    rules: [
      "Team: Max 3 members per team.",
      "Registration Fee: Rs.300/- (UPI: 9849406570). Spot: Rs.350/-.",
      "Prizes (Per Team): 1st: Rs 1500/-, 2nd: Rs 1000/-.",
      "Deadline: Register by 25th Feb 2026.",
      "Note: Bring bonafide certificate & ID card. Bus from Chirala Rly Stn at 7:00 AM."
    ],
    date: "March 5, 2026",
    time: "10:00 AM",
    image: "https://picsum.photos/seed/pharma1/800/600",
    category: "Pharmacy",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_PHARMA_QUIZ_FORM/viewform"
  }
];
