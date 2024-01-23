let installTrigger = false;

function leaveClone() {
    if (installTrigger === false) {
        alert('Warning! You are leaving the cloned website! Press the "Install Steam" button again to leave to store.steampowered.com');
        installTrigger = true;
    } else {
        window.location.href = "https://store.steampowered.com/about/"
    }
}
/* Make it so leaveClone() function will set a boolean to true, if boolean is true let the user leave */