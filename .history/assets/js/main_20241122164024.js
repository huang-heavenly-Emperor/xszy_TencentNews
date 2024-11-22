// 简化后的JS，只保留基本交互
document.addEventListener('DOMContentLoaded', function() {
    // 登录按钮点击事件
    document.querySelector('.login').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('登录按钮被点击');
    });

    // 导航链接点击事件
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('导航链接被点击:', this.textContent);
        });
    });
}); 