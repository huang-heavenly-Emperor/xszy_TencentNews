document.addEventListener('DOMContentLoaded', function () {
    // 轮播图数据
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
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    // 上一张幻灯片
    function prevSlide(arr) {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    // 添加按钮事件监听
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    // 自动播放
    setInterval(nextSlide, 5000);

    // 初始化轮播图
    initSlider();
});
