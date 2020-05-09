const input = document.querySelector("input");
input.addEventListener("change", updateValue, false);
input.addEventListener("mousemove", updateValue, false);
function updateValue() {
    const percent = document.querySelector("span");
    percent.textContent = this.value;
    document.documentElement.style.setProperty("--light", this.value / 100);
    document.documentElement.style.setProperty("--glow", this.value / 3 + "px");
}
