function generatePoem(event){
    event.preventDefault();

    
    // let poemElement = document.querySelector('#poem');
    // poemElement.innerHTML = "The poem will go here"
    new Typewriter("#poem", {
    strings: "The poem will go here",
    autoStart: true,
    cursor: "",
    delay: 1,
  });    

}

let poemFormElement = document.querySelector('#poem-generator-form');

poemFormElement.addEventListener("submit", generatePoem)