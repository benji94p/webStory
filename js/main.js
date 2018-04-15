/* INIT LOADER */

let loading = document.querySelector(".loading");
let landing = document.querySelector(".landing");
let story = document.querySelector(".story");
let resolution = document.querySelector(".resolution");
let clientViewportWidth = document.querySelector("body").clientWidth;


function initHide(object) {
    object.style.display = "none";
};

function show(object) {
    object.style.display = "";
};
initHide(loading);
initHide(landing);
initHide(story);
initHide(resolution);

document.addEventListener("load", initLoader);

function initLoader() {

    show(loading);
}

/* SNOW ANIMATION */

document.addEventListener("DOMContentLoaded", function () {
    show(loading);
    loading.classList.add("fade-out");
    landing.classList.add("fade-in");
    setTimeout(delAnimation, 2000);


    function delAnimation() {
        initHide(loading);
        show(landing);
        setTimeout(function showStory() {
            show(story);
        }, 2500);



        //SNOW ANIMATION STARTS

        if (clientViewportWidth > 1000) {

            let switcherContainer = true;
            fireSnow(switcherContainer);

            window.setInterval(function () {
                switcher(switcherContainer);
            }, 1500);

            function switcher(bool) {
                if (bool === true) {
                    bool = false;
                    fireSnow(bool);
                }
                if (bool === false) {
                    bool = true;
                    fireSnow(bool);
                }
            }

            function fireSnow(bool) {
                let randomSize = Math.floor((Math.random() * 50) + 20) + "px";
                let randomXAxis = Math.floor((Math.random() * 20) + 1) + "vw";
                let snowTemplate = document.querySelector(".snowflake-template").content;
                let snowClone = snowTemplate.cloneNode(true);
                let snowFlakeClone = snowClone.querySelector(".snowflake");
                snowFlakeClone.classList.add("animation-snow");
                snowFlakeClone.addEventListener("animationend", function () {
                snowFlakeClone.parentNode.removeChild(snowFlakeClone);
                });
                snowFlakeClone.style.maxWidth = randomSize;
                if (bool === true) {
                    snowFlakeClone.style.left = randomXAxis;
                    document.querySelector(".snowflake-left-container").appendChild(snowClone);
                }

                if (bool === false) {
                    snowFlakeClone.style.right = randomXAxis;
                    document.querySelector(".snowflake-right-container").appendChild(snowClone);
                }
            }

        }
        // Movement mousedown+MovetoStoryContainer
        setTimeout(function addFadeMouse() {
            document.querySelector(".mousedown").classList.add("animation-mouse");
        }, 3000);
    }

});


/* STORY */

let dataStory = [{
        headline: "Culture",
        text: "Before flying to Canada, I’ve heard many people telling me that the culture was warm and welcoming and this was, indeed, one of my first impressions being in contact with Canadians during my first weeks there. The city of Toronto is a modern, fast-paced city with a lot of skyscrapers and a constant flow of people, but also a bit retro in the architecture and the transportation system. I also felt the immoderation in the size of the malls, the roads, the housing items, and many objects that are part of the everyday-life in Toronto, representing well enough the people living there: bold, outgoing, and friendly.",
        media_url: "assets/story_image1.jpg",
        backgroundCol: "#F5F5F5",
        height_rectangle: "200px",
        width_rectangle: "300px"

    },
    {
        headline: "Education system",
        text: "The education system in Canada is a bit different than the one I am used to in Denmark. The schedule and the hours of lecture are different every day, and the projects are mostly individual ones. The classes are usually very small and shaped by an exchange between students and teachers. One thing that struck me is the facilities offered by the college for the student, such as the open access to the top-notch MacBooks all around the college or the size of the campus and the space available to work.",
        media_url: "assets/story_image2.jpg",
        backgroundCol: "#EAE8DB",
        height_rectangle: "250px",
        width_rectangle: "220px"

    },
    {
        headline: "Lifestyle",
        text: "The environment around the campus was very pleasant as it’s right by the lake of Ontario, so walks and jogs on the waterfront trail were part of the daily life. Being surrounded by parks and nature was the cost of living an hour from downtown Toronto, which made it a bit inconvenient to experience the heart of Toronto fully. I had the chance to have my housing five minutes from a free ice rink offered by the city, so instead of traveling downtown two hours round-trip to experience city life, I engaged in local life and bought myself a pair of ice skates, rocking the ice until it completely melted.",
        media_url: "assets/story_image3.jpg",
        backgroundCol: "#E7EBFF",
        height_rectangle: "220px",
        width_rectangle: "340px"

    },
    {
        headline: "Impressions",
        text: "Traveling to a new country in the context of studies is definitely a fulfilling experience and something I would recommend to everyone who has the opportunity to do so. It gave me the chance to look at my studies through a different lens, and challenge myself in new ways—expand my vision and knowledge in my field. Canada offered me as a European the unique insight of North America’s development in technology and the way it transmits that knowledge to its students.",
        media_url: "assets/dullassets1.png",
        backgroundCol: "#FFF1E2",
        height_rectangle: "314px",
        width_rectangle: "276px"

    }

];


