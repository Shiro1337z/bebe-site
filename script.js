/**
 * Pentru Simona - Galerie Media Personală
 * De la Răzvan cu dragoste 💕
 * 
 * Features: Protecție parolă, Grid Masonry, Lightbox, Filtrare
 */

// ===== Configurare =====
const CONFIG = {
    PAROLA: 'iubire', // Schimbă aici parola dorită
    ANIMATION_STAGGER: 50,
};

// ===== Date Media =====
const mediaItems = [
    // Poze
    { id: 1, type: 'image', src: 'media/062B4ADA-271B-454C-B25B-023C1BAF8E49.JPG', title: 'Moment Special 1' },
    { id: 2, type: 'image', src: 'media/077EED34-93B6-4E9A-A98B-E992F0082C49.JPG', title: 'Moment Special 2' },
    { id: 3, type: 'image', src: 'media/104F78FF-1852-4937-92AD-3692D3262CC2.JPG', title: 'Moment Special 3' },
    { id: 4, type: 'image', src: 'media/12878808-9F54-4E55-B915-04BF3180711D.JPG', title: 'Moment Special 4' },
    { id: 5, type: 'image', src: 'media/216A803E-D4A4-4ED9-AE90-EDE5FBE0531C.JPG', title: 'Moment Special 5' },
    { id: 6, type: 'image', src: 'media/497D6D30-F303-4CF7-B6D7-0099A53ABFDA.JPG', title: 'Moment Special 6' },
    { id: 7, type: 'image', src: 'media/6536E254-F722-40CD-858E-F7538C2B740D.JPG', title: 'Moment Special 7' },
    { id: 8, type: 'image', src: 'media/6A6AE1D7-6CDB-4B68-B836-0B7DF9B17A6D.JPG', title: 'Moment Special 8' },
    { id: 9, type: 'image', src: 'media/6CF6BE95-FEFB-4C93-8752-E7722F559410.JPG', title: 'Moment Special 9' },
    { id: 10, type: 'image', src: 'media/6DFEFF02-88D2-410C-9B73-1C8B11556526.JPG', title: 'Moment Special 10' },
    { id: 11, type: 'image', src: 'media/70C82FA3-3219-4573-90BA-2E7A204F3D32.JPG', title: 'Moment Special 11' },
    { id: 12, type: 'image', src: 'media/7318B7BA-3166-4C68-8B74-763BFEAD7D4F.JPG', title: 'Moment Special 12' },
    { id: 13, type: 'image', src: 'media/7692EEAF-1C64-40C0-BF3C-1E1FD65DE682.JPG', title: 'Moment Special 13' },
    { id: 14, type: 'image', src: 'media/7A978ED3-7F3A-4D51-B05D-A33BF783C0F4.JPG', title: 'Moment Special 14' },
    { id: 15, type: 'image', src: 'media/7B7B8D54-4B87-4F52-8578-3D89C29DFDEB.JPG', title: 'Moment Special 15' },
    { id: 16, type: 'image', src: 'media/7FEE180C-BE6F-474E-8740-EFFC6C1CC355.JPG', title: 'Moment Special 16' },
    { id: 17, type: 'image', src: 'media/821CAFC7-27C4-44B4-9679-891405FE1268.JPG', title: 'Moment Special 17' },
    { id: 18, type: 'image', src: 'media/950C856D-C0CE-47FD-B226-B6B5742EDD10.JPG', title: 'Moment Special 18' },
    { id: 19, type: 'image', src: 'media/9A70CBA4-0D95-42F0-B0AD-5295ECD8652D.JPG', title: 'Moment Special 19' },
    { id: 20, type: 'image', src: 'media/9FDEE740-18A4-4DBD-98A1-B6F41647933F.JPG', title: 'Moment Special 20' },
    { id: 21, type: 'image', src: 'media/AB10DF41-0D44-4389-82ED-96AD8D0041A4.JPG', title: 'Moment Special 21' },
    { id: 22, type: 'image', src: 'media/ACD6730B-E2CD-45CC-AF4E-816F6D9BB4F4.JPG', title: 'Moment Special 22' },
    { id: 23, type: 'image', src: 'media/CF504073-6EEE-4476-BE72-6875078CC167.JPG', title: 'Moment Special 23' },
    { id: 24, type: 'image', src: 'media/D18E790E-7E86-4F1D-8A85-476ACBEEB2D5.JPG', title: 'Moment Special 24' },
    { id: 25, type: 'image', src: 'media/D4C4804B-CDE0-48BD-8A0E-A82ED6EEB559.JPG', title: 'Moment Special 25' },
    { id: 26, type: 'image', src: 'media/E33B0914-38A6-4CF0-9362-2E5206418BCA.JPG', title: 'Moment Special 26' },
    { id: 27, type: 'image', src: 'media/E94065C9-1654-4EA5-8D4F-678DC621CC40.JPG', title: 'Moment Special 27' },
    { id: 28, type: 'image', src: 'media/EB7FF2F9-5C97-488E-847D-7A9B015ACDE1.JPG', title: 'Moment Special 28' },
    { id: 29, type: 'image', src: 'media/IMG_1003.PNG', title: 'Moment Special 29' },
    { id: 30, type: 'image', src: 'media/IMG_1200.PNG', title: 'Moment Special 30' },
    { id: 31, type: 'image', src: 'media/IMG_1244.PNG', title: 'Moment Special 31' },
    { id: 32, type: 'image', src: 'media/IMG_1245.PNG', title: 'Moment Special 32' },
    { id: 33, type: 'image', src: 'media/IMG_9287.jpeg', title: 'Moment Special 33' },
    { id: 34, type: 'image', src: 'media/IMG_9791.PNG', title: 'Moment Special 34' },
    { id: 35, type: 'image', src: 'media/IMG_9992.PNG', title: 'Moment Special 35' },
    { id: 38, type: 'image', src: 'media/WhatsApp Image 2026-02-16 at 2.43.48 PM.jpeg', title: 'Moment Special 38' },
    { id: 39, type: 'image', src: 'media/WhatsApp Image 2026-02-16 at 2.43.51 PM.jpeg', title: 'Moment Special 39' },
    
    // Videoclipuri
    { id: 40, type: 'video', src: 'media/04d43c42124f4ae198f295c600253186.MOV', title: 'Video Special 1' },
    { id: 41, type: 'video', src: 'media/074309d034f64045a909f7809c212371.MOV', title: 'Video Special 2' },
    { id: 42, type: 'video', src: 'media/0e86ee55b7eb44bebd1400c1424e6e02.MOV', title: 'Video Special 3' },
    { id: 43, type: 'video', src: 'media/17d5e18e606644998cf1e50c6c03b1ea.MOV', title: 'Video Special 4' },
    { id: 44, type: 'video', src: 'media/1a2645a38b0c405b9597a389d4d993c3.MOV', title: 'Video Special 5' },
    { id: 45, type: 'video', src: 'media/1a83bdab28d74f909ee9590be2a15135.MOV', title: 'Video Special 6' },
    { id: 46, type: 'video', src: 'media/23ab7998547d4063954133fce18da286.MOV', title: 'Video Special 7' },
    { id: 47, type: 'video', src: 'media/61200846ec8c4f4ba04e5f5cfdad10ed.MOV', title: 'Video Special 8' },
    { id: 48, type: 'video', src: 'media/6c986713947441f1be90e59c035b0a17.MOV', title: 'Video Special 9' },
    { id: 49, type: 'video', src: 'media/7a2c240b4f124aa482d30a2b55bff113.MOV', title: 'Video Special 10' },
    { id: 50, type: 'video', src: 'media/7bd3eb1805a941b9875c532476311ec6.MOV', title: 'Video Special 11' },
    { id: 51, type: 'video', src: 'media/97e69deecc724144a70d5f2f3637e2e4.MOV', title: 'Video Special 12' },
    { id: 52, type: 'video', src: 'media/b53b92a666184250a8c61abad892d6bc.MOV', title: 'Video Special 13' },
    { id: 53, type: 'video', src: 'media/b593c06484bb48e4b0c4976ba7b36fc3.MOV', title: 'Video Special 14' },
    { id: 54, type: 'video', src: 'media/b85450e5eecc4fec8df9b58e99fb95dc.MOV', title: 'Video Special 15' },
    { id: 55, type: 'video', src: 'media/b8c79141775343d68d493467098cce0d.MOV', title: 'Video Special 16' },
    { id: 56, type: 'video', src: 'media/b8fde9ce169d4ec1995ab09932199bca.MOV', title: 'Video Special 17' },
    { id: 57, type: 'video', src: 'media/be994359dd2b4d9f842584f61de32f0d.MOV', title: 'Video Special 18' },
    { id: 58, type: 'video', src: 'media/d6414406504d49e592cc49295eb02a65.MOV', title: 'Video Special 19' },
    { id: 59, type: 'video', src: 'media/ecec9c7f86cf4c0abe6687ec32532282.MOV', title: 'Video Special 20' },
    { id: 60, type: 'video', src: 'media/f4ba093faf14499592b53d3d9fd6566d.MOV', title: 'Video Special 21' },
    { id: 61, type: 'video', src: 'media/IMG_9610.MOV', title: 'Video Special 22' },
    { id: 60, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 2.43.11 PM.mp4', title: 'Video Special 20' },
    { id: 61, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 2.43.47 PM.mp4', title: 'Video Special 21' },
    { id: 62, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 2.43.48 PM.mp4', title: 'Video Special 22' },
    { id: 63, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 2.43.49 PM.mp4', title: 'Video Special 23' },
    { id: 64, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 2.43.50 PM.mp4', title: 'Video Special 24' },
    { id: 65, type: 'video', src: 'media/WhatsApp Video 2026-02-16 at 22222.43.49 PM.mp4', title: 'Video Special 25' },
];

// ===== Gestionare Stare =====
const state = {
    currentFilter: 'all',
    filteredItems: [],
    currentIndex: 0,
    isLightboxOpen: false,
    videoElements: [],
};

// ===== Elemente DOM =====
const elements = {
    passwordOverlay: document.getElementById('password-overlay'),
    passwordInput: document.getElementById('password-input'),
    passwordSubmit: document.getElementById('password-submit'),
    passwordError: document.getElementById('password-error'),
    mainContent: document.getElementById('main-content'),
    gallery: document.getElementById('gallery'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    lightbox: document.getElementById('lightbox'),
    lightboxMediaContainer: document.getElementById('lightbox-media-container'),
    lightboxCounter: document.getElementById('lightbox-counter'),
    lightboxDownload: document.getElementById('lightbox-download'),
    lightboxClose: document.querySelector('.lightbox-close'),
    lightboxPrev: document.querySelector('.lightbox-prev'),
    lightboxNext: document.querySelector('.lightbox-next'),
};

// ===== Protecție Parolă =====
function initPasswordProtection() {
    if (sessionStorage.getItem('galleryAuthenticated') === 'true') {
        unlockGallery();
        return;
    }

    elements.passwordSubmit.addEventListener('click', checkPassword);
    elements.passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
    elements.passwordInput.focus();
}

function checkPassword() {
    const input = elements.passwordInput.value.trim().toLowerCase();
    
    if (input === CONFIG.PAROLA) {
        sessionStorage.setItem('galleryAuthenticated', 'true');
        unlockGallery();
    } else {
        elements.passwordError.classList.add('visible');
        elements.passwordInput.value = '';
        elements.passwordInput.focus();
        
        elements.passwordInput.style.animation = 'none';
        setTimeout(() => {
            elements.passwordInput.style.animation = 'shake 0.5s ease';
        }, 10);
    }
}

function unlockGallery() {
    elements.passwordOverlay.classList.add('hidden');
    elements.mainContent.classList.remove('hidden');
    
    setTimeout(() => {
        initGallery();
    }, 300);
}

// Adaugă animație shake
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// ===== Funcții Galerie =====
function initGallery() {
    renderGallery();
    initFilters();
    initLightbox();
    initIntersectionObserver();
}

function renderGallery() {
    elements.gallery.innerHTML = '';
    state.filteredItems = [...mediaItems];
    
    mediaItems.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        elements.gallery.appendChild(galleryItem);
    });
}

function createGalleryItem(item, index) {
    const div = document.createElement('div');
    div.className = `gallery-item ${item.type === 'video' ? 'video' : ''}`;
    div.dataset.id = item.id;
    div.dataset.type = item.type;
    div.dataset.index = index;
    div.style.animationDelay = `${index * 0.05}s`;
    
    let mediaElement;
    
    if (item.type === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = item.src;
        mediaElement.alt = item.title;
        mediaElement.loading = 'lazy';
    } else {
        mediaElement = document.createElement('video');
        mediaElement.src = item.src;
        mediaElement.muted = true;
        mediaElement.loop = true;
        mediaElement.playsInline = true;
        mediaElement.preload = 'metadata';
        
        div.addEventListener('mouseenter', () => {
            mediaElement.play().catch(() => {});
        });
        div.addEventListener('mouseleave', () => {
            mediaElement.pause();
            mediaElement.currentTime = 0;
        });
        
        state.videoElements.push({ element: mediaElement, container: div });
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    overlay.innerHTML = `
        <div class="gallery-item-info">
            <div class="gallery-item-date">${item.type === 'video' ? '🎬 Video' : '📷 Poza'}</div>
            <div class="gallery-item-tags">${item.title}</div>
        </div>
    `;
    
    div.appendChild(mediaElement);
    div.appendChild(overlay);
    
    div.addEventListener('click', () => openLightbox(index));
    
    return div;
}

// ===== Intersection Observer =====
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const { element } = state.videoElements.find(
                v => v.container === entry.target
            ) || {};
            
            if (element) {
                if (entry.isIntersecting) {
                    // Nu autoplay automat, doar pe hover
                } else {
                    element.pause();
                    element.currentTime = 0;
                }
            }
        });
    }, {
        threshold: 0.5,
    });
    
    state.videoElements.forEach(({ container }) => {
        observer.observe(container);
    });
}

