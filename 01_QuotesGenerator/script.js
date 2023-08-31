const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Start writing, no matter what. The water does not flow until the faucet is turned on. - Louis LAmour",
    "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good. - William Faulkner",
    "The first draft is just you telling yourself the story. - Terry Pratchett",
    "You dont start out writing good stuff. You start out writing crap and thinking its good stuff, and then gradually you get better at it. - Octavia E. Butler",
    "Start before youre ready. - Steven Pressfield",
    "You can always edit a bad page. You cant edit a blank page - Jodi Picoult",
  ];
  
  const generateBtn = document.getElementById("generate");
  const quoteElement = document.querySelector(".quote");
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  generateBtn.addEventListener("click", generateRandomQuote);