let currentPartDisplay;
let nodeListDot = document.querySelectorAll(".circle-timeline");
$('.story').waypoint(function () {

    if (document.querySelector(".left-container").childElementCount === 0) {
        appendStoryElements(0);
        currentPartDisplay = 0;

        setTimeout(function () {
            document.querySelector(".fa-mouse-pointer").style.visibility = "visible";
        }, 7000);
        nodeListDot[0].children[2].childNodes[1].attributes[2].nodeValue = "#ee9ca7";
    };

        document.querySelector("#arrow").addEventListener("click", function () {
        currentPartDisplay += 1;
        appendStoryElements(currentPartDisplay);

    });

});


//Main story Data function
function appendStoryElements(storySection) {
    currentPartDisplay = storySection;
    // If left container contains child, remove it (+rightone);
    if (clientViewportWidth > 770) {
         document.querySelector(".rectangle").style.height = dataStory[storySection].height_rectangle;
         document.querySelector(".rectangle").style.width = dataStory[storySection].width_rectangle;
    }
    document.querySelector(".story").style.backgroundColor = dataStory[storySection].backgroundCol;
    let leftContainer = document.querySelector(".left-container");
    let rightContainer = document.querySelector(".right-container");

    if (leftContainer.childElementCount !== 0) {
        while (leftContainer.firstChild) {
            leftContainer.removeChild(leftContainer.firstChild);
        };
        while (rightContainer.firstChild) {
            rightContainer.removeChild(rightContainer.firstChild);
        }
    };
    document.querySelector(".story-headline").textContent = dataStory[storySection].headline;
    let mediaTemplate = document.querySelector(".media-template").content;
    let mediaClone = mediaTemplate.cloneNode(true);
    let textTemplate = document.querySelector(".text-template").content;
    let textClone = textTemplate.cloneNode(true);
    mediaClone.querySelector(".media-story").src = dataStory[storySection].media_url;
    textClone.querySelector(".text-story").textContent = dataStory[storySection].text;


    if (storySection === 0 || storySection === 2) {
        textClone.querySelector(".text-story").classList.add("animated", "bounceInLeft");
        mediaClone.querySelector(".media-story").classList.add("animated", "bounceInRight");
        leftContainer.appendChild(textClone);
        rightContainer.appendChild(mediaClone);
    } else {
        textClone.querySelector(".text-story").classList.add("animated", "bounceInRight");
        mediaClone.querySelector(".media-story").classList.add("animated", "bounceInLeft");
        rightContainer.appendChild(textClone);
        leftContainer.appendChild(mediaClone);
    }

    if (storySection === 3) {
        document.querySelector(".storymouse").style.display = "block";
         document.querySelector("#arrow").style.display = "none";
        show(resolution);
    }

    if (storySection !== 3) {
        document.querySelector(".storymouse").style.display = "none";
    }


};

/* DOTS ON CLICK */

document.querySelector(".wrapper-dots").addEventListener("click", function (e) {
    let classNumber = e.target.parentElement.parentElement.parentElement.classList[1];
    let dotColor = e.target.parentElement.getAttribute("fill");
    for (i = 0; i < nodeListDot.length; i++) {
        nodeListDot[i].children[2].childNodes[1].attributes[2].nodeValue = "#596E78";
    };

    switch (classNumber) {
        case "first":
            appendStoryElements(0);
            e.target.parentElement.setAttribute("fill", "#ee9ca7");
            break;
        case "second":
            appendStoryElements(1);
            e.target.parentElement.setAttribute("fill", "#ee9ca7");
            break;
        case "third":
            appendStoryElements(2);
            e.target.parentElement.setAttribute("fill", "#ee9ca7");
            break;
        case "fourth":
            appendStoryElements(3);
            e.target.parentElement.setAttribute("fill", "#ee9ca7");
            break;
        default:

    }
    document.querySelector(".fa-mouse-pointer").style.visibility = "hidden";

});

/* AUTOSCROLL on ScrollDown */


$(window).bind('mousewheel', function (event) {

    let beenScrolled = window.scrollY;
    function scrollTo(location) {
        $('html,body').animate({
            scrollTop: (document.body.scrollTop + $(location).offset().top)
        }, 'slow');
    };

    if (event.originalEvent.wheelDelta < 0) {

        if (beenScrolled > 145 && beenScrolled < 160) {
            scrollTo(story);
        }

    }

});


