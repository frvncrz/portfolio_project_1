// Random Quote generator based on spongebob, fullmetal alchemist, and naruto

function randomQuote(num) {
  return Math.floor(Math.random() * num);
}

const quotesFromShows = {
  spongeBob: [
    "I'm ready!",
    "Are you finished with those errands squidward?",
    "Whats funnier than 24?.....25!",
    "CHOCOLATTTTEEE!",
    "THE BEST TIME TO WEAR A STRIPED SWEATER IS ALL THE TIME",
    "I'm ugly and I'm proud!",
  ],
  naruto: [
    "SASUKKEEEEEE! -Naruto",
    "NARUTOOOOO -Sasuke",
    "Those who forgive themselves, and are able to accept their true nature...they are the strong ones! -Itachi",
    "A ninja's life is not measured by how he lived, but rather what they managed to accomplish before their death. -Jiraiya",
  ],
  fullMetalAlchemist: [
    "Dedication is a talent all on it's own. -Alfonse Elric",
    "Even when our eyes are closed, there's a whole world out there that lives outside ourselves and our dreams. -Edward Elric",
    "Life that has been lost connot be brought back again. That very truth is what shows us the meaning and value of living. -Roy Mustang",
  ],
};

let characterQuote = [];

for (let prop in quotesFromShows) {
  let optionIdx = randomQuote(quotesFromShows[prop].length);

  //switch case indicating which show the quotes are from
  switch (prop) {
    case "spongBob":
      characterQuote.push(
        `${quotesFromShows[prop][optionIdx]} from SpongeBob Square Pants`
      );
      break;
    case "naruto":
      characterQuote.push(`${quotesFromShows[prop][optionIdx]} from Naruto`);
      break;
    case "fullMetalAlchemist":
      characterQuote.push(`${quotesFromShows[prop][optionIdx]}`);
      break;
    default:
      characterQuote.push("See you later chump. -Spiderman(Black Suit)");
  }
}
