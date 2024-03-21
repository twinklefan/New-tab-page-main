const image = '';
// set up array to hold variables
const images = [];
// amount of images
const max = 103;

// place images in array
for (i = 1; i < max; i++) {
    images.push("./img/img" + i + ".png")
}
const len = images.length;

// call function mushroom when clicked
document.getElementById('mushroom').addEventListener('click', clicked);

function clicked() { drawImage() }

function drawImage() {
    // document.getElementById('images').remove()

    const image = document.createElement('img');
    image.src = images[randomize(len)];
    image.style = generateStyle();
    image.className = 'img';
    document.getElementById('images').appendChild(image);  
}

function randomize(max) {
    return Math.floor(Math.random() * max);
}

function generateStyle() {
    const { left, top } = generateLocation();
    const degrees = generateRotation();
    const width = randomize(250) + 200;
    // const width = 500;
    const style = `
    z-index: 2;
    position: absolute;
    left: ${left}px;
    top: ${top}px;
    transform: rotate(${degrees}deg);
    width: ${width}px;
    `;
    // -webkit-filter: drop-shadow(5px 5px 0 white)
    // drop-shadow(-5px -5px 0 white);
    // filter: drop-shadow(5px 5px 0 white) 
    // drop-shadow(-5px -5px 0 white);
    return style
}

function generateLocation() {
    const windowHeight = window.innerHeight - 500;
    const windowWidth = window.innerWidth - 500;
    const left = randomize(windowWidth);
    const top = randomize(windowHeight);
    return { left, top }
}

function generateRotation() {
    const direction = Math.random() < 0.5 ? -1 : 1;
    return (Math.random() * ((50 - (-50)) + -50)) * direction
}