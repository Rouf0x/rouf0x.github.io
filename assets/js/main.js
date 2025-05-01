document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

function playVideo() {
        var video = document.querySelector('video');
        video.play();
        const element = document.getElementById("enter");
        element.remove();
        const container = document.querySelector('.container');
        container.style.top = '50%';
        container.style.opacity = '1';
        container.classList.add('clicked');
        console.debug("clicked");
}
function copyBTC() {
    var copyText = "bc1q34vxe80tt8zp8la3pr2dj4veamrkufhwu4lty2"
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}
