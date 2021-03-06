const baseURL = 'https://api.giphy.com/v1/gifs/';
const key = 'tpSTAuQNc6cR4BKHDpvvsoOUAEDjv8eS';
let url;

const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector("#submit");
const carousel = document.querySelector(".carousel-inner");




fetch(`${baseURL}trending?api_key=${key}&limit=30&offset=5&rating=pg`)
    .then(response => response.json())
    .then(json => {
       
        displayResults2(json); 
        
    });
   
function displayResults2(gif2){
    console.log(gif2);
    for(let i = 0; i < gif2.data.length; i++){
    let div = document.createElement("div");
    if (i == 0){
        div.className = "carousel-item active";
    } else{
    div.className = "carousel-item"};
    let img = document.createElement("img");
    img.className = "d-block w-100";
    img.src = gif2.data[i].images.fixed_height.url;

    carousel.appendChild(div);
    div.appendChild(img);
    };
    
};


submitBtn.addEventListener("click", fetchResults);


function fetchResults(e){
    //console.log(e); 
    removeResults();
    e.preventDefault(); 
    const term = searchTerm.value.replace(' ', '');
    url = `${baseURL}search?api_key=${key}&q=${term}&limit=30&offset=5&rating=pg&lang=en`;
    //console.log(url); 

fetch(url)
    .then(response => response.json())
    .then(json => {
       
        displayResults(json); 
        
    });
   
};

function displayResults(gif){
    console.log(gif);
    for(let i = 0; i < gif.data.length; i++){
    let div = document.createElement("div");
    if (i == 0){
        div.className = "carousel-item active";
    } else{
    div.className = "carousel-item"};
    let img = document.createElement("img");
    img.className = "d-block w-100";
    img.src = gif.data[i].images.original.url;

    carousel.appendChild(div);
    div.appendChild(img);
    };
    
};
 

function removeResults (){
    
    carousel.innerHTML = "";
  
};