// ===== Funcții Filtrare =====
function initFilters() {
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            applyFilter(filter);
        });
    });
}

function applyFilter(filter) {
    state.currentFilter = filter;
    
    const items = elements.gallery.querySelectorAll('.gallery-item');
    
    items.forEach((item, index) => {
        const type = item.dataset.type;
        
        let shouldShow = false;
        if (filter === 'all') {
            shouldShow = true;
        } else if (filter === 'photos') {
            shouldShow = type === 'image';
        } else if (filter === 'videos') {
            shouldShow = type === 'video';
        }
        
        if (shouldShow) {
            item.classList.remove('hidden');
            item.style.animationDelay = `${index * 0.03}s`;
        } else {
            item.classList.add('hidden');
        }
    });
    
    // Update filtered items pentru lightbox
    state.filteredItems = mediaItems.filter(item => {
        if (filter === 'all') return true;
        if (filter === 'photos') return item.type === 'image';
        if (filter === 'videos') return item.type === 'video';
        return true;
    });
}

// ===== Funcții Lightbox =====
function initLightbox() {
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightbox.addEventListener('click', (e) => {
        if (e.target === elements.lightbox) closeLightbox();
    });
    
    elements.lightboxPrev.addEventListener('click', showPrevious);
    elements.lightboxNext.addEventListener('click', showNext);
    
    document.addEventListener('keydown', handleKeyboard);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    elements.lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    elements.lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(touchStartX, touchEndX);
    }, { passive: true });
}

