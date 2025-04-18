// Sample news data (in a real application, this would come from an API)
const newsData = [
    {
        id: 1,
        title: "New Technology Breakthrough in AI",
        excerpt: "Scientists announce major advancement in artificial intelligence research...",
        category: "technology",
        image: "images/ai.jpg",
        date: new Date(Date.now() - 20 * 60 * 1000).toISOString(), // 20 minutes ago
        author: "John Doe",
        source: "Tech Daily News",
        fullContent: "Scientists at the Advanced Research Institute have announced a groundbreaking development in artificial intelligence that could revolutionize how machines learn and process information. The new neural network architecture, dubbed 'Quantum Neural Processing,' combines quantum computing principles with traditional deep learning approaches to achieve unprecedented processing speeds and accuracy.\n\nAccording to Dr. Sarah Chen, lead researcher on the project, 'This breakthrough represents a paradigm shift in how we approach machine learning. The system can now process complex data sets up to 100 times faster than previous models while maintaining exceptional accuracy.'\n\nThe technology has already shown promising results in medical imaging analysis, where it successfully identified early-stage tumors with 99.7% accuracy, significantly higher than human radiologists.\n\nIndustry experts predict this advancement could accelerate the development of autonomous vehicles, natural language processing systems, and personalized medicine applications. Several major tech companies have already expressed interest in licensing the technology.\n\nThe research team plans to publish their findings in the prestigious Journal of Artificial Intelligence next month, and a public demonstration of the technology is scheduled for the International Tech Conference in San Francisco this summer."
    },
    {
        id: 2,
        title: "Political Reform Bill Passed",
        excerpt: "The new legislation aims to improve government transparency...",
        category: "politics",
        image: "images/politics.jpg",
        date: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
        author: "Jane Smith",
        source: "Global Politics Today",
        fullContent: "In a landmark decision that has been years in the making, the Senate has passed the Government Transparency and Accountability Act with bipartisan support. The legislation, which received 78 votes in favor and only 22 against, represents the most significant reform to government operations in over three decades.\n\nThe bill, introduced by Senator Michael Rodriguez (D-California) and co-sponsored by 15 senators from both parties, addresses several key areas of government transparency. Most notably, it establishes a publicly accessible database for all government contracts exceeding $100,000, implements stricter lobbying disclosure requirements, and creates an independent oversight committee with subpoena power to investigate potential government misconduct.\n\n'This is a victory for democracy and the American people,' said Senator Rodriguez during the post-vote press conference. 'For too long, citizens have been kept in the dark about how their tax dollars are being spent and who is influencing their elected representatives. This legislation brings that era to an end.'\n\nThe bill also includes provisions for protecting whistleblowers, mandating that all government agencies publish their budgets in a standardized, machine-readable format, and requiring federal officials to disclose their meetings with lobbyists within 48 hours.\n\nPresident Johnson has indicated he will sign the bill into law next week, calling it 'a crucial step toward restoring public trust in government institutions.' The legislation will take effect six months after signing, giving agencies time to implement the new requirements."
    },
    {
        id: 3,
        title: "Championship Final Set for Next Week",
        excerpt: "Historic matchup between two legendary teams expected to draw record viewership...",
        category: "sports",
        image: "images/championship.jpg",
        date: new Date(Date.now() - 34 * 60 * 1000).toISOString(), // 34 minutes ago
        author: "Mike Johnson",
        source: "Sports Central",
        fullContent: "The stage is set for what promises to be one of the most exciting championship finals in recent memory. After a thrilling semifinal round that saw both underdogs triumph over their favored opponents, the championship game will feature a historic matchup between two teams with rich traditions and passionate fan bases.\n\nThe game, scheduled for next Saturday at the National Stadium, has already generated unprecedented ticket demand, with secondary market prices reaching record highs. Television networks are also reporting exceptional early advertising sales, suggesting this could be the most-watched sporting event of the year.\n\n'This is the matchup everyone wanted to see,' said sports analyst David Thompson. 'These teams have a storied rivalry that goes back decades, and both are playing their best football of the season right now. It's going to be an incredible game.'\n\nBoth teams have announced their starting lineups, with no major injuries reported on either side. Weather forecasts suggest perfect conditions for the game, with clear skies and moderate temperatures expected.\n\nThe pre-game festivities will begin three hours before kickoff, featuring performances by top musical artists and a special tribute to the league's founding members. The championship trophy, newly redesigned this year, will be on display at the stadium entrance for fans to view and photograph."
    },
    {
        id: 4,
        title: "New Streaming Service Launches",
        excerpt: "Revolutionary platform promises to change how we consume entertainment...",
        category: "entertainment",
        image: "images/new-streaming.jpg",
        date: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(), // 7 hours ago
        author: "Sarah Williams",
        source: "Entertainment Weekly",
        fullContent: "A new streaming service has entered the market with ambitious plans to revolutionize how we consume entertainment. The platform, called 'StreamVerse,' launched yesterday with an impressive catalog of original content and a unique approach to user experience.\n\nWhat sets StreamVerse apart is its AI-powered recommendation system that not only suggests content based on viewing history but also adapts to users' moods and daily schedules. The service also introduces a novel 'social watching' feature that allows friends to watch content together virtually, with synchronized playback and real-time chat.\n\n'We're not just another streaming service,' said CEO Jennifer Martinez during the launch event. 'We're reimagining how people connect through entertainment. Our platform understands that watching content is often a social experience, and we've built features that enhance that aspect.'\n\nThe service has already secured exclusive rights to several highly anticipated shows and movies, including a new sci-fi series from acclaimed director Christopher Nolan and a documentary series about climate change featuring prominent environmental activists.\n\nStreamVerse is offering a free 30-day trial to new users, with subscription plans starting at $9.99 per month. The service is available on all major platforms, including smart TVs, mobile devices, and gaming consoles."
    },
    {
        id: 5,
        title: "Breakthrough in Renewable Energy Storage",
        excerpt: "New battery technology could revolutionize green energy adoption...",
        category: "technology",
        image: "images/renewable-energy.jpg",
        date: new Date().toISOString(), // Just now
        author: "Robert Chen",
        source: "Science & Technology Review",
        fullContent: "Scientists have developed a new type of battery that could solve one of the biggest challenges facing renewable energy: storage. The breakthrough, announced today by researchers at the Green Energy Institute, promises to make solar and wind power more viable as primary energy sources.\n\nThe new battery technology uses a novel combination of materials that allows it to store significantly more energy than traditional lithium-ion batteries while being more durable and environmentally friendly. In laboratory tests, the batteries maintained 95% of their capacity after 1,000 charge cycles, far exceeding current industry standards.\n\n'This is a game-changer for renewable energy,' said Dr. Emily Rodriguez, lead researcher on the project. 'The ability to store large amounts of energy efficiently and cost-effectively has been the missing piece in the renewable energy puzzle. This technology could finally make 100% renewable energy grids possible.'\n\nThe research team has already filed patents for the technology and is working with several major energy companies to begin pilot testing. If successful, the first commercial applications could be available within two years.\n\nThe development has been met with enthusiasm from environmental groups and energy experts, who say it could accelerate the transition away from fossil fuels. The technology could also have applications in electric vehicles, potentially doubling their range while reducing charging times."
    },
    {
        id: 6,
        title: "Global Climate Summit Reaches Historic Agreement",
        excerpt: "Nations commit to ambitious new targets for reducing emissions...",
        category: "politics",
        image: "images/global-climate.jpg",
        date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        author: "Maria Garcia",
        source: "World News Today",
        fullContent: "In a landmark achievement for climate action, world leaders have unanimously agreed to a new set of ambitious targets for reducing greenhouse gas emissions. The agreement, reached after two weeks of intense negotiations at the Global Climate Summit in Paris, represents the most significant international climate commitment since the Paris Agreement of 2015.\n\nThe new accord commits participating nations to reduce emissions by 50% below 2010 levels by 2030, with developed countries pledging to achieve net-zero emissions by 2040. The agreement also establishes a $100 billion fund to help developing nations transition to renewable energy and adapt to climate impacts.\n\n'This is a turning point in the fight against climate change,' said UN Secretary-General Antonio Guterres. 'For the first time, we have a truly global commitment that matches the scale of the challenge. The science is clear, and now the political will is there as well.'\n\nThe agreement includes specific provisions for monitoring and enforcing the commitments, with regular reviews and public reporting of progress. It also addresses previously contentious issues such as carbon pricing and the role of natural gas as a transition fuel.\n\nEnvironmental groups have praised the agreement as a significant step forward, though some have noted that the targets still fall short of what scientists say is needed to limit global warming to 1.5 degrees Celsius. The next summit, scheduled for 2025, will focus on accelerating implementation and increasing ambition."
    }
];

