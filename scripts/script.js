const currentYear = document.getElementById("currentyear")
const lastUpdated = document.getElementById("last-updated")

currentYear.innerHTML = "&copy 2024 - Gerrit Thompson - Rexburg, Idaho, United States of America"

const lastModified = document.lastModified;

lastUpdated.innerHTML = "Last Update: " + lastModified


const menu = document.getElementById("menu")

menu.addEventListener('click', () => {
    const navigation = document.getElementById("navigation")
    if (navigation.classList.contains("mobile_hidden")) {
        navigation.classList.remove("mobile_hidden")
    } else {
        navigation.classList.add("mobile_hidden")
    }

})