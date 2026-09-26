export interface Course {
  id: string;
  title: string;
  category: 'kids' | 'beginners' | 'hifz' | 'advanced';
  shortDesc: string;
  duration: string;
  suitableFor: string;
  prerequisites: string;
  features: string[];
  syllabus: {
    week: string;
    topic: string;
    description: string;
  }[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  gender: 'male' | 'female';
  experienceYears: number;
  education: string;
  certification: string;
  languages: string[];
  studentsTaught: number;
  rating: number;
  specialty: string;
  avatarSeed: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  recommendedFor: string;
  classesPerWeek: number;
  monthlyHours: string;
  prices: Record<string, number>;
  features: string[];
  isPopular?: boolean;
}

export interface SurahSample {
  id: number;
  name: string;
  nameArabic: string;
  versesCount: number;
  revelationPlace: string;
  audioUrl: string;
  verses: {
    number: number;
    arabic: string;
    transliteration: string;
    english: string;
    tajweedRule?: string;
  }[];
}

export const COURSES_DATA: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida for Kids & Beginners',
    category: 'beginners',
    shortDesc: 'Master Arabic alphabet pronunciation, joining letters, Harakaat, Tanween, Madd, and Sukoon with patient teachers.',
    duration: '2 to 3 Months',
    suitableFor: 'Ages 4+ and adult beginners',
    prerequisites: 'Zero background needed',
    features: [
      'Accurate articulation points (Makharij-ul-Huroof)',
      'Letter recognition in isolated, initial, medial, and final forms',
      'Short and long vowels (Fatha, Kasra, Dammah, Huroof Maddah)',
      'Rules of Sukoon, Jazm, Tashdeed, and Tanween',
      'Child-friendly digital exercises'
    ],
    syllabus: [
      { week: 'Lesson 1-3', topic: 'Single Arabic Letters & Correct Articulation', description: 'Pronouncing throat, tongue, and lip letters with correct Makharij.' },
      { week: 'Lesson 4-7', topic: 'Compound Letters (Murakkabaat) & Harakaat', description: 'Connecting letters in words, short vowels (Zabar, Zair, Peysh).' },
      { week: 'Lesson 8-11', topic: 'Tanween, Huroof-e-Maddah & Leen', description: 'Double vowels, stretch letters, and soft letters pronunciation.' },
      { week: 'Lesson 12-16', topic: 'Sukoon, Tashdeed & Quran Reading Practice', description: 'Joining consonants, doubled letters, and transitioning into full Quranic verses.' }
    ]
  },
  {
    id: 'quran-reading-tajweed',
    title: 'Quran Reading with Proper Tajweed',
    category: 'kids',
    shortDesc: 'Read the Holy Quran fluently and melodiously with thorough practical mastery of all Tajweed rules.',
    duration: '4 to 6 Months',
    suitableFor: 'Students who completed Qaida',
    prerequisites: 'Basic Arabic letter recognition',
    features: [
      'Rules of Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
      'Rules of Meem Sakinah and Ghunnah rules',
      'Rules of Madd (Madd Muttasil, Munfasil, Lazim, Arid)',
      'Heavy and light letters (Tafkheem and Tarqeeq)',
      'Rules of Waqf (stopping signs and breath control)'
    ],
    syllabus: [
      { week: 'Stage 1', topic: 'Noon & Meem Rules Mastery', description: 'Practical exercises on real Quranic verses from Juz Amma.' },
      { week: 'Stage 2', topic: 'Tafkheem, Tarqeeq & Ra / Lam Rules', description: 'Knowing when to read heavy (full mouth) or light.' },
      { week: 'Stage 3', topic: 'Madd Rules & Lengthening Counts', description: 'Accurate 2, 4, 5, and 6 count lengthening.' },
      { week: 'Stage 4', topic: 'Continuous Recitation with Melody (Tarteel)', description: 'Reciting selected Surahs with melodic harmony.' }
    ]
  },
  {
    id: 'hifz-quran',
    title: 'Quran Memorization (Hifz Program)',
    category: 'hifz',
    shortDesc: 'A time-tested daily memorization program with systematic revision (Sabaq, Sabqi, and Manzil) under certified Huffaz.',
    duration: '2 to 3 Years (Flexible)',
    suitableFor: 'Committed youth and adults',
    prerequisites: 'Fluent Quran recitation with Tajweed',
    features: [
      'Dedicated one-on-one session for new Sabaq daily',
      'Rigorous Sabqi (recent memorized portions) testing',
      'Systematic Manzil (older Juz) continuous revision',
      'Mutashabihat (similar verses) guidance',
      'Sanad-holding certified Huffaz supervision'
    ],
    syllabus: [
      { week: 'Daily Routine', topic: 'Sabaq (New Lesson)', description: 'Memorizing new lines/pages with teacher guidance.' },
      { week: 'Daily Routine', topic: 'Sabqi (Recent Revision)', description: 'Reciting the last 5 to 10 pages without looking.' },
      { week: 'Weekly Routine', topic: 'Manzil (Cumulative Revision)', description: 'Reciting full previous Juz in a structured rotation.' },
      { week: 'Monthly Review', topic: 'Formal Retention Examination', description: 'Testing overall retention with academic coordinator.' }
    ]
  },
  {
    id: 'quran-translation-tafseer',
    title: 'Quran Translation & Tafseer',
    category: 'advanced',
    shortDesc: 'Understand the divine message of the Quran word-by-word with authentic context, Asbab-un-Nuzool, and practical life applications.',
    duration: 'Ongoing / 6 Months per Juz Block',
    suitableFor: 'Adults, youth, and advanced seekers',
    prerequisites: 'Ability to read Quran text',
    features: [
      'Word-by-word Arabic grammatical breakdown',
      'Idiomatic and clear English explanations',
      'Context of revelation (Asbab-un-Nuzool) from classical books',
      'Life lessons and practical contemporary reflections',
      'Notes and vocabulary summaries provided'
    ],
    syllabus: [
      { week: 'Module 1', topic: 'Key Quranic Vocabulary & Core Themes', description: 'Learning recurring Arabic words that cover 70% of Quranic text.' },
      { week: 'Module 2', topic: 'Tafseer of Surah Al-Fatiha & Short Surahs', description: 'Deep theological understanding of daily prayers and essential surahs.' },
      { week: 'Module 3', topic: 'Stories of the Prophets (Qasas-ul-Anbiya)', description: 'Life lessons from Adam, Ibrahim, Musa, Isa, and Prophet Muhammad (PBUH).' },
      { week: 'Module 4', topic: 'Islamic Ethics, Family Life & Social Guidance', description: 'Practical implementation of divine guidance in modern everyday life.' }
    ]
  },
  {
    id: 'islamic-studies-duas',
    title: 'Islamic Studies & Daily Masnoon Duas',
    category: 'kids',
    shortDesc: 'A holistic character-building curriculum covering Salah training, daily prayers, Seerah of the Prophet (PBUH), and Islamic manners.',
    duration: 'Ongoing / 4 Months',
    suitableFor: 'Children aged 5 to 15 years',
    prerequisites: 'Open to all children',
    features: [
      'Step-by-step Salah (Namaz) practice with meanings and bodily postures',
      '40 Masnoon Duas for waking up, eating, traveling, sleeping, and entering home',
      'The 6 Kalimas with accurate pronunciation and English translations',
      'Stories from Seerah of Prophet Muhammad (PBUH) fostering high morals',
      'Basic Fiqh of cleanliness (Wudu, Ghusl, Tayammum, Taharah)'
    ],
    syllabus: [
      { week: 'Module 1', topic: 'Six Kalimas & Pillars of Islam', description: 'Understanding Iman, Salah, Zakat, Sawm, and Hajj with simple child-friendly illustrations.' },
      { week: 'Module 2', topic: 'Complete Practical Salah (Namaz)', description: 'Wudu method, Ruku, Sujood, Tashahhud, Durood-e-Ibrahimi, and Dua-e-Qunoot.' },
      { week: 'Module 3', topic: 'Daily Masnoon Supplications', description: 'Memorizing 20 everyday essential duas with real-life habit tracking.' },
      { week: 'Module 4', topic: 'Akhlaq (Manners) & Respect for Parents', description: 'Truthfulness, honesty, charity, kindness to neighbors, and Islamic etiquette.' }
    ]
  }
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'qari-abdul-rehman',
    name: 'Qari Hafiz Abdul Rehman',
    role: 'Senior Tajweed & Qira’at Instructor',
    gender: 'male',
    experienceYears: 12,
    education: 'Al-Azhar University Certified / Wifaq-ul-Madaris Al-Arabia',
    certification: 'Ijazah in Hafs ‘an ‘Asim with Sanad',
    languages: ['English', 'Urdu', 'Arabic'],
    studentsTaught: 380,
    rating: 4.98,
    specialty: 'Tajweed Mastery, Makharij Perfection, Adult Beginners',
    avatarSeed: 'AbdulRehman'
  },
  {
    id: 'ustadha-fatima-zahra',
    name: 'Ustadha Alima Fatima Zahra',
    role: 'Head of Sisters & Children Dept.',
    gender: 'female',
    experienceYears: 9,
    education: 'Dars-e-Nizami (Shahadat-ul-Alimiyyah), Masters in Islamic Studies',
    certification: 'Certified Hafiza & Qaria',
    languages: ['English', 'Urdu'],
    studentsTaught: 420,
    rating: 4.99,
    specialty: 'Child Pedagogy, Noorani Qaida, Masnoon Duas, Sisters Quran',
    avatarSeed: 'FatimaZahra'
  },
  {
    id: 'qari-muhammad-yousaf',
    name: 'Qari Muhammad Yousaf Al-Azhari',
    role: 'Hifz Program Lead & Qira’at Specialist',
    gender: 'male',
    experienceYears: 15,
    education: 'Faculty of Quranic Sciences, Al-Azhar University Cairo',
    certification: 'Ten Qira’at (Saba’ah & Ashara) Ijazah Holder',
    languages: ['English', 'Arabic', 'Urdu'],
    studentsTaught: 510,
    rating: 4.97,
    specialty: 'Hifz-ul-Quran, Voice Modulation, Beautiful Tarteel Melodies',
    avatarSeed: 'YousafAzhari'
  },
  {
    id: 'ustadha-maryam-siddiq',
    name: 'Ustadha Hafiza Maryam Siddiq',
    role: 'Kids Noorani Qaida Specialist',
    gender: 'female',
    experienceYears: 7,
    education: 'Wifaq-ul-Madaris Certified Alima & Hafiza',
    certification: 'Certified Early Childhood Islamic Educator',
    languages: ['English', 'Urdu'],
    studentsTaught: 290,
    rating: 4.98,
    specialty: 'Young Beginners (Ages 4-9), Story-Based Learning, Tajweed',
    avatarSeed: 'MaryamSiddiq'
  },
  {
    id: 'mufti-tariq-javed',
    name: 'Mufti Tariq Javed',
    role: 'Tafseer & Arabic Language Instructor',
    gender: 'male',
    experienceYears: 14,
    education: 'Takhassus Fil Fiqh (Mufti), Jamia Ashrafia',
    certification: 'Ijazah in Hadith and Tafseer',
    languages: ['English', 'Urdu', 'Arabic'],
    studentsTaught: 340,
    rating: 4.96,
    specialty: 'Quranic Arabic Grammar, Word-by-Word Translation, Tafseer',
    avatarSeed: 'TariqJaved'
  },
  {
    id: 'ustadha-zainab-hassan',
    name: 'Ustadha Zainab Hassan',
    role: 'Hifz & Advanced Tajweed Teacher',
    gender: 'female',
    experienceYears: 8,
    education: 'Ijazah in Hafs from Cairo & Wifaq-ul-Madaris',
    certification: 'Gold Medalist in Qira’at Competition',
    languages: ['English', 'Urdu', 'Arabic'],
    studentsTaught: 270,
    rating: 4.99,
    specialty: 'Sisters Hifz Tracking, Advanced Tajweed, Makharij Correction',
    avatarSeed: 'ZainabHassan'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-plan',
    name: 'Weekend Plan',
    recommendedFor: 'Best for busy school children & working professionals',
    classesPerWeek: 2,
    monthlyHours: '4 Hours per Month (8 Sessions)',
    isPopular: false,
    prices: {
      USD: 36,
      GBP: 28,
      EUR: 32,
      CAD: 48,
      AUD: 52,
      AED: 130,
      PKR: 4500
    },
    features: [
      '2 Days per week (30 mins per session)',
      '1-on-1 personalized private class',
      'Male or Female tutor choice',
      'Flexible weekend or weekday slots',
      'Monthly student progress report'
    ]
  },
  {
    id: 'regular-plan',
    name: 'Standard Plan',
    recommendedFor: 'Most popular for consistent steady Quran learning',
    classesPerWeek: 4,
    monthlyHours: '8 Hours per Month (16 Sessions)',
    isPopular: true,
    prices: {
      USD: 60,
      GBP: 48,
      EUR: 55,
      CAD: 80,
      AUD: 90,
      AED: 220,
      PKR: 7500
    },
    features: [
      '4 Days per week (30 mins per session)',
      '1-on-1 personalized private class',
      'Male or Female tutor choice',
      'Daily Tajweed and revision drills',
      'Interactive digital whiteboard',
      'Monthly test and parent feedback'
    ]
  },
  {
    id: 'intensive-plan',
    name: 'Intensive Hifz Plan',
    recommendedFor: 'Fast-track Quran learning and serious Hifz memorization',
    classesPerWeek: 5,
    monthlyHours: '10 Hours per Month (20 Sessions)',
    isPopular: false,
    prices: {
      USD: 75,
      GBP: 58,
      EUR: 68,
      CAD: 98,
      AUD: 110,
      AED: 275,
      PKR: 9500
    },
    features: [
      '5 Days per week (30 mins per session)',
      '1-on-1 personalized private class',
      'Dedicated Sabaq, Sabqi, and Manzil structure',
      'Flexible rescheduling options',
      'Direct WhatsApp access to tutor & coordinator',
      'Formal completion certificate & Sanad'
    ]
  }
];

