let datas = []; 

async function getCharacter() {
    try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        datas = await response.json();
    } catch (error) {
        console.log(error);
    }
}

getCharacter(); 

function checkMatch() {
    let userInput = document.getElementById("characterInput").value;
    let found = false;

    for (let i = 0; i < datas.length; i++) {
        if (datas[i].name.toLowerCase() === userInput.toLowerCase()) {
            document.getElementById("nameInput").innerText = datas[i].name;
            document.getElementById("dateInput").innerText = datas[i].dateOfBirth;
            document.getElementById("ancestryInput").innerText = datas[i].ancestry;
            document.getElementById("patronusInput").innerText = datas[i].patronus;
            document.getElementById("houseInput").innerText = datas[i].house;
            document.getElementById("woodInput").innerText =`Wood: ${datas[i].wand.wood}`;
            document.getElementById("coreInput").innerText = `Core: ${datas[i].wand.core}`;
            document.getElementById("lengthInput").innerText = `Length: ${datas[i].wand.length}cm`;
            document.getElementById("wandInput").innerText = 'Wand';
            document.getElementById("characterImage").src = datas[i].image;

            found = true;
            break; 
        }
    }

    if (!found) {
        document.getElementById("nameInput").innerText = "No match found.";
    }
}

function resetDisplay() {
    document.getElementById("nameInput").innerText = '';
    document.getElementById("dateInput").innerText = '';
    document.getElementById("ancestryInput").innerText = '';
    document.getElementById("patronusInput").innerText = '';
    document.getElementById("houseInput").innerText = '';
    document.getElementById("woodInput").innerText ='';
    document.getElementById("coreInput").innerText = '';
    document.getElementById("lengthInput").innerText = '';
    document.getElementById("wandInput").innerText = '';
    document.getElementById("characterImage").src = '';
}

document.getElementById("btn").addEventListener("click", checkMatch);

document.getElementById("characterInput").addEventListener("input", resetDisplay);