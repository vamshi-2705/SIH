// Enhanced Jharkhand AI Tourism Platform with Complete AI Trip Planner
const appData = {
  aiItineraryTemplates: [
    {
      id: 1,
      name: "Cultural Heritage Immersion",
      duration: "5 Days 4 Nights",
      suitableFor: ["Culture enthusiasts", "Art lovers", "History buffs", "Photography enthusiasts"],
      budgetRange: "₹12,000-18,000 per person",
      culturalDepth: "Deep",
      activities: ["Tribal homestays", "Craft workshops", "Festival participation", "Sacred site visits"],
      destinations: ["Ranchi", "Khunti", "Saraikela", "Hazaribagh", "Dumka"],
      dailyPlans: [
        {
          day: 1,
          title: "Arrival & Cultural Orientation",
          location: "Ranchi to Khunti",
          activities: [
            { time: "10:00 AM", activity: "Arrive Ranchi Airport", duration: "30min", type: "arrival" },
            { time: "11:00 AM", activity: "Birsa Munda Museum Visit", duration: "2h", type: "cultural", significance: "Learn tribal freedom movement history" },
            { time: "2:00 PM", activity: "Traditional Litti Chokha lunch", duration: "1h", type: "food" },
            { time: "4:00 PM", activity: "Travel to Khunti with sacred grove visit", duration: "2h", type: "transport" },
            { time: "7:00 PM", activity: "Check-in Sarhul Heritage Resort", duration: "1h", type: "accommodation" },
            { time: "8:00 PM", activity: "Welcome ceremony with tribal elders", duration: "2h", type: "cultural" }
          ],
          accommodation: "Sarhul Heritage Resort",
          estimatedBudget: "₹2,800",
          culturalHighlight: "Sacred grove blessing with Oraon elder"
        },
        {
          day: 2,
          title: "Deep Tribal Village Experience",
          location: "Khunti Tribal Villages",
          activities: [
            { time: "6:00 AM", activity: "Sunrise meditation in sacred grove", duration: "1h", type: "spiritual" },
            { time: "8:00 AM", activity: "Traditional breakfast with host family", duration: "1h", type: "food" },
            { time: "9:30 AM", activity: "Village walk & community interaction", duration: "2.5h", type: "cultural" },
            { time: "1:00 PM", activity: "Community cooking & lunch experience", duration: "2h", type: "food" },
            { time: "3:30 PM", activity: "Dhokra metal craft workshop", duration: "3h", type: "craft" },
            { time: "7:00 PM", activity: "Folk music & dance evening", duration: "2h", type: "cultural" }
          ],
          accommodation: "Tribal Homestay",
          estimatedBudget: "₹2,200",
          culturalHighlight: "Learn 4000-year-old Dhokra lost-wax casting technique"
        },
        {
          day: 3,
          title: "Chhau Dance & Mask Art Heritage",
          location: "Saraikela",
          activities: [
            { time: "8:00 AM", activity: "Travel to Saraikela", duration: "3h", type: "transport" },
            { time: "11:30 AM", activity: "Chhau Kendra visit & live performance", duration: "2h", type: "cultural" },
            { time: "2:00 PM", activity: "Traditional Ho tribal lunch", duration: "1h", type: "food" },
            { time: "3:30 PM", activity: "Chhau mask making workshop", duration: "3h", type: "craft" },
            { time: "7:00 PM", activity: "Evening Chhau dance learning session", duration: "2h", type: "cultural" }
          ],
          accommodation: "Heritage Guesthouse Saraikela",
          estimatedBudget: "₹2,600",
          culturalHighlight: "UNESCO recognized classical Chhau dance training"
        },
        {
          day: 4,
          title: "Sohrai Art & Santhal Culture",
          location: "Hazaribagh",
          activities: [
            { time: "9:00 AM", activity: "Travel to Hazaribagh", duration: "2h", type: "transport" },
            { time: "11:30 AM", activity: "Sohrai painting workshop with UNESCO artist", duration: "4h", type: "craft" },
            { time: "4:00 PM", activity: "Santhal village cultural interaction", duration: "2h", type: "cultural" },
            { time: "6:30 PM", activity: "Traditional Santhal music evening", duration: "1.5h", type: "cultural" }
          ],
          accommodation: "Eco Lodge Hazaribagh",
          estimatedBudget: "₹2,400",
          culturalHighlight: "Learn ancient wall painting with natural pigments"
        },
        {
          day: 5,
          title: "Cultural Shopping & Farewell",
          location: "Return to Ranchi",
          activities: [
            { time: "9:00 AM", activity: "Tribal handicraft market visit", duration: "2h", type: "shopping" },
            { time: "11:30 AM", activity: "Cultural certificate ceremony", duration: "1h", type: "cultural" },
            { time: "1:00 PM", activity: "Traditional farewell feast", duration: "1.5h", type: "food" },
            { time: "3:00 PM", activity: "Travel to Ranchi Airport", duration: "2h", type: "transport" }
          ],
          estimatedBudget: "₹2,000",
          culturalHighlight: "Blessing ceremony by tribal council elders"
        }
      ],
      totalBudget: "₹15,000",
      included: ["Accommodation", "All meals", "Local transport", "Cultural guide", "Workshop materials", "Certificate"],
      notIncluded: ["Flight tickets", "Personal shopping", "Tips", "Travel insurance"],
      bestSeasons: ["October-March"],
      physicalRequirement: "Easy",
      groupSize: "2-8 people"
    },
    {
      id: 2,
      name: "Adventure & Nature Explorer",
      duration: "7 Days 6 Nights",
      suitableFor: ["Adventure seekers", "Nature lovers", "Photography enthusiasts", "Wildlife enthusiasts"],
      budgetRange: "₹18,000-25,000 per person",
      culturalDepth: "Moderate",
      activities: ["Trekking", "Wildlife safaris", "Waterfall rappelling", "Camping", "Rock climbing"],
      destinations: ["Ranchi", "Netarhat", "Betla National Park", "Hundru Falls", "Parasnath Hills"],
      totalBudget: "₹22,000",
      physicalRequirement: "Moderate to High",
      groupSize: "4-12 people",
      bestSeasons: ["October-March", "Monsoon for waterfalls"],
      included: ["Accommodation", "Adventure equipment", "Safety gear", "Guide", "Transport"],
      notIncluded: ["Personal equipment", "Insurance", "Medical expenses"]
    },
    {
      id: 3,
      name: "Spiritual & Wellness Journey",
      duration: "3 Days 2 Nights",
      suitableFor: ["Spiritual seekers", "Wellness enthusiasts", "Solo travelers", "Meditation practitioners"],
      budgetRange: "₹8,000-12,000 per person",
      culturalDepth: "Moderate",
      activities: ["Temple visits", "Meditation", "Spiritual ceremonies", "Traditional healing", "Yoga sessions"],
      destinations: ["Deoghar", "Parasnath Hills", "Rajrappa Temple"],
      totalBudget: "₹10,000",
      physicalRequirement: "Easy",
      groupSize: "1-6 people",
      bestSeasons: ["Year-round"],
      included: ["Accommodation", "Meals", "Temple entries", "Meditation sessions"],
      notIncluded: ["Personal donations", "Shopping", "Additional treatments"]
    }
  ],

  transportRoutes: [
    {
      from: "Ranchi",
      to: "Netarhat",
      distance: "156 km",
      duration: "4h 30min",
      options: [
        {
          type: "JTDC Bus",
          schedule: ["6:00 AM", "9:00 AM", "2:00 PM", "6:00 PM"],
          fare: "₹180",
          features: ["AC", "WiFi", "Cultural Guide Available"],
          liveTracking: true,
          bookingAvailable: true,
          seatsAvailable: 23
        },
        {
          type: "Private Taxi",
          fare: "₹2,500-3,500",
          duration: "3h 45min",
          features: ["AC", "Cultural Guide Option", "Scenic Route"],
          providers: ["Ola", "Uber", "Local Operators"]
        }
      ]
    },
    {
      from: "Jamshedpur",
      to: "Betla National Park",
      distance: "168 km",
      duration: "4h 15min",
      options: [
        {
          type: "Tourist Bus",
          schedule: ["7:00 AM", "11:00 AM", "3:00 PM"],
          fare: "₹220",
          features: ["AC", "Wildlife Guide", "Safari Booking"],
          seatsAvailable: 12
        }
      ]
    }
  ],

  authenticHandicrafts: [
    {
      id: 1,
      name: "Dhokra Tribal Dancer Set",
      category: "Metal Craft",
      price: 3500,
      artist: "Ramesh Malhar",
      village: "Amadubi",
      tribe: "Malhar",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      description: "Handcrafted bronze figurines using 4000-year-old lost-wax casting technique",
      technique: "Lost-wax casting with bronze and copper",
      culturalSignificance: "Represents tribal dance forms and cultural celebrations",
      makingTime: "15-20 days",
      authenticity: "Blockchain verified",
      inStock: true,
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "Sohrai Canvas Painting - Harvest Festival",
      category: "Traditional Art",
      price: 2200,
      artist: "Sita Devi",
      village: "Hazaribagh",
      tribe: "Santhal",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
      description: "Traditional Sohrai wall painting recreated on canvas with natural pigments",
      technique: "Natural pigments on canvas, finger painting",
      culturalSignificance: "Celebrates harvest festival and cattle worship",
      makingTime: "7-10 days",
      authenticity: "UNESCO artist certified",
      inStock: true,
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Bamboo Furniture Set (Table + 4 Chairs)",
      category: "Bamboo Craft",
      price: 8500,
      artist: "Tribal Craft Collective",
      village: "Khunti",
      tribe: "Oraon",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      description: "Eco-friendly bamboo furniture with traditional weaving patterns",
      technique: "Traditional bamboo weaving and joining",
      culturalSignificance: "Daily use items showcasing sustainable tribal lifestyle",
      makingTime: "20-25 days",
      authenticity: "Forest Department certified",
      inStock: true,
      rating: 4.7,
      reviews: 45
    },
    {
      id: 4,
      name: "Chhau Dance Mask - Durga",
      category: "Papier-mâché Art",
      price: 4200,
      artist: "Guru Kelucharan Ho",
      village: "Saraikela",
      tribe: "Ho",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400",
      description: "Authentic Chhau dance mask representing Goddess Durga",
      technique: "Traditional papier-mâché with natural colors",
      culturalSignificance: "Used in classical Chhau dance performances",
      makingTime: "12-15 days",
      authenticity: "Cultural Heritage certified",
      inStock: true,
      rating: 5.0,
      reviews: 67
    },
    {
      id: 5,
      name: "Tribal Silver Jewelry Set",
      category: "Jewelry",
      price: 6800,
      artist: "Tribal Women Collective",
      village: "Dumka",
      tribe: "Santhal",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      description: "Traditional silver jewelry worn by Santhal tribal women",
      technique: "Hand-forged silver with traditional designs",
      culturalSignificance: "Represents marital status and tribal identity",
      makingTime: "18-22 days",
      authenticity: "Hallmarked silver",
      inStock: true,
      rating: 4.9,
      reviews: 156
    }
  ],

  traditionalFood: [
    {
      id: 1,
      name: "Litti Chokha",
      category: "Main Course",
      description: "Roasted wheat balls stuffed with sattu, served with mashed vegetables",
      ingredients: ["Wheat flour", "Roasted gram flour (sattu)", "Eggplant", "Tomatoes", "Potatoes"],
      preparationTime: "1h 30min",
      culturalSignificance: "Most popular traditional dish, shared with Bihar",
      nutritionalValue: "High protein, complex carbohydrates",
      servingStyle: "Served hot with ghee",
      availableAt: ["Street vendors", "Traditional restaurants", "Cultural experiences"],
      price: "₹120-180",
      spiceLevel: "Medium",
      vegetarian: true
    },
    {
      id: 2,
      name: "Dhuska",
      category: "Snack",
      description: "Crispy deep-fried pancakes made from rice and lentil batter",
      ingredients: ["Rice", "Lentils", "Onions", "Green chilies", "Spices"],
      preparationTime: "45 minutes",
      culturalSignificance: "Popular breakfast and street food",
      servingStyle: "Served with ghugni (chickpea curry)",
      availableAt: ["Street stalls", "Local eateries", "Hotel breakfast"],
      price: "₹60-100",
      spiceLevel: "Medium",
      vegetarian: true
    },
    {
      id: 3,
      name: "Handia",
      category: "Beverage",
      description: "Traditional rice beer made with natural herbs and fermentation",
      ingredients: ["Rice", "Ranu tablet (20+ herbs)", "Natural fermentation"],
      preparationTime: "7 days fermentation",
      culturalSignificance: "Sacred drink used in tribal ceremonies and festivals",
      alcoholContent: "3-5% (lower than commercial beer)",
      servingStyle: "Served in traditional earthen pots",
      availableAt: ["Tribal villages", "Cultural experiences", "Heritage hotels"],
      price: "₹150-250",
      restrictions: "Cultural experience only, age verification required"
    },
    {
      id: 4,
      name: "Rugra (Wild Mushroom Curry)",
      category: "Tribal Special",
      description: "Wild mushrooms collected from forests during monsoon",
      ingredients: ["Wild mushrooms", "Tribal spices", "Mustard oil", "Local herbs"],
      preparationTime: "45 minutes",
      culturalSignificance: "Monsoon delicacy, traditional tribal knowledge",
      seasonality: "Monsoon season only (July-September)",
      nutritionalValue: "High protein, minerals",
      availableAt: ["Tribal homestays", "Authentic restaurants", "Monsoon festivals"],
      price: "₹180-250",
      spiceLevel: "Medium-Hot",
      vegetarian: true
    },
    {
      id: 5,
      name: "Thekua",
      category: "Sweet",
      description: "Crispy wheat flour cookies made with jaggery, traditionally served during festivals",
      ingredients: ["Wheat flour", "Jaggery", "Coconut", "Ghee"],
      preparationTime: "1 hour",
      culturalSignificance: "Festival sweet, especially during Chhath Puja",
      shelfLife: "15-20 days",
      availableAt: ["Festival stalls", "Sweet shops", "Cultural events"],
      price: "₹200-300 per kg",
      vegetarian: true
    }
  ],

  certifiedGuides: [
    {
      id: 1,
      name: "Birsa Munda",
      specialization: "Tribal Culture & Heritage",
      experience: "12 years",
      languages: ["Hindi", "English", "Mundari", "Santhali"],
      rating: 4.9,
      completedTours: 342,
      pricePerDay: "₹2,500",
      certifications: ["Jharkhand Tourism Board", "Tribal Cultural Expert", "Heritage Guide License"],
      expertise: ["Tribal history", "Traditional crafts", "Festival participation", "Sacred site visits"],
      locations: ["Khunti", "Ranchi", "Tribal villages", "Birsa Munda heritage sites"],
      contactInfo: "+91-9876543210",
      bio: "Born in tribal family, expert in Munda culture and history of freedom movement",
      specialServices: ["Homestay arrangements", "Craft workshop facilitation", "Traditional ceremony participation"],
      availability: "Available most days"
    },
    {
      id: 2,
      name: "Sita Devi",
      specialization: "Traditional Arts & Crafts",
      experience: "15 years",
      languages: ["Hindi", "English", "Santhali"],
      rating: 4.8,
      completedTours: 156,
      pricePerDay: "₹2,000",
      certifications: ["UNESCO Certified Artist", "Traditional Art Master", "Cultural Heritage Guide"],
      expertise: ["Sohrai painting", "Wall art techniques", "Natural pigment preparation", "Art history"],
      locations: ["Hazaribagh", "Santhal villages", "Art centers", "Cultural workshops"],
      contactInfo: "+91-9876543211",
      bio: "Renowned Sohrai artist featured in international exhibitions and documentaries",
      specialServices: ["Art workshop classes", "Painting technique demonstrations", "Artist interactions"],
      availability: "Weekends preferred"
    },
    {
      id: 3,
      name: "Ravi Kumar Singh",
      specialization: "Adventure & Wildlife",
      experience: "8 years",
      languages: ["Hindi", "English"],
      rating: 4.7,
      completedTours: 289,
      pricePerDay: "₹2,200",
      certifications: ["Wildlife Guide License", "Adventure Sports Certified", "First Aid Trained"],
      expertise: ["Wildlife safaris", "Trekking", "Waterfall exploration", "Rock climbing"],
      locations: ["Betla National Park", "Netarhat", "Hundru Falls", "Adventure sites"],
      contactInfo: "+91-9876543212",
      bio: "Former forest ranger with extensive knowledge of Jharkhand wildlife and adventure spots",
      specialServices: ["Photography guidance", "Safety equipment", "Wildlife tracking"],
      availability: "Peak season bookings required"
    }
  ],

  adventureActivities: [
    {
      id: 1,
      name: "Netarhat Sunrise Trek",
      category: "Trekking",
      location: "Netarhat Hill Station",
      duration: "2 days 1 night",
      difficulty: "Easy to Moderate",
      price: "₹1,800 per person",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      includes: ["Guide", "Camping equipment", "Meals", "Transportation"],
      bestTime: "October to March",
      groupSize: "4-12 people",
      highlights: ["Sunrise viewing", "Pine forest walk", "Tribal village interaction", "Photography"],
      safetyFeatures: ["First aid kit", "Emergency contacts", "Weather monitoring"],
      bookingRequired: true,
      physicalRequirement: "Basic fitness level"
    },
    {
      id: 2,
      name: "Betla Wildlife Safari",
      category: "Wildlife Adventure",
      location: "Betla National Park",
      duration: "4 hours",
      difficulty: "Easy",
      price: "₹1,200 per person",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400",
      includes: ["Jeep safari", "Wildlife guide", "Binoculars", "Refreshments"],
      bestTime: "November to May",
      groupSize: "6 people per jeep",
      highlights: ["Tiger spotting", "Elephant encounters", "Bird watching", "Palamau Fort visit"],
      timings: ["6:00 AM - 10:00 AM", "2:00 PM - 6:00 PM"],
      bookingRequired: true,
      ageLimit: "5+ years"
    },
    {
      id: 3,
      name: "Hundru Falls Rappelling",
      category: "Extreme Adventure",
      location: "Hundru Falls, Ranchi",
      duration: "6 hours",
      difficulty: "Moderate to Hard",
      price: "₹3,500 per person",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      includes: ["Professional instructor", "Safety equipment", "Insurance", "Lunch"],
      bestTime: "October to February",
      groupSize: "2-8 people",
      highlights: ["Waterfall rappelling", "Rock climbing", "Photography", "Achievement certificate"],
      safetyRequirements: ["Age 16-50", "Medical fitness", "No heart conditions"],
      equipment: ["Harness", "Helmet", "Ropes", "Gloves"],
      bookingRequired: true,
      advance: "3 days minimum"
    },
    {
      id: 4,
      name: "Parasnath Hill Trekking",
      category: "Spiritual Trekking",
      location: "Parasnath Hills",
      duration: "1 day",
      difficulty: "Moderate",
      price: "₹1,500 per person",
      image: "https://images.unsplash.com/photo-1486022119027-c2ded64866b5?w=400",
      includes: ["Guide", "Temple entry", "Lunch", "Transportation"],
      bestTime: "October to March",
      groupSize: "6-15 people",
      highlights: ["Highest peak in Jharkhand", "Jain temples", "Panoramic views", "Spiritual experience"],
      elevation: "1,365 meters",
      trekDistance: "8 km round trip",
      bookingRequired: true,
      culturalNote: "Sacred Jain pilgrimage site"
    }
  ]
};

