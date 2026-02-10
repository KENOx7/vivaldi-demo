// Sticky Navbar Logic
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Scroll Event for Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent', 'py-4');
        navbar.classList.add('py-2');

        // Logo Color Logic (Filter-based)
        const logo = navbar.querySelector('.brand-logo');
        logo.classList.remove('brightness-0', 'invert'); // Restore original color (Black)

        const links = navbar.querySelectorAll('.md\\:flex a');
        links.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-700');
        });

        // Mobile menu button color
        mobileMenuBtn.classList.remove('text-white');
        mobileMenuBtn.classList.add('text-vivaldi-dark');

    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent', 'py-4');
        navbar.classList.remove('py-2');

        // Revert Logo Color (Make it White)
        const logo = navbar.querySelector('.brand-logo');
        logo.classList.add('brightness-0', 'invert');

        const links = navbar.querySelectorAll('.md\\:flex a');
        links.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-gray-700');
        });

        // Mobile menu button color
        mobileMenuBtn.classList.add('text-white');
        mobileMenuBtn.classList.remove('text-vivaldi-dark');
    }
});

// Mobile Menu Logic
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function toggleMobileMenu(show) {
    if (show) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling
    } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
closeMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
mobileMenuOverlay.addEventListener('click', () => toggleMobileMenu(false));

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
});

// Optional: Parallax effect for Hero if needed
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.bg-hero-pattern');
    if (heroBg) {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

/* 
 * Dynamic Collections Loading
 * Loads collections from the legacy 'kaira-1.0.0' folder structure
 */
const collections = [
    { name: "SHINE", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/SHINE.jpg", label: "Modern & Parıltılı" },
    { name: "ELEGANCE", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ELEGANCE.jpg", label: "Zərif Toxunuş" },
    { name: "PIER", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/PIER.jpg", label: "Sahil Ruhu" },
    { name: "SENORA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/SENORA.jpg", label: "Xanımların Seçimi" },
    { name: "ELİTE", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ELİTE.jpg", label: "Elit Dizayn" },
    { name: "NÜANS", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/NÜANS.jpg", label: "İncə Detallar" },
    { name: "DIAMOND", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/DIAMOND.jpg", label: "Brilliant Parıltısı" },
    { name: "ART DECO", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ART DECO.jpg", label: "Sənət Əsəri" },
    { name: "MOON", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/MOON.jpg", label: "Gecənin Sirri" },
    { name: "ZARA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ZARA.jpg", label: "Trend Stil" },
    { name: "VERONA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/VERONA.jpg", label: "İtalyan Tərzi" },
    { name: "INDIA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/INDIA.jpg", label: "Şərq Naxışları" },
    { name: "LİZBON", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/LİZBON.jpg", label: "Avropa Ruhu" },
    { name: "ASTANA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ASTANA.jpg", label: "Asiya Motivi" },
    { name: "SOHO", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/SOHO.jpg", label: "Şəhər Həyatı" },
    { name: "DELHİ", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/DELHİ.jpg", label: "Ənənəvi" },
    { name: "FEZ", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/FEZ.jpg", label: "Mərakeş Stili" },
    { name: "DORA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/DORA.jpg", label: "Sadə Gözəllik" },
    { name: "MISYA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/MISYA.jpg", label: "Mistik Hava" },
    { name: "COOL", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/COOL.jpg", label: "Gənc Otağı" },
    { name: "NATURA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/NATURA.jpg", label: "Təbii Dokular" },
    { name: "BONNY", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/BONNY.jpg", label: "Şirin Dizaynlar" },
    { name: "MODA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/MODA.jpg", label: "Dəb İkonu" },
    { name: "ICON", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ICON.jpg", label: "Simvolik" },
    { name: "SOFT", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/SOFT.jpg", label: "Yumşaq Toxunuş" },
    { name: "ATLAS", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ATLAS.jpg", label: "Dünya Naxışları" },
    { name: "HERİTAGE", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/HERİTAGE.jpg", label: "Miras" },
    { name: "AURA", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/AURA.jpg", label: "Pozitiv Enerji" },
    { name: "KAVI", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/KAVI.jpg", label: "Güclü Karakter" },
    { name: "ESSE", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/ESSE.jpg", label: "Minimal" },
    { name: "PREMIUM", image: "https://www.vivaldihome.com/kaira-1.0.0/web_resimmm/PREMIUM.jpg", label: "Xüsusi Kolleksiya" },
];

const gridContainer = document.getElementById('collections-grid');

if (gridContainer) {
    collections.forEach(col => {
        // Create card element
        // Added 'hover:-translate-y-2' and 'transition-transform' to the card itself for the lift effect
        const card = document.createElement('div');
        card.className = "collection-item group relative cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/5] md:aspect-square hover:-translate-y-2 transition-transform duration-300";

        // Removed 'group-hover:scale-105' from img to prevent cutting off corners
        card.innerHTML = `
            <img src="${col.image}" alt="${col.name}" class="w-full h-full object-cover transition-transform duration-700" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-white text-lg md:text-2xl font-bold tracking-wide drop-shadow-lg leading-tight">${col.name}</h3>
                <div class="h-0.5 w-0 bg-vivaldi-gold group-hover:w-full transition-all duration-500 ease-out mb-2"></div>
                <p class="text-gray-300 text-xs md:text-sm limit-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">${col.label}</p>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}

// Mobile View Toggle Logic
const btn1Col = document.getElementById('view-1-col');
const btn2Col = document.getElementById('view-2-col');
const grid = document.getElementById('collections-grid');

if (btn1Col && btn2Col && grid) {
    btn1Col.addEventListener('click', () => {
        grid.classList.remove('grid-cols-2');
        grid.classList.add('grid-cols-1');

        // Update Active State
        btn1Col.classList.add('text-vivaldi-gold');
        btn1Col.classList.remove('text-gray-400');
        btn2Col.classList.add('text-gray-400');
        btn2Col.classList.remove('text-vivaldi-gold');
    });

    btn2Col.addEventListener('click', () => {
        grid.classList.remove('grid-cols-1');
        grid.classList.add('grid-cols-2');

        // Update Active State
        btn2Col.classList.add('text-vivaldi-gold');
        btn2Col.classList.remove('text-gray-400');
        btn1Col.classList.add('text-gray-400');
        btn1Col.classList.remove('text-vivaldi-gold');
    });
}

// Render Mobile Menu Collections
const mobileListContainer = document.getElementById('mobile-collections-list');
if (mobileListContainer) {
    collections.forEach(col => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#collections" class="mobile-link flex items-center px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 group" onclick="toggleMobileMenu(false)">
                <img src="${col.image}" class="w-10 h-10 rounded-full object-cover mr-4 border border-gray-200 shadow-sm" alt="${col.name}">
                <span class="text-gray-700 font-medium group-hover:text-vivaldi-gold transition-colors flex-grow">${col.name}</span>
                <i class="fas fa-chevron-right text-gray-300 text-xs group-hover:text-vivaldi-gold"></i>
            </a>
        `;
        mobileListContainer.appendChild(li);
    });
}