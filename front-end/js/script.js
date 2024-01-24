let installTrigger = false;

function leaveClone() {
    if (installTrigger === false) {
        alert('Warning! You are leaving the cloned website! This is not part of the cloned project, and is here to add functionality to features of the website. Press the "Install Steam" button again to leave to store.steampowered.com');
        installTrigger = true;
    } else {
        window.location.href = "https://store.steampowered.com/about/"
    }
}