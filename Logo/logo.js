var correctLogo;
var correctCar;

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("dane_logo.php");
    const carData = await response.json();
    correctLogo = carData.logo;
    correctCar = carData.marka;
    console.log(correctCar, correctLogo);

    let zdj = document.getElementById("zdjecie");
    zdj.src = `../assety/logo/${correctLogo}`;
});


function clearInput(){
    document.getElementById("guess").value = ""
}

document.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        main();
    }
})

// dodanie marek do datalist
document.addEventListener('DOMContentLoaded', async () => {
    const modeleDB = document.getElementById('marki');
    const inputField = document.getElementById('guess');

    try {
        const odp = await fetch('input.php');
        let listaMarek = await odp.json();

        if (!Array.isArray(listaMarek)) {
            listaMarek = [listaMarek];
        }

        let markiInput = listaMarek.map(item => `${item.marka}`);

        modeleDB.innerHTML = ''; 

        markiInput.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            modeleDB.appendChild(option);
        });

        inputField.addEventListener('change', () => {
            if (!markiInput.includes(inputField.value)) {
                alert("Wybierz poprawny model z listy!");
                inputField.value = '';
            }
        });

    } catch (error) {
        modeleDB.innerHTML = "<option>Błąd ładowania danych</option>";
        console.error(error);
    }
});


function createComparisonResultDiv(guessedCar, isCorrectGuess) {
    var div = document.createElement("div");
    div.style.display = "flex";
    div.style.gap = "10px";
    div.style.height = "150px";
    div.style.width = "80%";
    div.style.backgroundColor = isCorrectGuess ? "green" : "red";
    div.style.marginTop = "15px";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.border = "2px solid gray";
    div.textContent = guessedCar
    div.style.justifyContent = "center"
    div.style.alignContent = "center"
    div.style.borderRadius = "10px"

    return div
}

function addResultToTop(div) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.prepend(div);
}

function main() {
    var input = document.getElementById("guess").value;
    var carBrand = correctCar
    
    if (input === "") {
        return alert("Pole nie może być puste.");
    }

    var isCorrect = input.toLowerCase() === carBrand.toLowerCase();
    
    var div = createComparisonResultDiv(input, isCorrect);
    addResultToTop(div);
    
    if (isCorrect) {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}