export const SURAH_SAMPLES: SurahSample[] = [
  {
    id: 1,
    name: 'Al-Fatiha',
    nameArabic: 'الفَاتِحَة',
    versesCount: 7,
    revelationPlace: 'Meccan',
    audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3',
    verses: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Bismillāhir-Raḥmānir-Raḥīm',
        english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        tajweedRule: 'Lafz-ul-Jalalah (Lam is read thin/Tarqeeq due to Kasra before it)'
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        transliteration: 'Al-ḥamdu lillāhi Rabbil-‘ālamīn',
        english: '[All] praise is [due] to Allah, Lord of the worlds -',
        tajweedRule: 'Madd ‘Arid li-s-Sukoon at stopping point (2, 4 or 6 counts)'
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Ar-Raḥmānir-Raḥīm',
        english: 'The Entirely Merciful, the Especially Merciful,',
        tajweedRule: 'Ra is heavy (Tafkheem) with Fatha and Tashdeed'
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        transliteration: 'Māliki Yawmid-Dīn',
        english: 'Sovereign of the Day of Recompense.',
        tajweedRule: 'Clear pronunciation of Meem without stretching beyond 2 counts'
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        transliteration: 'Iyyāka na‘budu wa iyyāka nasta‘īn',
        english: 'It is You we worship and You we ask for help.',
        tajweedRule: 'Tashdeed on Ya with clear articulation without pause'
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinaṣ-ṣirāṭal-mustaqīm',
        english: 'Guide us to the straight path -',
        tajweedRule: 'Sad and Ta are emphatic heavy letters (Isti‘la / Itbaq)'
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Ṣirāṭallaḏīna an‘amta ‘alayhim ghayril-maghḍūbi ‘alayhim wa laḍ-ḍāllīn',
        english: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
        tajweedRule: 'Madd Lazim Kalimi Muthaqqal in "Ad-Dallin" (Mandatory 6 counts)'
      }
    ]
  },
  {
    id: 112,
    name: 'Al-Ikhlas',
    nameArabic: 'الإِخْلَاص',
    versesCount: 4,
    revelationPlace: 'Meccan',
    audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/112.mp3',
    verses: [
      {
        number: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        transliteration: 'Qul Huwallāhu Aḥad',
        english: 'Say, "He is Allah, [who is] One,',
        tajweedRule: 'Qaf is an elevated throat letter. Dal has Qalqalah when stopped.'
      },
      {
        number: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        transliteration: 'Allāhuṣ-Ṣamad',
        english: 'Allah, the Eternal Refuge.',
        tajweedRule: 'Sad is heavy. Dal has Qalqalah Kubra upon stopping.'
      },
      {
        number: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        transliteration: 'Lam yalid wa lam yūlad',
        english: 'He neither begets nor is born,',
        tajweedRule: 'Izhar Shafawi on Meem Sakinah. Qalqalah on Dal.'
      },
      {
        number: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        transliteration: 'Wa lam yakul-lahū kufuwan aḥad',
        english: 'Nor is there to Him any equivalent."',
        tajweedRule: 'Idgham Bila Ghunnah: Noon Sakinah merges into Lam without nasal humming.'
      }
    ]
  },
  {
    id: 113,
    name: 'Al-Falaq',
    nameArabic: 'الفَلَق',
    versesCount: 5,
    revelationPlace: 'Meccan',
    audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/113.mp3',
    verses: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        transliteration: 'Qul a‘ūḏu bi Rabbil-falaq',
        english: 'Say, "I seek refuge in the Lord of daybreak',
        tajweedRule: 'Qalqalah Kubra on Qaf upon stopping'
      },
      {
        number: 2,
        arabic: 'مِن شَرِّ مَا خَلَقَ',
        transliteration: 'Min sharri mā khalaq',
        english: 'From the evil of that which He created',
        tajweedRule: 'Ikhfa Haqiqi on Noon Sakinah before Sheen (nasal humming 2 counts)'
      },
      {
        number: 3,
        arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        transliteration: 'Wa min sharri ghāsiqin iḏā waqab',
        english: 'And from the evil of darkness when it settles',
        tajweedRule: 'Izhar Halqi on Tanween before Hamza. Qalqalah on Ba upon stopping.'
      },
      {
        number: 4,
        arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        transliteration: 'Wa min sharrin-naffāthāti fīl-‘uqad',
        english: 'And from the evil of the blowers in knots',
        tajweedRule: 'Ghunnah Musyaddadah on Noon Mushaddad. Qalqalah on Dal.'
      },
      {
        number: 5,
        arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        transliteration: 'Wa min sharri ḥāsidin iḏā ḥasad',
        english: 'And from the evil of an envier when he envies."',
        tajweedRule: 'Izhar on Tanween before Hamza. Strong Qalqalah on Dal.'
      }
    ]
  },
  {
    id: 114,
    name: 'An-Nas',
    nameArabic: 'النَّاس',
    versesCount: 6,
    revelationPlace: 'Meccan',
    audioUrl: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/114.mp3',
    verses: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        transliteration: 'Qul a‘ūḏu bi Rabbin-nās',
        english: 'Say, "I seek refuge in the Lord of mankind,',
        tajweedRule: 'Ghunnah on Noon Mushaddadah with Madd Arid li-s-Sukoon'
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        transliteration: 'Malikin-nās',
        english: 'The Sovereign of mankind,',
        tajweedRule: 'Clear Kasra on Lam and Kaaf'
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        transliteration: 'Ilāhin-nās',
        english: 'The God of mankind,',
        tajweedRule: 'Natural Madd on Lam-Alif (2 counts)'
      },
      {
        number: 4,
        arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        transliteration: 'Min sharril-waswāsil-khannās',
        english: 'From the evil of the retreating whisperer -',
        tajweedRule: 'Ikhfa on Noon Sakinah before Sheen'
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        transliteration: 'Alladhī yuwaswisu fī ṣudūrin-nās',
        english: 'Who whispers [evil] into the breasts of mankind -',
        tajweedRule: 'Sad is emphatic and rounded. Ra is light due to Kasra.'
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Minal-jinnati wan-nās',
        english: 'From among the jinn and mankind."',
        tajweedRule: 'Ghunnah on Noon of Al-Jinnah and An-Nas'
      }
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    studentName: 'Ayaan (8 yrs)',
    parentName: 'Brother Farhan & Sister Ayesha',
    location: 'London, United Kingdom',
    rating: 5,
    courseTaken: 'Noorani Qaida & Tajweed',
    feedback: 'Our son struggled with Arabic letters until we enrolled him here. Ustadha Fatima is remarkably patient, loving, and thorough. Ayaan completed his Qaida in 3 months and now reads Juz Amma with correct Makharij!',
    period: 'Enrolled for 8 months'
  },
  {
    id: 2,
    studentName: 'Zainab (14 yrs) & Hamza (11 yrs)',
    parentName: 'Dr. Tariq Malik',
    location: 'Dallas, Texas, USA',
    rating: 5,
    courseTaken: 'Hifz Program & Tajweed',
    feedback: 'Living in the US, finding qualified native scholars with high ethical pedagogy was hard. Quran Education Academy has exceeded our expectations. Both my children have memorized 5 Juz each with solid revision.',
    period: 'Enrolled for 1.5 years'
  },
  {
    id: 3,
    studentName: 'Sister Sarah (Adult Student)',
    parentName: 'Sarah Jenkins',
    location: 'Melbourne, Australia',
    rating: 5,
    courseTaken: 'Quran Translation & Tafseer',
    feedback: 'As an adult revert, I was nervous about starting from scratch. My teacher explains the deeper spiritual meaning and Arabic grammar with utmost respect. It has transformed my daily Salah.',
    period: 'Enrolled for 6 months'
  },
  {
    id: 4,
    studentName: 'Rayyan (6 yrs)',
    parentName: 'Sister Hina Qureshi',
    location: 'Toronto, Ontario, Canada',
    rating: 5,
    courseTaken: 'Kids Islamic Studies & Qaida',
    feedback: 'The interactive digital whiteboard keeps my active 6-year old fully engaged. He loves learning his daily Duas and Namaz steps. Thank you to the whole team!',
    period: 'Enrolled for 4 months'
  }
];

