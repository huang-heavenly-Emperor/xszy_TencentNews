// 导航栏固定效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});

// 搜索框功能
const searchInput = document.querySelector('.search input');
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm) {
            // 实现搜索功能
            console.log('搜索:', searchTerm);
        }
    }
});

// 导航项点击效果
const navItems = document.querySelectorAll('.main-nav li');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // 移除其他项的active类
        navItems.forEach(i => i.classList.remove('active'));
        // 添加当前项的active类
        this.classList.add('active');
    });
}); 