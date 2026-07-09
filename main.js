const button = document.getElementById("beginButton");

button.addEventListener("click", () => {

    document.getElementById("chapter-one")
        .scrollIntoView({
            behavior: "smooth"
        });

});
const openButton = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const envelope = document.getElementById("envelope");

openButton.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.classList.remove("hidden");

});