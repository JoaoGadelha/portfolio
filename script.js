
// adds underline of navbar when window scrolls over 100 vh
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > $(window).height() - 100) {
            var imageUrl = "img/showcase.jpg";
            $(".navbar").css("background", 'url(' + imageUrl + ')');
            $(".navbar").css("border-bottom", "solid #FFBC00 4px");
        } else {
            $(".navbar").css("background", "none");
            $(".navbar").css("border-bottom", "none");
        }
    })
})


//  updates navbar items

const updateNavItemsCurrent = (elem) => {
    let current = document.getElementsByClassName('navItem current');
    current[0].className = 'navItem';
    elem.className = 'navItem current'

}

// Open a project window when a project is clicked


let closing = false;

const hideWrapper = () => {
    if (closing) {
        let projWinWrapper = document.getElementsByClassName('project-window-wrapper');
        projWinWrapper[0].style.zIndex = '-100';
    }
}

const openProjectWindow = () => {
    let projWin = document.getElementsByClassName('project-window close');
    projWin[0].className = 'project-window';

    let projWinWrapper = document.getElementsByClassName('project-window-wrapper');
    projWinWrapper[0].style.zIndex = '200';

    projWinWrapper[0].removeEventListener('transitionend', hideWrapper());

    closing = true;
}

const closeProjectWindow = () => {

    let projWin = document.getElementsByClassName('project-window');
    projWin[0].className = 'project-window close';

    let projWinWrapper = document.getElementsByClassName('project-window-wrapper');
    projWinWrapper[0].addEventListener('transitionend', hideWrapper());
    closing = false;

}

// Populates project window


let projectsObj =
{
    react: {
        item1: {
            title: 'E-commerce Homepage',
            img: 'img/items/react/item1.png',
            desc: 'React app based on the RainForest API. Consists of the homepage of a e-commerce website. It displays a search bar, login and sign up buttons, a shopping car button, a categories section, 4 carousels with products, one of them features a deadline countdown timer, for the end of the displayed promotion. Also,  a container with random products is displayed with a "Show more products" button, which loads another set of random products into the home page. The page ends with the footer, which displays contact information and several links for potential partners.  ',
            url: 'https://joaoricardotg-reactecommerce.netlify.app',
            github: 'https://github.com/JoaoGadelha/ReactECommerce'
        },
        item2: {
            title: 'Recipe Finder',
            img: 'img/items/react/item2.png',
            desc: 'React app based on the Spoonacular API that presents recipes of any kind of food. The initial interface displays a button to perform a recipe search and another to update the page with random recipes. After a recipe is clicked, the page is routed to a secondary page, where a image of the finished dish and the steps for the recipe are displayed.',
            url: 'https://joaoricardotg-recipefinder.netlify.app',
            github: 'https://github.com/JoaoGadelha/RecipeFinder'
        },
        item3: {
            title: 'Weather Finder',
            img: 'img/items/react/item3.png',
            desc: 'React app based on the OpenWeather API. Displays one page with a input textfield and a search button, returning information about the weather, wind speed and temperature.',
            url: 'https://joaoricardotg-weatherfinder.netlify.app',
            github: 'https://github.com/JoaoGadelha/WeatherFinder'
        }
    },
    static: {
        item1: {
            title: 'NewsGrid',
            img: 'img/items/static/item1.png',
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the home page of a news website, with one article being placed in a big showcase, while other texts are published in a CSS grid.',
            url: 'https://joaoricardotg-newsgrid.netlify.app',
            github: 'https://github.com/JoaoGadelha/NewsGrid'
        },
        item2: {
            title: 'EdgeLedger',
            img: 'img/items/static/item2.png',
            desc: 'Site built with pure HTML, CSS and Javascript, it opens with a hero section, followed by a "What We Do", "Who We Are" and "Our clients" section. A contact form and geolocation feed by Google Maps API is displayed in the end of the page.',
            url: 'https://joaoricardotg-edgeledger.netlify.app',
            github: 'https://github.com/JoaoGadelha/EdgeLedger'
        },
        item3: {
            title: 'ACMEHost',
            img: 'img/items/static/item3.png',
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the website for a web design agency with a Home, About and Services pages.',
            url: 'https://joaoricardotg-acmehost.netlify.app',
            github: 'https://github.com/JoaoGadelha/firstSite'
        },
        item4: {
            title: 'E-commerce Homepage',
            img: 'img/items/static/item4.png',
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the homepage of a e-commerce website. It opens with a hero section with a carousel. A section leading to a acessories, meet the team and new arrivals pages follows up after that. A grid displaying products is placed before a teaser footer.',
            url: 'https://joaoricardotg-ecommerce.netlify.app',
            github: 'https://github.com/JoaoGadelha/Ecommerce'
        },
        item5: {
            title: 'HotelBT',
            img: 'img/items/static/item5.png',
            desc: 'Site built with pure HTML, CSS and Javascript, displays a home, about and contact pages.',
            url: 'https://joaoricardotg-hotelbt.netlify.app',
            github: 'https://github.com/JoaoGadelha/HotelBT'
        }
    }
}

