function valuesetters(){
// gsap.set("#nav",{y:"-100%",opacity:0});
    gsap.set("#home span .child",{y:"100%"});
    gsap.set("#home .row img",{opacity:0});
}

// Get the current local time
const localTimeElement = document.getElementById('local-time');
const gmtOffsetElement = document.getElementById('gmt-offset');

// Function to format the time as HH:MM
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if needed
    return `${hours}:${minutes}`;
}

// Get current date and time
const currentDate = new Date();

// Format the time
const localTime = formatTime(currentDate);

// Get GMT offset
const gmtOffset = currentDate.getTimezoneOffset();
const sign = gmtOffset > 0 ? "-" : "+";
const offsetHours = Math.abs(Math.floor(gmtOffset / 60));
const offsetMinutes = Math.abs(gmtOffset % 60);
const formattedGMTOffset = `GMT ${sign}${offsetHours}:${offsetMinutes < 10 ? '0' + offsetMinutes : offsetMinutes}`;

// Update the HTML elements with the formatted time and GMT offset
localTimeElement.textContent = `MY LOCAL TIME ${localTime}`;
gmtOffsetElement.textContent = formattedGMTOffset;


function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        //create two spans
       let Parent= document.createElement("span");
       let Child= document.createElement("span");
       //parent and child both sets their repective classes
       Parent.classList.add("parent");
       Child.classList.add("child");
    //span parent gets child and child gets elem details
    Child.innerHTML = elem.innerHTML;
    Parent.appendChild(Child);
    //elem replace its value with parent span
       elem.innerHTML="";
       elem.appendChild(Parent);
    });
}



function loaderAnimation(){
    var t1=gsap.timeline();
t1.from("#loader .child span",{
    x:"-100",
    delay:1,
    duration:1.5,
    stagger:0.2,
    ease:"Power3"
})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    ease:"circ.easeInOut"
})
.to("#loader",{
    height:0,
    duration:1,
    ease:"circ.easeInOut"
})
.to("#purple",{
    height:"100%",
    top:0,
    duration:1,
    delay:-0.8,
    ease:"circ.easeInOut"
})
.to("#purple",{
    height:"0%",
    duration:1,
    delay:-0.5,
    ease:"circ.easeInOut",
    onComplete:function(){
        animateHomepage();
    }
})
}



function animateHomepage(){

    var t3=gsap.timeline();
    t3.to("#nav a",{
        y:0,
        opacity:1,
        stagger:0.05,
        ease:"expo.easeInOut"
    })
    .to("#home .parent .child",{
        y:0,
        stagger:0.1,
        duration:2,
        ease:"expo.easeInOut"
    })
}

// animateHomepage();

function animatedsvg(){
    var t2 = gsap.timeline();
t2.from(" .anisvg ", {
    opacity: 0, // Start fully transparent
    duration: 2,
    delay:5, // Animation duration
    ease: "Power3.easeInOut",
    
})
}


function combo(){
    var t2 = gsap.timeline();
t2.from(".combo h2 ", {
    y: -100, // Start 500px off-screen to the left
    opacity: 0, // Start fully transparent
    duration: 2,
    delay:9, // Animation duration
    ease: "Power3.easeOut" // Smooth easing effect
})
}

function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'), // Main scroll container
        smooth: true,
        multiplier: 1,
        class: 'is-scrolling'
    });

    // Update scroll on resize
    window.addEventListener('resize', () => {
        scroll.update();
    });
}

function cardHoverEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showimage;
        cnt.addEventListener("mousemove", function(dets){

            console.log(document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1);
            showimage=dets.target;
            console.log(document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`);
            showimage.style.filter="grayscale(1)";

            console.log(document.querySelector("#main").style.backgroundColor = "#" + dets.target.dataset.color);
            
        })
        cnt.addEventListener("mouseleave", function(dets){

            console.log(document.querySelector("#cursor").children[showimage.dataset.index].style.opacity=0);
            showimage.style.filter="grayscale(0)";
            console.log(document.querySelector("#main").style.backgroundColor = "#fff");

        })
    })
}

function writeMessage() {
    // Replace 'your-email@gmail.com' with your Gmail address
    window.location.href = "mailto:fionacrasta8@gmail.com?subject=Let's Connect&body=Hi, I would like to discuss...";
}

function discussProject() {
    // Redirect to the project discussion page
    window.location.href = "project-discussion.html";
}

// Wait for the DOM to fully load before running the functions
document.addEventListener("DOMContentLoaded", function () {
    revealToSpan();
    valuesetters();
    loaderAnimation();
    animatedsvg();
    combo();
    locoInitialize(); 
    cardHoverEffect();
});
