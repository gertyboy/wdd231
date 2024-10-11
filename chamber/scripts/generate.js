async function addHeaderAndFooter() {

    const body = document.body;

    // Create the header element
    async function addHeader() {
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
            { name: "home", url: "#" },
            { name: "directory", url: "https://gertyboy.github.io/wdd231/chamber/directory.html" },
            { name: "join", url: "#" },
            { name: "discover", url: "#" }
        ];
        nav.append(list);
        links.forEach((links) => {
            const listItem = document.createElement('li');
            const innerLink = document.createElement('a')
            const linkName = links.name;
            const linkUrl = links.url;
            innerLink.innerHTML = linkName;
            innerLink.href = linkUrl;
            listItem.append(innerLink)
            list.append(listItem)
            nav.append(list);
        })


        // Append the elements to the header
        header.append(image);
        header.append(coc);
        header.append(nav);

        body.prepend(header);

        addFooter()
    }


    async function addFooter() {

        const footer = document.createElement('footer');
        const list = document.createElement('ul');
        let lastModified = document.lastModified
        lastModified = "Last Update: " + lastModified
        const listItems = [
            {name: "Spanish Fork Chamber of Commerce"},
            {name: "40 S Main St"},
            {name: "Spanish Fork, UT 84660"},
            {name: "tho24052@byui.edu"},
            {name: "(801)-404-7912"},
            {name: "WDD231 Class Project"},
            {name: "Gerrit Thompson"},
            {name: "&copy 2024 Spanish Fork Chamber of Commerce"},
            {name: lastModified}
        ]
        listItems.forEach((listItems) => {
            const listItem = document.createElement('li');
            const linkName = listItems.name;
            listItem.innerHTML = linkName;
            list.append(listItem)
        })

        footer.append(list)

        body.append(footer);
    }

    addHeader()
}

// Call the function to add the header and footer
addHeaderAndFooter();