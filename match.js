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
        if (datas[i].name.toLowerCase() === userInput.toLowerCase() && datas[i].house === "Gryffindor") {
            document.getElementById("nameInput").innerText = datas[i].name;
            document.getElementById("dateInput").innerText = datas[i].dateOfBirth;
            document.getElementById("ancestryInput").innerText = `Ancestry: ${datas[i].ancestry}`;
            document.getElementById("patronusInput").innerText = `Patronus: ${datas[i].patronus}`;
            document.getElementById("houseInput").innerText = `House: ${datas[i].house}`;
            document.getElementById("woodInput").innerText =`Wood: ${datas[i].wand.wood}`;
            document.getElementById("coreInput").innerText = `Core: ${datas[i].wand.core}`;
            document.getElementById("lengthInput").innerText = `Length: ${datas[i].wand.length}cm`;
            document.getElementById("wandInput").innerText = 'Wand';
            document.getElementById("characterImage").src = datas[i].image;
            document.getElementById("houseImage").src = "https://1000logos.net/wp-content/uploads/2021/11/Gryffindor-Logo.png";
            document.getElementById("cards").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgwsg-BUW-xNObmGvJ2nPJxu7X2ddeBBzqw&s')";
            document.getElementById("houseCard").style.background = "radial-gradient(circle at bottom left, #740001, #ae0001, #eeba30, #d3a625)";
            document.getElementById("houseCard").style.height = "370px";
            document.getElementById("insideCards").style.background = "#deb887e7";
            document.getElementById("cards").style.opacity = "10";
            document.getElementById("insideCards").style.opacity = "10";
            document.getElementById("characterCard").style.background = "#740001";
            document.getElementById("cards").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("characterCard").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("houseCard").style.boxShadow = "10px 10px 5px #0000009a";

            found = true;
            break; 
        }

        if (datas[i].name.toLowerCase() === userInput.toLowerCase() && datas[i].house === "Ravenclaw") {
            document.getElementById("nameInput").innerText = datas[i].name;
            document.getElementById("dateInput").innerText = datas[i].dateOfBirth;
            document.getElementById("ancestryInput").innerText = `Ancestry: ${datas[i].ancestry}`;
            document.getElementById("patronusInput").innerText = `Patronus: ${datas[i].patronus}`;
            document.getElementById("houseInput").innerText = `House: ${datas[i].house}`;
            document.getElementById("woodInput").innerText =`Wood: ${datas[i].wand.wood}`;
            document.getElementById("coreInput").innerText = `Core: ${datas[i].wand.core}`;
            document.getElementById("lengthInput").innerText = `Length: ${datas[i].wand.length}cm`;
            document.getElementById("wandInput").innerText = 'Wand';
            document.getElementById("characterImage").src = datas[i].image;
            document.getElementById("houseImage").src = "https://logos-world.net/wp-content/uploads/2022/11/Ravenclaw-Symbol.png";
            document.getElementById("houseCard").style.background = "radial-gradient(circle at bottom left, #0e1a40, 	#222f5b, #5d5d5d, 	#946b2d)";
            document.getElementById("insideCards").style.background = "#deb887e7";
            document.getElementById("characterCard").style.background = "#0e1a40";
            document.getElementById("cards").style.backgroundImage = "url('https://garden.spoonflower.com/c/13520168/p/f/m/4RtFpGsuvxS1h7wbEMDyaM9qVK9I8wHdUpt3E61HFMmfsf4AIH-rzEI/Raven%20House%20Argyle%20Blue%20and%20Silver%20movie%20version.jpg')";
            document.getElementById("houseCard").style.height = "370px";
            document.getElementById("cards").style.opacity = "10";
            document.getElementById("insideCards").style.opacity = "10";
            document.getElementById("cards").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("characterCard").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("houseCard").style.boxShadow = "10px 10px 5px #0000009a";
            found = true;
            break; 
        }

        if (datas[i].name.toLowerCase() === userInput.toLowerCase() && datas[i].house === "Slytherin") {
            document.getElementById("nameInput").innerText = datas[i].name;
            document.getElementById("dateInput").innerText = datas[i].dateOfBirth;
            document.getElementById("ancestryInput").innerText = `Ancestry: ${datas[i].ancestry}`;
            document.getElementById("patronusInput").innerText = `Patronus: ${datas[i].patronus}`;
            document.getElementById("houseInput").innerText = `House: ${datas[i].house}`;
            document.getElementById("woodInput").innerText =`Wood: ${datas[i].wand.wood}`;
            document.getElementById("coreInput").innerText = `Core: ${datas[i].wand.core}`;
            document.getElementById("lengthInput").innerText = `Length: ${datas[i].wand.length}cm`;
            document.getElementById("wandInput").innerText = 'Wand';
            document.getElementById("characterImage").src = datas[i].image;
            document.getElementById("houseImage").src = "https://logos-world.net/wp-content/uploads/2022/02/Slytherin-Symbol.png";
            document.getElementById("houseCard").style.background = "radial-gradient(circle at bottom left, #1a472a, 	#2a623d, #5d5d5d, 	#aaaaaa)";
            document.getElementById("characterCard").style.background = "#1a472a";
            document.getElementById("insideCards").style.background = "#deb887e7";
            document.getElementById("cards").style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a7b6600-550d-42df-afe0-f6c9d3e740f0/d479hz9-07774201-cf2b-4405-8d7d-de43011932b2.png/v1/fill/w_900,h_563,q_80,strp/slytherin_wallpaper_by_tashab07_d479hz9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvOGE3YjY2MDAtNTUwZC00MmRmLWFmZTAtZjZjOWQzZTc0MGYwXC9kNDc5aHo5LTA3Nzc0MjAxLWNmMmItNDQwNS04ZDdkLWRlNDMwMTE5MzJiMi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bpIr-iFPAxNzshv_CtIm3N5ZwLwXzryYe_kfnTo7g-w')";
            document.getElementById("houseCard").style.height = "370px";
            document.getElementById("cards").style.opacity = "10";
            document.getElementById("insideCards").style.opacity = "10";
            document.getElementById("cards").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("characterCard").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("houseCard").style.boxShadow = "10px 10px 5px #0000009a";

            found = true;
            break; 
        }

        if (datas[i].name.toLowerCase() === userInput.toLowerCase() && datas[i].house === "Hufflepuff") {
            document.getElementById("nameInput").innerText = datas[i].name;
            document.getElementById("dateInput").innerText = datas[i].dateOfBirth;
            document.getElementById("ancestryInput").innerText = `Ancestry: ${datas[i].ancestry}`;
            document.getElementById("patronusInput").innerText = `Patronus: ${datas[i].patronus}`;
            document.getElementById("houseInput").innerText = `House: ${datas[i].house}`;
            document.getElementById("woodInput").innerText =`Wood: ${datas[i].wand.wood}`;
            document.getElementById("coreInput").innerText = `Core: ${datas[i].wand.core}`;
            document.getElementById("lengthInput").innerText = `Length: ${datas[i].wand.length}cm`;
            document.getElementById("wandInput").innerText = 'Wand';
            document.getElementById("characterImage").src = datas[i].image;
            document.getElementById("houseImage").src = "https://1000logos.net/wp-content/uploads/2023/08/Hufflepuff-Logo.png";
            document.getElementById("houseCard").style.background = "radial-gradient(circle at bottom left, #ecb939, #f0c75e, #726255, 	#372e29)";
            document.getElementById("characterCard").style.background = "#ecb939";
            document.getElementById("insideCards").style.background = "#deb887e7";
            document.getElementById("cards").style.backgroundImage = "url('https://i.pinimg.com/736x/1e/77/9e/1e779e50696c46e5f69e3ccf03accc8d.jpg')";
            document.getElementById("houseCard").style.height = "370px";
            document.getElementById("cards").style.opacity = "10";
            document.getElementById("insideCards").style.opacity = "10";
            document.getElementById("cards").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("characterCard").style.boxShadow = "10px 10px 5px #0000009a";
            document.getElementById("houseCard").style.boxShadow = "10px 10px 5px #0000009a";

            found = true;
            break; 
        }
    }

    if (!found) {
        document.getElementById("nameInput").innerText = `No match found. Ex: Harry Potter, Severus Snape, Cho Chang`;
        document.getElementById("nameInput").style.background = "#764522";
    }
}

