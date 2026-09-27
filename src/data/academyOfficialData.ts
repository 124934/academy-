
export interface Course {
  id: string;
  slug: string;
  title: string;
  arabicTitle: string;
  category: string;
  level: string;
  suitableFor: string;
  duration: string;
  classesPerWeek: string;
  shortDesc: string;
  fullOverview: string;
  whatYouWillLearn: string[];
  learningOutcomes: string[];
  courseBenefits: string[];
  teachingMethodology: string;
  classFormat: string;
  image: string;
  badge?: string;
  faqs?: { question: string; answer: string; }[];
}

export interface Teacher {
  id: string;
  name: string;
  arabicName: string;
  gender: "male" | "female";
  title: string;
  qualifications: string;
  specialization: string[];
  languages: string[];
  experienceYears: number;
  studentsTaught: number;
  rating: number;
  reviewsCount: number;
  bio: string;
  image: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  basePriceUSD: number;
  classesPerWeek: number;
  classesPerMonth: number;
  classDuration: string;
  recommendedFor: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  countryCode: string;
  rating: number;
  course: string;
  avatarText: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorTitle: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const COURSES: Course[] = [
  {
    "id": "noorani-qaida",
    "slug": "noorani-qaida",
    "title": "Noorani Qaida Course",
    "arabicTitle": "القاعدة النورانية",
    "category": "Foundation",
    "level": "Beginner",
    "suitableFor": "Young kids (age 4+) & adult beginners taking their first steps",
    "duration": "3 to 5 Months (based on pace)",
    "classesPerWeek": "3 to 5 classes / week (30 mins each)",
    "shortDesc": "The essential foundation for Arabic phonetics, correct Makharij letter recognition, and joining Arabic letters.",
    "fullOverview": "The Noorani Qaida course is the globally recognized primer for anyone wishing to recite the Holy Quran with authentic pronunciation. Our certified tutors guide students step-by-step from individual Arabic alphabets to compound words, vowel markers (Harakat), Tanween, Maddah, and Sukoon, laying an unbreakable foundation.",
    "whatYouWillLearn": [
      "Identification of 29 individual Arabic letters with distinct articulation points (Makharij)",
      "Letter shapes: beginning, medial, and isolated letter forms",
      "Short vowels (Fatha, Kasra, Damma) and Tanween (Double vowels)",
      "Letters of Madd (Prolongation) and Leen letters",
      "Sukoon (Jazm), Tashdeed (Shaddah), and Waqf (stopping) rules",
      "Gradual progression to reading full Quranic words and short verses with confidence"
    ],
    "learningOutcomes": [
      "Ability to recognize and articulate Arabic letters with accurate native phonetics",
      "Fluency in combining letters into words without hesitation",
      "Preparedness to transition seamlessly into reciting the Holy Quran directly",
      "Elimination of common pronunciation errors before beginning Nazra"
    ],
    "courseBenefits": [
      "Patient 1-on-1 personalized attention for young children",
      "Visual interactive digital Qaida board during live classes",
      "Regular feedback and recording sent to parents after every session",
      "Weekly progress evaluations and certificate upon completion"
    ],
    "teachingMethodology": "Step-by-step oral drill and phonetic correction using interactive digital whiteboard and audio-visual feedback.",
    "classFormat": "1-on-1 private live online session via Zoom or Google Meet with screen sharing and interactive stylus.",
    "image": "/assets/images/quran_tajweed_reading_1790269867429.jpg",
    "badge": "Best for Beginners",
    "faqs": [
      {
        "question": "What is the ideal age to start Noorani Qaida?",
        "answer": "Children as young as 4 to 5 years old can start comfortably. Our teachers specialize in child-friendly gamified learning techniques to keep little minds engaged."
      },
      {
        "question": "Can adult beginners take this course?",
        "answer": "Yes! We teach many revert brothers and sisters and adults who never had the chance to learn Arabic letters in childhood, in completely private 1-on-1 sessions."
      }
    ]
  },
  {
    "id": "quran-reading",
    "slug": "quran-reading",
    "title": "Quran Reading (Nazra)",
    "arabicTitle": "قراءة القرآن الكريم",
    "category": "Recitation",
    "level": "Beginner",
    "suitableFor": "Students who completed Qaida or can identify Arabic letters",
    "duration": "6 to 12 Months",
    "classesPerWeek": "3 to 5 classes / week (30 mins each)",
    "shortDesc": "Read the noble Quran fluently from cover to cover with correct pauses, rhythm, and reverence.",
    "fullOverview": "The Quran Reading (Nazra) course empowers students to read through the entire Mushaf from Surah Al-Fatihah to Surah An-Nas. Under the close personal supervision of a certified Qari or Qaria, students develop smooth, hesitation-free reading while honoring the sacred etiquettes of reciting the Book of Allah.",
    "whatYouWillLearn": [
      "Fluent reading from Surah Al-Baqarah through the 30th Juz (Amma)",
      "Mastery of stopping signs (Rumooz al-Awqaf) and breathing pauses",
      "Proper pacing (Tarteel) neither too fast nor excessively slow",
      "Correction of subconscious pronunciation slips and common stutter points",
      "Spiritual etiquettes (Adab) of holding, reciting, and listening to the Quran"
    ],
    "learningOutcomes": [
      "Complete full Khatam (completion) of the Holy Quran under teacher guidance",
      "Independent recitation fluency with melodic tone and clarity",
      "Confidence to recite Quran daily with spiritual tranquility"
    ],
    "courseBenefits": [
      "1-on-1 pace tailored specifically to student reading speed",
      "Daily recitation logs maintained in student portal",
      "Completion certificate of Holy Quran Khatam awarded to the student"
    ],
    "teachingMethodology": "Direct oral recitation where the teacher listens line-by-line, corrects instantly, and models proper cadence.",
    "classFormat": "Private 1-on-1 video/audio session with high-resolution digital Mushaf display.",
    "image": "/assets/images/hero_quran_rehal_1790269853962.jpg",
    "badge": "Core Program",
    "faqs": [
      {
        "question": "How long does it take to complete the whole Quran reading?",
        "answer": "For a student taking 4 classes per week, it typically takes between 8 to 12 months, depending on their consistency and practice time."
      }
    ]
  },
  {
    "id": "quran-tajweed",
    "slug": "quran-tajweed",
    "title": "Quran with Tajweed Course",
    "arabicTitle": "تجويد القرآن الكريم",
    "category": "Recitation",
    "level": "Intermediate",
    "suitableFor": "Anyone wanting to beautify their recitation and follow the Prophet’s sunnah",
    "duration": "6 to 9 Months",
    "classesPerWeek": "3 to 4 classes / week (30-40 mins)",
    "shortDesc": "Master the rules of Tajweed, theoretical science, and practical recitation as revealed to the Prophet (PBUH).",
    "fullOverview": "Reciting the Quran with Tajweed is a sacred duty that preserves the divine speech exactly as it was revealed. This comprehensive course covers all classical Tajweed rules including Noon Saakin, Meem Saakin, Ghunnah, Qalqalah, Ahkam al-Madd, Sifaat (letter characteristics), and Makharij (deep articulation points).",
    "whatYouWillLearn": [
      "Precise anatomical articulation points (Makharij al-Huroof) from throat to lips",
      "Characteristics of letters (Sifaat al-Huroof) like Hams, Jahr, and Isti’laa",
      "Rules of Noon Saakinah and Tanween (Izhar, Idgham, Iqlab, Ikhfa)",
      "Rules of Meem Saakinah (Idgham Shafawi, Ikhfa Shafawi, Izhar Shafawi)",
      "All types of Madd (Natural, Obligatory, Permissible, Connected & Separated)",
      "Qalqalah (Echoing sound) in major and minor degrees"
    ],
    "learningOutcomes": [
      "Flawless recitation conforming to classical Hafs ‘an ‘Asim standard",
      "Understanding the rationale and technical reasons behind every Tajweed rule",
      "Beautified, melodious Quran recitation pleasing to the soul"
    ],
    "courseBenefits": [
      "Taught by Ijazah-certified Qaris with authentic Sanad (lineage)",
      "Color-coded Tajweed Mushaf provided in digital format",
      "Practical audio comparison exercises and vocal tuning"
    ],
    "teachingMethodology": "Classical Talaqqi (direct oral transmission) combined with modern phonetic diagrams and rule drills.",
    "classFormat": "1-on-1 intensive session with real-time vocal feedback and phonetics practice.",
    "image": "/assets/images/quran_tajweed_reading_1790269867429.jpg",
    "badge": "Most Popular",
    "faqs": [
      {
        "question": "Do I need prior Arabic knowledge for the Tajweed course?",
        "answer": "You only need to know how to read Arabic letters and words. The teacher explains the Tajweed rules in clear English or Urdu according to your preference."
      }
    ]
  },
  {
    "id": "quran-memorization",
    "slug": "quran-memorization",
    "title": "Quran Memorization (Hifz)",
    "arabicTitle": "حفظ القرآن الكريم",
    "category": "Memorization",
    "level": "Advanced",
    "suitableFor": "Dedicated students of all ages striving to commit Allah’s word to memory",
    "duration": "2 to 3 Years (or customized for Juz Amma / Surahs)",
    "classesPerWeek": "5 classes / week (45 mins)",
    "shortDesc": "A structured, proven Hifz program with daily Sabaq (new lesson), Sabqi (recent revision), and Manzil (old revision).",
    "fullOverview": "Becoming a Hafiz of the Holy Quran is one of the highest honors in Islam. Our structured Hifz program pairs each student with an experienced Hafiz mentor. We utilize the time-tested 3-tier revision system to ensure what is memorized remains firmly anchored and never forgotten.",
    "whatYouWillLearn": [
      "Memorization of selected Surahs, individual Ajzaa, or the entire 30 Juz",
      "Daily 3-part Hifz system: Sabaq (new), Sabqi (recent 5 Juz), Manzil (distant)",
      "Techniques for retaining similar verses (Mutashabihat) without confusion",
      "Breathing exercises and endurance techniques for long recitations",
      "Preparation for leading Taraweeh and public recitation"
    ],
    "learningOutcomes": [
      "Ironclad retention of memorized portions with instant recall",
      "Solid Tajweed integration while reciting from heart memory",
      "Spiritual discipline, focus, and life-long connection with the Quran"
    ],
    "courseBenefits": [
      "Dedicated one-on-one Hafiz mentor who listens every single day",
      "Customized pace: part-time (1 page/day) or full-time intensive tracks",
      "Parental supervision portal with daily memorization status",
      "Formal Ijazah / Hifz completion sanad upon passing comprehensive exam"
    ],
    "teachingMethodology": "Rigorous daily oral testing, Mutashabihat clarification, and systematic rotating revision cycles.",
    "classFormat": "Daily 1-on-1 sessions (Monday to Friday) with strict attendance and revision tracking.",
    "image": "/assets/images/hero_quran_rehal_1790269853962.jpg",
    "badge": "Prestigious Track",
    "faqs": [
      {
        "question": "Can school children do Hifz online alongside regular schooling?",
        "answer": "Yes! Over 80% of our Hifz students attend regular school. We structure classes before school (fajr time) or in the evenings to fit seamlessly into their schedule."
      },
      {
        "question": "Can I choose to memorize only Juz Amma or Surah Al-Kahf, Yaseen, etc.?",
        "answer": "Absolutely. We offer customized short Hifz tracks for specific Surahs or the 30th Juz for both adults and kids."
      }
    ]
  },
  {
    "id": "translation-tafseer",
    "slug": "translation-tafseer",
    "title": "Translation & Tafseer Course",
    "arabicTitle": "ترجمة وتفسير القرآن",
    "category": "Understanding",
    "level": "Intermediate",
    "suitableFor": "Seekers wanting to understand the meaning, historical context, and guidance",
    "duration": "12 to 18 Months",
    "classesPerWeek": "2 to 3 classes / week (45 mins)",
    "shortDesc": "Understand the divine message word-by-word with classical Tafseer, reasons of revelation (Asbab an-Nuzul), and life application.",
    "fullOverview": "Recitation without comprehension leaves the heart yearning for depth. This course opens the profound wisdom of the Quran. Students examine word-by-word linguistic meanings, historical context of revelation, classical explanations from Ibn Kathir, As-Sa’di, and contemporary life applications.",
    "whatYouWillLearn": [
      "Word-by-word translation and root word analysis of key Quranic terms",
      "Historical reasons of revelation (Asbab an-Nuzul) for each Surah",
      "Thematic analysis of Makki vs Madani revelations",
      "Stories of the Prophets and ethical lessons for modern living",
      "How to extract spiritual remedies and moral guidance from verses"
    ],
    "learningOutcomes": [
      "Deep emotional connection during Salah, knowing what is being recited",
      "Clarity on theological and ethical messages in the Quran",
      "Ability to explain Islamic principles with direct Quranic references"
    ],
    "courseBenefits": [
      "Taught by qualified Alim / Alimah scholars with deep linguistic training",
      "Open Q&A discussion time at the end of each session",
      "Curated lecture notes and summary slides provided after class"
    ],
    "teachingMethodology": "Interactive seminar-style 1-on-1 or small group with linguistic breakdowns and reflective discussion.",
    "classFormat": "1-on-1 interactive class with digital study notes and thematic slides.",
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg",
    "badge": "Deep Knowledge",
    "faqs": [
      {
        "question": "Is this taught in English or Urdu?",
        "answer": "We provide scholars fluent in English, Urdu, and Arabic. You can choose your preferred language of instruction."
      }
    ]
  },
  {
    "id": "islamic-studies",
    "slug": "islamic-studies",
    "title": "Comprehensive Islamic Studies",
    "arabicTitle": "الدراسات الإسلامية",
    "category": "Islamic Studies",
    "level": "All Levels",
    "suitableFor": "Children, teens, and new Muslims seeking well-rounded Islamic knowledge",
    "duration": "9 to 12 Months",
    "classesPerWeek": "2 to 3 classes / week (30-40 mins)",
    "shortDesc": "Holistic curriculum covering Aqeedah, Seerah of the Prophet (PBUH), Fiqh of daily life, Hadith, and Islamic character.",
    "fullOverview": "Nurture a confident, grounded Muslim identity. This course provides an authentic, age-appropriate foundation in faith. Students explore the Six Pillars of Iman, the Five Pillars of Islam, inspiring stories from the life of the Prophet Muhammad (PBUH) and his noble Companions, essential daily manners (Akhlaq), and contemporary challenges facing youth.",
    "whatYouWillLearn": [
      "Aqeedah: The 6 Articles of Faith and Tawheed (Oneness of Allah)",
      "Seerah: The inspiring life and character of Prophet Muhammad (PBUH)",
      "Hadith: 40 short foundational sayings of the Prophet with real-life practice",
      "Fiqh: Purification (Taharah), Wudu, Salah, Sawm, and Halal/Haram guidance",
      "Islamic character, respecting parents, honesty, and digital ethics"
    ],
    "learningOutcomes": [
      "A grounded moral compass rooted in the Sunnah",
      "Clear understanding of daily religious duties and rituals",
      "Confidence to navigate school and professional life with strong Muslim pride"
    ],
    "courseBenefits": [
      "Engaging story-based curriculum designed for Western diaspora students",
      "Weekly interactive quizzes and practical challenges",
      "Supportive mentorship that welcomes students’ heartfelt questions"
    ],
    "teachingMethodology": "Discussion-oriented, story-centered learning with practical habit-tracking exercises.",
    "classFormat": "1-on-1 mentoring session with colorful illustrated workbooks.",
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg",
    "badge": "Youth & Adults",
    "faqs": [
      {
        "question": "Is this course suitable for teens living in Western countries?",
        "answer": "Yes! The curriculum is specially tailored for Muslim youth growing up in the UK, USA, Canada, and Europe, addressing real-life peer pressure and modern issues."
      }
    ]
  },
  {
    "id": "salah-and-duas",
    "slug": "salah-and-duas",
    "title": "Salah & Daily Masnoon Duas",
    "arabicTitle": "الصلاة والأدعية المأثورة",
    "category": "Islamic Studies",
    "level": "Beginner",
    "suitableFor": "Kids, beginners, and anyone wanting to perfect their prayer and daily supplications",
    "duration": "2 to 4 Months",
    "classesPerWeek": "2 to 3 classes / week (30 mins)",
    "shortDesc": "Learn the step-by-step method of Salah according to the Sunnah, correct Arabic recitation, and daily Sunnah Duas.",
    "fullOverview": "Salah is the pillar of religion and our direct connection with Allah. This practical, hands-on course teaches students everything needed to perform Salah with complete confidence and serenity (Khushu). Students memorize Tashahhud, Durood Ibrahim, Dua Qunoot, and essential everyday supplications from waking up to sleeping.",
    "whatYouWillLearn": [
      "Correct practical demonstration of Wudu and conditions of prayer",
      "Step-by-step physical postures of Salah (Qiyam, Ruku, Sujood, Jalsah)",
      "Exact memorization and translation of all words recited in Salah",
      "Masnoon Duas: Before meals, after meals, entering/leaving home, travel, protection",
      "Understanding the spiritual meaning of Khushu in prayer"
    ],
    "learningOutcomes": [
      "Flawless performance of daily 5 prayers without guidance",
      "Spontaneous remembrance of Allah through daily Sunnah supplications",
      "Elimination of common posture errors and rushed prayer habits"
    ],
    "courseBenefits": [
      "Practical video posture review with gentle teacher guidance",
      "Laminated printable Dua charts and Salah flashcards",
      "Special focus on developing love for prayer rather than mere obligation"
    ],
    "teachingMethodology": "Visual posture modeling, repetitive vocal practice, and daily routine check-ins.",
    "classFormat": "1-on-1 personalized coaching session.",
    "image": "/assets/images/quran_tajweed_reading_1790269867429.jpg",
    "badge": "Essential Sunnah",
    "faqs": [
      {
        "question": "Can my 6-year-old child take this alongside Noorani Qaida?",
        "answer": "Yes! Many parents combine 2 days of Qaida and 1 day of Salah & Duas for a well-rounded foundation."
      }
    ]
  },
  {
    "id": "quranic-arabic",
    "slug": "quranic-arabic",
    "title": "Basic Arabic & Quranic Arabic",
    "arabicTitle": "اللغة العربية والقرآنية",
    "category": "Understanding",
    "level": "Intermediate",
    "suitableFor": "Students who want to unlock direct comprehension of the Quranic vocabulary",
    "duration": "6 to 12 Months",
    "classesPerWeek": "2 to 3 classes / week (45 mins)",
    "shortDesc": "Learn the grammar (Nahw & Sarf) and 85% of common vocabulary appearing in the Holy Quran.",
    "fullOverview": "Ever dreamed of listening to the Quran in prayer and understanding directly what Allah is saying without glancing at an English translation? This course focuses on high-frequency Quranic vocabulary and fundamental Arabic grammar rules, enabling you to comprehend over 80% of words found across the Quran.",
    "whatYouWillLearn": [
      "The 300 most frequent words in the Quran making up ~70% of the entire text",
      "Essential Arabic grammar: Nouns (Ism), Verbs (Fi’l), and Particles (Harf)",
      "Basic verb conjugations: Past (Madi), Present/Future (Mudari’), Command (Amr)",
      "Pronouns, prepositions, sentence structures, and possession (Idafah)",
      "Practical parsing of Surah Al-Fatihah, Ayatul Kursi, and Juz 30"
    ],
    "learningOutcomes": [
      "Direct comprehension of Quranic verses during Taraweeh and Salah",
      "Ability to decipher root letters and meanings using Arabic dictionaries",
      "A powerful stepping stone to advanced classical Arabic studies"
    ],
    "courseBenefits": [
      "Interactive flashcard decks and digital vocabulary drills",
      "Accelerated learning method designed specifically for non-native speakers",
      "Real Quranic passage exercises rather than abstract grammatical theories"
    ],
    "teachingMethodology": "Pattern recognition, high-frequency word immersion, and live sentence breakdown.",
    "classFormat": "1-on-1 focused study session with custom interactive worksheets.",
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg",
    "badge": "High Impact",
    "faqs": [
      {
        "question": "Is this spoken dialect Arabic or Classical Quranic Arabic?",
        "answer": "This is Classical Fusha / Quranic Arabic, focused directly on understanding the Quran and Islamic texts."
      }
    ]
  }
];
export const TEACHERS: Teacher[] = [
  {
    "id": "qari-abdul-rehman",
    "name": "Qari Abdul Rehman Al-Azhari",
    "arabicName": "القارئ عبد الرحمن الأزهري",
    "gender": "male",
    "title": "Senior Tajweed & Qira’at Specialist",
    "qualifications": "B.A. in Islamic & Quranic Studies, Al-Azhar University, Cairo",
    "specialization": [
      "Advanced Tajweed",
      "Ten Qira’at",
      "Quran Memorization (Hifz)"
    ],
    "experience": "14+ Years Teaching Experience",
    "studentsTaught": 850,
    "languages": [
      "Arabic",
      "English",
      "Urdu"
    ],
    "bio": "Holding an authentic Sanad and Ijazah connecting directly to the Prophet Muhammad (PBUH) in Hafs and Shu’ba, Qari Abdul Rehman has guided hundreds of students in the UK, USA, and Gulf to master immaculate Tajweed and complete memorization.",
    "image": "/assets/images/teacher_scholar_male_1790269882669.jpg",
    "certifications": [
      "Al-Azhar University Qira’at Board Certification",
      "Ijazah in Hafs ‘an ‘Asim and Warsh",
      "Certified International Quran Competition Judge"
    ]
  },
  {
    "id": "ustadha-fatima-zahra",
    "name": "Ustadha Fatima Zahra",
    "arabicName": "الأستاذة فاطمة الزهراء",
    "gender": "female",
    "title": "Head of Female & Children Education",
    "qualifications": "Shahadat-ul-Alimiyyah (M.A. Islamic Studies) & Hafiza of Quran",
    "specialization": [
      "Noorani Qaida for Kids",
      "Female Tajweed Classes",
      "Salah & Duas"
    ],
    "experience": "10+ Years Teaching Experience",
    "studentsTaught": 620,
    "languages": [
      "English",
      "Urdu"
    ],
    "bio": "Ustadha Fatima is renowned for her gentle, encouraging, and playful teaching style with young children and female students. Her patience makes learning Arabic letters and short Surahs joyful and effortless for little beginners.",
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg",
    "certifications": [
      "Gold Medalist Wifaqul Madaris Al-Arabiyya",
      "Certified Child Psychology in Islamic Pedagogy",
      "Ijazah in Tajweed Al-Jazariyyah"
    ]
  },
  {
    "id": "sheikh-muhammad-bilal",
    "name": "Sheikh Muhammad Bilal",
    "arabicName": "الشيخ محمد بلال",
    "gender": "male",
    "title": "Senior Hifz Mentor & Tafseer Lecturer",
    "qualifications": "Graduate of Islamic University of Madinah, Faculty of Holy Quran",
    "specialization": [
      "Intensive Hifz",
      "Tafseer & Translation",
      "Mutashabihat Mastery"
    ],
    "experience": "12+ Years Teaching Experience",
    "studentsTaught": 740,
    "languages": [
      "Arabic",
      "English",
      "Urdu"
    ],
    "bio": "Having completed Hifz at age 11 in Madinah al-Munawwarah, Sheikh Bilal specializes in systematic retention techniques. He has mentored over 45 students who have completed the full 30 Juz memorization with distinction.",
    "image": "/assets/images/teacher_scholar_male_1790269882669.jpg",
    "certifications": [
      "Faculty of Holy Quran, Islamic University of Madinah",
      "Mastery Certificate in Sabaq-Sabqi Retention System",
      "Taraweeh Reciter in Major Masajid"
    ]
  },
  {
    "id": "ustadha-maryam-khalid",
    "name": "Ustadha Maryam Khalid",
    "arabicName": "الأستاذة مريم خالد",
    "gender": "female",
    "title": "Quranic Arabic & Tajweed Specialist",
    "qualifications": "B.S. in Arabic Linguistics & Hafiza of the Quran",
    "specialization": [
      "Quranic Arabic Grammar",
      "Teen Girls Mentorship",
      "Nazra Quran"
    ],
    "experience": "8+ Years Teaching Experience",
    "studentsTaught": 480,
    "languages": [
      "English",
      "Arabic",
      "Urdu"
    ],
    "bio": "Dedicated to empowering sisters and youth, Ustadha Maryam bridges classical Arabic grammar with real-world understanding of Quranic verses, bringing depth and emotion into daily prayers.",
    "image": "/assets/images/quran_tajweed_reading_1790269867429.jpg",
    "certifications": [
      "Certified Arabic Grammar Instructor",
      "Ijazah in Tuhfat al-Atfal and Al-Jazariyyah",
      "Youth Islamic Mentorship Certificate"
    ]
  },
  {
    "id": "hafiz-tariq-mahmood",
    "name": "Hafiz Qari Tariq Mahmood",
    "arabicName": "الحافظ القارئ طارق محمود",
    "gender": "male",
    "title": "Lead Nazra & Makharij Tutor",
    "qualifications": "Dars-e-Nizami & Wifaqul Madaris Hafiz Certificate",
    "specialization": [
      "Noorani Qaida",
      "Nazra Quran Reading",
      "Makharij Pronunciation"
    ],
    "experience": "9+ Years Teaching Experience",
    "studentsTaught": 590,
    "languages": [
      "English",
      "Urdu",
      "Punjabi"
    ],
    "bio": "Known for his crystal-clear pronunciation drills and warm encouragement, Hafiz Tariq transforms hesitant beginner readers into smooth, melodic reciters within weeks.",
    "image": "/assets/images/hero_quran_rehal_1790269853962.jpg",
    "certifications": [
      "Wifaqul Madaris Sanad in Hifz and Tajweed",
      "Digital Classroom Excellence Award 2024"
    ]
  },
  {
    "id": "ustadha-aisha-siddiqah",
    "name": "Ustadha Aisha Siddiqah",
    "arabicName": "الأستاذة عائشة الصديقة",
    "gender": "female",
    "title": "Islamic Studies & Hadith Lecturer",
    "qualifications": "Master of Arts in Islamic History & Seerah",
    "specialization": [
      "Comprehensive Islamic Studies",
      "Seerah of Prophet (PBUH)",
      "Salah & Duas"
    ],
    "experience": "11+ Years Teaching Experience",
    "studentsTaught": 510,
    "languages": [
      "English",
      "Urdu"
    ],
    "bio": "Ustadha Aisha specializes in making Islamic history, prophetic character, and daily Sunnahs come alive for children and teenagers living across Western societies.",
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg",
    "certifications": [
      "Al-Alimiyyah Degree in Hadith & Fiqh",
      "Curriculum Developer for Diaspora Youth"
    ]
  }
];
export const PRICING_PLANS: PricingPlan[] = [
  {
    "id": "starter",
    "name": "Starter Plan",
    "tagline": "Ideal for gentle pacing & busy schedules",
    "basePriceUSD": 36,
    "classesPerWeek": 2,
    "classesPerMonth": 8,
    "classDuration": "30 Minutes per class",
    "recommendedFor": "Beginners & adults with limited weekly time",
    "features": [
      "2 Live 1-on-1 Classes per Week",
      "8 Interactive Private Sessions Monthly",
      "Choice of Certified Male or Female Tutor",
      "3-Day Free Trial (No Card Required)",
      "Digital Noorani Qaida / Mushaf Included",
      "Bi-Weekly Progress Report",
      "Free Class Rescheduling (24h Notice)"
    ]
  },
  {
    "id": "standard",
    "name": "Standard Plan",
    "tagline": "Our most recommended track for steady progress",
    "basePriceUSD": 48,
    "classesPerWeek": 3,
    "classesPerMonth": 12,
    "classDuration": "30 Minutes per class",
    "isPopular": true,
    "highlightText": "Most Popular Choice",
    "recommendedFor": "Children & regular students mastering Tajweed",
    "features": [
      "3 Live 1-on-1 Classes per Week",
      "12 Interactive Private Sessions Monthly",
      "Dedicated Primary Scholar / Teacher",
      "3-Day Free Trial (No Card Required)",
      "Digital Tajweed Material & Daily Duas",
      "Weekly Parent Feedback & Voice Notes",
      "Free Class Rescheduling with Ease",
      "Official Completion Certificate"
    ]
  },
  {
    "id": "regular",
    "name": "Frequent Plan",
    "tagline": "Rapid mastery and accelerated Quran fluency",
    "basePriceUSD": 60,
    "classesPerWeek": 4,
    "classesPerMonth": 16,
    "classDuration": "30 Minutes per class",
    "recommendedFor": "Students preparing for Hifz or rapid Khatam",
    "features": [
      "4 Live 1-on-1 Classes per Week",
      "16 Interactive Private Sessions Monthly",
      "Dedicated Senior Certified Scholar",
      "3-Day Free Trial (No Card Required)",
      "Full Digital Curriculum & Recordings",
      "Weekly Live Quiz & Evaluation",
      "Priority Slot Scheduling",
      "Course Completion & Tajweed Certificate"
    ]
  },
  {
    "id": "intensive-hifz",
    "name": "Intensive Hifz Program",
    "tagline": "Comprehensive daily Quran memorization track",
    "basePriceUSD": 78,
    "classesPerWeek": 5,
    "classesPerMonth": 20,
    "classDuration": "45 Minutes per class",
    "highlightText": "Comprehensive Hifz",
    "recommendedFor": "Dedicated memorization students & future Huffaz",
    "features": [
      "5 Live 1-on-1 Classes per Week (Mon–Fri)",
      "20 Intensive Sessions Monthly (45 mins)",
      "Daily 3-Stage Revision (Sabaq, Sabqi, Manzil)",
      "Dedicated Senior Hafiz / Hafiza Mentor",
      "3-Day Free Trial Assessment",
      "Full Sanad & Ijazah Tracking Portal",
      "Monthly Mock Exam & Oral Examination",
      "Formal Hifz Sanad (Degree) upon completion"
    ]
  }
];
export const TESTIMONIALS: Testimonial[] = [
  {
    "id": "1",
    "name": "Sister Yasmin Chowdhury",
    "role": "Mother of 2 Students (Ages 7 & 10)",
    "location": "London, United Kingdom",
    "countryCode": "GB",
    "rating": 5,
    "course": "Noorani Qaida & Tajweed",
    "avatarText": "YC",
    "quote": "My children used to resist Quran classes at our local center due to large class sizes. At Quran Education Academy, their teacher Ustadha Fatima is so gentle, patient, and engaging. In just 4 months, my 7-year-old finished Qaida and can recite Surah Al-Mulk with proper Makharij!",
    "verified": true
  },
  {
    "id": "2",
    "name": "Brother Farhan Siddiqui",
    "role": "Software Engineer & Student",
    "location": "Dallas, Texas, USA",
    "countryCode": "US",
    "rating": 5,
    "course": "Quran with Tajweed & Arabic",
    "avatarText": "FS",
    "quote": "As a working professional in the US, finding a teacher who accommodates my 7:00 AM CST schedule was impossible until I found Quran Education Academy. Sheikh Bilal is a true scholar. His breakdown of Ahkam al-Madd and Noon Saakin transformed how I recite in Salah.",
    "verified": true
  },
  {
    "id": "3",
    "name": "Dr. Tariq Al-Hashimi",
    "role": "Father of Hifz Student (Zaid, Age 12)",
    "location": "Toronto, Ontario, Canada",
    "countryCode": "CA",
    "rating": 5,
    "course": "Quran Memorization (Hifz)",
    "avatarText": "TA",
    "quote": "Zaid has now memorized 18 Juz with Quran Education Academy! The daily Sabaq-Sabqi revision methodology guarantees that older Surahs remain crystal clear in his memory. We receive weekly voice updates from the teacher. Truly a blessing for our family.",
    "verified": true
  },
  {
    "id": "4",
    "name": "Sister Maryam Al-Nuaimi",
    "role": "Parent & Revert Sister",
    "location": "Sydney, Australia",
    "countryCode": "AU",
    "rating": 5,
    "course": "Quran Reading & Islamic Studies",
    "avatarText": "MA",
    "quote": "Entering Islam 2 years ago, I felt overwhelmed by Arabic phonetics. My teacher never rushed me, celebrated every milestone, and explained the beautiful reasons behind our daily rituals. I can now read the Quran independently with peace in my heart.",
    "verified": true
  },
  {
    "id": "5",
    "name": "Brother Usman Qureshi",
    "role": "Parent of Hamza (Age 9)",
    "location": "Birmingham, UK",
    "countryCode": "GB",
    "rating": 5,
    "course": "Salah & Daily Duas",
    "avatarText": "UQ",
    "quote": "Seeing my 9-year-old son enthusiastically make Wudu and recite all the Sunnah Duas before sleeping brings tears to my eyes. The academy has built genuine love for Allah and His Messenger in my child.",
    "verified": true
  },
  {
    "id": "6",
    "name": "Sister Zainab El-Khatib",
    "role": "University Student",
    "location": "Dubai, United Arab Emirates",
    "countryCode": "AE",
    "rating": 5,
    "course": "Translation & Tafseer",
    "avatarText": "ZE",
    "quote": "The Tafseer course gave my life direction. We delve into the historical context and linguistics of each ayah. It is so much more than recitation—it is living guidance for everyday decisions.",
    "verified": true
  }
];
export const BLOG_POSTS: BlogPost[] = [
  {
    "id": "post-1",
    "slug": "secrets-to-mastering-tajweed-at-home",
    "title": "7 Practical Secrets to Mastering Quranic Tajweed at Home",
    "category": "Tajweed",
    "readTime": "6 min read",
    "date": "September 2026",
    "author": "Qari Abdul Rehman Al-Azhari",
    "authorTitle": "Senior Tajweed Scholar",
    "excerpt": "Discover the physiological and mental routines that transform rigid pronunciation into fluid, melodious recitation pleasing to the soul.",
    "content": [
      "Reciting the Holy Quran with Tajweed is not simply an art form; it is an obligation to preserve the divine speech as transmitted by Jibreel (AS) to Prophet Muhammad (PBUH). Many students struggle with throat letters and nasal Ghunnah sounds when practicing alone.",
      "The first secret is daily vocal warm-ups focusing on the deep throat letters (Hamzah, Haa, Ain, Haa). Practicing these 5 minutes each morning strengthens the vocal chords.",
      "Second, record your recitation and listen back through headphones. When we recite aloud, bone conduction prevents us from hearing our own minor pronunciation flaws. Listening to a playback makes errors instantly apparent.",
      "Third, mirror practice: sit before a mirror and watch your lips during letters like Waw, Baa, and Meem. Tajweed has an anatomical geometry that must be visually verified.",
      "Above all, consistent Talaqqi—listening directly to an authorized teacher who corrects your errors in real time—is the irreplaceable golden standard."
    ],
    "image": "/assets/images/quran_tajweed_reading_1790269867429.jpg"
  },
  {
    "id": "post-2",
    "slug": "instilling-love-for-quran-in-children",
    "title": "How to Nurture a Lifelong Love for the Quran in Young Children",
    "category": "Islamic Parenting",
    "readTime": "5 min read",
    "date": "August 2026",
    "author": "Ustadha Fatima Zahra",
    "authorTitle": "Child Islamic Pedagogy Specialist",
    "excerpt": "Moving beyond coercion: practical ways to make Quran time the most cherished, peaceful part of your child’s daily routine.",
    "content": [
      "Many parents unknowingly create anxiety around Quran classes by associating them with punishment, fatigue after long school days, or harsh scolding. Children naturally gravitate toward warmth, celebration, and storytelling.",
      "Create a dedicated \"Sacred Corner\" in your home adorned with soft cushions, a fragrant oud diffuser, and a special rehal bookstand. Make entering this space feel like an honor rather than a chore.",
      "Always connect verses with stories. When a 6-year-old learns Surah Al-Fil, tell them the thrilling history of the Elephant Army and how Allah protected the Ka’bah with tiny birds carrying stones.",
      "Praise the effort, not just speed. When your child struggles through an Arabic word for two minutes and gets it right, remind them of the Hadith: \"The one who recites the Quran and stammers in it, finding it difficult, will have a double reward.\""
    ],
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg"
  },
  {
    "id": "post-3",
    "slug": "memorizing-quran-with-busy-schedule",
    "title": "The 20-Minute Daily Routine for Memorizing Quran as a Busy Professional",
    "category": "Quran Learning Tips",
    "readTime": "7 min read",
    "date": "August 2026",
    "author": "Sheikh Muhammad Bilal",
    "authorTitle": "Hifz Mentor & Madinah Alum",
    "excerpt": "You do not need 5 hours a day to memorize the Quran. Learn the micro-session Hifz system designed for university students and professionals.",
    "content": [
      "A common misconception is that Hifz must be completed in childhood during a gap year. While youth aids memorization, adults possess superior focus, self-discipline, and spiritual motivation.",
      "The 20-minute morning rule: Dedicate the quiet 20 minutes right after Fajr prayer strictly to memorizing just 3 to 5 new lines. At this hour, the subconscious mind is uncluttered by emails and daily stresses.",
      "Use auditory anchoring: Listen to a single Qari reciting your target page on repeat during your morning commute. By the time you sit down to memorize, your ears will already recognize the melody.",
      "Never skip the Manzil revision. The Prophet (PBUH) likened the Quran in memory to a tethered camel: if tended to, it stays; if neglected, it escapes swiftly. Consistent daily review is the cornerstone of lifelong retention."
    ],
    "image": "/assets/images/hero_quran_rehal_1790269853962.jpg"
  },
  {
    "id": "post-4",
    "slug": "importance-of-daily-masnoon-duas",
    "title": "The Protective Armor: Transformative Power of Daily Masnoon Duas",
    "category": "Dua & Sunnah",
    "readTime": "4 min read",
    "date": "July 2026",
    "author": "Ustadha Aisha Siddiqah",
    "authorTitle": "Hadith Lecturer",
    "excerpt": "From waking up to stepping outside: how reciting short authentic prophetic supplications wraps your family in divine serenity.",
    "content": [
      "In a fast-paced world filled with anxiety and distractions, the morning and evening supplications (Adhkar as-Sabah wal-Masaa) act as a spiritual fortress guarding the mind and soul.",
      "Reciting \"Bismillahi alladhi la yadurru ma’asmihi shay’un fil-ardi wa la fis-sama’i...\" three times each morning and evening protects against sudden calamities and harmful spiritual forces.",
      "Teach your children to say \"Bismillahi tawakkaltu ‘alallah\" before leaving the front door for school. It instills an immediate subconscious reliance upon Allah in all life journeys.",
      "Salah and Duas are not isolated rituals; they are the continuous dialogue between the created and their Loving Creator throughout every waking moment."
    ],
    "image": "/assets/images/quran_tajweed_reading_1790269867429.jpg"
  },
  {
    "id": "post-5",
    "slug": "why-tajweed-rules-change-meanings",
    "title": "Why Tajweed Matters: 5 Subtle Pronunciation Errors That Alter Verse Meanings",
    "category": "Tajweed",
    "readTime": "5 min read",
    "date": "July 2026",
    "author": "Hafiz Tariq Mahmood",
    "authorTitle": "Makharij Lead Tutor",
    "excerpt": "An eye-opening breakdown of how confusing Qaf with Kaaf or Ha with Haa can unintentionally reverse the theological meaning of sacred verses.",
    "content": [
      "The Arabic language is exquisitely precise. Changing a single letter or even softening a heavy sound can alter the entire meaning of a sentence.",
      "For instance, the word \"Qalb\" (with the heavy Qaf) means \"Heart\". Pronouncing it with an ordinary \"Kaaf\" turns it into \"Kalb\", which means \"Dog\".",
      "Similarly, the difference between \"Halim\" (Forbearing, an attribute of Allah) with a throat Haa, versus \"Haleem\" with a soft chest Haa which means \"dreamer\".",
      "Learning the precise Makharij ensures we recite the Quran exactly as revealed, without corrupting its sacred meanings."
    ],
    "image": "/assets/images/islamic_academy_learning_1790269898921.jpg"
  }
];
export const FAQS: FAQItem[] = [
  {
    "id": "faq-1",
    "category": "General",
    "question": "How do online Quran classes work?",
    "answer": "Online classes are conducted 1-on-1 via high-quality video/audio conference software such as Zoom, Google Meet, or Skype. The teacher and student view the same interactive digital Mushaf or Noorani Qaida on screen. The teacher recites, points out phonetic articulation with a digital stylus, and listens attentively to the student’s recitation, correcting mistakes immediately."
  },
  {
    "id": "faq-2",
    "category": "Classes",
    "question": "How long is each class?",
    "answer": "Standard classes are 30 minutes long, which educational research shows is the optimal attention span for children and adults to retain phonetic and Quranic lessons without fatigue. For intensive Hifz (memorization) and advanced Tafseer students, 45-minute and 60-minute sessions are also available."
  },
  {
    "id": "faq-3",
    "category": "Classes",
    "question": "How long does a course take?",
    "answer": "Course duration depends on the student’s age, starting level, and weekly frequency. On average: Noorani Qaida takes 3 to 5 months; Quran Reading (Nazra) takes 8 to 12 months; Tajweed mastery takes 6 to 9 months; and complete Hifz of the Quran takes 2 to 3 years. We adapt entirely to the individual pace of the student."
  },
  {
    "id": "faq-4",
    "category": "Teachers",
    "question": "Can I choose my teacher?",
    "answer": "Yes! We have qualified male and female certified scholars (Huffaz, Qaris, and Alims). You can specify whether you prefer a male or female teacher for yourself or your daughter/son, as well as preferred language (English, Urdu, or Arabic). If at any point you wish to switch teachers, our academic coordinator will arrange a replacement seamlessly."
  },
  {
    "id": "faq-5",
    "category": "General",
    "question": "Are trial classes available?",
    "answer": "Yes, we provide a 3-Day Free Trial with zero financial obligation. No credit card or payment information is required. You can experience the teaching methodology, meet your instructor, and evaluate compatibility before making any enrollment decision."
  },
  {
    "id": "faq-6",
    "category": "Payments & Scheduling",
    "question": "What class timings are available?",
    "answer": "Because we serve international students spanning the United States, Canada, the United Kingdom, Europe, the Middle East, and Australia, our academy operates 24 hours a day, 7 days a week. You choose the exact time of day and days of the week that fit your family schedule."
  },
  {
    "id": "faq-7",
    "category": "Payments & Scheduling",
    "question": "How does payment work?",
    "answer": "Tuition is billed monthly after you have completed your 3-day free trial. We accept secure international payments via Credit/Debit Cards, PayPal, Bank Transfer, Stripe, and Wise. We offer flexible plans in USD, GBP, EUR, CAD, AUD, and PKR."
  },
  {
    "id": "faq-8",
    "category": "Payments & Scheduling",
    "question": "Can classes be rescheduled?",
    "answer": "Yes. We understand family emergencies, exams, and travel happen. As long as you notify your teacher or academic coordinator at least 4 to 6 hours in advance, your class will be rescheduled to a makeup slot at no additional fee."
  },
  {
    "id": "faq-9",
    "category": "Classes",
    "question": "How is student progress monitored?",
    "answer": "Every lesson is recorded in our digital student progress portal. The teacher logs the specific Surah, verses recited, errors corrected, and areas of excellence. Students undergo a monthly oral evaluation and receive a formal progress report."
  },
  {
    "id": "faq-10",
    "category": "General",
    "question": "How are parents updated on their child’s progress?",
    "answer": "Parents receive weekly WhatsApp or email summary notes directly from the instructor detailing Sabaq (new lesson), Tajweed rules practiced, and behavior. Parents are also warmly invited to observe classes at any time or request a monthly parent-teacher video consultation."
  }
];

export const CURRENCIES: Record<string, { code: string; symbol: string; name: string; rateToUSD: number }> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", rateToUSD: 1 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rateToUSD: 0.78 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rateToUSD: 0.92 },
  CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar", rateToUSD: 1.35 },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", rateToUSD: 1.52 },
  PKR: { code: "PKR", symbol: "Rs", name: "Pakistani Rupee", rateToUSD: 280 }
};
