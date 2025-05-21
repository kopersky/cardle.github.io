let rand;
let targetCar;

document.addEventListener("DOMContentLoaded", async () => {
    const carInfoDiv = document.getElementById("results");
    
    const resultsContainer = document.getElementById("results");
    resultsContainer.style.maxHeight = "400px";
    resultsContainer.style.overflowY = "auto";
    
    const container = document.querySelector('.container');
    container.style.transform = "translateY(0)";

    try {
        const response = await fetch("api.php");
        const carData = await response.json();

        if (carData.error) {
            carInfoDiv.textContent = carData.error;
        } else {
            rand = [carData.marka, carData.model, carData.rok_produkcji, carData.typ_nadwozia, carData.kraj];
            targetCar = {
                marka: carData.marka,
                model: carData.model,
                rok_produkcji: carData.rok_produkcji,
                typ_nadwozia: carData.typ_nadwozia,
                kraj: carData.kraj
            };
            console.log(rand);
        }
    } catch (error) {
        carInfoDiv.textContent = "Błąd podczas ładowania danych.";
        console.error(error);
    }
});

function main() {
    var x = document.getElementById("guess").value;
    var carBrand = rand[0] + ' ' + rand[1];
    
    if (x === "") {
        return alert("Pole nie może być puste.");
    }

    findCarDetails(x).then(guessedCar => {
        if (!guessedCar) {
            return alert("Wybierz poprawny model z listy!");
        }

        var isCorrect = x.toLowerCase() === carBrand.toLowerCase();
        
        var div = createComparisonResultDiv(guessedCar, isCorrect);
        addResultToTop(div);
        
        document.getElementById('guess').focus();
        
        if (isCorrect) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    });
}

async function findCarDetails(carFullName) {
    try {
        const [brand, ...modelParts] = carFullName.split(' ');
        const model = modelParts.join(' ');
        
        const response = await fetch('get_all_cars.php');
        const cars = await response.json();
        
        return cars.find(car => 
            car.marka.toLowerCase() === brand.toLowerCase() && 
            car.model.toLowerCase() === model.toLowerCase()
        );
    } catch (error) {
        console.error("Error finding car details:", error);
        return null;
    }
}

function createResultChild(data, isMatching) {
    var div = document.createElement("div");
    div.style.height = "90%";
    div.style.width = "20%";
    div.textContent = data;
    div.style.backgroundColor = isMatching ? "lightgreen" : "pink";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.border = "1px solid black";
    div.style.margin = "10px";
    div.style.borderRadius = "10px";
    div.style.padding = "5px";
    div.style.textOverflow = "ellipsis";
    div.style.overflow = "hidden";
    div.style.boxSizing = "border-box";
    div.style.textAlign = "center";
    
    return div;
}

function createComparisonResultDiv(guessedCar, isCorrectGuess) {
    var div = document.createElement("div");
    div.style.display = "flex";
    div.style.gap = "10px";
    div.style.height = "120px";
    div.style.width = "80%";
    div.style.backgroundColor = isCorrectGuess ? "green" : "red";
    div.style.marginTop = "15px";
    div.style.marginBottom = "15px";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.border = "2px solid gray";
    div.style.borderRadius = "10px";
    div.style.minHeight = "120px";
    div.style.boxSizing = "border-box";
    
    const brandMatches = guessedCar.marka.toLowerCase() === targetCar.marka.toLowerCase();
    div.appendChild(createResultChild(guessedCar.marka, brandMatches));
    
    const modelMatches = guessedCar.model.toLowerCase() === targetCar.model.toLowerCase();
    div.appendChild(createResultChild(guessedCar.model, modelMatches));
    
    const yearMatches = guessedCar.rok_produkcji === targetCar.rok_produkcji;
    div.appendChild(createResultChild(guessedCar.rok_produkcji, yearMatches));

    const bodyTypeMatches = guessedCar.typ_nadwozia.toLowerCase() === targetCar.typ_nadwozia.toLowerCase();
    div.appendChild(createResultChild(guessedCar.typ_nadwozia, bodyTypeMatches));

    const countryMatches = guessedCar.kraj.toLowerCase() === targetCar.kraj.toLowerCase();
    div.appendChild(createResultChild(guessedCar.kraj, countryMatches))

    return div;
}

function clearInput() {
    document.getElementById('guess').value = '';
}

function addResultToTop(div) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.prepend(div);
    const container = document.querySelector('.container');
    container.style.transform = "translateY(0)";
}

document.addEventListener('DOMContentLoaded', async () => {
    const modeleDB = document.getElementById('modele');
    const inputField = document.getElementById('guess');

    try {
        const odp = await fetch('input.php');
        let modelelista = await odp.json();

        if (!Array.isArray(modelelista)) {
            modelelista = [modelelista];
        }

        let modeleinput = modelelista.map(item => `${item.marka} ${item.model}`);

        modeleDB.innerHTML = ''; 

        modeleinput.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            modeleDB.appendChild(option);
        });

        inputField.addEventListener('change', () => {
            if (!modeleinput.includes(inputField.value)) {
                alert("Wybierz poprawny model z listy!");
                inputField.value = '';
            }
        });

    } catch (error) {
        modeleDB.innerHTML = "<option>Błąd ładowania danych</option>";
        console.error(error);
    }
});

function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("but").click();
    }
}