export const DAILY_HADITHS = [
  {
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    transliteration: 'Khayrukum man ta‘allamal-Qur’āna wa ‘allamahu',
    english: 'The best among you are those who learn the Quran and teach it to others.',
    reference: 'Sahih Al-Bukhari 5027'
  },
  {
    arabic: 'الْمَاهِرُ بِالْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ',
    transliteration: 'Al-māhiru bil-Qur’āni ma‘as-safarati-l-kirāmil-bararah',
    english: 'The one who is proficient in the recitation of the Quran will be with the honorable, noble scribes (angels).',
    reference: 'Sahih Muslim 798'
  },
  {
    arabic: 'اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ',
    transliteration: 'Iqra’ul-Qur’āna fa-innahu ya’tī yawmal-qiyāmati shafī‘an li-aṣḥābih',
    english: 'Read the Quran, for verily it will come on the Day of Resurrection as an intercessor for its companions.',
    reference: 'Sahih Muslim 804'
  }
];

export const FAQS_DATA = [
  {
    q: 'How do the online classes work?',
    a: 'Classes are conducted 1-on-1 via high-definition video/audio on Zoom or Google Meet. The teacher screen-shares digital color-coded Quranic materials and interactive whiteboards.'
  },
  {
    q: 'Can I choose my own class days and timings?',
    a: 'Yes, absolutely. We operate 24 hours a day, 7 days a week. You can select timings that fit your schedule across any time zone.'
  },
  {
    q: 'Are teachers qualified and certified?',
    a: 'Every instructor is verified, having graduated from institutions such as Al-Azhar University, Wifaq-ul-Madaris, or holding Ijazah with direct Sanad.'
  },
  {
    q: 'What equipment do I need for classes?',
    a: 'A tablet, laptop, desktop computer, or smartphone with a reliable internet connection and headphones or microphone.'
  },
  {
    q: 'Are there discounts for multiple siblings?',
    a: 'Yes, we provide automatic family discounts: 10% off for the second child and 15% off for the third child.'
  }
];
