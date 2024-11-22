class ImageSlider {
    constructor(options) {
        this.slides = options.slides || [];
        this.container = options.container;
        this.currentSlide = 0;
        this.interval = null;
        
        // Get required DOM elements
        this.sliderContainer = this.container.querySelector('.slider-container');
        this.dotsContainer = this.container.querySelector('.slider-dots');
        this.prevBtn = this.container.querySelector('.prev-btn');
        this.nextBtn = this.container.querySelector('.next-btn');
        
        // Initialize slider
        this.init();
    }

    init() {
        // Create slides and dots
        this.slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slider-item ${index === 0 ? 'active' : ''}`;
            slideElement.innerHTML = `
                <img src="${re}" alt="slide ${index + 1}">
                <div class="slider-caption">${slide.caption}</div>
            `;
            this.sliderContainer.appendChild(slideElement);

            const dot = document.createElement('span');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        // Add button event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Start auto play
        this.startAutoPlay();
    }

    goToSlide(index) {
        const slideItems = this.sliderContainer.querySelectorAll('.slider-item');
        const dots = this.dotsContainer.querySelectorAll('.dot');

        slideItems[this.currentSlide].classList.remove('active');
        dots[this.currentSlide].classList.remove('active');

        this.currentSlide = index;

        slideItems[this.currentSlide].classList.add('active');
        dots[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        this.goToSlide((this.currentSlide + 1) % this.slides.length);
    }

    prevSlide() {
        this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
    }

    startAutoPlay() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// Usage example:
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            image: 'https://via.placeholder.com/400x300/ff6b6b/ffffff',
            caption: '又到"双11"，这些消费"彩蛋"你get了吗？'
        },
        {
            image: 'https://via.placeholder.com/400x300/339af0/ffffff',
            caption: '直播带货新趋势'
        },
        {
            image: 'https://via.placeholder.com/400x300/51cf66/ffffff',
            caption: '电商新发展'
        }
    ];
    const slides_1 = [
        {
            image: '../images/lunbo_1.png',
            caption: '习近平同巴西总统卢拉举行会谈'
        },
        {
            image: '../images/lunbo_2.png',
            caption: '习近平同巴西总统卢拉'
        },
        {
            image: '../images/lunbo_3.png',
            caption: '中华人民共和国和巴西联邦共和国关于携手构建更公正世界和更可持续星球的中巴命运共同体的联合声明'
        }
    ];

    const data = [slides, slides_1];

    // Initialize slider for each slider container
    const sliderContainers = document.querySelectorAll('.news-slider');
    sliderContainers.forEach((container, index) => {
        new ImageSlider({
            slides: data[index],
            container: container
        });
    });
});
