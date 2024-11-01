const ad1 = document.getElementById('ad1');
const ad2 = document.getElementById('ad2');

const url = 'https://gertyboy.github.io/wdd231/chamber/members.json';



async function getMembers(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCards(data)




    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayCards(data) {
    console.log(data.businesses) 
    data.forEach(businesses => {
        if (businesses.memberLevel == 1){

        }
    });
    const premiumMembers = data.businesses
    console.log(premiumMembers)
}

getMembers(url)



//const member1 = 