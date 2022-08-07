// HELPING FUNCTION
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const headlineInp = document.getElementById("headlineInp");
const subHeadlineInp = document.getElementById("subHeadlineInp");
const domainInp = document.getElementById("domainInp")
const tagInp = document.getElementById("tagInp");
const btn = document.getElementById("btn");
const headlineTxt = document.getElementById("headlineTxt");
const subHeadlineTxt = document.getElementById("subHeadlineTxt");
const domainTxt = document.getElementById("domainTxt");
const generate = document.getElementById("generate");
const imgContainer = document.getElementById("imgContainer");
const save = document.getElementById("save");



let n = getRandomNum(1, 5);

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const headline = headlineInp.value;
    const subHeadline = subHeadlineInp.value;
    const domain = domainInp.value;
    const tag = tagInp.value;

    headlineTxt.innerHTML = `${headline}`;
    subHeadlineTxt.innerHTML = `${subHeadline}`;
    domainTxt.innerHTML = `${domain}`;

    if (tag == 'finance') {
        imgContainer.innerHTML = `<img class="img" src="./img/finance/img${n}.jpg">`
    } else if (tag == 'economy') {
        imgContainer.innerHTML = `<img class="img" src="../img/(finance)stock-blur.jpg">`
    } else if (tag == 'business') {
        imgContainer.innerHTML = `<img class="img" src="../img/(finance)stock-blur.jpg">`
    } else if (tag == 'technology') {
        imgContainer.innerHTML = `<img class="img" src="../img/(finance)stock-blur.jpg">`
    }
})

function doCapture() {
    window.scrollTo(0, 0);

    html2canvas(document.getElementById('generate')).then(function(canvas) {
        console.log(canvas.toDataURL("image/jpeg", 0.9));
        const thePrint = canvas.toDataURL("image/jpeg", 0.9)
        save.innerHTML = `<br><a href="${thePrint}" target="_blank" class="btn btn-block btn-warning">SAVE</a>`;
    });
}