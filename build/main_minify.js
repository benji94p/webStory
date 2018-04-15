let loading=document.querySelector(".loading"),landing=document.querySelector(".landing"),story=document.querySelector(".story"),resolution=document.querySelector(".resolution"),clientViewportWidth=document.querySelector("body").clientWidth;function initHide(a){a.style.display="none"}function show(a){a.style.display=""}initHide(loading),initHide(landing),initHide(story),initHide(resolution),document.addEventListener("load",initLoader);function initLoader(){show(loading)}document.addEventListener("DOMContentLoaded",function(){show(loading),loading.classList.add("fade-out"),landing.classList.add("fade-in"),setTimeout(function(){if(initHide(loading),show(landing),setTimeout(function(){show(story)},2500),1e3<clientViewportWidth){function b(f){!0===f&&(f=!1,c(f)),!1===f&&(f=!0,c(f))}function c(f){let g=Math.floor(50*Math.random()+20)+"px",h=Math.floor(20*Math.random()+1)+"vw",j=document.querySelector(".snowflake-template").content,k=j.cloneNode(!0),l=k.querySelector(".snowflake");l.classList.add("animation-snow"),l.addEventListener("animationend",function(){l.parentNode.removeChild(l)}),l.style.maxWidth=g,!0===f&&(l.style.left=h,document.querySelector(".snowflake-left-container").appendChild(k)),!1===f&&(l.style.right=h,document.querySelector(".snowflake-right-container").appendChild(k))}let d=!0;c(d),window.setInterval(function(){b(d)},1500)}setTimeout(function(){document.querySelector(".mousedown").classList.add("animation-mouse")},3e3)},2e3)});let dataStory=[{headline:"First Part",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",media_url:"assets/dullassets1.png",backgroundCol:"#F5F5F5",height_rectangle:"200px",width_rectangle:"300px"},{headline:"Second Part",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum.",media_url:"assets/dullassets2.png",backgroundCol:"#EAE8DB",height_rectangle:"250px",width_rectangle:"220px"},{headline:"Third Part",text:"making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",media_url:"assets/dullassets3.png",backgroundCol:"#E7EBFF",height_rectangle:"220px",width_rectangle:"340px"},{headline:"Fourth Part",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",media_url:"assets/dullassets1.png",backgroundCol:"#FFF1E2",height_rectangle:"314px",width_rectangle:"276px"}],currentPartDisplay,nodeListDot=document.querySelectorAll(".circle-timeline");$(".story").waypoint(function(){0===document.querySelector(".left-container").childElementCount&&(appendStoryElements(0),currentPartDisplay=0,setTimeout(function(){document.querySelector(".fa-mouse-pointer").style.visibility="visible"},7e3),nodeListDot[0].children[2].childNodes[1].attributes[2].nodeValue="#ee9ca7");document.querySelector("#arrow").addEventListener("click",function(){currentPartDisplay+=1,appendStoryElements(currentPartDisplay)})});function appendStoryElements(a){currentPartDisplay=a,770<clientViewportWidth&&(document.querySelector(".rectangle").style.height=dataStory[a].height_rectangle,document.querySelector(".rectangle").style.width=dataStory[a].width_rectangle),document.querySelector(".story").style.backgroundColor=dataStory[a].backgroundCol;let b=document.querySelector(".left-container"),c=document.querySelector(".right-container");if(0!==b.childElementCount){for(;b.firstChild;)b.removeChild(b.firstChild);for(;c.firstChild;)c.removeChild(c.firstChild)}document.querySelector(".story-headline").textContent=dataStory[a].headline;let d=document.querySelector(".media-template").content,f=d.cloneNode(!0),g=document.querySelector(".text-template").content,h=g.cloneNode(!0);f.querySelector(".media-story").src=dataStory[a].media_url,h.querySelector(".text-story").textContent=dataStory[a].text,0===a||2===a?(h.querySelector(".text-story").classList.add("animated","bounceInLeft"),f.querySelector(".media-story").classList.add("animated","bounceInRight"),b.appendChild(h),c.appendChild(f)):(h.querySelector(".text-story").classList.add("animated","bounceInRight"),f.querySelector(".media-story").classList.add("animated","bounceInLeft"),c.appendChild(h),b.appendChild(f)),3===a&&(document.querySelector(".storymouse").style.display="block",document.querySelector("#arrow").style.display="none",show(resolution)),3!==a&&(document.querySelector(".storymouse").style.display="none")}document.querySelector(".wrapper-dots").addEventListener("click",function(a){let b=a.target.parentElement.parentElement.parentElement.classList[1],c=a.target.parentElement.getAttribute("fill");for(i=0;i<nodeListDot.length;i++)nodeListDot[i].children[2].childNodes[1].attributes[2].nodeValue="#596E78";switch(b){case"first":appendStoryElements(0),a.target.parentElement.setAttribute("fill","#ee9ca7");break;case"second":appendStoryElements(1),a.target.parentElement.setAttribute("fill","#ee9ca7");break;case"third":appendStoryElements(2),a.target.parentElement.setAttribute("fill","#ee9ca7");break;case"fourth":appendStoryElements(3),a.target.parentElement.setAttribute("fill","#ee9ca7");break;default:}document.querySelector(".fa-mouse-pointer").style.visibility="hidden"}),$(window).bind("mousewheel",function(a){let c=window.scrollY;0>a.originalEvent.wheelDelta&&145<c&&160>c&&function(d){$("html,body").animate({scrollTop:document.body.scrollTop+$(d).offset().top},"slow")}(story)});