const containerEl = document.querySelector('.container')

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0


let characterIndex = 0;


updateText()

function updateText(){
characterIndex++;
containerEl.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
`;