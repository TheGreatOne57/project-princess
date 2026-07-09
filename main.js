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
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));

// ❤️ Our Journey Counter

const startDate = new Date("2026-06-27T00:00:00");

function updateLoveCounter() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateLoveCounter();

setInterval(updateLoveCounter,1000);