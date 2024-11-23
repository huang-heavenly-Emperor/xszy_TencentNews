// 轮播图类
class ImageSlider {
    constructor(options) {
        // 初始化轮播图属性
        this.slides = options.slides || []; // 轮播图数据数组
        this.container = options.container; // 轮播图容器
        this.currentSlide = 0; // 当前显示的幻灯片索引
        this.interval = null; // 自动播放定时器

        // 获取DOM元素
        this.sliderContainer = this.container.querySelector('.slider-container'); // 幻灯片容器
        this.dotsContainer = this.container.querySelector('.slider-dots'); // 指示点容器
        this.prevBtn = this.container.querySelector('.prev-btn'); // 上一张按钮
        this.nextBtn = this.container.querySelector('.next-btn'); // 下一张按钮

        // 初始化轮播图
        this.init();
    }

    // 初始化方法
    init() {
        // 创建轮播图和指示点
        this.slides.forEach((slide, index) => {
            // 创建幻灯片元素
            const slideElement = document.createElement('div');
            slideElement.className = `slider-item ${index === 0 ? 'active' : ''}`; // 第一张幻灯片默认显示
            slideElement.innerHTML = `
                <img src="${slide.image}" alt="幻灯片 ${index + 1}">
                <div class="slider-caption">${slide.caption}</div>
            `;
            this.sliderContainer.appendChild(slideElement);

            // 创建指示点
            const dot = document.createElement('span');
            dot.className = `dot ${index === 0 ? 'active' : ''}`; // 第一个指示点默认激活
            dot.addEventListener('click', () => this.goToSlide(index)); // 点击指示点切换幻灯片
            this.dotsContainer.appendChild(dot);
        });

        // 添加按钮事件监听
        this.prevBtn.addEventListener('click', () => this.prevSlide()); // 上一张按钮点击事件
        this.nextBtn.addEventListener('click', () => this.nextSlide()); // 下一张按钮点击事件

        // 开始自动播放
        this.startAutoPlay();
    }

    // 切换到指定幻灯片
    goToSlide(index) {
        const slideItems = this.sliderContainer.querySelectorAll('.slider-item');
        const dots = this.dotsContainer.querySelectorAll('.dot');

        // 移除当前活动状态
        slideItems[this.currentSlide].classList.remove('active');
        dots[this.currentSlide].classList.remove('active');

        // 更新当前幻灯片索引
        this.currentSlide = index;

        // 添加新的活动状态
        slideItems[this.currentSlide].classList.add('active');
        dots[this.currentSlide].classList.add('active');
    }

    // 切换到下一张幻灯片
    nextSlide() {
        this.goToSlide((this.currentSlide + 1) % this.slides.length);
    }

    // 切换到上一张幻灯片
    prevSlide() {
        this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
    }

    // 开始自动播放
    startAutoPlay() {
        this.interval = setInterval(() => this.nextSlide(), 5000); // 每5秒自动切换一次
    }

    // 停止自动播放
    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// 页面加载完成后初始化轮播图
document.addEventListener('DOMContentLoaded', function () {
    // 示例轮播图数据配置
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

    // 第一组轮播图数据
    const slides_1 = [
        {
            image: 'assets/images/lunbo_1.png',
            caption: '习近平同巴西总统卢拉举行会谈'
        },
        {
            image: 'assets/images/lunbo_2.png',
            caption: '习近平同巴西总统卢拉'
        },
        {
            image: 'assets/images/lunbo_3.png',
            caption: '中华人民共和国和巴西联邦共和国关于携手构建更公正世界和更可持续星球的中巴命运共同体的联合声明'
        }
    ];

    // 第二组轮播图数据
    const slides_2 = [
        {
            image: 'assets/images/lunbo_5.webp',
            caption: ` Moments in Motion | President Xi at G20
    Rio Summit`
        },
        {
            image: 'assets/images/lunbo_6.png',
            caption: '两国元首深入交换意见，达成广泛共识，取得丰硕成果。'
        },
        {
            image: 'assets/images/lunbo_7.webp',
            caption: '此次访问最重要的成果之一，是两国元首宣布，将中巴关系定位提升为携手构建更公正世界和更可持续星球的中巴命运共同体。'
        }
    ];

    // 合并所有轮播图数据
    const data = [slides_1, slides, slides_2];

    // 初始化每个轮播图容器
    const sliderContainers = document.querySelectorAll('.news-slider');
    sliderContainers.forEach((container, index) => {
        new ImageSlider({
            slides: data[index],
            container: container
        });
    });
});
