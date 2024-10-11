const url = 'https://gertyboy.github.io/wdd231/chamber/members.json';
const cards = document.querySelector("#cards");



async function getBusinessData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayBusinesses(data);




    } catch (error) {
        console.error('Error fetching data:', error);
    }
}




const displayBusinesses = (businesses) => {
    
        businesses.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let businessName = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');

//        console.log(business.imageUrl)
//      portrait.url = business.imageUrl;
        portrait.setAttribute('src', business.imageurl);
        card.append(portrait);
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


getBusinessData(url);
