const books = {
    popular: [
        {
            name: "Jujutsu Kaisen",
            author: "Gege Akutami",
            img: "Jujutsu Kaisen.jpeg",
            description: "Jujutsu Kaisen follows Yuji Itadori, a high school student who swallows a cursed object harboring immense power to save his friends. He enters the world of sorcerers, battling grotesque curses threatening humanity. Training at Tokyo Metropolitan Magic Technical School, Yuji struggles with the responsibility his new powers entail while making friendships and sacrifices. The manga blends intense supernatural action with emotional depth, exploring themes of courage, mortality, and the complexities of good versus evil. Its layered characters and thrilling battles have made it a worldwide phenomenon appreciated for its dark yet hopeful narrative."
        },
        {
            name: "Dandadan",
            author: "Yukinobu Tatsu",
            img: "Dandadan.jpeg",
            description: "Dandadan is a wildly imaginative manga featuring two spirited teenagers who dive into the paranormal world. Momo believes in spirits, while Okarun believes in aliens, leading them into a chaotic mix of supernatural encounters. The story balances high-energy battles against otherworldly entities with quirky humor and heartfelt camaraderie. As their supernatural powers awaken, they face escalating threats and mysteries that challenge their beliefs and friendship. The series captivates readers with its creative storytelling, unpredictable plot twists, and a fresh blend of horror and comedy."
        },
        {
            name: "One Piece",
            author: "Eiichiro Oda",
            img: "One Piece.jpeg",
            description: "One Piece narrates the epic adventure of Monkey D. Luffy, a young pirate with rubber powers who dreams of finding the ultimate treasure 'One Piece' and becoming Pirate King. Alongside his diverse crew, he navigates treacherous seas filled with formidable foes, mystical islands, and unbreakable friendships. The story explores themes of freedom, dreams, and loyalty with incredible world-building and emotional depth. One Piece is globally celebrated for its vibrant characters, humor, and inspiring quest, remaining one of the most beloved shonen manga series in history."
        },
        {
            name: "My Hero Academia",
            author: "Kohei Horikoshi",
            img: "My Hero Academia.jpeg",
            description: "In a world where almost everyone has superpowers called quirks, Izuku Midoriya is born powerless but dreams of becoming the greatest hero. After inheriting powers from legendary All Might, Midoriya trains at UA High School, facing rivalries, villains, and personal challenges. The series blends exhilarating hero battles with heartfelt growth, addressing themes of courage, perseverance, and identity. Its rich cast and stories of overcoming adversity have made it a defining contemporary superhero tale loved by fans worldwide."
        },
        {
            name: "Sakamoto Days",
            author: "Yuto Suzuki",
            img: "Sakamoto Days.jpeg",
            description: "Sakamoto Days tells the story of Taro Sakamoto, a former elite hitman who gives up violence to live as a family man running a small convenience store. Despite his peaceful intentions, his violent past finds him, pulling him into dangerous situations. The series combines high-octane action, comedy, and heartfelt moments, exploring themes of change, redemption, and the difficulties of leaving one's past behind."
        },
        {
            name: "Spy × Family",
            author: "Tatsuya Endo",
            img: "Spy × Family.jpeg",
            description: "Spy × Family follows elite spy Twilight, who must create a fake family to complete a crucial mission. He marries Yor, an assassin, and adopts telepathic Anya, creating a charmingly dysfunctional unit. The story humorously explores identity, family bonds, and secrecy within intense espionage scenarios. Its blend of comedy, action, and emotional warmth has resonated deeply with audiences worldwide."
        },
        {
            name: "Chainsaw Man",
            author: "Tatsuki Fujimoto",
            img: "Chainsaw Man.jpeg",
            description: "Chainsaw Man is a dark fantasy about Denji, a destitute youth who merges with his devil dog Pochita, gaining chainsaw powers to hunt devils. The series explores themes of survival, loss, and human desire amid violently surreal battles. Its raw emotional storytelling, gruesome action, and ironic humor challenge genre conventions, earning widespread acclaim from critics and fans alike."
        },
        {
            name: "RuriDragon",
            author: "Masaoki Shindo",
            img: "RuriDragon.jpeg",
            description: "RuriDragon follows Ruri, a high school girl who discovers her body transforms into a dragon. Balancing her new powers with normal teenage life, she faces challenges of acceptance and identity with humor and heart. The series blends supernatural fantasy with slice-of-life storytelling, highlighting themes of self-discovery and belonging."
        },
        {
            name: "Kingdom",
            author: "Yasuhisa Hara",
            img: "Kingdom.jpeg",
            description: "Kingdom is a historical epic set in China's Warring States period, following orphan Shin's rise to become a renowned general. The story portrays large-scale battles, political intrigue, and the pursuit of peace through war. Its deep characterizations and strategic warfare scenes have made it a standout in historical manga."
        },
        {
            name: "Medalist",
            author: "Tsurumaikada",
            img: "Medalist.jpeg",
            description: "Medalist dramatizes Tsukasa's journey as an aspiring Olympic figure skater under the mentorship of coach Inori. It highlights the physical and emotional struggles inherent in competitive sports, emphasizing perseverance, passion, and the bonds forged through training and competition."
        },
        {
            name: "Akane-banashi",
            author: "Yuki Suenaga & Takamasa Moue",
            img: "Akane-banashi.jpeg",
            description: "Akane-banashi follows Akane's quest to master rakugo, traditional Japanese storytelling, inspired by her deceased father's legacy. The series portrays her determination amid fierce rivals, blending cultural appreciation with personal growth and drama."
        },
        {
            name: "Kagurabachi",
            author: "Takeru Hokazono",
            img: "Kagurabachi.jpeg",
            description: "Kagurabachi features Chihiro, a young fighter wielding enchanted swords in a dark magical world. Intense battles against supernatural enemies interweave with themes of justice, heroism, and sacrifice, delivering thrilling fantasy action."
        },
        {
            name: "Marriagetoxin",
            author: "Joumyaku & Mizuki Yoda",
            img: "Marriagetoxin.jpeg",
            description: "Marriagetoxin tells the story of an assassin cursed to marry in order to survive. Combining action, romance, and comedy, it follows the bizarre yet heartfelt journey of finding love while evading danger."
        },
        {
            name: "Gokurakugai",
            author: "Yuto Sano & Kanade",
            img: "Gokurakugai.jpeg",
            description: "Gokurakugai is set in a dystopian Tokyo, where two vigilantes fight supernatural criminals and protect civilians. The story blends urban fantasy with crime thriller elements, exploring themes of redemption and justice."
        }
    ],
    
    trending: [
        {
            name: "Dandadan",
            author: "Yukinobu Tatsu",
            img: "Dandadan.jpeg",
            description: "Dandadan follows two spirited teens exploring the supernatural world full of ghosts and aliens. Their adventures are a blend of outrageous humor and intense paranormal battles, creating a unique and captivating experience filled with friendship, mystery, and supernatural thrills."
        },
        {
            name: "Jujutsu Kaisen",
            author: "Gege Akutami",
            img: "Jujutsu Kaisen.jpeg",
            description: "Jujutsu Kaisen follows Yuji Itadori, a high schooler who swallows a cursed talisman and gains immense sorcerous power. He trains to fight deadly curses and protect those he loves, facing dark challenges and complex moral questions in a thrilling supernatural setting."
        },
        {
            name: "One Piece",
            author: "Eiichiro Oda",
            img: "One Piece.jpeg",
            description: "One Piece chronicles Monkey D. Luffy's quest to find the ultimate treasure and become Pirate King. Alongside his crew, he battles foes and discovers wondrous places, weaving friendship, dreams, and adventure into an epic saga beloved worldwide."
        },
        {
            name: "RuriDragon",
            author: "Masaoki Shindo",
            img: "RuriDragon.jpeg",
            description: "RuriDragon follows Ruri, who discovers her hidden dragon powers while navigating the challenges of high school. The story combines supernatural elements with humor and heartwarming moments of self-acceptance."
        },
        {
            name: "Sakamoto Days",
            author: "Yuto Suzuki",
            img: "Sakamoto Days.jpeg",
            description: "Sakamoto Days follows retired hitman Sakamoto juggling family life and dangerous past enemies. The manga balances explosive action with comedy and emotional depth."
        },
        {
            name: "Kagurabachi",
            author: "Takeru Hokazono",
            img: "Kagurabachi.jpeg",
            description: "Kagurabachi documents intense magical sword fights as Chihiro battles dark forces to protect the innocent. The story mixes fantasy action and themes of justice."
        },
        {
            name: "Chainsaw Man",
            author: "Tatsuki Fujimoto",
            img: "Chainsaw Man.jpeg",
            description: "Chainsaw Man details Denji's transformation into a chainsaw-wielding devil hunter. It blends brutal violence with emotional storytelling and dark comedy."
        },
        {
            name: "Spy × Family",
            author: "Tatsuya Endo",
            img: "Spy × Family.jpeg",
            description: "Spy × Family features a spy, assassin, and telepath pretending to be a family to achieve a secret mission. It mixes humor, action, and heart."
        },
        {
            name: "Kingdom",
            author: "Yasuhisa Hara",
            img: "Kingdom.jpeg",
            description: "Kingdom depicts the rise of Shin from orphan to military genius in ancient China's warring states, packed with warfare, trauma, and ambition."
        },
        {
            name: "Marriagetoxin",
            author: "Joumyaku & Mizuki Yoda",
            img: "Marriagetoxin.jpeg",
            description: "Marriagetoxin tells the story of an assassin tasked with finding a spouse to break a curse, blending action, romance, and comedy."
        },
        {
            name: "Akane-banashi",
            author: "Yuki Suenaga & Takamasa Moue",
            img: "Akane-banashi.jpeg",
            description: "Akane-banashi follows a young woman training to become a master rakugo storyteller, honoring her late father's legacy through passion and perseverance."
        },
        {
            name: "Gokurakugai",
            author: "Yuto Sano & Kanade",
            img: "Gokurakugai.jpeg",
            description: "Gokurakugai is a supernatural urban thriller featuring vigilantes fighting crime in a dystopian city, combining grit and fantasy."
        },
        {
            name: "Witch Watch",
            author: "Kenta Shinohara",
            img: "Witch Watch.jpeg",
            description: "Witch Watch is a magical comedy about Morio tasked to watch over witch Nico, full of spellbinding hilarity and friendship."
        },
        {
            name: "Gachiakuta",
            author: "Kei Urana",
            img: "Gachiakuta.jpeg",
            description: "Gachiakuta follows Rudo surviving a harsh wasteland filled with monsters and despair, fighting to reclaim himself and survive."
        },
        {
            name: "Madan no Ichi(Ichi the Witch)",
            author: "Kenta Shinohara",
            img: "Madan no Ichi(Ichi the Witch).jpeg",
            description: "Madan no Ichi follows Ichi, a powerful witch who combats dark magical threats to protect her world, mixing mystery and fantasy elements with compelling characters and intricate magical systems."
        }
    ]
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadSlider('popular-slider', books.popular);
    loadSlider('trending-slider', books.trending);
    initializeNavigation();
    initializeSearch();
    addScrollEffects();
});