// Application State
let currentUser = null;
let cart = [];
let feedbackData = {
  ratings: {},
  step: 1,
  photos: [],
  recommendation: null
};

// Enhanced AI Trip Planner State
let aiPlannerState = {
  currentStep: 1,
  totalSteps: 6,
  preferences: {
    duration: null,
    budget: null,
    interests: [],
    accommodation: null,
    groupType: null,
    activityLevel: null,
    seasonPreference: null,
    specialRequests: ""
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Enhanced Jharkhand AI Tourism Platform...');
  
  try {
    setTimeout(() => {
      initializeAuth();
      initializeNavigation();
      initializeChat();
      initializeModals();
      initializeAIPlanner();
      updateLiveStats();
      initializeActionCards();
      showChatMessage("Welcome! I'm your AI-powered Jharkhand tourism assistant. Ready to create your perfect trip with our intelligent planner?", 'bot');
    }, 100);
    
    console.log('Enhanced AI Tourism Platform initialization complete!');
  } catch (error) {
    console.error('Initialization error:', error);
  }
});

// Global function for direct main app access
window.showMainAppDirectly = function() {
  // Auto-login as tourist for quick access
  currentUser = {
    type: 'tourist',
    name: 'AI Explorer',
    email: 'explorer@jharkhand.in',
    loginDate: new Date().toISOString()
  };
  
  showNotification('Welcome! Starting your AI-powered Jharkhand experience...', 'success');
  showMainApp();
  
  // Auto-scroll to AI planner after brief delay
  setTimeout(() => {
    scrollToSection('ai-planner');
    showChatMessage("Perfect! Let's start planning your personalized Jharkhand adventure. The AI Trip Planner will create custom itineraries based on your preferences.", 'bot');
  }, 2000);
};

// Authentication Functions
function initializeAuth() {
  console.log('Setting up authentication...');
  
  try {
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');
    const closeRegister = document.getElementById('closeRegister');
    const closeLogin = document.getElementById('closeLogin');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (registerBtn) {
      registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (registerModal) {
          registerModal.classList.remove('hidden');
        }
      });
    }

    if (loginBtn) {
      loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (loginModal) {
          loginModal.classList.remove('hidden');
        }
      });
    }

    if (closeRegister) {
      closeRegister.addEventListener('click', () => {
        if (registerModal) {
          registerModal.classList.add('hidden');
        }
      });
    }

    if (closeLogin) {
      closeLogin.addEventListener('click', () => {
        if (loginModal) {
          loginModal.classList.add('hidden');
        }
      });
    }

    if (registerForm) {
      registerForm.addEventListener('submit', handleRegistration);
    }

    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
    }

    [registerModal, loginModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            modal.classList.add('hidden');
          }
        });
      }
    });

    console.log('Authentication setup complete');
  } catch (error) {
    console.error('Authentication initialization error:', error);
  }
}

