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
                <img src="${slide.image}" alt="slide ${index + 1}">
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


    let currentSlide = 0;
    const sliderContainer = document.querySelector('.slider-container');
    const dotsContainer = document.querySelector('.slider-dots');

    // 初始化轮播图
    function initSlider(arr) {
        // 创建轮播项
        arr.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slider-item ${index === 0 ? 'active' : ''}`;
            slideElement.innerHTML = `
              <img src="${slide.image}" alt="slide ${index + 1}">
              <div class="slider-caption">${slide.caption}</div>
          `;


            sliderContainer.appendChild(slideElement);

            // 创建指示点
            const dot = document.createElement('span');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    // 切换到指定幻灯片
    function goToSlide(index) {
        const slideItems = document.querySelectorAll('.slider-item');
        const dots = document.querySelectorAll('.dot');

        slideItems[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slideItems[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // 下一张幻灯片
    function nextSlide(arr) {
        goToSlide((currentSlide + 1) % arr.length);
    }

    // 上一张幻灯片
    function prevSlide(arr) {
        goToSlide((currentSlide - 1 + arr.length) % arr.length);
    }

    // 添加按钮事件监听
    document.querySelector('.prev-btn').addEventListener('click', prevSlide(slides));
    document.querySelector('.next-btn').addEventListener('click', nextSlide(slides));

    // 自动播放
    setInterval(nextSlide(slides), 5000);

    // 初始化轮播图
    initSlider(slides);
});
