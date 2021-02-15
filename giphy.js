const baseURL = 'https://api.giphy.com/v1/gifs/search';
const key = 'tpSTAuQNc6cR4BKHDpvvsoOUAEDjv8eS';
let url;

const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector("#submit");
const carousel = document.querySelector(".carousel-inner");
//const display = document.querySelector(".display");
searchForm.addEventListener("submit", fetchResults);



function fetchResults(e){
    console.log(e); 
    e.preventDefault(); 
    const term = searchTerm.value.replace(' ', '');
    url = `${baseURL}?api_key=${key}&q=${term}&limit=30&offset=5&rating=g&lang=en`;
    console.log(url);
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
    div.className = "carousel-item";
    let img = document.createElement("img");
    img.className = "d-block w-100";
    img.src = gif.data[i].images.fixed_width_small.url;

    carousel.appendChild(div);
    div.appendChild(img);
    }
};