function handleRegistration(e) {
  e.preventDefault();
  
  try {
    const formData = new FormData(e.target);
    const userType = formData.get('userType');
    const name = document.getElementById('regName')?.value;
    const email = document.getElementById('regEmail')?.value;
    const phone = document.getElementById('regPhone')?.value;
    const address = document.getElementById('regAddress')?.value;
    const password = document.getElementById('regPassword')?.value;
    
    const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

    if (!name || !email || !phone || !address || !password) {
      showNotification('Please fill all required fields', 'error');
      return;
    }

    currentUser = {
      type: userType,
      name: name,
      email: email,
      phone: phone,
      address: address,
      interests: interests,
      registrationDate: new Date().toISOString()
    };

    showNotification(`Welcome ${name}! Account created successfully with AI trip planning access.`, 'success');
    
    setTimeout(() => {
      const registerModal = document.getElementById('registerModal');
      if (registerModal) {
        registerModal.classList.add('hidden');
      }
      showMainApp();
      // Auto-navigate to AI planner for new users
      setTimeout(() => {
        scrollToSection('ai-planner');
        showChatMessage(`Hi ${name}! Welcome to Jharkhand AI Tourism. Let's start by creating your perfect itinerary with our AI Trip Planner!`, 'bot');
      }, 1500);
    }, 2000);
  } catch (error) {
    console.error('Registration error:', error);
    showNotification('Registration failed. Please try again.', 'error');
  }
}

function handleLogin(e) {
  e.preventDefault();
  
  try {
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;

    if (!email || !password) {
      showNotification('Please enter both email and password', 'error');
      return;
    }

    const userType = email.includes('official') ? 'official' : 'tourist';
    
    currentUser = {
      type: userType,
      name: email.split('@')[0],
      email: email,
      loginDate: new Date().toISOString()
    };

    showNotification('Welcome back! Loading your personalized AI-powered experience...', 'success');
    
    setTimeout(() => {
      const loginModal = document.getElementById('loginModal');
      if (loginModal) {
        loginModal.classList.add('hidden');
      }
      showMainApp();
    }, 1500);
  } catch (error) {
    console.error('Login error:', error);
    showNotification('Login failed. Please try again.', 'error');
  }
}

function handleLogout() {
  try {
    currentUser = null;
    cart = [];
    aiPlannerState = {
      currentStep: 1,
      totalSteps: 6,
      preferences: {
        duration: null,
        budget: null,
        interests: [],
        accommodation: null,
        groupType: null,
        activityLevel: null,
        seasonPreference: null,
        specialRequests: ""
      }
    };
    
    showNotification('Logged out successfully', 'info');
    
    setTimeout(() => {
      const mainApp = document.getElementById('mainApp');
      const landingSection = document.getElementById('landing');
      
      if (mainApp) mainApp.classList.add('hidden');
      if (landingSection) landingSection.style.display = 'block';
      
      updateCartDisplay();
    }, 1500);
  } catch (error) {
    console.error('Logout error:', error);
  }
}

function showMainApp() {
  try {
    const landingSection = document.getElementById('landing');
    const mainApp = document.getElementById('mainApp');
    
    if (landingSection) {
      landingSection.style.display = 'none';
    }
    
    if (mainApp) {
      mainApp.classList.remove('hidden');
    }
    
    const userName = document.getElementById('userName');
    if (userName && currentUser) {
      userName.textContent = currentUser.name;
    }
    
    if (currentUser?.type === 'official') {
      const analyticsNav = document.getElementById('analyticsNav');
      const analyticsSection = document.getElementById('analytics');
      if (analyticsNav) analyticsNav.style.display = 'block';
      if (analyticsSection) analyticsSection.style.display = 'block';
    }
    
    loadMainContent();
  } catch (error) {
    console.error('Show main app error:', error);
  }
}

// Enhanced AI Trip Planner Functions
function initializeAIPlanner() {
  console.log('Setting up AI Trip Planner...');
  
  try {
    const nextStepBtn = document.getElementById('nextStepBtn');
    const prevStepBtn = document.getElementById('prevStepBtn');
    const generateBtn = document.getElementById('generateItinerary');
    
    if (nextStepBtn) {
      nextStepBtn.addEventListener('click', nextQuestionnaireStep);
    }
    
    if (prevStepBtn) {
      prevStepBtn.addEventListener('click', prevQuestionnaireStep);
    }
    
    if (generateBtn) {
      generateBtn.addEventListener('click', generateAIItinerary);
    }
    
    // Duration selection
    const durationCards = document.querySelectorAll('.duration-card');
    durationCards.forEach(card => {
      card.addEventListener('click', function() {
        durationCards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        aiPlannerState.preferences.duration = parseInt(this.dataset.duration);
      });
    });
    
    // Budget selection
    const budgetCards = document.querySelectorAll('.budget-card');
    budgetCards.forEach(card => {
      card.addEventListener('click', function() {
        budgetCards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        aiPlannerState.preferences.budget = this.dataset.budget;
      });
    });
    
    // Interest selection (multiple)
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('selected');
        const interest = this.dataset.interest;
        const index = aiPlannerState.preferences.interests.indexOf(interest);
        
        if (index > -1) {
          aiPlannerState.preferences.interests.splice(index, 1);
        } else {
          aiPlannerState.preferences.interests.push(interest);
        }
      });
    });
    
    // Accommodation selection
    const accommodationCards = document.querySelectorAll('.accommodation-card');
    accommodationCards.forEach(card => {
      card.addEventListener('click', function() {
        accommodationCards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        aiPlannerState.preferences.accommodation = this.dataset.accommodation;
      });
    });
    
    // Group type and activity level
    const groupOptions = document.querySelectorAll('input[name="groupType"]');
    groupOptions.forEach(option => {
      option.addEventListener('change', function() {
        aiPlannerState.preferences.groupType = this.value;
      });
    });
    
    const activityOptions = document.querySelectorAll('input[name="activityLevel"]');
    activityOptions.forEach(option => {
      option.addEventListener('change', function() {
        aiPlannerState.preferences.activityLevel = this.value;
      });
    });
    
    const seasonOptions = document.querySelectorAll('input[name="season"]');
    seasonOptions.forEach(option => {
      option.addEventListener('change', function() {
        aiPlannerState.preferences.seasonPreference = this.value;
      });
    });
    
    console.log('AI Trip Planner setup complete');
  } catch (error) {
    console.error('AI Planner initialization error:', error);
  }
}

function nextQuestionnaireStep() {
  try {
    const currentStep = aiPlannerState.currentStep;
    
    // Enhanced validation
    if (currentStep === 1 && !aiPlannerState.preferences.duration) {
      showNotification('Please select your trip duration to continue', 'error');
      return;
    }
    
    if (currentStep === 2 && !aiPlannerState.preferences.budget) {
      showNotification('Please select your budget range to proceed', 'error');
      return;
    }
    
    if (currentStep === 3 && aiPlannerState.preferences.interests.length === 0) {
      showNotification('Please select at least one interest area', 'error');
      return;
    }
    
    if (currentStep === 4 && !aiPlannerState.preferences.accommodation) {
      showNotification('Please select your accommodation preference', 'error');
      return;
    }
    
    if (currentStep === 5 && (!aiPlannerState.preferences.groupType || !aiPlannerState.preferences.activityLevel)) {
      showNotification('Please complete all preferences', 'error');
      return;
    }
    
    if (currentStep < aiPlannerState.totalSteps) {
      // Hide current step
      const currentStepEl = document.getElementById(`step${currentStep}`);
      if (currentStepEl) currentStepEl.classList.remove('active');
      
      // Show next step
      aiPlannerState.currentStep++;
      const nextStepEl = document.getElementById(`step${aiPlannerState.currentStep}`);
      if (nextStepEl) nextStepEl.classList.add('active');
      
      // Update progress
      updateQuestionnaireProgress();
      
      // Show/hide navigation buttons
      const prevBtn = document.getElementById('prevStepBtn');
      const nextBtn = document.getElementById('nextStepBtn');
      
      if (prevBtn) prevBtn.style.display = aiPlannerState.currentStep > 1 ? 'inline-block' : 'none';
      if (nextBtn) nextBtn.style.display = aiPlannerState.currentStep < aiPlannerState.totalSteps ? 'inline-block' : 'none';
      
      // Provide helpful chat messages
      if (aiPlannerState.currentStep === 2) {
        showChatMessage(`Great choice! ${aiPlannerState.preferences.duration} days will give you a wonderful Jharkhand experience. Now let's set your budget range.`, 'bot');
      } else if (aiPlannerState.currentStep === 3) {
        showChatMessage(`Perfect budget selection! Now choose your interests - you can select multiple areas that excite you most.`, 'bot');
      } else if (aiPlannerState.currentStep === 4) {
        showChatMessage(`Excellent interests! Your preferences: ${aiPlannerState.preferences.interests.join(', ')}. Now select your ideal accommodation style.`, 'bot');
      }
    }
  } catch (error) {
    console.error('Next step error:', error);
  }
}

function prevQuestionnaireStep() {
  try {
    if (aiPlannerState.currentStep > 1) {
      const currentStepEl = document.getElementById(`step${aiPlannerState.currentStep}`);
      if (currentStepEl) currentStepEl.classList.remove('active');
      
      aiPlannerState.currentStep--;
      const prevStepEl = document.getElementById(`step${aiPlannerState.currentStep}`);
      if (prevStepEl) prevStepEl.classList.add('active');
      
      updateQuestionnaireProgress();
      
      const prevBtn = document.getElementById('prevStepBtn');
      const nextBtn = document.getElementById('nextStepBtn');
      
      if (prevBtn) prevBtn.style.display = aiPlannerState.currentStep > 1 ? 'inline-block' : 'none';
      if (nextBtn) nextBtn.style.display = 'inline-block';
    }
  } catch (error) {
    console.error('Previous step error:', error);
  }
}

function updateQuestionnaireProgress() {
  try {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
      const percentage = (aiPlannerState.currentStep / aiPlannerState.totalSteps) * 100;
      progressFill.style.width = `${percentage}%`;
    }
    
    if (progressText) {
      progressText.textContent = `Step ${aiPlannerState.currentStep} of ${aiPlannerState.totalSteps}`;
    }
  } catch (error) {
    console.error('Update progress error:', error);
  }
}

