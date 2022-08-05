const tagInp = document.getElementById("tagInp");
const headlineInp = document.getElementById("headlineInp");
const subHeadlineInp = document.getElementById("subHeadlineInp");
const btn = document.getElementById("btn");
const headlineTxt = document.getElementById("headlineTxt");
const subHeadlineTxt = document.getElementById("subHeadlineTxt");
const generate = document.getElementById("generate");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const headline = headlineInp.value;
    const subHeadline = subHeadlineInp.value;
    const tag = tagInp.value;

    headlineTxt.innerHTML = `${headline}`
    subHeadlineTxt.innerHTML = `${subHeadline}`

    if (tag == 'finance') {
        generate.style.background = `linear-gradient(-90deg, var(--color1), var(--blackColor)), 
                                    url('../img/[edit]\(finance\)-stock.jpg') no-repeat center center / cover`;
    } else if (tag == 'economy') {
        generate.style.background = `linear-gradient(-90deg, var(--color1), var(--economyColor)), 
        url('../img/[edit]\(finance\)-stock.jpg') no-repeat center center / cover`;
    } else if (tag == 'business') {
        generate.style.background = `linear-gradient(-90deg, var(--color1), var(--businessColor)), 
        url('../img/[edit]\(finance\)-stock.jpg') no-repeat center center / cover`;
    } else if (tag == 'technology') {
        generate.style.background = `linear-gradient(-90deg, var(--color1), var(--technologyColor)), 
        url('../img/[edit]\(finance\)-stock.jpg') no-repeat center center / cover`;
    }
})


