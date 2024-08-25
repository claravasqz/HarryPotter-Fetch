import {resetDisplay} from "./reset.js"; 

import{datas, getCharacter, checkMatch} from "./match.js"

document.getElementById("btn").addEventListener("click", checkMatch);

document.getElementById("characterInput").addEventListener("input", resetDisplay);