function generateAIItinerary() {
  try {
    if (!currentUser) {
      showNotification('Please login to generate AI itinerary', 'error');
      return;
    }
    
    if (!aiPlannerState.preferences.seasonPreference) {
      showNotification('Please complete all preferences to generate your itinerary', 'error');
      return;
    }
    
    // Get special requests
    const specialRequestsEl = document.getElementById('specialRequests');
    if (specialRequestsEl) {
      aiPlannerState.preferences.specialRequests = specialRequestsEl.value;
    }
    
    // Show processing animation
    const questionnaire = document.getElementById('questionnaireContainer');
    const processing = document.getElementById('aiProcessing');
    
    if (questionnaire) questionnaire.classList.add('hidden');
    if (processing) processing.classList.remove('hidden');
    
    showNotification('🤖 AI is analyzing your preferences and generating personalized itineraries...', 'info');
    showChatMessage(`Perfect! I'm analyzing your ${aiPlannerState.preferences.duration}-day trip preferences with ${aiPlannerState.preferences.budget} budget, focusing on ${aiPlannerState.preferences.interests.join(', ')}. Creating your personalized itineraries now...`, 'bot');
    
    // Animate processing steps
    animateProcessingSteps();
    
    setTimeout(() => {
      const results = document.getElementById('itineraryResults');
      
      if (processing) processing.classList.add('hidden');
      if (results) results.classList.remove('hidden');
      
      displayGeneratedItineraries();
      showNotification('Your personalized Jharkhand itineraries are ready!', 'success');
      
      const matchingCount = getMatchingTemplates().length;
      showChatMessage(`Amazing! I've generated ${matchingCount} personalized itineraries perfectly matched to your preferences. Each includes detailed day-by-day plans, cultural experiences, and budget breakdowns. Click any itinerary to see the full details!`, 'bot');
    }, 4500);
  } catch (error) {
    console.error('Generate itinerary error:', error);
    showNotification('Failed to generate itinerary. Please try again.', 'error');
  }
}

function animateProcessingSteps() {
  try {
    const steps = document.querySelectorAll('.processing-step');
    let currentIndex = 0;
    
    const animateStep = () => {
      if (currentIndex < steps.length) {
        steps.forEach(step => step.classList.remove('active'));
        steps[currentIndex].classList.add('active');
        currentIndex++;
        setTimeout(animateStep, 1000);
      }
    };
    
    animateStep();
  } catch (error) {
    console.error('Animate processing steps error:', error);
  }
}

function getMatchingTemplates() {
  try {
    const prefs = aiPlannerState.preferences;
    let matchingTemplates = [...appData.aiItineraryTemplates];
    
    // Enhanced AI matching algorithm
    matchingTemplates.forEach(template => {
      template.matchScore = 0;
      template.aiReasons = [];
      
      // Duration matching (30 points)
      if (prefs.duration <= 3 && template.duration.includes('3 Days')) {
        template.matchScore += 30;
        template.aiReasons.push(`Perfect for ${prefs.duration}-day duration`);
      } else if (prefs.duration <= 5 && template.duration.includes('5 Days')) {
        template.matchScore += 30;
        template.aiReasons.push(`Ideal ${prefs.duration}-day cultural immersion`);
      } else if (prefs.duration >= 7 && template.duration.includes('7 Days')) {
        template.matchScore += 30;
        template.aiReasons.push(`Comprehensive ${prefs.duration}-day exploration`);
      } else {
        template.matchScore += 15;
        template.aiReasons.push(`Adaptable to ${prefs.duration} days`);
      }
      
      // Interest matching (40 points)
      let interestMatches = 0;
      prefs.interests.forEach(interest => {
        if (interest === 'cultural' && template.culturalDepth === 'Deep') {
          interestMatches += 10;
          template.aiReasons.push('Deep cultural immersion focus');
        }
        if (interest === 'adventure' && template.activities.some(a => a.toLowerCase().includes('trek') || a.toLowerCase().includes('safari'))) {
          interestMatches += 10;
          template.aiReasons.push('Adventure activities included');
        }
        if (interest === 'spiritual' && template.activities.some(a => a.toLowerCase().includes('temple') || a.toLowerCase().includes('meditation'))) {
          interestMatches += 10;
          template.aiReasons.push('Spiritual experiences featured');
        }
        if (interest === 'crafts' && template.activities.some(a => a.toLowerCase().includes('workshop') || a.toLowerCase().includes('craft'))) {
          interestMatches += 10;
          template.aiReasons.push('Hands-on craft workshops');
        }
        if (interest === 'food' && template.activities.some(a => a.toLowerCase().includes('cooking') || a.toLowerCase().includes('food'))) {
          interestMatches += 10;
          template.aiReasons.push('Culinary experiences included');
        }
        if (interest === 'photography' && template.activities.some(a => a.toLowerCase().includes('photo'))) {
          interestMatches += 10;
          template.aiReasons.push('Photography opportunities');
        }
      });
      template.matchScore += Math.min(interestMatches, 40);
      
      // Physical activity matching (20 points)
      if (prefs.activityLevel === 'low' && template.physicalRequirement === 'Easy') {
        template.matchScore += 20;
        template.aiReasons.push('Low physical intensity as requested');
      } else if (prefs.activityLevel === 'moderate' && template.physicalRequirement.includes('Moderate')) {
        template.matchScore += 20;
        template.aiReasons.push('Moderate activity level matching');
      } else if (prefs.activityLevel === 'high' && template.physicalRequirement.includes('High')) {
        template.matchScore += 20;
        template.aiReasons.push('High intensity activities available');
      } else {
        template.matchScore += 10;
      }
      
      // Budget compatibility (10 points)
      template.matchScore += 10;
      template.aiReasons.push(`Budget-optimized for ${prefs.budget} range`);
    });
    
    // Sort by match score
    matchingTemplates.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    
    return matchingTemplates.slice(0, 3);
  } catch (error) {
    console.error('Get matching templates error:', error);
    return appData.aiItineraryTemplates.slice(0, 3);
  }
}

function displayGeneratedItineraries() {
  try {
    const container = document.getElementById('itineraryTemplates');
    const reasoningContainer = document.getElementById('aiReasoning');
    
    if (!container) return;
    
    const templates = getMatchingTemplates();
    
    container.innerHTML = templates.map((template, index) => `
      <div class="itinerary-template" onclick="viewDetailedItinerary(${template.id})">
        <div class="template-header">
          <div>
            <div class="template-title">${template.name}</div>
            <div class="template-duration">${template.duration}</div>
          </div>
          <div class="template-budget">${template.totalBudget || template.budgetRange}</div>
        </div>
        
        <div class="template-info">
          <div class="info-item">
            <strong>Perfect For:</strong> ${template.suitableFor.join(', ')}
          </div>
          <div class="info-item">
            <strong>Physical Level:</strong> ${template.physicalRequirement}
          </div>
          <div class="info-item">
            <strong>Group Size:</strong> ${template.groupSize || '2-8 people'}
          </div>
          <div class="info-item">
            <strong>Cultural Depth:</strong> ${template.culturalDepth}
          </div>
        </div>
        
        <div class="template-highlights">
          <strong>Key Destinations:</strong> ${template.destinations.join(' → ')}
        </div>
        
        <div class="template-activities">
          ${template.activities.map(activity => `<span class="activity-tag">${activity}</span>`).join('')}
        </div>
        
        ${template.included ? `
          <div style="margin-top: 16px; font-size: 14px; color: var(--color-text-secondary);">
            <strong>Includes:</strong> ${template.included.join(', ')}
          </div>
        ` : ''}
        
        <div style="margin-top: 12px; color: var(--color-primary); font-weight: 500;">
          🤖 AI Match: ${calculateMatchPercentage(template)}% compatible | Rank #${index + 1}
        </div>
        
        <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">
          ${template.aiReasons ? template.aiReasons.slice(0, 2).join(' • ') : ''}
        </div>
      </div>
    `).join('');
    
    // Display AI reasoning
    if (reasoningContainer) {
      reasoningContainer.innerHTML = templates.map((template, index) => `
        <div class="reasoning-item">
          <strong>Option ${index + 1}: ${template.name}</strong><br>
          ${template.aiReasons ? template.aiReasons.join(' • ') : 'Customized for your preferences'}
        </div>
      `).join('');
    }
  } catch (error) {
    console.error('Display itineraries error:', error);
  }
}

function calculateMatchPercentage(template) {
  try {
    const maxScore = 100;
    return Math.min(Math.round((template.matchScore || 85) / maxScore * 100), 98);
  } catch (error) {
    console.error('Calculate match percentage error:', error);
    return 85;
  }
}

// Navigation Functions
function initializeNavigation() {
  console.log('Setting up navigation...');
  
  try {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
    }

    setTimeout(() => {
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          scrollToSection(targetId);
          
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          
          if (navMenu) {
            navMenu.classList.remove('active');
          }
        });
      });
    }, 500);
    
    console.log('Navigation setup complete');
  } catch (error) {
    console.error('Navigation initialization error:', error);
  }
}

function initializeActionCards() {
  try {
    const actionCards = document.querySelectorAll('.action-card');
    
    actionCards.forEach((card, index) => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const sections = ['ai-planner', 'transport', 'marketplace', 'guides'];
        if (sections[index]) {
          scrollToSection(sections[index]);
        }
      });
    });
  } catch (error) {
    console.error('Action cards initialization error:', error);
  }
}

function scrollToSection(sectionId) {
  try {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Provide contextual chat messages
      if (sectionId === 'ai-planner') {
        setTimeout(() => {
          showChatMessage("Welcome to the AI Trip Planner! This intelligent system will create personalized itineraries based on your preferences. Start with the 6-step questionnaire.", 'bot');
        }, 1000);
      } else if (sectionId === 'transport') {
        setTimeout(() => {
          showChatMessage("Here you can book transport between all Jharkhand destinations with live GPS tracking. Cultural guides are available for most routes!", 'bot');
        }, 1000);
      }
    }
  } catch (error) {
    console.error('Scroll to section error:', error);
  }
}

// Content Loading Functions
function loadMainContent() {
  try {
    loadTransport();
    loadMarketplace();
    loadFood();
    loadGuides();
    loadAdventures();
    loadFeedbackSystem();
    loadAnalytics();
    updateCartDisplay();
  } catch (error) {
    console.error('Error loading content:', error);
  }
}

// Transport System
function loadTransport() {
  try {
    const searchBtn = document.getElementById('searchTransport');
    if (searchBtn) {
      searchBtn.addEventListener('click', searchTransportOptions);
    }
    
    const dateInput = document.getElementById('travelDate');
    if (dateInput) {
      dateInput.value = '2025-09-19';
    }
  } catch (error) {
    console.error('Transport loading error:', error);
  }
}

