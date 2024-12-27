// Kar taneleri oluşturma fonksiyonu
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 saniye
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 10-20px

    document.body.appendChild(snowflake);

    // Kar tanesi animasyonu bittiğinde DOM'dan kaldır
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Belirli aralıklarla kar tanesi oluştur
setInterval(createSnowflake, 200);
