import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const mdInput = document.getElementById('md-input')
const resetBtn = document.getElementById('reset-button')
const htmlDisplay = document.getElementById('md-display')



mdInput.addEventListener("input", parseAndRender);

resetBtn.addEventListener('click', (e) => {
   mdInput.value = ''
   htmlDisplay.innerHTML = ''
})


function parseAndRender(){
   const input = mdInput.value;
   const htmlOutput = marked.parse(input);
   htmlDisplay.innerHTML = htmlOutput;
}