function searchTransportOptions() {
  try {
    const from = document.getElementById('fromLocation')?.value;
    const to = document.getElementById('toLocation')?.value;
    const date = document.getElementById('travelDate')?.value;
    const passengers = document.getElementById('passengers')?.value;
    const culturalGuide = document.getElementById('culturalGuide')?.checked;
    
    if (!from || !to || !date) {
      showNotification('Please fill all required fields', 'error');
      return;
    }
    
    const optionsContainer = document.getElementById('transportOptions');
    if (!optionsContainer) return;
    
    showNotification('Searching transport options...', 'info');
    
    setTimeout(() => {
      optionsContainer.innerHTML = `
        <h3>Available Transport Options</h3>
        <div style="display: grid; gap: 16px;">
          <div class="transport-option">
            <div class="transport-info">
              <h4>${from} to ${to}</h4>
              <div class="transport-meta">
                <span><strong>Type:</strong> JTDC Bus</span>
                <span><strong>Time:</strong> 3h 30min</span>
                <span><strong>Next:</strong> 9:00 AM</span>
                <span><strong>Seats:</strong> 15 available</span>
              </div>
              <div class="live-tracking">🔴 Live GPS Tracking Available</div>
              ${culturalGuide ? '<div style="color: var(--color-primary); font-size: 14px;">✓ Cultural Guide (+₹500)</div>' : ''}
            </div>
            <div class="transport-price">
              <div class="price-amount">₹150</div>
              <button class="btn btn--primary" onclick="bookTransport('${from}-${to}-bus')">Book Now</button>
            </div>
          </div>
          <div class="transport-option">
            <div class="transport-info">
              <h4>${from} to ${to}</h4>
              <div class="transport-meta">
                <span><strong>Type:</strong> Private Taxi</span>
                <span><strong>Time:</strong> 2h 45min</span>
                <span><strong>Availability:</strong> High</span>
                <span><strong>Features:</strong> AC, Music System</span>
              </div>
              ${culturalGuide ? '<div style="color: var(--color-primary); font-size: 14px;">✓ Cultural Guide (+₹800)</div>' : ''}
            </div>
            <div class="transport-price">
              <div class="price-amount">₹2,200</div>
              <button class="btn btn--primary" onclick="bookTransport('${from}-${to}-taxi')">Book Now</button>
            </div>
          </div>
        </div>
      `;
      
      showNotification('Found available transport options!', 'success');
      showChatMessage(`Found great transport options from ${from} to ${to}! ${culturalGuide ? 'Cultural guide is included for authentic local insights.' : 'Cultural guides are available for enhanced experience.'}`, 'bot');
    }, 1500);
  } catch (error) {
    console.error('Search transport options error:', error);
    showNotification('Failed to search transport options', 'error');
  }
}

// Enhanced Marketplace
function loadMarketplace() {
  try {
    const marketplaceContent = document.getElementById('marketplaceContent');
    if (!marketplaceContent) return;
    
    marketplaceContent.innerHTML = `
      <div class="product-grid">
        ${appData.authenticHandicrafts.map(product => `
          <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')">
              <div class="verification-badge">${product.authenticity}</div>
            </div>
            <div class="product-content">
              <h4 class="product-title">${product.name}</h4>
              <div class="product-price">₹${product.price.toLocaleString()}</div>
              <p class="product-description">${product.description}</p>
              <div class="artist-info">
                <strong>Artist:</strong> ${product.artist}<br>
                <strong>Tribe:</strong> ${product.tribe}<br>
                <strong>Village:</strong> ${product.village}<br>
                <strong>Technique:</strong> ${product.technique}
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin: 8px 0; font-size: 14px;">
                <span style="color: #FFD700;">★ ${product.rating}</span>
                <span style="color: var(--color-text-secondary);">(${product.reviews} reviews)</span>
              </div>
              <div style="background: var(--color-bg-3); padding: 8px; border-radius: 4px; margin: 8px 0; font-size: 12px;">
                <strong>Cultural Significance:</strong> ${product.culturalSignificance}
              </div>
              <div style="font-size: 12px; color: var(--color-text-secondary); margin: 4px 0;">
                Making Time: ${product.makingTime}
              </div>
              <button class="btn btn--primary btn--full-width" onclick="addToCart(${product.id})">
                Add to Cart
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    const viewCartBtn = document.getElementById('viewCart');
    const closeCartBtn = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('proceedCheckout');
    
    if (viewCartBtn) {
      viewCartBtn.addEventListener('click', showCartModal);
    }
    if (closeCartBtn) {
      closeCartBtn.addEventListener('click', hideCartModal);
    }
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', proceedToCheckout);
    }
  } catch (error) {
    console.error('Marketplace loading error:', error);
  }
}

// Food Section
function loadFood() {
  try {
    const foodGrid = document.getElementById('foodGrid');
    if (!foodGrid) return;
    
    const categoryFilters = document.querySelectorAll('.category-filters .filter-btn');
    categoryFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        categoryFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        filterFood(category);
      });
    });
    
    displayFood(appData.traditionalFood);
  } catch (error) {
    console.error('Food loading error:', error);
  }
}

function displayFood(foods) {
  try {
    const foodGrid = document.getElementById('foodGrid');
    if (!foodGrid) return;
    
    foodGrid.innerHTML = foods.map(food => `
      <div class="food-card">
        <div class="food-header">
          <h4 class="food-name">${food.name}</h4>
          <div class="food-category">${food.category}</div>
        </div>
        
        <p class="food-description">${food.description}</p>
        
        <div class="food-meta">
          <div><strong>Ingredients:</strong> ${food.ingredients.join(', ')}</div>
          <div><strong>Prep Time:</strong> ${food.preparationTime}</div>
          ${food.spiceLevel ? `
            <div class="spice-indicator">
              <strong>Spice Level:</strong> 
              <div class="spice-level">
                ${[1,2,3].map(i => `<div class="spice-dot ${getSpiceLevel(food.spiceLevel) < i ? 'inactive' : ''}"></div>`).join('')}
              </div>
              <span>${food.spiceLevel}</span>
            </div>
          ` : ''}
          <div><strong>Available at:</strong> ${food.availableAt.join(', ')}</div>
          ${food.culturalSignificance ? `<div><strong>Cultural Significance:</strong> ${food.culturalSignificance}</div>` : ''}
          ${food.nutritionalValue ? `<div><strong>Nutrition:</strong> ${food.nutritionalValue}</div>` : ''}
          ${food.seasonality ? `<div><strong>Season:</strong> ${food.seasonality}</div>` : ''}
          ${food.alcoholContent ? `<div><strong>Alcohol:</strong> ${food.alcoholContent}</div>` : ''}
          ${food.vegetarian !== undefined ? `<div><strong>Type:</strong> ${food.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</div>` : ''}
        </div>
        
        <div class="food-price">${food.price}</div>
        ${food.restrictions ? `<div style="color: var(--color-warning); font-size: 12px; margin-top: 8px;">${food.restrictions}</div>` : ''}
        
        <button class="btn btn--primary btn--full-width" onclick="orderFood(${food.id})">
          Order Now
        </button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Display food error:', error);
  }
}

function getSpiceLevel(level) {
  if (level === 'Mild') return 1;
  if (level === 'Medium' || level === 'Medium-Hot') return 2;
  if (level === 'Hot') return 3;
  return 1;
}

function filterFood(category) {
  try {
    if (category === 'all') {
      displayFood(appData.traditionalFood);
    } else {
      const filtered = appData.traditionalFood.filter(food => food.category === category);
      displayFood(filtered);
    }
  } catch (error) {
    console.error('Filter food error:', error);
  }
}

// Guides Section
function loadGuides() {
  try {
    const guidesGrid = document.getElementById('guidesGrid');
    if (!guidesGrid) return;
    
    const guideFilters = document.querySelectorAll('.guides-filters .filter-btn');
    guideFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        guideFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const specialization = this.dataset.specialization;
        filterGuides(specialization);
      });
    });
    
    displayGuides(appData.certifiedGuides);
  } catch (error) {
    console.error('Guides loading error:', error);
  }
}

function displayGuides(guides) {
  try {
    const guidesGrid = document.getElementById('guidesGrid');
    if (!guidesGrid) return;
    
    guidesGrid.innerHTML = guides.map(guide => `
      <div class="guide-card">
        <div class="guide-header">
          <div class="guide-avatar">👨‍🏫</div>
          <div class="guide-info">
            <h4>${guide.name}</h4>
            <div class="guide-specialization">${guide.specialization}</div>
            <div class="guide-rating">
              <span style="color: #FFD700;">★ ${guide.rating}</span>
              <span>(${guide.completedTours} tours)</span>
            </div>
          </div>
        </div>
        
        <div class="guide-stats">
          <div><strong>Experience:</strong> ${guide.experience}</div>
          <div><strong>Availability:</strong> ${guide.availability}</div>
        </div>
        
        <div class="guide-languages">
          <strong>Languages:</strong>
          <div class="language-tags">
            ${guide.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
          </div>
        </div>
        
        <div style="background: var(--color-bg-1); padding: 12px; border-radius: 6px; margin: 12px 0; font-size: 14px;">
          <strong>Bio:</strong> ${guide.bio}
        </div>
        
        <div style="margin: 12px 0; font-size: 14px;">
          <strong>Expertise:</strong> ${guide.expertise.join(', ')}
        </div>
        
        <div style="margin: 12px 0; font-size: 14px;">
          <strong>Locations:</strong> ${guide.locations.join(', ')}
        </div>
        
        ${guide.specialServices ? `
          <div style="margin: 12px 0; font-size: 14px;">
            <strong>Special Services:</strong> ${guide.specialServices.join(', ')}
          </div>
        ` : ''}
        
        <div style="margin: 12px 0; font-size: 12px; color: var(--color-text-secondary);">
          <strong>Certifications:</strong> ${guide.certifications.join(', ')}
        </div>
        
        <div class="guide-price">${guide.pricePerDay}/day</div>
        
        <button class="btn btn--primary btn--full-width" onclick="bookGuide(${guide.id})">
          Book Guide
        </button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Display guides error:', error);
  }
}

function filterGuides(specialization) {
  try {
    if (specialization === 'all') {
      displayGuides(appData.certifiedGuides);
    } else {
      const filtered = appData.certifiedGuides.filter(guide => 
        guide.specialization.includes(specialization)
      );
      displayGuides(filtered);
    }
  } catch (error) {
    console.error('Filter guides error:', error);
  }
}

// Adventures Section
function loadAdventures() {
  try {
    const adventuresGrid = document.getElementById('adventuresGrid');
    const photoGrid = document.getElementById('photoGrid');
    
    if (!adventuresGrid) return;
    
    const adventureFilters = document.querySelectorAll('.adventure-categories .filter-btn');
    adventureFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        adventureFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.adventure;
        filterAdventures(category);
      });
    });
    
    displayAdventures(appData.adventureActivities);
    
    if (photoGrid) {
      displayPhotos([
        {
          id: 1,
          location: "Netarhat Hill Station",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
          description: "Sunrise view through pine forests"
        },
        {
          id: 2,
          location: "Hundru Falls",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
          description: "Spectacular waterfall cascading over rocky cliffs"
        },
        {
          id: 3,
          location: "Betla National Park",
          image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400",
          description: "Wildlife safari with elephants and tigers"
        },
        {
          id: 4,
          location: "Parasnath Hills",
          image: "https://images.unsplash.com/photo-1486022119027-c2ded64866b5?w=400",
          description: "Sacred Jain pilgrimage site with panoramic views"
        }
      ]);
    }
  } catch (error) {
    console.error('Adventures loading error:', error);
  }
}

