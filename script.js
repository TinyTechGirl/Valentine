let maybeButtonClicks = 0;

function handleMaybeClick() {
    maybeButtonClicks++;

    if (maybeButtonClicks === 1) {
        document.getElementById('yesButton').style.transform = 'scale(1.1)';
    } else if (maybeButtonClicks === 2) {
        document.getElementById('maybeButton').innerHTML = 'You have no choice';
        document.getElementById('maybeButton').style.pointerEvents = 'none'; // Disable further clicks
    }
}

function redirectToDancePage() {
    window.location.href = 'dance.html';
}

