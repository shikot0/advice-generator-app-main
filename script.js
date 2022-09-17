const adviceButton = document.getElementById('advice-button');
const adviceOutput = document.getElementById('advice-text');
const adviceID = document.getElementById('advice-id'); 


adviceButton.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice', {
        cache: 'no-cache'
    })
    .then(response => response.json())
    .then(data => { 
        console.log(data) 
        adviceID.innerText = data.slip.id; 
        adviceOutput.innerText = data.slip.advice;   
    });        
})  