function displayAdventures(adventures) {
  try {
    const adventuresGrid = document.getElementById('adventuresGrid');
    if (!adventuresGrid) return;
    
    adventuresGrid.innerHTML = adventures.map(adventure => `
      <div class="adventure-card">
        <div class="adventure-image" style="background-image: url('${adventure.image}')">
          <div class="difficulty-badge difficulty-${adventure.difficulty.toLowerCase().replace(/\s+/g, '-')}">${adventure.difficulty}</div>
        </div>
        <div class="adventure-content">
          <h4 class="adventure-name">${adventure.name}</h4>
          <div class="adventure-location">📍 ${adventure.location}</div>
          
          <div class="adventure-details">
            <div><strong>Duration:</strong> ${adventure.duration}</div>
            <div><strong>Group Size:</strong> ${adventure.groupSize}</div>
            <div><strong>Best Time:</strong> ${adventure.bestTime}</div>
            ${adventure.elevation ? `<div><strong>Elevation:</strong> ${adventure.elevation}</div>` : ''}
            ${adventure.trekDistance ? `<div><strong>Distance:</strong> ${adventure.trekDistance}</div>` : ''}
            ${adventure.ageLimit ? `<div><strong>Age Limit:</strong> ${adventure.ageLimit}</div>` : ''}
          </div>
          
          <div class="adventure-highlights">
            <h5>Experience Highlights</h5>
            <ul>
              ${adventure.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
          </div>
          
          <div style="background: var(--color-bg-1); padding: 12px; border-radius: 6px; margin: 12px 0; font-size: 14px;">
            <strong>Includes:</strong> ${adventure.includes.join(', ')}
          </div>
          
          ${adventure.safetyFeatures ? `
            <div style="background: var(--color-bg-3); padding: 12px; border-radius: 6px; margin: 12px 0; font-size: 14px;">
              <strong>Safety Features:</strong> ${adventure.safetyFeatures.join(', ')}
            </div>
          ` : ''}
          
          ${adventure.culturalNote ? `
            <div style="background: var(--color-bg-2); padding: 12px; border-radius: 6px; margin: 12px 0; font-size: 14px; color: var(--color-primary);">
              <strong>Cultural Note:</strong> ${adventure.culturalNote}
            </div>
          ` : ''}
          
          <div class="adventure-price">${adventure.price}</div>
          
          <button class="btn btn--primary btn--full-width" onclick="bookAdventure(${adventure.id})">
            Book Adventure
          </button>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Display adventures error:', error);
  }
}

function displayPhotos(photos) {
  try {
    const photoGrid = document.getElementById('photoGrid');
    if (!photoGrid) return;
    
    photoGrid.innerHTML = photos.map(photo => `
      <div class="photo-item" style="background-image: url('${photo.image}')" onclick="openPhotoModal('${photo.image}', '${photo.location}', '${photo.description}')">
        <div class="photo-overlay">
          <div class="photo-title">${photo.location}</div>
          <div class="photo-description">${photo.description}</div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Display photos error:', error);
  }
}

function filterAdventures(category) {
  try {
    if (category === 'all') {
      displayAdventures(appData.adventureActivities);
    } else {
      const filtered = appData.adventureActivities.filter(adventure => 
        adventure.category === category
      );
      displayAdventures(filtered);
    }
  } catch (error) {
    console.error('Filter adventures error:', error);
  }
}

// Feedback System
function loadFeedbackSystem() {
  try {
    initializeStarRatings();
    initializeFeedbackForm();
    initializePhotoUpload();
    initializeRecommendationScale();
  } catch (error) {
    console.error('Feedback system loading error:', error);
  }
}

function initializeStarRatings() {
  try {
    const starRatings = document.querySelectorAll('.star-rating');
    starRatings.forEach(rating => {
      const stars = rating.querySelectorAll('.star');
      const category = rating.dataset.category;
      
      stars.forEach((star, index) => {
        star.addEventListener('click', function() {
          const ratingValue = parseInt(star.dataset.rating);
          feedbackData.ratings[category] = ratingValue;
          
          stars.forEach((s, i) => {
            if (i < ratingValue) {
              s.classList.add('active');
            } else {
              s.classList.remove('active');
            }
          });
        });
        
        star.addEventListener('mouseover', function() {
          const ratingValue = parseInt(star.dataset.rating);
          stars.forEach((s, i) => {
            if (i < ratingValue) {
              s.style.color = '#FFD700';
            } else {
              s.style.color = 'var(--color-border)';
            }
          });
        });
      });
      
      rating.addEventListener('mouseleave', function() {
        const currentRating = feedbackData.ratings[category] || 0;
        stars.forEach((s, i) => {
          if (i < currentRating) {
            s.style.color = '#FFD700';
          } else {
            s.style.color = 'var(--color-border)';
          }
        });
      });
    });
  } catch (error) {
    console.error('Star ratings initialization error:', error);
  }
}

function initializeFeedbackForm() {
  try {
    const form = document.getElementById('feedbackForm');
    if (form) {
      form.addEventListener('submit', handleFeedbackSubmission);
    }
  } catch (error) {
    console.error('Feedback form initialization error:', error);
  }
}

function initializePhotoUpload() {
  try {
    const uploadArea = document.getElementById('photoUpload');
    const fileInput = document.getElementById('photoFiles');
    
    if (uploadArea && fileInput) {
      uploadArea.addEventListener('click', () => fileInput.click());
      
      fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        feedbackData.photos = files;
        
        if (files.length > 0) {
          uploadArea.innerHTML = `
            <div style="color: var(--color-success);">
              <div class="upload-icon">✓</div>
              <p>${files.length} photo${files.length > 1 ? 's' : ''} selected</p>
            </div>
          `;
        }
      });
    }
  } catch (error) {
    console.error('Photo upload initialization error:', error);
  }
}

function initializeRecommendationScale() {
  try {
    const scaleButtons = document.querySelectorAll('#recommendationScale button');
    
    scaleButtons.forEach(button => {
      button.addEventListener('click', function() {
        scaleButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        feedbackData.recommendation = parseInt(this.dataset.score);
      });
    });
  } catch (error) {
    console.error('Recommendation scale initialization error:', error);
  }
}

function handleFeedbackSubmission(e) {
  e.preventDefault();
  
  try {
    if (!currentUser) {
      showNotification('Please login to submit feedback', 'error');
      return;
    }
    
    if (!feedbackData.recommendation) {
      showNotification('Please provide a recommendation score', 'error');
      return;
    }
    
    const likedMost = document.getElementById('likedMost')?.value || '';
    const improvements = document.getElementById('improvements')?.value || '';
    
    const completeFeedback = {
      ...feedbackData,
      likedMost,
      improvements,
      userId: currentUser.email,
      submittedAt: new Date().toISOString()
    };
    
    showNotification('Submitting your comprehensive feedback...', 'info');
    
    setTimeout(() => {
      const feedbackId = 'FB' + Date.now();
      showNotification(`Thank you for your detailed feedback! Feedback ID: ${feedbackId}`, 'success');
      
      feedbackData = { ratings: {}, step: 1, photos: [], recommendation: null };
      const activeStep = document.querySelector('.feedback-step.active');
      const firstStep = document.querySelector('.feedback-step[data-step="1"]');
      if (activeStep) activeStep.classList.remove('active');
      if (firstStep) firstStep.classList.add('active');
      
      showChatMessage(`Thank you for your comprehensive feedback! Your insights help us improve Jharkhand's tourism experience and train our AI recommendation system. Feedback ID: ${feedbackId}`, 'bot');
    }, 2500);
  } catch (error) {
    console.error('Feedback submission error:', error);
    showNotification('Failed to submit feedback. Please try again.', 'error');
  }
}

// Analytics Dashboard
function loadAnalytics() {
  if (currentUser?.type !== 'official') return;
  
  try {
    setTimeout(() => {
      loadVisitorChart();
      loadRevenueChart();
      loadSentimentAnalysis();
      loadDestinationStats();
    }, 1000);
  } catch (error) {
    console.error('Analytics loading error:', error);
  }
}

function loadVisitorChart() {
  try {
    const canvas = document.getElementById('visitorChart');
    if (!canvas || typeof Chart === 'undefined') return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Daily Visitors',
          data: [2200, 2400, 2100, 2600, 2847, 3100, 2900],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  } catch (error) {
    console.error('Visitor chart loading error:', error);
  }
}

function loadRevenueChart() {
  try {
    const canvas = document.getElementById('revenueChart');
    if (!canvas || typeof Chart === 'undefined') return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['AI Planner', 'Transport', 'Handicrafts', 'Food', 'Guides', 'Adventures'],
        datasets: [{
          label: 'Revenue (₹ Lakhs)',
          data: [95, 85, 45, 25, 35, 28],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  } catch (error) {
    console.error('Revenue chart loading error:', error);
  }
}

function loadSentimentAnalysis() {
  try {
    const container = document.getElementById('sentimentAnalysis');
    if (!container) return;
    
    container.innerHTML = `
      <div class="sentiment-overview">
        <div style="text-align: center; margin-bottom: 16px;">
          <div style="font-size: 24px; font-weight: bold; color: var(--color-success);">4.8/5</div>
          <div style="font-size: 14px; color: var(--color-text-secondary);">2,143 total reviews</div>
        </div>
        
        <div class="sentiment-bar">
          <span class="sentiment-label">Very Positive</span>
          <div class="sentiment-progress">
            <div class="sentiment-fill" style="width: 78%; background: #40916C;"></div>
          </div>
          <span>78%</span>
        </div>
        
        <div class="sentiment-bar">
          <span class="sentiment-label">Positive</span>
          <div class="sentiment-progress">
            <div class="sentiment-fill" style="width: 18%; background: #52B788;"></div>
          </div>
          <span>18%</span>
        </div>
        
        <div class="sentiment-bar">
          <span class="sentiment-label">Neutral</span>
          <div class="sentiment-progress">
            <div class="sentiment-fill" style="width: 3%; background: #8ECAE6;"></div>
          </div>
          <span>3%</span>
        </div>
        
        <div class="sentiment-bar">
          <span class="sentiment-label">Negative</span>
          <div class="sentiment-progress">
            <div class="sentiment-fill" style="width: 1%; background: #FFB3BA;"></div>
          </div>
          <span>1%</span>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Sentiment analysis loading error:', error);
  }
}

function loadDestinationStats() {
  try {
    const container = document.getElementById('destinationStats');
    if (!container) return;
    
    const destinations = [
      { name: "AI Trip Plans", visitors: 847, satisfaction: 4.9 },
      { name: "Netarhat", visitors: 634, satisfaction: 4.6 },
      { name: "Hundru Falls", visitors: 487, satisfaction: 4.8 },
      { name: "Betla National Park", visitors: 392, satisfaction: 4.9 }
    ];
    
    container.innerHTML = destinations.map(dest => `
      <div class="destination-item">
        <div class="destination-name">${dest.name}</div>
        <div class="destination-stats">
          <span>${dest.visitors} bookings</span>
          <span>⭐ ${dest.satisfaction}</span>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Destination stats loading error:', error);
  }
}

function updateLiveStats() {
  try {
    setInterval(() => {
      const elements = document.querySelectorAll('[id*="liveVisitors"]');
      elements.forEach(element => {
        if (element) {
          const currentCount = parseInt(element.textContent.replace(',', ''));
          const change = Math.floor(Math.random() * 10) - 5;
          const newCount = Math.max(2800, currentCount + change);
          element.textContent = newCount.toLocaleString();
        }
      });
    }, 10000);
  } catch (error) {
    console.error('Update live stats error:', error);
  }
}

// Enhanced Chat System
function initializeChat() {
  try {
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatInput = document.getElementById('chatInput');

    if (chatToggle && chatWidget) {
      chatToggle.addEventListener('click', function() {
        chatWidget.classList.toggle('active');
      });
    }

    if (closeChatBtn && chatWidget) {
      closeChatBtn.addEventListener('click', function() {
        chatWidget.classList.remove('active');
      });
    }

    if (sendChatBtn) {
      sendChatBtn.addEventListener('click', sendChatMessage);
    }

    if (chatInput) {
      chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          sendChatMessage();
        }
      });
    }
  } catch (error) {
    console.error('Chat initialization error:', error);
  }
}

