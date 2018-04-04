/* INIT LOADER */

let loading = document.querySelector(".loading");
let landing = document.querySelector(".landing");
let story = document.querySelector(".story");
let resolution = document.querySelector(".resolution");

function initHide(object) {
    object.style.display = "none";
}

function show(object) {
    object.style.display = "";
}
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
    setTimeout(showStory, 2000);

    function delAnimation() {
        initHide(loading);
        show(landing);
        setTimeout(showStory, 2500);

        function showStory() {
            show(story);
        };

        //SNOW ANIMATION STARTS

        let clientViewportWidth = document.querySelector("body").clientWidth;
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
        headline: "First Part",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        media_url: "assets/dullassets1.png",
        backgroundCol: "#F5F5F5",
        height_rectangle: "200px",
        width_rectangle: "300px"

    },
    {
        headline: "Second Part",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum.",
        media_url: "assets/dullassets2.png",
        backgroundCol: "#EAE8DB",
        height_rectangle: "250px",
        width_rectangle: "220px"

    },
    {
        headline: "Third Part",
        text: "making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        media_url: "assets/dullassets3.png",
        backgroundCol: "#E7EBFF",
        height_rectangle: "220px",
        width_rectangle: "340px"

    },
    {
        headline: "Fourth Part",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        media_url: "assets/dullassets4.png",
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

    document.querySelector(".rectangle").style.height = dataStory[storySection].height_rectangle;
    document.querySelector(".rectangle").style.width = dataStory[storySection].width_rectangle;
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
    if (event.originalEvent.wheelDelta < 0) {
        let beenScrolled = window.scrollY;
        console.log("down");
        if (beenScrolled > 145 && beenScrolled < 160) {
            $('html,body').animate({
                scrollTop: (document.body.scrollTop + $(".story").offset().top)
            }, 'slow');
        }
        if (beenScrolled > 920 && beenScrolled < 1100) {
            $('html,body').animate({
                scrollTop: (document.body.scrollTop + $(".resolution").offset().top)
            }, 'slow');
        }
    }
});
