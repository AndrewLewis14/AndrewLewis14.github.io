function showDetails(title, description) {
    alert(title + "\n" + description);
}

function submitPoll() {
    const options = document.getElementsByName("poll");
    let selectedOption = '';
    for (let option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }
    if (selectedOption) {
        document.getElementById("pollResults").innerText = `Você votou em: ${selectedOption}`;
    } else {
        alert("Por favor, selecione uma opção antes de votar.");
    }
}

// Carousel functionality
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Auto carousel
setInterval(() => {
    plusSlides(1);
}, 3000);
