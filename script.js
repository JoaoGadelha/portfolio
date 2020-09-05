
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


//  **********************************************

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
            title: 'Recipe Finder',
            img: 'img1',
            desc: 'React app based on the Spoonacular API that presents recipes of any kind of food. The initial interface displays a button to perform a recipe search and another to update the page with random recipes. After a recipe is clicked, the page is routed to a secondary page, where a image of the finished dish and the steps for the recipe are displayed.',
            url: 'https://joaoricardotg-recipefinder.netlify.app',
            github: 'https://github.com/JoaoGadelha/RecipeFinder'
        },
        item2: {
            title: 'Weather Finder',
            img: 'img1',
            desc: 'React app based on the OpenWeather API. Displays one page with a input textfield and a search button, returning information about the weather, wind speed and temperature.',
            url: 'https://joaoricardotg-weatherfinder.netlify.app',
            github: 'https://github.com/JoaoGadelha/WeatherFinder'
        }
    },
    static: {
        item1: {
            title: 'NewsGrid',
            img: 'img1',
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the home page of a news website, with one article being placed in a big showcase, while other texts are published in a CSS grid.',
            url: 'https://joaoricardotg-newsgrid.netlify.app',
            github: 'https://github.com/JoaoGadelha/NewsGrid'
        },
        item2: {
            title: 'EdgeLedger',
            img: 'img1',
            desc: 'Site built with pure HTML, CSS and Javascript, it opens with a hero section, followed by a "What We Do", "Who We Are" and "Our clients" section. A contact form and geolocation feed by Google Maps API is displayed in the end of the page.',
            url: 'https://joaoricardotg-edgeledger.netlify.app',
            github: 'https://github.com/JoaoGadelha/EdgeLedger'
        },
        item3: {
            title: 'ACMEHost',
            img: 'img1',
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the website for a web design agency with a Home, About and Services pages.',
            url: 'https://joaoricardotg-acmehost.netlify.app',
            github: 'https://github.com/JoaoGadelha/firstSite'
        },
        item4: {
            title: 'E-commerce Homepage',
            img: 'img1',
            desc: 'Site built with pure HTML, CSS and Javascript, it displays the homepage of a e-commerce website. It opens with a hero section with a carousel. A section leading to a acessories, meet the team and new arrivals pages follows up after that. A grid displaying products is placed before a teaser footer.',
            url: 'https://joaoricardotg-ecommerce.netlify.app',
            github: 'https://github.com/JoaoGadelha/Ecommerce'
        },
        item5: {
            title: 'HotelBT',
            img: 'img1',
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

const populateWindow = (elem) => {
    projectWindow = document.getElementsByClassName('project-window-title');
    projectTitle = projectWindow[0].children[0];
    projectCont = document.getElementsByClassName('project-content');
    if (elem.parentElement.className.search('react') >= 0) {
       
        if (elem.className.search('item1') >= 0) {
            projectTitle.innerHTML = projectsObj.react.item1.title;
            projectCont[0].children[0].innerHTML = projectsObj.react.item1.desc;
            projectCont[0].children[1].href = projectsObj.react.item1.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.react.item1.github;
            projectCont[0].children[2].target = '_blank';
        } else if (elem.className.search('item2') >= 0) {
            projectTitle.innerHTML = projectsObj.react.item2.title;
            projectCont[0].children[0].innerHTML = projectsObj.react.item2.desc;
            projectCont[0].children[1].href = projectsObj.react.item2.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.react.item2.github;
            projectCont[0].children[2].target = '_blank';
        } else {
            console.log('not found');
        }

    } else if (elem.parentElement.className.search('static') >= 0) {
        
        if (elem.className.search('item1') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item1.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item1.desc;
            projectCont[0].children[1].href = projectsObj.static.item1.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.static.item1.github;
            projectCont[0].children[2].target = '_blank';
        } else if (elem.className.search('item2') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item2.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item2.desc;
            projectCont[0].children[1].href = projectsObj.static.item2.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.static.item2.github;
            projectCont[0].children[2].target = '_blank';
        } else if (elem.className.search('item3') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item3.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item3.desc;
            projectCont[0].children[1].href = projectsObj.static.item3.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.static.item3.github;
            projectCont[0].children[2].target = '_blank';
        } else if (elem.className.search('item4') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item4.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item4.desc;
            projectCont[0].children[1].href = projectsObj.static.item4.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.static.item4.github;
            projectCont[0].children[2].target = '_blank';
        } else if (elem.className.search('item5') >= 0) {
            projectTitle.innerHTML = projectsObj.static.item5.title;
            projectCont[0].children[0].innerHTML = projectsObj.static.item5.desc;
            projectCont[0].children[1].href = projectsObj.static.item5.url;
            projectCont[0].children[1].target = '_blank';
            projectCont[0].children[2].href = projectsObj.static.item5.github;
            projectCont[0].children[2].target = '_blank';
        } else {
            console.log('not found');
        }
    } else {
        console.log('not found');
    }
}
