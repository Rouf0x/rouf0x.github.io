function clickHandler() {
    const audioLockElement = document.getElementById("audioLock");
    const audio = document.getElementById("backgroundMusic");
    const container = document.querySelector('.container');

    audioLockElement.classList.add('AudioLock-fadeOut');
    audio.play();
    
    audioLockElement.addEventListener('transitionend', () => audioLockElement.remove());

    if (!container.classList.contains('clicked')) {
        container.style.top = '50%';
        container.style.opacity = '1';
        container.classList.add('clicked');
        window.removeEventListener('click', clickHandler);
    }
}

function copyBTC() {
    var copyText = "bc1qpqleweelsj4zgklh72hg2dfdvppqs6lr62t8nu"
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
  }

window.addEventListener('click', clickHandler);