// DOM Elements
const newsGrid = document.getElementById('news-grid');
const categoryLinks = document.querySelectorAll('.category-nav a');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchContainer = document.getElementById('search-container');
const searchToggle = document.getElementById('search-toggle');
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// News Modal Functionality
const newsModal = document.getElementById('news-modal');
const closeModal = document.querySelector('.close-modal');

// Favorites and Saved functionality
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
const favoriteButton = document.getElementById('favorite-button');
const saveButton = document.getElementById('save-button');

// Search functionality
const searchOverlay = document.getElementById('search-overlay');

// Notification functionality
const notificationToggle = document.getElementById('notification-toggle');
const notificationBubble = document.getElementById('notification-bubble');

// Update notification bubble position based on mouse position
document.addEventListener('mousemove', function(e) {
    if (notificationBubble.style.display === 'block') {
        notificationBubble.style.left = (e.clientX + 10) + 'px';
        notificationBubble.style.top = (e.clientY + 10) + 'px';
    }
});

notificationToggle.addEventListener('mouseenter', function() {
    notificationBubble.style.display = 'block';
});

notificationToggle.addEventListener('mouseleave', function() {
    notificationBubble.style.display = 'none';
});

// Toggle search container
searchToggle.addEventListener('click', function(e) {
    e.preventDefault();
    searchContainer.classList.toggle('active');
    searchOverlay.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
});

