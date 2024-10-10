async function addHeaderAndFooter() {
    // Create the header element
    const header = document.createElement('header');
    // Create image and give attributes
    const image = document.createElement('img');
    image.src = 'https://www.spanishfork.org/_assets_/images/logo.png'; // Replace with the actual path to your image
    image.alt = 'Spanish Fork City Logo'; // Set an appropriate alternative text
    image.id = 'sflogo';

    const coc = document.createElement('h1');
    coc.id = "chamber_name";
    coc.innerHTML = "Spanish Fork Chamber of Commerce";
    

    // Append the elements to the header
    header.append(image);
    header.append(coc);


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