const Btn = document.getElementById("submit");
const Thanks = document.querySelector('.thanks');
const overlay = document.querySelector('overlay');
const rates = document.querySelector('.rates');
const closeBtn = document.getElementById('close');

var selectedRating = 0;

function rate(rating){
    selectedRating = rating;
    document.getElementById("num-selected").innerText = selectedRating;
    console.log(selectedRating);
    
    Btn.disabled = selectedRating === 0;
};

Btn.addEventListener("click", function(){
    if (selectedRating !== 0) {
        Thanks.style.display = "block";
        rates.style.display = 'none';
    }
});

closeBtn.addEventListener("click", function(){
    Thanks.style.display = "none";
    rates.style.display = 'block';
});