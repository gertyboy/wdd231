const navigation = document.getElementById('navigation');
const bigDiv = document.getElementById('burgerClick')

bigDiv.addEventListener('click', () => {
    if (navigation.style.display == '' || navigation.style.display == 'none') {
        navigation.style.display = 'inline'
    } else {
        navigation.style.display = 'none'
    }
})