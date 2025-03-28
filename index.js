import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import hljs from "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/highlight.min.js";



const mdInput = document.getElementById('md-input')
const resetBtn = document.getElementById('reset-button')
const htmlDisplay = document.getElementById('md-display')

window.addEventListener('pageshow', parseAndRender)

mdInput.addEventListener("input", parseAndRender);

resetBtn.addEventListener('click', (e) => {
   mdInput.value = ''
   htmlDisplay.innerHTML = ''
})


function parseAndRender(){
   if(!mdInput.value){
      htmlDisplay.innerHTML = `
      <h1>Welcome to Markdown Parser</h1>
      <hr>
      <h2>Markdown Preview will be displayed Here</h2>
      `;
      return
   }
   const input = mdInput.value;
   const htmlOutput = marked.parse(input);
   htmlDisplay.innerHTML = htmlOutput;
   hljs.highlightAll()
}