const html = document.getElementsByTagName("html");
const mode = document.getElementById("mode");
const header = document.getElementById("header");

// switch mode
mode.addEventListener("click", () => {
    const mode = html[0].getAttribute("data-bs-theme");
    if (mode === "light") {
        html[0].setAttribute("data-bs-theme", "dark");
        header.style.background = "#000";
    } else {
        html[0].setAttribute("data-bs-theme", "light");
        header.style.background = "#edf2fc";
    }
});