// Array of snowflake types (can include different symbols)
const snowflakeTypes = ["🌸", "🌼", "🌺", "🌷"];
const maxSnowflakes = 100; // Maksimum kar tanesi sayısı

// Function to create snowflakes
function createSnowflake() {
    // Mevcut kar tanelerinin sayısını kontrol edin
    const currentSnowflakes = document.querySelectorAll('.snowflake').length;

    if (currentSnowflakes < maxSnowflakes) {
        const snowflake = document.createElement('div');
        
        // Choose a random snowflake type
        const snowflakeChar = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
        snowflake.classList.add('snowflake');
        snowflake.textContent = snowflakeChar;

        // Randomize position and properties
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 3 + 's';  // 3-6s animation duration
        snowflake.style.opacity = Math.random() * 0.8 + 0.2; // Opacity between 0.2 and 1
        snowflake.style.fontSize = Math.random() * 10 + 15 + 'px'; // Font size between 15px and 25px
        snowflake.style.color = '#fff';  // Keep all snowflakes white

        document.body.appendChild(snowflake);

        // Remove snowflake once animation is complete
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 200);
