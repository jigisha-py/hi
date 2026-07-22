const button = document.getElementById("yg 1");
button.addEventListener("click", function () {
    message.style.display="block"; 

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});