function sendChatMessage() {
  try {
    const chatInput = document.getElementById('chatInput');
    if (!chatInput) return;
    
    const message = chatInput.value.trim();
    if (!message) return;

    showChatMessage(message, 'user');
    chatInput.value = '';

    setTimeout(() => {
      const response = generateEnhancedAIResponse(message);
      showChatMessage(response, 'bot');
    }, 1000);
  } catch (error) {
    console.error('Send chat message error:', error);
  }
}

function showChatMessage(message, type) {
  try {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    console.error('Show chat message error:', error);
  }
}

function generateEnhancedAIResponse(message) {
  try {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('plan') || lowerMessage.includes('itinerary') || lowerMessage.includes('trip')) {
      return `I can create personalized AI itineraries for you! My intelligent algorithm analyzes your duration (2-15 days), budget (₹5,000-1,00,000+), interests (cultural, adventure, spiritual, crafts), and preferences to generate perfect Jharkhand experiences. The 6-step questionnaire creates 98.5% accurate recommendations. Want to start the AI trip planner?`;
    } else if (lowerMessage.includes('transport') || lowerMessage.includes('bus') || lowerMessage.includes('travel')) {
      return `I can help you book transport between all Jharkhand destinations! We have ${appData.transportRoutes.length} major routes with live GPS tracking. Popular routes include Ranchi-Netarhat (₹180, 4h 30min) and Jamshedpur-Betla (₹220, 4h 15min). Cultural guides available on request!`;
    } else if (lowerMessage.includes('handicraft') || lowerMessage.includes('craft') || lowerMessage.includes('art') || lowerMessage.includes('shopping')) {
      return `Explore ${appData.authenticHandicrafts.length} authentic handicrafts! Featured: Dhokra metal art (₹3,500), Sohrai paintings (₹2,200), Chhau masks (₹4,200). All blockchain-verified and directly support tribal artisans. What type of tribal art interests you?`;
    } else if (lowerMessage.includes('food') || lowerMessage.includes('cuisine') || lowerMessage.includes('eat')) {
      return `Discover ${appData.traditionalFood.length} traditional Jharkhand dishes! Must-try: Litti Chokha (₹120-180), Dhuska with ghugni (₹60-100), Handia rice beer (cultural experience), and Rugra wild mushroom curry (monsoon special). Which cuisine interests you?`;
    } else if (lowerMessage.includes('guide') || lowerMessage.includes('expert')) {
      return `Choose from ${appData.certifiedGuides.length} certified guides! Specialists include: Birsa Munda (Tribal Culture, ₹2,500/day), Sita Devi (UNESCO Sohrai artist, ₹2,000/day), Ravi Singh (Adventure & Wildlife, ₹2,200/day). All multilingual with authentic local knowledge.`;
    } else if (lowerMessage.includes('adventure') || lowerMessage.includes('trekking') || lowerMessage.includes('activity')) {
      return `Experience ${appData.adventureActivities.length} thrilling adventures! Options: Netarhat Sunrise Trek (₹1,800), Betla Wildlife Safari (₹1,200), Hundru Falls Rappelling (₹3,500), Parasnath Hill Spiritual Trek (₹1,500). All with original photography included!`;
    } else if (lowerMessage.includes('feedback') || lowerMessage.includes('review')) {
      return `Share your experience through our comprehensive feedback system! Rate accommodation, food, transport, guides, and cultural activities. Upload photos and provide recommendations. Your feedback directly improves Jharkhand tourism and trains our AI system for future visitors.`;
    } else if (lowerMessage.includes('customize') || lowerMessage.includes('modify') || lowerMessage.includes('change')) {
      return `I can help customize any itinerary! Modify activities, accommodation, add specific tribal experiences, adjust for dietary preferences, change duration, or focus on particular interests. What aspects would you like to customize?`;
    } else {
      return `I'm your complete Jharkhand tourism assistant with AI trip planning! I can help with: 🤖 Personalized AI itineraries (98.5% accuracy), 🚌 Smart transport with GPS tracking, 🎨 Blockchain-verified handicrafts, 🍽️ Traditional cuisine experiences, 👨‍🏫 Expert certified guides, and 🏔️ Adventure activities. What would you like to explore?`;
    }
  } catch (error) {
    console.error('Generate AI response error:', error);
    return `I'm here to help with your Jharkhand tourism needs! How can I assist you today?`;
  }
}

// Modal Functions
function initializeModals() {
  try {
    const bookingModal = document.getElementById('bookingModal');
    const closeBooking = document.getElementById('closeBooking');

    if (closeBooking && bookingModal) {
      closeBooking.addEventListener('click', function() {
        bookingModal.classList.add('hidden');
      });
    }

    if (bookingModal) {
      bookingModal.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
          bookingModal.classList.add('hidden');
        }
      });
    }
  } catch (error) {
    console.error('Modals initialization error:', error);
  }
}

function showBookingModal(type, item) {
  try {
    const modal = document.getElementById('bookingModal');
    const title = document.getElementById('bookingTitle');
    const content = document.getElementById('bookingContent');
    
    if (!modal || !title || !content) return;
    
    title.textContent = `Book ${type === 'guide' ? 'Guide' : type === 'adventure' ? 'Adventure' : 'Experience'}: ${item.name}`;
    
    content.innerHTML = `
      <div style="display: grid; gap: 16px;">
        <div style="background: var(--color-bg-3); padding: 16px; border-radius: 8px;">
          <h4 style="margin-bottom: 8px;">${item.name}</h4>
          <p style="color: var(--color-text-secondary);">📍 ${item.location || item.locations?.[0] || 'Various locations'}</p>
          <div style="font-size: 18px; font-weight: bold; color: var(--color-primary); margin: 8px 0;">
            ${item.price || item.pricePerDay || 'Price on request'}
          </div>
          ${item.description || item.bio ? `<p>${item.description || item.bio}</p>` : ''}
          ${item.specialization ? `<p><strong>Specialization:</strong> ${item.specialization}</p>` : ''}
          ${item.difficulty ? `<p><strong>Difficulty:</strong> ${item.difficulty}</p>` : ''}
          ${item.duration ? `<p><strong>Duration:</strong> ${item.duration}</p>` : ''}
        </div>
        
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" class="form-control" id="bookingDate" min="2025-09-19">
        </div>
        
        <div class="form-group">
          <label class="form-label">Number of People</label>
          <select class="form-control" id="bookingPeople">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5+">5+ People</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Special Requirements</label>
          <textarea class="form-control" rows="3" placeholder="Any special needs, preferences, or questions..."></textarea>
        </div>
        
        <button class="btn btn--primary btn--lg btn--full-width" onclick="confirmBooking('${type}', ${item.id})">
          Confirm Booking
        </button>
      </div>
    `;
    
    modal.classList.remove('hidden');
  } catch (error) {
    console.error('Show booking modal error:', error);
  }
}

// Utility Functions
function showNotification(message, type = 'info') {
  try {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'var(--color-success)' : 
                     type === 'error' ? 'var(--color-error)' : 
                     type === 'info' ? 'var(--color-info)' : 'var(--color-primary)';
    
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: var(--color-surface);
      border: 2px solid ${bgColor};
      border-radius: var(--radius-lg);
      padding: var(--space-16);
      box-shadow: var(--shadow-lg);
      z-index: 2000;
      max-width: 350px;
      color: var(--color-text);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-sm);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
  } catch (error) {
    console.error('Show notification error:', error);
  }
}

function showCartModal() {
  try {
    const modal = document.getElementById('cartModal');
    const content = document.getElementById('cartContent');
    const modalTotal = document.getElementById('modalCartTotal');
    
    if (!modal || !content) return;
    
    if (cart.length === 0) {
      content.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">Your cart is empty</div>';
    } else {
      content.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
            <div style="font-size: 12px; color: var(--color-text-secondary);">by ${item.artist} (${item.tribe})</div>
          </div>
          <div class="cart-item-actions">
            <div class="quantity-control">
              <button onclick="updateQuantity(${item.id}, -1)">−</button>
              <input type="text" value="${item.quantity}" readonly>
              <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `).join('');
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (modalTotal) {
      modalTotal.textContent = `₹${totalPrice.toLocaleString()}`;
    }
    
    modal.classList.remove('hidden');
  } catch (error) {
    console.error('Show cart modal error:', error);
  }
}

function hideCartModal() {
  try {
    const modal = document.getElementById('cartModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  } catch (error) {
    console.error('Hide cart modal error:', error);
  }
}

function updateCartDisplay() {
  try {
    const cartCount = document.getElementById('cartCount');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.classList.toggle('hidden', totalItems === 0);
    }
    
    if (cartItemCount) {
      cartItemCount.textContent = totalItems;
    }
    
    if (cartTotal) {
      cartTotal.textContent = `₹${totalPrice.toLocaleString()}`;
    }
  } catch (error) {
    console.error('Update cart display error:', error);
  }
}

function openPhotoModal(imageUrl, location, description) {
  try {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content modal-lg">
        <div class="modal-header">
          <h3>${location}</h3>
          <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
        </div>
        <div class="modal-body">
          <img src="${imageUrl}" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" alt="${location}">
          <p>${description}</p>
        </div>
      </div>
    `;
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.remove();
      }
    });
    
    document.body.appendChild(modal);
  } catch (error) {
    console.error('Open photo modal error:', error);
  }
}

function nextFeedbackStep() {
  try {
    const currentStep = document.querySelector('.feedback-step.active');
    if (!currentStep) return;
    
    const currentStepNumber = parseInt(currentStep.dataset.step);
    
    if (currentStepNumber === 1 && !feedbackData.ratings.overall) {
      showNotification('Please rate your overall experience', 'error');
      return;
    }
    
    const nextStep = document.querySelector(`.feedback-step[data-step="${currentStepNumber + 1}"]`);
    if (nextStep) {
      currentStep.classList.remove('active');
      nextStep.classList.add('active');
      feedbackData.step = currentStepNumber + 1;
    }
  } catch (error) {
    console.error('Next feedback step error:', error);
  }
}

function prevFeedbackStep() {
  try {
    const currentStep = document.querySelector('.feedback-step.active');
    if (!currentStep) return;
    
    const currentStepNumber = parseInt(currentStep.dataset.step);
    
    const prevStep = document.querySelector(`.feedback-step[data-step="${currentStepNumber - 1}"]`);
    if (prevStep) {
      currentStep.classList.remove('active');
      prevStep.classList.add('active');
      feedbackData.step = currentStepNumber - 1;
    }
  } catch (error) {
    console.error('Previous feedback step error:', error);
  }
}

// Global function exports for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.showMainAppDirectly = showMainAppDirectly;

