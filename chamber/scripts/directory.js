const url = 'https://gertyboy.github.io/wdd231/chamber/members.json';
const cards = document.querySelector("#cards");



async function getBusinessData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.businesses)
        displayBusinesses(data.businesses);




    } catch (error) {
        console.error('Error fetching data:', error);
    }
}




const displayBusinesses = (businesses) => {

    businesses.forEach((business) => {
        // Create elements to add to the div.cards element
        const card = document.createElement('section');
        const businessName = document.createElement('h2'); // fill in the blank
        const firstp = document.createElement('p')
        const secondp = document.createElement('p')
        const thirdp = document.createElement('a')
        const portrait = document.createElement('img');
        portrait.setAttribute('src', business.imageurl);
        portrait.setAttribute('alt', `Picture of ${business.name}`)
        card.append(portrait);
        businessName.innerHTML = business.name;
        card.append(businessName);
        firstp.innerHTML = business.address
        card.append(firstp)
        secondp.innerHTML = business.number
        card.append(secondp)
        thirdp.innerHTML = business.url
        card.append(thirdp)
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


getBusinessData(url);
