// Создание снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Создание новогодних огоньков
function createChristmasLights() {
    const lights = document.createElement('div');
    lights.classList.add('christmas-lights');
    document.body.appendChild(lights);
}

// Запуск новогодних эффектов
document.addEventListener('DOMContentLoaded', function() {
    // Создаем огоньки
    createChristmasLights();
    
    // Создаем снежинки каждые 100ms
    setInterval(createSnowflake, 100);
    
    // Новогоднее приветствие в консоли
    console.log('🎄 С Новым Годом от NekoHub! 🎅');
    
    // Добавляем новогодний звук при клике (опционально)
    document.addEventListener('click', function() {
        // Можно добавить звук колокольчиков или новогодней музыки
    });
});

// Новогодний таймер
function updateNewYearTimer() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    console.log(`🎄 До Нового ${newYear.getFullYear()} года: ${days}д ${hours}ч ${minutes}м ${seconds}с 🎅`);
}

// Обновляем таймер каждую секунду
setInterval(updateNewYearTimer, 1000);