document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo ScrollReveal
    const sr = ScrollReveal({
        distance: '40px',
        duration: 1200,
        easing: 'cubic-bezier(.25,.46,.45,.94)', // Tinh chỉnh hiệu ứng
        reset: false // Chỉ chạy animation một lần
    });

    // 2. Hiệu ứng cho phần Introduction/Mục đích
    sr.reveal('#tongquan .card', { origin: 'bottom', scale: 0.9 });
    sr.reveal('#tongquan h4', { interval: 100, origin: 'left' });
    sr.reveal('#tongquan .list-group-item', { interval: 150, origin: 'left' });

    // 3. Hiệu ứng cho Tiêu điểm
    sr.reveal('#tiemdiem .card', { origin: 'right', delay: 200 });

    // 4. Hiệu ứng cho Timeline (Vòng loại & Chung kết)
    sr.reveal('.timeline-card', { 
        origin: 'top', 
        interval: 300, 
        scale: 0.95
    });

    // 5. Hiệu ứng cho Thể lệ/Nội dung
    sr.reveal('#thele .card', { origin: 'bottom', scale: 0.9 });
    sr.reveal('#thele .list-unstyled li', { interval: 100, origin: 'left', delay: 400 });

    // 6. Hiệu ứng cho Giải thưởng
    sr.reveal('.prize-box', { 
        interval: 150, 
        origin: 'bottom', 
        rotate: { z: 10 } 
    });
    sr.reveal('.alert-info', { origin: 'top', scale: 0.8, delay: 800 });
    
    // 7. Hiệu ứng cho Album Ảnh
    sr.reveal('#album img', { 
        interval: 150, 
        origin: 'top', 
        distance: '60px',
        delay: 200
    });

    // 8. Hiệu ứng cho Footer (Nếu chưa dùng Animate.css)
    sr.reveal('footer', { origin: 'bottom', distance: '20px', delay: 100 });
});

// Fix: Override Animate.css initial hidden state when ScrollReveal is active
// The Animate.css classes were added to the HTML for fallback, but ScrollReveal will handle visibility.
// For elements where you only want Animate.css, remove the `visibility: hidden;` from style.css.
// Since ScrollReveal handles the reveal, we can remove the `animate__animated` class from elements 
// intended to be controlled by ScrollReveal, or set `reset: true` if you want them to repeat.