//Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.9
}

//Total Stars
const starsTotal = 5;

//Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

//Form ELements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//Init product
let product;

//Product slect change   
productSelect.addEventListener('change', (e) => {
    product = e.target.value;

    //Eable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//Rating Control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    //Make sure 5 or under
    if (rating > 4) {
        alert('Please rate 1 -5');
        return;
    }

    //Chenge the ratings
    ratings[product] = rating;
    getRatings();
});

//Get Ratings
function getRatings() {
    for (let rating in ratings) {
        //Get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;

        //Round to nearest 10
        const starPercantageRounded = `${Math.round(starPercentage / 10) * 10}%`;


        //Set width of strs inner to percantage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercantageRounded;

        //Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}