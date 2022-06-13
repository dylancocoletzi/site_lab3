//Global Constants
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H'
const limit = 9
const rating = "g"

const gifForm = document.querySelector("form")
const buttonClicker = document.getElementById("clicker")
const gifArea = document.getElementById("gifResult")

function handleFormSubmit(ev){
    gifArea.innerHTML = "";
    getResult(ev)
}

function displayResults(gifData){
    // for(let i = 0; i < gifData.data.length;i++){
    //     gifArea.innerHTML += `
    //     <img src=${gifData.data[i].images.original.url}>
    // `
    // }
    gifData.data.forEach(function(element, idx){
        console.log("element", element);
    gifArea.innerHTML += '<img src="'+element.images.original.url+'" width=200 height=200>';

    });
    // gifArea.innerHTML += `
    //     <img src=${gifData.data[0].images.original.url}>
    // `
}

async function getResult(ev){
    ev.preventDefault()
    let userInput = document.getElementById("inputHolder").value
    let apiUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&q=' + userInput;
    console.log("input", userInput);
    console.log(11, apiUrl)
    let response = await fetch(apiUrl);
    console.log(response);
    let responseData = await response.json();
    console.log(responseData);
    displayResults(responseData);
}

gifForm.addEventListener("submit", handleFormSubmit);

