// Random background color changer
document.getElementById("colorBtn").addEventListener("click", function () {
    const colors = ["#ff9a9e", "#a1c4fd", "#fbc2eb", "#c1dfc4", "#fad0c4", "#fccb90"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
