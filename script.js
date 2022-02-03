
// adds underline of navbar when window scrolls over 100 vh
$(document).ready(function () {

    $('.navbar2').css('display', 'none');
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        // let imageUrl = "./img/showcase4.jpg";

        if (scroll > $(window).height() - 50) {
            $('.navbar1').css('display', 'none');
            $('.navbar2').css('display', 'grid');
            $('.navbar2').css('zIndex', '100');
            //    $('.navbar2').css('display','grid');
        } else {
            //   $('.navbar2').css('display','none');
            $('.navbar2').css('display', 'none');
            $('.navbar1').css('display', 'grid');
            //   $('.navbar2').css('background','black');
        }

    })
})


//  updates navbar items

let currentIndex = 0;
let navItemArray;
let current;
const updateNavItemsCurrent = (elem, index) => {
    navItemArray = document.getElementsByClassName('navItem');
    for (let i = 0; i < navItemArray.length; i++) {
        navItemArray[i].classList.remove('current');
    }
    console.log(navItemArray);
    navItemArray[index - 1].classList.add('current');
    navItemArray[index - 1 + 4].classList.add('current');
    console.log(navItemArray);


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
{   reactNative: {
        item1: {
            title: 'Kiss \'n Tell App',
            img: 'img/items/react-native/item1.png',
            desc: 'Social app built using React Native for the frontend and Strapi, an open source headless CMS, to create API routes and manage user databases.',
            url: 'https://play.google.com/store/apps/details?id=com.kissntell',
        },
    },
    react: {
        item1: {
            title: 'E-commerce Homepage',
            img: 'img/items/react/item1.png',
            desc: 'React app based on a shopping products API built by me in Node.js and Express.js. The site features a search bar, carousels, a search results page and pages for each product. Also, login and signup of clients and a shopping cart pages are available.',
            url: 'https://joaoricardotg-reactecommerce.netlify.app',
            github: 'https://github.com/JoaoGadelha/ReactECommerce'
        },
        item2: {
            title: 'Recipe Finder',
            img: 'img/items/react/item2.png',
            desc: 'React app based on the Spoonacular API that presents a varied number of recipes. The app consists of a search bar for a specific recipe and a results page. The recipes can also be displayed randomly.',
            url: 'https://joaoricardotg-recipefinder.netlify.app',
            github: 'https://github.com/JoaoGadelha/RecipeFinder'
        },
        item3: {
            title: 'Weather Finder',
            img: 'img/items/react/item3.png',
            desc: 'React app based on the OpenWeather API. Displays the results of weather characteristics in a determined place in the world.',
            url: 'https://joaoricardotg-weatherfinder.netlify.app',
            github: 'https://github.com/JoaoGadelha/WeatherFinder'
        }
    },
    static: {
        item1: {
            title: 'NewsGrid',
            img: 'img/items/static/item1.png',
            desc: 'Site built with pure HTML, CSS and Javascript. Displays the home page of a news website, with one article being placed in a big showcase, while other texts are published in a CSS grid.',
            url: 'https://joaoricardotg-newsgrid.netlify.app',
            github: 'https://github.com/JoaoGadelha/NewsGrid'
        },
        item2: {
            title: 'EdgeLedger',
            img: 'img/items/static/item2.png',
            desc: 'Site built with pure HTML, CSS and Javascript. Displays a hero section, followed by a "What We Do", "Who We Are" and "Our clients" sections. A contact form and geolocation feed by Google Maps API are displayed in the end of the page.',
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
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the homepage of a e-commerce website.',
            url: 'https://joaoricardotg-ecommerce.netlify.app',
            github: 'https://github.com/JoaoGadelha/Ecommerce'
        },
        item5: {
            title: 'HotelBT',
            img: 'img/items/static/item5.png',
            desc: 'Site built with pure HTML, CSS and Javascript. Consists of the website for a hotel.',
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
    if (elem.parentElement.className.search('react-native') >= 0) {
        if (elem.className.search('item1') >= 0) {
            projectTitle.innerHTML = projectsObj.reactNative.item1.title;
            projectCont[0].children[0].innerHTML = projectsObj.reactNative.item1.desc;
            projectGrid[0].children[0].src = projectsObj.reactNative.item1.img;
            projectBtn[0].children[0].href = projectsObj.reactNative.item1.url;
            projectBtn[0].children[0].target = '_blank';
            projectBtn[0].children[1].href = projectsObj.reactNative.item1.github;
            projectBtn[0].children[1].target = '_blank';
        }
    } else if (elem.parentElement.className.search('react') >= 0) {

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
