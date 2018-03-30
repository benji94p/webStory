/* SNOW ANIMATION */

document.addEventListener("DOMContentLoaded", function () {
    let clientViewportWidth = document.querySelector("body").clientWidth;
    if (clientViewportWidth > 1000) {

        let switcherContainer = true;
        fireSnow(switcherContainer);

        window.setInterval(function () {
                switcher(switcherContainer);
            }, 1500);

        function switcher (bool) {
            if (bool===true) {
                bool = false;
                fireSnow(bool);
            }
            if (bool===false) {
                bool=true;
                fireSnow(bool);
            }
        }

        function fireSnow (bool) {
            let randomSize = Math.floor((Math.random() * 50) + 20) + "px";
            let randomXAxis = Math.floor((Math.random() * 20) + 1) + "vw";
            let snowTemplate = document.querySelector(".snowflake-template").content;
            let snowClone = snowTemplate.cloneNode(true);
            let snowFlakeClone = snowClone.querySelector(".snowflake");
            snowFlakeClone.classList.add("animation-snow");
            snowFlakeClone.addEventListener("animationend",function() {
            snowFlakeClone.parentNode.removeChild(snowFlakeClone);
            });
            snowFlakeClone.style.maxWidth = randomSize;
            if (bool===true) {
                snowFlakeClone.style.left = randomXAxis;
                document.querySelector(".snowflake-left-container").appendChild(snowClone);
            }

            if (bool===false) {
                snowFlakeClone.style.right = randomXAxis;
                document.querySelector(".snowflake-right-container").appendChild(snowClone);
            }
        }



    }
});