// Load slider content
function loadSlider(sliderId, bookList) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    slider.innerHTML = '';
    
    bookList.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'slider-item';
        bookItem.style.animationDelay = `${index * 0.1}s`;
        
        bookItem.innerHTML = `
            <img src="${book.img}" alt="${book.name}" onerror="this.src='https://via.placeholder.com/140x200?text=${encodeURIComponent(book.name)}'">
            <span>${book.name}</span>
        `;
        
        bookItem.addEventListener('click', () => showBookDetails(book));
        slider.appendChild(bookItem);
    });
}

// Scroll slider function
function scrollSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    const scrollAmount = 300;
    const currentScroll = slider.scrollLeft;
    const targetScroll = currentScroll + (direction * scrollAmount);
    
    slider.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}

// Show book details
function showBookDetails(book) {
    const modal = createModal(`
        <div class="modal-header">
            <h2>${book.name}</h2>
            <button class="close-btn" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-content">
            <div class="book-details">
                <img src="${book.img}" alt="${book.name}" onerror="this.src='https://via.placeholder.com/200x300?text=${encodeURIComponent(book.name)}'">
                <div class="book-info">
                    <p class="author"><strong>Author:</strong> ${book.author}</p>
                    <p class="description">${book.description}</p>
                </div>
            </div>
        </div>
    `);
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// Show all books
function showAllBooks(category) {
    // Redirect to the appropriate page
    if (category === 'popular') {
        window.location.href = 'popular-books.html';
    } else if (category === 'trending') {
        window.location.href = 'trending-books.html';
    }
}


// Create modal
function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-dialog">
            ${content}
        </div>
    `;
    
    return modal;
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Initialize navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    if (!searchInput || !searchIcon) return;
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    searchIcon.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
}

// Perform search
function performSearch(query) {
    if (!query.trim()) return;
    
    const allBooks = [...books.popular, ...books.trending];
    const results = allBooks.filter(book => 
        book.name.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    
    const resultsGrid = results.map(book => `
        <div class="book-card" onclick="showBookDetails(${JSON.stringify(book).replace(/"/g, '&quot;')})">
            <img src="${book.img}" alt="${book.name}" onerror="this.src='https://via.placeholder.com/200x300?text=${encodeURIComponent(book.name)}'">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
        </div>
    `).join('');
    
    const modal = createModal(`
        <div class="modal-header">
            <h2>Search Results for "${query}"</h2>
            <button class="close-btn" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-content">
            <p class="search-info">${results.length} book(s) found</p>
            <div class="books-grid">
                ${resultsGrid || '<p>No books found matching your search.</p>'}
            </div>
        </div>
    `);
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// Add scroll effects
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.books-section, #about').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add modal styles to the page
const modalStyles = `
<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(5px);
}