let projectWindow;
let projectTitle;
let projectImg;
let projectCont;
let projectGrid;
let projectBtn;

const populateWindow = (elem) => {
    projectWindow = document.getElementsByClassName('project-window-title');
    projectTitle = projectWindow[0].children[0];
    projectCont = document.getElementsByClassName('project-content');
    projectGrid = document.getElementsByClassName('project-grid');
    projectBtn = document.getElementsByClassName('project-btn');
    if (elem.parentElement.className.search('react') >= 0) {
       
        if (elem.className.search('item1') >= 0) {
            projectTitle.innerHTML = projectsObj.react.item1.title;
            projectCont[0].children[0].innerHTML = projectsObj.react.item1.desc;
            projectGrid[0].children[0].src = projectsObj.react.item1.img;
            projectBtn[0].children[0].href = projectsObj.react.item1.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.react.item1.github;
            projectBtn[0].children[1].target = '_blank';
        } else if (elem.className.search('item2') >= 0) {
            projectTitle.innerHTML = projectsObj.react.item2.title;
            projectCont[0].children[0].innerHTML = projectsObj.react.item2.desc;
            projectGrid[0].children[0].src = projectsObj.react.item2.img;
            projectBtn[0].children[0].href = projectsObj.react.item2.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.react.item2.github;
            projectBtn[0].children[1].target = '_blank';
        } else if (elem.className.search('item3') >= 0) {
            projectTitle.innerHTML = projectsObj.react.item3.title;
            projectCont[0].children[0].innerHTML = projectsObj.react.item3.desc;
            projectGrid[0].children[0].src = projectsObj.react.item3.img;
            projectBtn[0].children[0].href = projectsObj.react.item3.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.react.item3.github;
            projectBtn[0].children[1].target = '_blank';
        } else {
            console.log('not found');
        }

    } else if (elem.parentElement.className.search('static') >= 0) {
        
        if (elem.className.search('item1') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item1.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item1.desc;
            projectGrid[0].children[0].src = projectsObj.static.item1.img;
            projectBtn[0].children[0].href = projectsObj.static.item1.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.static.item1.github;
            projectBtn[0].children[1].target = '_blank';
        } else if (elem.className.search('item2') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item2.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item2.desc;
            projectGrid[0].children[0].src = projectsObj.static.item2.img;
            projectBtn[0].children[0].href = projectsObj.static.item2.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.static.item2.github;
            projectBtn[0].children[1].target = '_blank';
        } else if (elem.className.search('item3') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item3.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item3.desc;
            projectGrid[0].children[0].src = projectsObj.static.item3.img;
            projectBtn[0].children[0].href = projectsObj.static.item3.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.static.item3.github;
            projectBtn[0].children[1].target = '_blank';
        } else if (elem.className.search('item4') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item4.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item4.desc;
            projectGrid[0].children[0].src = projectsObj.static.item4.img;
            projectBtn[0].children[0].href = projectsObj.static.item4.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.static.item4.github;
            projectBtn[0].children[1].target = '_blank';
        } else if (elem.className.search('item5') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item5.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item5.desc;
            projectGrid[0].children[0].src = projectsObj.static.item5.img;
            projectBtn[0].children[0].href = projectsObj.static.item5.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.static.item5.github;
            projectBtn[0].children[1].target = '_blank';
        } else {
            console.log('not found');
        }
    } else {
        console.log('not found');
    }
}