// Close search when clicking overlay
searchOverlay.addEventListener('click', function() {
    searchContainer.classList.remove('active');
    searchOverlay.classList.remove('active');
});

// Close search when pressing ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active');
        searchOverlay.classList.remove('active');
    }
});

// Search functionality
searchButton.addEventListener('click', function() {
    const keyword = searchInput.value.trim();
    if (keyword) {
        displayNews('all', keyword);
        searchContainer.classList.remove('active');
        searchOverlay.classList.remove('active');
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const keyword = searchInput.value.trim();
        if (keyword) {
            displayNews('all', keyword);
            searchContainer.classList.remove('active');
            searchOverlay.classList.remove('active');
        }
    }
});

// Function to filter news based on search keyword
function filterNewsByKeyword(keyword) {
    if (!keyword) return newsData;
    
    const searchTerm = keyword.toLowerCase();
    
    // Check if it's a hashtag search
    if (searchTerm.startsWith('#')) {
        // Remove the # symbol for the actual search
        const hashtagTerm = searchTerm.substring(1);
        
        // Search only in content (title, excerpt, fullContent)
        return newsData.filter(news => 
            news.title.toLowerCase().includes(hashtagTerm) ||
            news.excerpt.toLowerCase().includes(hashtagTerm) ||
            (news.fullContent && news.fullContent.toLowerCase().includes(hashtagTerm))
        );
    } else {
        // General search - look in all fields including metadata
        return newsData.filter(news => 
            news.title.toLowerCase().includes(searchTerm) ||
            news.excerpt.toLowerCase().includes(searchTerm) ||
            news.category.toLowerCase().includes(searchTerm) ||
            news.author.toLowerCase().includes(searchTerm) ||
            news.date.toLowerCase().includes(searchTerm) ||
            (news.fullContent && news.fullContent.toLowerCase().includes(searchTerm))
        );
    }
}

