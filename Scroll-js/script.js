const bar = document.querySelector("div");

window.addEventListener("scroll", statusBar, false);

function statusBar() {
    var currentScroll = Math.round(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
    );
    bar.style.width = currentScroll + "%";
}