function openLightbox(index) {
    const item = mediaItems[index];
    const filteredIndex = state.filteredItems.findIndex(i => i.id === item.id);
    
    if (filteredIndex === -1) return;
    
    state.currentIndex = filteredIndex;
    state.isLightboxOpen = true;
    
    loadLightboxMedia(state.filteredItems[state.currentIndex]);
    elements.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    state.isLightboxOpen = false;
    elements.lightbox.classList.remove('active');
    document.body.style.overflow = '';
    
    const video = elements.lightboxMediaContainer.querySelector('video');
    if (video) {
        video.pause();
        video.src = '';
    }
    
    elements.lightboxMediaContainer.innerHTML = '';
}

function loadLightboxMedia(item) {
    elements.lightboxMediaContainer.innerHTML = '';
    
    const spinner = document.createElement('div');
    spinner.className = 'lightbox-loading';
    elements.lightboxMediaContainer.appendChild(spinner);
    
    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        
        img.onload = () => {
            spinner.remove();
            elements.lightboxMediaContainer.appendChild(img);
        };
        
        img.onerror = () => {
            spinner.remove();
            elements.lightboxMediaContainer.innerHTML = '<p style="color: white;">Eroare la încărcarea imaginii</p>';
        };
    } else {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        video.loop = false;
        
        video.onloadeddata = () => {
            spinner.remove();
            elements.lightboxMediaContainer.appendChild(video);
            video.play().catch(() => {});
        };
        
        video.onerror = () => {
            spinner.remove();
            elements.lightboxMediaContainer.innerHTML = '<p style="color: white;">Eroare la încărcarea videoclipului</p>';
        };
    }
    
    elements.lightboxCounter.textContent = `${state.currentIndex + 1} / ${state.filteredItems.length}`;
    elements.lightboxDownload.href = item.src;
    elements.lightboxDownload.download = item.src.split('/').pop() || `amintire-${item.id}`;
}

function showPrevious() {
    state.currentIndex = (state.currentIndex - 1 + state.filteredItems.length) % state.filteredItems.length;
    loadLightboxMedia(state.filteredItems[state.currentIndex]);
}

function showNext() {
    state.currentIndex = (state.currentIndex + 1) % state.filteredItems.length;
    loadLightboxMedia(state.filteredItems[state.currentIndex]);
}

function handleKeyboard(e) {
    if (!state.isLightboxOpen) return;
    
    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrevious();
            break;
        case 'ArrowRight':
            showNext();
            break;
    }
}

function handleSwipe(startX, endX) {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            showNext();
        } else {
            showPrevious();
        }
    }
}

// ===== Inițializare =====
document.addEventListener('DOMContentLoaded', () => {
    initPasswordProtection();
});
