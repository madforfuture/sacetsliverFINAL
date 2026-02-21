export interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rules: string[];
  date: string;
  time: string;
  venue: string;
  image: string;
  category: 'Engineering' | 'MBA' | 'Pharmacy';
  registrationLinks?: {
    EEE: string;
    MECH: string;
    ECE: string;
    CSE: string;
    IOT: string;
  };
  singleRegistrationLink?: string;
}

export const events: Event[] = [
  // Engineering Events
  {
    id: "ppt",
    title: "COGITO",
    subtitle: "Paper Presentation",
    description: "Showcase your research and innovative ideas in this premier paper presentation event. Compete with the best minds and present your technical prowess.",
    rules: [
      "Maximum 2 members per team.",
      "Abstract submission deadline: 2 days before event.",
      "Presentation time: 8 minutes + 2 minutes Q&A.",
      "Hard copy of the paper must be submitted at the venue.",
      "Judges' decision is final."
    ],
    date: "March 5, 2026",
    time: "11:00 AM",
    venue: "Room 201 & 202",
    image: "https://picsum.photos/seed/ppt/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PPT_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_PPT_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_PPT_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_PPT_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_PPT_FORM/viewform"
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
    venue: "Main Auditorium Lobby",
    image: "https://picsum.photos/seed/project/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PROJECT_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_PROJECT_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_PROJECT_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_PROJECT_FORM/viewform",
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
    venue: "Room 304",
    image: "https://picsum.photos/seed/quiz/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_QUIZ_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_QUIZ_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_QUIZ_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_QUIZ_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_QUIZ_FORM/viewform"
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
    venue: "Library",
    image: "https://picsum.photos/seed/pitch/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PITCH_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_PITCH_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_PITCH_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_PITCH_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_PITCH_FORM/viewform"
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
    venue: "Computer Lab 1 & 2",
    image: "https://picsum.photos/seed/hackathon/800/600",
    category: "Engineering",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_HACKATHON_FORM/viewform"
  },
  {
    id: "ai-event",
    title: "GEMINI & I",
    subtitle: "AI Challenge",
    description: "Explore the frontiers of Artificial Intelligence. Build models, solve puzzles, and demonstrate your AI skills.",
    rules: [
      "Team of 2 members.",
      "Knowledge of Python/ML libraries required.",
      "Datasets will be provided.",
      "Evaluation based on accuracy and efficiency.",
      "Use of pre-trained models depends on problem statement."
    ],
    date: "March 6, 2026",
    time: "01:00 PM - 02:30 PM",
    venue: "Room 201 & 102",
    image: "https://picsum.photos/seed/ai/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_AI_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_AI_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_AI_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_AI_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_AI_FORM/viewform"
    }
  },
  {
    id: "photography",
    title: "PIC STORY",
    subtitle: "Photography Contest",
    description: "Capture the essence of the fest. Submit your best shots and let your pictures tell a story.",
    rules: [
      "Individual participation.",
      "Photos must be taken during the event.",
      "Basic editing allowed; no manipulation.",
      "Submit raw files for verification.",
      "Theme: 'Technology & Tradition'."
    ],
    date: "March 5, 2026",
    time: "12:00 PM - 04:00 PM",
    venue: "Campus Wide",
    image: "https://picsum.photos/seed/photo/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_PHOTO_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_PHOTO_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_PHOTO_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_PHOTO_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_PHOTO_FORM/viewform"
    }
  },
  {
    id: "esports",
    title: "HEADSHOT HUNT",
    subtitle: "Online Gaming",
    description: "Battle it out in the virtual arena. BGMI, Valorant, and FIFA tournaments for the ultimate gamers.",
    rules: [
      "Squad/Team registration required.",
      "Bring your own peripherals (mouse/keyboard/controller).",
      "Fair play is mandatory.",
      "Any use of cheats leads to disqualification.",
      "Follow tournament brackets."
    ],
    date: "March 6, 2026",
    time: "02:00 PM Onwards",
    venue: "Library",
    image: "https://picsum.photos/seed/game/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_ESPORTS_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_ESPORTS_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_ESPORTS_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_ESPORTS_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_ESPORTS_FORM/viewform"
    }
  },
  {
    id: "ipl-bidding",
    title: "FANTASY FEVER",
    subtitle: "SPL Bidding (Aptitude Based)",
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
    venue: "Seminar Hall B",
    image: "https://picsum.photos/seed/ipl/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_IPL_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_IPL_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_IPL_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_IPL_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_IPL_FORM/viewform"
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
    venue: "Open Air Theatre",
    image: "https://picsum.photos/seed/dance/800/600",
    category: "Engineering",
    registrationLinks: {
      EEE: "https://docs.google.com/forms/d/e/1FAIpQLSe_EEE_CULTURALS_FORM/viewform",
      MECH: "https://docs.google.com/forms/d/e/1FAIpQLSe_MECH_CULTURALS_FORM/viewform",
      ECE: "https://docs.google.com/forms/d/e/1FAIpQLSe_ECE_CULTURALS_FORM/viewform",
      CSE: "https://docs.google.com/forms/d/e/1FAIpQLSe_CSE_CULTURALS_FORM/viewform",
      IOT: "https://docs.google.com/forms/d/e/1FAIpQLSe_IOT_CULTURALS_FORM/viewform"
    }
  },

  // MBA Events
  {
    id: "mba-entrepreneur",
    title: "YOUNG ENTREPRENEUR",
    subtitle: "Business Plan",
    description: "Unleash your inner CEO. Present your business models and entrepreneurial ideas to industry veterans.",
    rules: [
      "Individual or Team of 2.",
      "Presentation time: 10 minutes.",
      "Business plan must be feasible.",
      "Financial projections required."
    ],
    date: "March 5, 2026",
    time: "10:00 AM",
    venue: "MBA Seminar Hall",
    image: "https://picsum.photos/seed/mba1/800/600",
    category: "MBA",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_MBA_ENTREPRENEUR_FORM/viewform"
  },
  {
    id: "mba-ppt",
    title: "BIZ TALK",
    subtitle: "Paper Presentation",
    description: "Present papers on emerging trends in management, finance, marketing, and HR.",
    rules: [
      "Maximum 2 members per team.",
      "Topics: Finance, Marketing, HR, Operations.",
      "Time limit: 8+2 minutes."
    ],
    date: "March 5, 2026",
    time: "11:30 AM",
    venue: "MBA Classrooms",
    image: "https://picsum.photos/seed/mba2/800/600",
    category: "MBA",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_MBA_PPT_FORM/viewform"
  },
  {
    id: "mba-quiz",
    title: "BIZ WHIZ",
    subtitle: "Business Quiz",
    description: "Test your business acumen. From logos to taglines, mergers to acquisitions, know it all.",
    rules: [
      "Team of 2 members.",
      "Rounds: Written prelims + Stage finals.",
      "Quiz master's decision is final."
    ],
    date: "March 6, 2026",
    time: "02:00 PM",
    venue: "MBA Seminar Hall",
    image: "https://picsum.photos/seed/mba3/800/600",
    category: "MBA",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_MBA_QUIZ_FORM/viewform"
  },

  // Pharmacy Events
  {
    id: "pharma-quiz",
    title: "VIKTRINIA",
    subtitle: "Pharma Quiz",
    description: "A battle of wits for future pharmacists. Test your knowledge in pharmacology, pharmaceutics, and more.",
    rules: [
      "Team of 3 members.",
      "Specific to Pharmacy subjects.",
      "Buzzer rounds included."
    ],
    date: "March 5, 2026",
    time: "10:00 AM",
    venue: "Pharmacy Block",
    image: "https://picsum.photos/seed/pharma1/800/600",
    category: "Pharmacy",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_PHARMA_QUIZ_FORM/viewform"
  },
  {
    id: "pharma-oral",
    title: "EXPOSITION ORIS",
    subtitle: "Oral Presentation",
    description: "Voice your views on advancements in pharmaceutical sciences.",
    rules: [
      "Individual participation.",
      "Time limit: 6 minutes.",
      "Q&A session included."
    ],
    date: "March 5, 2026",
    time: "12:00 PM",
    venue: "Pharmacy Seminar Hall",
    image: "https://picsum.photos/seed/pharma2/800/600",
    category: "Pharmacy",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_PHARMA_ORAL_FORM/viewform"
  },
  {
    id: "pharma-poster",
    title: "PHOSTA",
    subtitle: "Poster Presentation",
    description: "Visualise your research. Present your findings through creative posters.",
    rules: [
      "Team of 2 members.",
      "Poster size: A1 standard.",
      "Explain your poster to judges."
    ],
    date: "March 6, 2026",
    time: "10:00 AM",
    venue: "Pharmacy Lobby",
    image: "https://picsum.photos/seed/pharma3/800/600",
    category: "Pharmacy",
    singleRegistrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_PHARMA_POSTER_FORM/viewform"
  }
];
