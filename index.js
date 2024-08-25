async function getCharacter() {
    try{
        const response = await fetch ("https://hp-api.onrender.com/api/characters");
        const datas = await response.json();
        datas.forEach(data => {
            const ul = document.getElementById('datas');
            const li = document.createElement('li');
            li.textContent = data.name;
            ul.appendChild(li)
            
        });
    }   catch (error) {
        console.log(error)
    }
    
}

