export function resetDisplay() {
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
    document.getElementById("houseImage").src = '';
    document.getElementById("cards").style.backgroundImage = '';
    document.getElementById("houseCard").style.height = '';
    document.getElementById("houseCard").style.background = '';
    document.getElementById("characterCard").style.background = '';
    document.getElementById("insideCards").style.background = '';
    document.getElementById("nameInput").style.background = '';
    document.getElementById("cards").style.boxShadow = '';
}