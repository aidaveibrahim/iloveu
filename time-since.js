// İlişkinizin başlangıç tarihini buraya girin
const relationshipStartDate = new Date('2024-04-04T00:00:00');

function updateTimeSince() {
    const now = new Date();
    const elapsed = now - relationshipStartDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    const remainingDays = days % 365;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    const timeDisplay = document.getElementById('time-display');
    if (years > 0) {
        timeDisplay.textContent = `${years} yıl, ${remainingDays} gün, ${remainingHours} saat, ${remainingMinutes} dakika, ${remainingSeconds} saniye`;
    } else {
        timeDisplay.textContent = `${remainingDays} gün, ${remainingHours} saat, ${remainingMinutes} dakika, ${remainingSeconds} saniye`;
    }

    setTimeout(updateTimeSince, 1000);
}

// Sayfa yüklendiğinde zamanı güncellemeye başla
window.onload = updateTimeSince;