// Function to highlight search terms in text
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || !text) return text;
    
    // Remove the # symbol for highlighting if it's a hashtag search
    const termToHighlight = searchTerm.startsWith('#') ? searchTerm.substring(1) : searchTerm;
    
    const regex = new RegExp(`(${termToHighlight})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to calculate time ago from a date string
function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
        return 'Just now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }
}

// Function to create a news item element
function createNewsItem(news, searchKeyword = '') {
    let title = news.title;
    let excerpt = news.excerpt;
    
    // Highlight search terms if a search is active
    if (searchKeyword) {
        title = highlightSearchTerm(title, searchKeyword);
        excerpt = highlightSearchTerm(excerpt, searchKeyword);
    }
    
    // Calculate time ago
    const timeAgo = getTimeAgo(news.date);
    
    return `
        <article class="news-item" data-id="${news.id}">
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <div class="news-content">
                <span class="news-category">${news.category}</span>
                <h2 class="news-title">${title}</h2>
                <p class="news-excerpt">${excerpt}</p>
                <div class="news-meta">
                    <span class="news-time">${timeAgo}</span>
                </div>
            </div>
        </article>
    `;
}

// Function to toggle favorite status
function toggleFavorite(newsId) {
    const index = favorites.indexOf(newsId);
    
    if (index === -1) {
        // Add to favorites
        favorites.push(newsId);
        favoriteButton.classList.add('active');
        favoriteButton.querySelector('i').classList.remove('far');
        favoriteButton.querySelector('i').classList.add('fas');
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
        favoriteButton.classList.remove('active');
        favoriteButton.querySelector('i').classList.remove('fas');
        favoriteButton.querySelector('i').classList.add('far');
    }
    
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to toggle saved status
function toggleSaved(newsId) {
    const index = savedItems.indexOf(newsId);
    
    if (index === -1) {
        // Add to saved
        savedItems.push(newsId);
        saveButton.classList.add('active');
        saveButton.querySelector('i').classList.remove('far');
        saveButton.querySelector('i').classList.add('fas');
    } else {
        // Remove from saved
        savedItems.splice(index, 1);
        saveButton.classList.remove('active');
        saveButton.querySelector('i').classList.remove('fas');
        saveButton.querySelector('i').classList.add('far');
    }
    
    // Save to localStorage
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
}

// Function to check if a news item is in favorites
function isFavorite(newsId) {
    return favorites.includes(newsId);
}

// Function to check if a news item is saved
function isSaved(newsId) {
    return savedItems.includes(newsId);
}

// Function to filter and display news
function displayNews(category = 'all', searchKeyword = '') {
    let filteredNews = newsData;
    
    // Apply category filter
    if (category === 'favorites') {
        // Filter for favorites
        filteredNews = newsData.filter(news => favorites.includes(news.id));
    } else if (category === 'saved') {
        // Filter for saved items
        filteredNews = newsData.filter(news => savedItems.includes(news.id));
    } else if (category === 'for-you') {
        // Personalized recommendations for "For You" category
        filteredNews = getPersonalizedRecommendations();
    } else if (category === 'popular') {
        // Filter for "just now" news items (breaking news)
        filteredNews = newsData.filter(news => {
            const newsDate = new Date(news.date);
            const now = new Date();
            // Check if the news was published less than 1 minute ago
            return (now - newsDate) < 60 * 1000;
        });
    } else if (category !== 'all') {
        filteredNews = filteredNews.filter(news => news.category === category);
    }
    
    // Apply search filter
    if (searchKeyword) {
        filteredNews = filterNewsByKeyword(searchKeyword);
    }
    
    // Sort news by publication time (most recent first)
    filteredNews.sort((a, b) => {
        // Convert date strings to Date objects for comparison
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        // Sort in descending order (newest first)
        return dateB - dateA;
    });
    
    // Display news items
    newsGrid.innerHTML = filteredNews.map(news => createNewsItem(news, searchKeyword)).join('');
    
    // Add click event listeners to all news items
    document.querySelectorAll('.news-item').forEach(item => {
        item.addEventListener('click', () => {
            openNewsModal(item, searchKeyword);
        });
    });
}

// Function to get personalized recommendations for "For You" category
function getPersonalizedRecommendations() {
    // In a real application, this would use machine learning algorithms
    // to analyze user behavior and preferences
    
    // For this demo, we'll create a simple recommendation system
    // based on the following factors:
    // 1. Categories the user has interacted with (favorites, saved)
    // 2. Recent news items
    // 3. A mix of different categories to ensure diversity
    
    // Get categories the user has interacted with
    const userCategories = new Set();
    
    // Add categories from favorites
    newsData
        .filter(news => favorites.includes(news.id))
        .forEach(news => userCategories.add(news.category));
    
    // Add categories from saved items
    newsData
        .filter(news => savedItems.includes(news.id))
        .forEach(news => userCategories.add(news.category));
    
    // If user hasn't interacted with any categories yet,
    // show a mix of recent news from different categories
    if (userCategories.size === 0) {
        // Get one news item from each category
        const recommendations = [];
        const categories = ['technology', 'politics', 'sports', 'entertainment'];
        
        categories.forEach(category => {
            const categoryNews = newsData.filter(news => news.category === category);
            if (categoryNews.length > 0) {
                // Get the most recent news from this category
                const sortedNews = [...categoryNews].sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                recommendations.push(sortedNews[0]);
            }
        });
        
        return recommendations;
    }
    
    // Otherwise, prioritize news from categories the user has interacted with
    const recommendations = [];
    
    // Add news from user's preferred categories
    userCategories.forEach(category => {
        const categoryNews = newsData.filter(news => news.category === category);
        if (categoryNews.length > 0) {
            // Get the most recent news from this category
            const sortedNews = [...categoryNews].sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            recommendations.push(sortedNews[0]);
        }
    });
    
    // Add some recent news from other categories for diversity
    const otherCategories = ['technology', 'politics', 'sports', 'entertainment']
        .filter(category => !userCategories.has(category));
    
    otherCategories.forEach(category => {
        const categoryNews = newsData.filter(news => news.category === category);
        if (categoryNews.length > 0) {
            // Get the most recent news from this category
            const sortedNews = [...categoryNews].sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            recommendations.push(sortedNews[0]);
        }
    });
    
    return recommendations;
}

// Function to open modal with news details
function openNewsModal(newsItem, searchKeyword = '') {
    console.log('Opening modal for news item:', newsItem);
    
    // Get modal elements by ID
    const modalImage = document.getElementById('modal-image');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalExcerpt = document.getElementById('modal-excerpt');
    const modalAuthor = document.getElementById('modal-author');
    const modalSource = document.getElementById('modal-source');
    const modalDate = document.getElementById('modal-date');
    
    console.log('Modal elements:', {
        modalImage, modalCategory, modalTitle, modalExcerpt, modalAuthor, modalSource, modalDate
    });
    
    // Get news item elements
    const newsImage = newsItem.querySelector('img');
    const newsCategory = newsItem.querySelector('.news-category');
    const newsTitle = newsItem.querySelector('.news-title');
    const newsExcerpt = newsItem.querySelector('.news-excerpt');
    
    console.log('News item elements:', {
        newsImage, newsCategory, newsTitle, newsExcerpt
    });
    
    // Get news ID from the news item
    const newsId = parseInt(newsItem.dataset.id);
    
    // Find the full news data
    const fullNewsData = newsData.find(news => news.id === newsId);
    
    // Set modal content if elements exist
    if (modalImage && newsImage) modalImage.src = newsImage.src;
    if (modalCategory && newsCategory) modalCategory.textContent = newsCategory.textContent;
    
    // Set title with highlighting if search is active
    if (modalTitle && newsTitle) {
        if (searchKeyword) {
            modalTitle.innerHTML = highlightSearchTerm(newsTitle.textContent, searchKeyword);
        } else {
            modalTitle.textContent = newsTitle.textContent;
        }
    }
    
    // Display full content if available, otherwise show excerpt
    if (modalExcerpt) {
        if (fullNewsData && fullNewsData.fullContent) {
            if (searchKeyword) {
                modalExcerpt.innerHTML = highlightSearchTerm(fullNewsData.fullContent, searchKeyword);
            } else {
                modalExcerpt.textContent = fullNewsData.fullContent;
            }
        } else if (newsExcerpt) {
            if (searchKeyword) {
                modalExcerpt.innerHTML = highlightSearchTerm(newsExcerpt.textContent, searchKeyword);
            } else {
                modalExcerpt.textContent = newsExcerpt.textContent;
            }
        }
    }
    
    // Set author, source and date in the modal
    if (modalAuthor && fullNewsData) modalAuthor.textContent = fullNewsData.author;
    if (modalSource && fullNewsData) modalSource.textContent = fullNewsData.source;
    if (modalDate && fullNewsData) modalDate.textContent = fullNewsData.date;
    
    // Set favorite button state
    if (isFavorite(newsId)) {
        favoriteButton.classList.add('active');
        favoriteButton.querySelector('i').classList.remove('far');
        favoriteButton.querySelector('i').classList.add('fas');
    } else {
        favoriteButton.classList.remove('active');
        favoriteButton.querySelector('i').classList.remove('fas');
        favoriteButton.querySelector('i').classList.add('far');
    }
    
    // Set save button state
    if (isSaved(newsId)) {
        saveButton.classList.add('active');
        saveButton.querySelector('i').classList.remove('far');
        saveButton.querySelector('i').classList.add('fas');
    } else {
        saveButton.classList.remove('active');
        saveButton.querySelector('i').classList.remove('fas');
        saveButton.querySelector('i').classList.add('far');
    }
    
    // Set up favorite button click event
    favoriteButton.onclick = function() {
        toggleFavorite(newsId);
    };
    
    // Set up save button click event
    saveButton.onclick = function() {
        toggleSaved(newsId);
    };
    
    // Show modal
    newsModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    
    console.log('Modal displayed');
}

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    newsModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === newsModal) {
        newsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initial display of all news
displayNews();

// Rating functionality
const stars = document.querySelectorAll('.rating-stars i');

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        const rating = this.getAttribute('data-rating');
        stars.forEach(s => {
            if (s.getAttribute('data-rating') <= rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });

    star.addEventListener('mouseout', function() {
        stars.forEach(s => s.classList.remove('active'));
    });
}); 