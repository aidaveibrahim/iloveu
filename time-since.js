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
        timeDisplay.textContent = `${years} ${currentLangTimeUnits.year}, ${remainingDays} ${currentLangTimeUnits.day}, ${remainingHours} ${currentLangTimeUnits.hour}, ${remainingMinutes} ${currentLangTimeUnits.minute}, ${remainingSeconds} ${currentLangTimeUnits.second}`;
    } else {
        timeDisplay.textContent = `${remainingDays} ${currentLangTimeUnits.day}, ${remainingHours} ${currentLangTimeUnits.hour}, ${remainingMinutes} ${currentLangTimeUnits.minute}, ${remainingSeconds} ${currentLangTimeUnits.second}`;
    }

    setTimeout(updateTimeSince, 1000);
}

// Sayfa yüklendiğinde zamanı güncellemeye başla
window.onload = updateTimeSince;
