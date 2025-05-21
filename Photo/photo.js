var correcrCarImage;
var correctCar;
var targetCar

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("api.php");
    const carData = await response.json();
    console.log(carData)
    correctCarImage = carData.zdjecia
    correctCar = `${carData.marka} ${carData.model}`;
    targetCar = {
        marka: carData.marka,
        model: carData.model,
    };

    let zdj = document.getElementById("zdjecie");
    zdj.src = `../assety/photo/${correctCarImage}`;
});

//niech sie uleży (odbiera dane z pliku php)

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

// tworzenie mini diva
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
    div.style.margin = "10px"
    div.style.borderRadius = "10px"
    
    return div;
}

// tworzenie diva
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
    div.style.borderRadius = "10px"

    const brandMatches = guessedCar.marka.toLowerCase() === targetCar.marka.toLowerCase();
    div.appendChild(createResultChild(guessedCar.marka, brandMatches));
    
    const modelMatches = guessedCar.model.toLowerCase() === targetCar.model.toLowerCase();
    div.appendChild(createResultChild(guessedCar.model, modelMatches));

    return div
}

// wyswietlanie diva od gory
function addResultToTop(div) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.prepend(div);
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


function main() {
    var x = document.getElementById("guess").value;
    var carBrand = correctCar
    
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
        
        if (isCorrect) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    });
}
