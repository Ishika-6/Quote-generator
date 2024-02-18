let quote=document.getElementById("quote-id")
let author=document.getElementById("quote-author")
let btn = document.getElementById("generate-btn");


async function randomQuote() {
    const r = await fetch('https://api.quotable.io/random')
    const q = await r.json()
    
   
    quote.innerHTML='<p>"'+q.content+'"</p>';
    author.innerHTML="<h3>"+q.author+"</h3>"
  }

  btn.addEventListener("click", randomQuote);
randomQuote();

