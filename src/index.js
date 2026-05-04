function displayPoem(response){

    console.log("Generating poem")
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  }); 
  
}

function generatePoem(event){
    event.preventDefault();

    let instrctionsInput  = document.querySelector("#user-instructions")
    let apiKey = "c64t23cdba0aa619b751fda43e0ao4bf";
    let prompt = `Please generate an english poem about ${instrctionsInput.value}`
    let context = "You are a romantic poem expert and love to write short poem ,your mission is to generate a four line poem in basic html. Only write the poem and nothing else Make sure to use the user instructions"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    
    console.log(prompt)

    axios.get(apiUrl).then(displayPoem);
    
       

}

let poemFormElement = document.querySelector('#poem-generator-form');

poemFormElement.addEventListener("submit", generatePoem)
