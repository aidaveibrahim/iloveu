document.getElementById('signButton').addEventListener('click', function() {
    // Hide the contract popup
    document.getElementById('contractPopup').style.display = 'none';
    // Show the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
});

document.getElementById('celebrateBtn').addEventListener('click', function() {
    alert('Let\'s celebrate this special moment!');
});
