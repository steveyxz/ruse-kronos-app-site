const spawnNew = function (counter) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.top = "-3em"
    particle.style.left = Math.floor(Math.random() * 100) + "%";
    document.getElementsByClassName("title-screen")[0].appendChild(particle);
    counter++;
    if (counter < 80) {
        setTimeout(spawnNew, Math.random() * 300, counter);
    }
}

spawnNew(0)