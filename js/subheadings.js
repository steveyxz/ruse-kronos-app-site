const subheadings = ["Organise school timetables", "Manage notes", "Track your todo", "Check school dashboard"];
let currentSubheading = 0;
let subheadingObject = document.getElementById("subheading");

const nextSubheading = function() {
    let subheading = subheadings[currentSubheading];
    subheadingObject.textContent = subheading;
    subheadingObject.style.animation = 'none';
    subheadingObject.offsetWidth;
    subheadingObject.style.animation = "typing 6s steps(" + subheadingObject.textContent.length + ", end), blink .75s step-end infinite";
    currentSubheading++;
    if (currentSubheading >= subheadings.length) {
        currentSubheading = 0;
    }
}

subheadingObject.addEventListener('animationend', nextSubheading);
nextSubheading();