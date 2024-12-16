// !st
let readmore = document.getElementById("read-more");
let extracontent = document.getElementById("hidden");

readmore.ondblclick = () =>{
    if (extracontent.style.display==="none") {
        extracontent.style.display = "inline";
        readmore.textContent = "Read Less"
    }
    else{
        extracontent.style.display = "none";
        readmore.textContent = "Read More"
    }
}
// 2nd
let readmore1 = document.getElementById("read-more1");
let extracontent1 = document.getElementById("hidden1");


readmore1.onclick = () =>{
    if (extracontent1.style.display==="none") {
        extracontent1.style.display = "inline";
        readmore1.textContent = "Read Less"
    }
    else{
        extracontent1.style.display = "none";
        readmore1.textContent = "Read More"
    }
}

// 3rd
let readmore2 = document.getElementById("read-more2");
let extracontent2 = document.getElementById("hidden2");


readmore2.onclick = () =>{
    if (extracontent2.style.display==="none") {
        extracontent2.style.display = "inline";
        readmore2.textContent = "Read Less"
    }
    else{
        extracontent2.style.display = "none";
        readmore2.textContent = "Read More"
    }
}

// 4th
let readmore3 = document.getElementById("read-more3");
let extracontent3 = document.getElementById("hidden3");


readmore3.onclick = () =>{
    if (extracontent3.style.display==="none") {
        extracontent3.style.display = "inline";
        readmore3.textContent = "Read Less"
    }
    else{
        extracontent3.style.display = "none";
        readmore3.textContent = "Read More"
    }
}