.modal-dialog {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    margin: 2rem auto;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-dark);
    overflow: hidden;
    transform: scale(0.7) translateY(-50px);
    transition: transform 0.3s ease;
}

.modal.active .modal-dialog {
    transform: scale(1) translateY(0);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: var(--gradient-primary);
    color: var(--white);
}

.modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
}

.close-btn {
    background: none;
    border: none;
    color: var(--white);
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s ease;
}

.close-btn:hover {
    background: rgba(255,255,255,0.2);
}

.modal-content {
    padding: 2rem;
    max-height: 70vh;
    overflow-y: auto;
}

.book-details {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.book-details img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: var(--border-radius);
    flex-shrink: 0;
}

.book-info {
    flex: 1;
}

.book-info .author {
    font-size: 1.1rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.book-info .description {
    line-height: 1.8;
    color: var(--text-light);
}

.books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.book-card {
    background: var(--background-light);
    border-radius: var(--border-radius);
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
}

.book-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}

.book-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.book-card h3 {
    margin: 0.5rem 0;
    color: var(--text-dark);
    font-size: 1rem;
}

.book-card p {
    margin: 0;
    color: var(--text-light);
    font-size: 0.9rem;
}

.search-info {
    color: var(--text-light);
    margin-bottom: 1rem;
    text-align: center;
}

@media (max-width: 768px) {
    .modal-dialog {
        margin: 1rem;
        max-width: calc(100vw - 2rem);
        max-height: calc(100vh - 2rem);
    }
    
    .modal-content {
        padding: 1rem;
    }
    
    .book-details {
        flex-direction: column;
        text-align: center;
    }
    
    .book-details img {
        width: 150px;
        height: 225px;
        margin: 0 auto;
    }
    
    .books-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