window.viewDetailedItinerary = function(templateId) {
  try {
    const template = appData.aiItineraryTemplates.find(t => t.id === templateId);
    if (!template) return;
    
    const resultsContainer = document.getElementById('itineraryResults');
    const detailContainer = document.getElementById('itineraryDetail');
    
    if (resultsContainer) resultsContainer.classList.add('hidden');
    if (detailContainer) detailContainer.classList.remove('hidden');
    
    displayDetailedItinerary(template);
    showChatMessage(`Excellent choice! The ${template.name} is one of our most popular AI-generated itineraries. You can see detailed day-by-day plans, cultural highlights, and budget breakdowns. You can book the complete package or customize it further.`, 'bot');
  } catch (error) {
    console.error('View detailed itinerary error:', error);
  }
};

window.displayDetailedItinerary = function(template) {
  try {
    const container = document.getElementById('itineraryDetail');
    if (!container) return;
    
    container.innerHTML = `
      <div class="detail-header">
        <h2 class="detail-title">${template.name}</h2>
        <p class="detail-subtitle">${template.duration} • ${template.totalBudget || template.budgetRange} per person</p>
        <div style="margin-top: 16px; font-size: 16px; color: var(--color-primary); font-weight: bold;">
          🤖 AI-Generated & Personalized for Your Preferences
        </div>
      </div>
      
      <div class="template-overview">
        <div style="background: var(--color-bg-1); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 16px;">
            <div><strong>Cultural Depth:</strong> ${template.culturalDepth}</div>
            <div><strong>Physical Level:</strong> ${template.physicalRequirement}</div>
            <div><strong>Group Size:</strong> ${template.groupSize || '2-8 people'}</div>
            <div><strong>Best Season:</strong> ${template.bestSeasons ? template.bestSeasons.join(', ') : 'Year-round'}</div>
          </div>
          
          <div style="margin-bottom: 16px;">
            <strong>Key Destinations:</strong> ${template.destinations.join(' → ')}
          </div>
          
          <div style="margin-bottom: 16px;">
            <strong>Main Activities:</strong> ${template.activities.join(', ')}
          </div>
          
          ${template.included ? `
            <div style="margin-bottom: 16px;">
              <strong>Package Includes:</strong> ${template.included.join(', ')}
            </div>
          ` : ''}
          
          ${template.notIncluded ? `
            <div style="color: var(--color-text-secondary); font-size: 14px;">
              <strong>Not Included:</strong> ${template.notIncluded.join(', ')}
            </div>
          ` : ''}
        </div>
      </div>
      
      ${template.dailyPlans ? `
        <div class="daily-plans">
          <h3 style="text-align: center; margin-bottom: 24px; color: var(--color-text);">Detailed Daily Itinerary</h3>
          ${template.dailyPlans.map(day => `
            <div class="day-plan">
              <div class="day-header">
                <div>
                  <div class="day-number">Day ${day.day}</div>
                  <div class="day-title">${day.title}</div>
                  <div class="day-location">📍 ${day.location}</div>
                </div>
                <div class="day-budget">₹${day.estimatedBudget}</div>
              </div>
              
              <div class="day-activities">
                ${day.activities.map(activity => `
                  <div class="activity-item">
                    <div class="activity-time">${activity.time}</div>
                    <div class="activity-info">
                      <div class="activity-name">${activity.activity}</div>
                      <div class="activity-duration">${activity.duration}</div>
                      ${activity.significance ? `<div style="font-size: 11px; color: var(--color-primary);">${activity.significance}</div>` : ''}
                    </div>
                    <div class="activity-type ${activity.type}">${activity.type}</div>
                  </div>
                `).join('')}
              </div>
              
              <div class="cultural-highlight">
                <h5>🎭 Cultural Highlight</h5>
                <p>${day.culturalHighlight || `Stay: ${day.accommodation || 'Cultural accommodation'}`}</p>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <div class="itinerary-actions">
        <button class="btn btn--outline" onclick="backToItineraryResults()">← Back to Options</button>
        <button class="btn btn--primary btn--lg" onclick="bookCompleteItinerary(${template.id})">
          📅 Book This Complete Itinerary
        </button>
        <button class="btn btn--secondary" onclick="customizeItinerary(${template.id})">
          ✏️ Customize Itinerary
        </button>
      </div>
    `;
  } catch (error) {
    console.error('Display detailed itinerary error:', error);
  }
};

window.backToItineraryResults = function() {
  try {
    const resultsContainer = document.getElementById('itineraryResults');
    const detailContainer = document.getElementById('itineraryDetail');
    
    if (resultsContainer) resultsContainer.classList.remove('hidden');
    if (detailContainer) detailContainer.classList.add('hidden');
  } catch (error) {
    console.error('Back to itinerary results error:', error);
  }
};

window.bookCompleteItinerary = function(templateId) {
  try {
    if (!currentUser) {
      showNotification('Please login to book itinerary', 'error');
      return;
    }
    
    const template = appData.aiItineraryTemplates.find(t => t.id === templateId);
    if (!template) return;
    
    showNotification('Processing your complete itinerary booking...', 'info');
    
    setTimeout(() => {
      const bookingId = 'AI-ITN-' + Date.now();
      showNotification(`Complete itinerary booked successfully! Booking ID: ${bookingId}`, 'success');
      
      showChatMessage(`Fantastic! Your complete ${template.name} itinerary is booked (ID: ${bookingId}). You'll receive detailed day-by-day plans, all contact information, and booking confirmations via email. Our AI system has optimized everything for you, and local guides will coordinate your entire experience!`, 'bot');
    }, 2500);
  } catch (error) {
    console.error('Book complete itinerary error:', error);
    showNotification('Booking failed. Please try again.', 'error');
  }
};

window.customizeItinerary = function(templateId) {
  try {
    showNotification('🎨 Customization feature available! Our AI can modify any aspect of your itinerary.', 'info');
    
    showChatMessage(`I'd love to help customize your itinerary! Our AI can modify activities, accommodation, duration, add specific tribal experiences, adjust for dietary preferences, change physical activity levels, or include special festivals. What aspects would you like to customize?`, 'bot');
  } catch (error) {
    console.error('Customize itinerary error:', error);
  }
};

window.bookTransport = function(transportId) {
  try {
    if (!currentUser) {
      showNotification('Please login to book transport', 'error');
      return;
    }
    
    showNotification('Processing transport booking...', 'info');
    
    setTimeout(() => {
      const bookingId = 'TR' + Date.now();
      showNotification(`Transport booked! Booking ID: ${bookingId}. You'll receive live tracking details via SMS.`, 'success');
      
      showChatMessage(`Great! Your transport is booked (ID: ${bookingId}). You'll receive live GPS tracking and driver details. Cultural guide has been notified if selected.`, 'bot');
    }, 2000);
  } catch (error) {
    console.error('Book transport error:', error);
    showNotification('Transport booking failed. Please try again.', 'error');
  }
};

window.orderFood = function(foodId) {
  try {
    if (!currentUser) {
      showNotification('Please login to order food', 'error');
      return;
    }
    
    const food = appData.traditionalFood.find(f => f.id === foodId);
    if (!food) return;
    
    showNotification(`Ordering ${food.name}...`, 'info');
    
    setTimeout(() => {
      const orderId = 'FOOD' + Date.now();
      showNotification(`${food.name} ordered successfully! Order ID: ${orderId}. Estimated preparation: ${food.preparationTime}`, 'success');
      showChatMessage(`Great choice! ${food.name} is ordered. ${food.culturalSignificance} Enjoy this authentic Jharkhand experience!`, 'bot');
    }, 2000);
  } catch (error) {
    console.error('Order food error:', error);
    showNotification('Food order failed. Please try again.', 'error');
  }
};

window.bookGuide = function(guideId) {
  try {
    if (!currentUser) {
      showNotification('Please login to book guides', 'error');
      return;
    }
    
    const guide = appData.certifiedGuides.find(g => g.id === guideId);
    if (!guide) return;
    
    showBookingModal('guide', guide);
  } catch (error) {
    console.error('Book guide error:', error);
  }
};

window.bookAdventure = function(adventureId) {
  try {
    if (!currentUser) {
      showNotification('Please login to book adventures', 'error');
      return;
    }
    
    const adventure = appData.adventureActivities.find(a => a.id === adventureId);
    if (!adventure) return;
    
    showBookingModal('adventure', adventure);
  } catch (error) {
    console.error('Book adventure error:', error);
  }
};

window.confirmBooking = function(type, itemId) {
  try {
    const date = document.getElementById('bookingDate')?.value;
    const people = document.getElementById('bookingPeople')?.value;
    
    if (!date) {
      showNotification('Please select a date', 'error');
      return;
    }
    
    showNotification('Processing your booking...', 'info');
    
    setTimeout(() => {
      const bookingId = type.toUpperCase() + Date.now();
      const modal = document.getElementById('bookingModal');
      if (modal) modal.classList.add('hidden');
      
      showNotification(`Booking confirmed! Booking ID: ${bookingId}`, 'success');
      
      showChatMessage(`Excellent! Your ${type} booking is confirmed (ID: ${bookingId}). You'll receive detailed instructions and contact information via email and SMS.`, 'bot');
    }, 2500);
  } catch (error) {
    console.error('Confirm booking error:', error);
    showNotification('Booking confirmation failed. Please try again.', 'error');
  }
};

window.addToCart = function(productId) {
  try {
    if (!currentUser) {
      showNotification('Please login to add items to cart', 'error');
      return;
    }
    
    const product = appData.authenticHandicrafts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({...product, quantity: 1});
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`, 'success');
    showChatMessage(`Added authentic ${product.name} to your cart! This ${product.tribe} tribe artwork is ${product.authenticity}.`, 'bot');
  } catch (error) {
    console.error('Add to cart error:', error);
    showNotification('Failed to add item to cart', 'error');
  }
};

window.updateQuantity = function(productId, change) {
  try {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
      window.removeFromCart(productId);
      return;
    }
    
    updateCartDisplay();
    showCartModal();
  } catch (error) {
    console.error('Update quantity error:', error);
  }
};

window.removeFromCart = function(productId) {
  try {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showCartModal();
    showNotification('Item removed from cart', 'info');
  } catch (error) {
    console.error('Remove from cart error:', error);
  }
};

window.proceedToCheckout = function() {
  try {
    if (cart.length === 0) {
      showNotification('Your cart is empty', 'error');
      return;
    }
    
    showNotification('Redirecting to secure blockchain checkout...', 'info');
    
    setTimeout(() => {
      const orderId = 'ORD' + Date.now();
      const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      hideCartModal();
      cart = [];
      updateCartDisplay();
      
      showNotification(`Order placed successfully! Order ID: ${orderId}. Total: ₹${totalAmount.toLocaleString()}`, 'success');
      showChatMessage(`Fantastic! Your order (${orderId}) is confirmed. All items are blockchain-verified authentic tribal art. Estimated delivery: 7-10 days.`, 'bot');
    }, 3000);
  } catch (error) {
    console.error('Proceed to checkout error:', error);
    showNotification('Checkout failed. Please try again.', 'error');
  }
};

window.nextFeedbackStep = nextFeedbackStep;
window.prevFeedbackStep = prevFeedbackStep;
window.openPhotoModal = openPhotoModal;