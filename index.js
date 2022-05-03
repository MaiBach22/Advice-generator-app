
const advice_ID = document.getElementById("numberID")
const quote = document.getElementById("quote")
const btn = document.getElementById("button")

function adviceGenerate(){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
    .then(res => res.json())
    .then (data => {
        advice_ID.innerText = data['slip']['id']
        quote.innerText = '"' + data['slip']['advice'] + '"'
    })

}

btn.addEventListener("click" , adviceGenerate);
adviceGenerate();
