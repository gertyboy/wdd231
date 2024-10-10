async function addHeaderAndFooter() {

    // Create the header element
    const header = document.createElement('header');

    // Create image and give attributes
    const image = document.createElement('img');
    image.src = 'https://www.spanishfork.org/_assets_/images/logo.png'; // Replace with the actual path to your image
    image.alt = 'Spanish Fork City Logo'; // Set an appropriate alternative text
    image.id = 'sflogo';

    //Create chamber of commerce
    const coc = document.createElement('h1');
    coc.id = "chamber_name";
    coc.innerHTML = "Spanish Fork Chamber of Commerce";

    //Create table of contents
    const nav = document.createElement('nav');
    const list = document.createElement('ul');
    const links = [
        {name: "home", url: "#"},
        {name: "directory", url: "https://gertyboy.github.io/wdd231/chamber/directory.html"},
        {name: "join", url: "#"},
        {name: "discover", url: "#"}
    ];
    nav.append(list);
    links.forEach((links) => {
        const listItem = document.createElement('li');
        const innerLink = document.createElement('a')
        const linkName = links.name;
        const linkUrl = links.url;
        listItem.append()
        listItem.innerHTML = linkName;
        listItem.href = linkUrl;
        nav.append(listItem);
    })
    

    // Append the elements to the header
    header.append(image);
    header.append(coc);
    header.append(nav);



    // Create the footer element
    const footer = document.createElement('footer');
    footer.textContent = 'This is the footer';

    // Get the body element
    const body = document.body;

    // Prepend the header to the body
    body.prepend(header);

    // Append the footer to the body
    body.append(footer);
}

// Call the function to add the header and footer
addHeaderAndFooter();