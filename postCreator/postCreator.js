const tagInp = document.getElementById("tagInp");
const headlineInp = document.getElementById("headlineInp");
const subHeadlineInp = document.getElementById("subHeadlineInp");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const headline = headlineInp.value;
    const subHeadline = subHeadlineInp.value;
    const tag = tagInp.value;

    output.innerHTML = `${headline}<br>
                        ${subHeadline}<br>
                        ${tag}`;
})


