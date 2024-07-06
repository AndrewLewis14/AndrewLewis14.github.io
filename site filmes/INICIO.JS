// JavaScript para o carrossel de destaques
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// JavaScript para o formulário de enquete
function submitPoll() {
    let selectedOption = document.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        let pollResults = document.getElementById("pollResults");
        pollResults.innerHTML = `Você votou em: ${selectedOption.value}`;
    } else {
        alert("Por favor, selecione uma opção.");
    }
}

const pollResults = {
    "Filme 1": 0,
    "Filme 2": 0,
    "Filme 3": 0,
    "Filme 4": 0
};

function submitPoll() {
    const pollForm = document.getElementById('pollForm');
    const formData = new FormData(pollForm);
    const selectedMovie = formData.get('poll');

    if (selectedMovie) {
        pollResults[selectedMovie]++;
        updateResults();
    } else {
        alert('Por favor, selecione um filme para votar.');
    }
}

function updateResults() {
    const totalVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);
    const pollResultsDiv = document.getElementById('pollResults');

    pollResultsDiv.innerHTML = '';

    for (const [movie, votes] of Object.entries(pollResults)) {
        const percentage = totalVotes ? (votes / totalVotes * 100).toFixed(2) : 0;
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${movie}: ${percentage}%`;

        const resultBar = document.createElement('div');
        resultBar.className = 'result-bar';
        resultBar.style.width = `${percentage}%`;
        resultBar.textContent = `${votes} votos`;

        pollResultsDiv.appendChild(resultDiv);
        pollResultsDiv.appendChild(resultBar);
    }
}

