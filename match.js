export let datas = []; 


export async function getCharacter() {
    try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        datas = await response.json();
    } catch (error) {
        console.log(error);
    }
}

getCharacter(); 

export function checkMatch() {
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

