document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    document.body.appendChild(cursor);
    setTimeout(() => cursor.remove(), 300);
});

// تعديل الجزء الذي يضيف النجوم عند النقر
document.querySelector('.crow').addEventListener('click', (e) => {
    for (let i = 0; i < 100; i++) { // إضافة 50 نجمة عشوائية عند النقر
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${e.pageX + Math.random() * 500 - 50}px`;  // إضافة بعض التناثر
        star.style.top = `${e.pageY + Math.random() * 500 - 50}px`;   // إضافة بعض التناثر
        document.body.appendChild(star);
        
        // حذف النجمة بعد 2 ثانية
        setTimeout(() => star.remove(), 10000);
    }
});

const bgMusic = document.getElementById('background-music');

// إزالة كتم الصوت عند النقر على الشاشة
document.body.addEventListener('click', () => {
    bgMusic.muted = false;
    bgMusic.play();
});

// عرض الرسائل عند النقر على الغراب
function showMessage() {
    const message = document.querySelector('.message');
    const ending = document.querySelector('.ending');
    message.classList.add('visible');
    setTimeout(() => ending.classList.add('visible'), 2000);
}

// Background Music
const music = document.getElementById('background-music');
music.volume = 0.5;

// إضافة التأثيرات للنجوم الجديدة
const style = document.createElement('style');
style.innerHTML = `
.cursor {
    width: 10px;
    height:10px;
    background: white;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    animation: fadeOut 0.5s forwards;
}

@keyframes fadeOut {
    to {
        opacity: 0;
        transform: scale(1.5);
    }
}

.star {
    width: 20px;
    height: 20px;
    background: #ffffff;
    position: absolute;
    pointer-events: none;
    animation: starAnimation 2.5s ease-in-out forwards;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);  /* تأثير اللمعان */
}

@keyframes starAnimation {
    0% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
    50% {
        transform: scale(1.5) translateY(-30px);
        opacity: 0.8;
    }
    100% {
        transform: scale(0) translateY(-100px);
        opacity: 0;
    }
}

.heart {
    width: 20px;
    height: 20px;
    background: red;
    position: absolute;
    transform: scale(1);
    animation: float 2s ease-in-out forwards;
    clip-path: polygon(50% 0%, 100% 40%, 80% 100%, 50% 80%, 20% 100%, 0% 40%);
}

@keyframes float {
    to {
        transform: translateY(-50px) scale(1.5);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

