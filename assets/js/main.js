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
    var copyText = "bc1qpqleweelsj4zgklh72hg2dfdvppqs6lr62t8nu"
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}