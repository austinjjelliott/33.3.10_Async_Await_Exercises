url = "https://deckofcardsapi.com/api/deck";
// part1
async function getCard() {
  let res = await axios.get(`${url}/new/draw/?count=1`);
  console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
}

// Part 2
let deck_id = null;
async function shuffle() {
  result = await axios.get(`${url}/new/shuffle/`);
  return result.data.deck_id;
}

async function twoCards() {
  deck_id = await shuffle();
  let res1 = await axios.get(`${url}/${deck_id}/draw/?count=1`);
  let res2 = await axios.get(`${url}/${deck_id}/draw/?count=1`);
  console.log(
    `${res1.data.cards[0].value} of
    ${res1.data.cards[0].suit} and 
    ${res2.data.cards[0].value} of 
    ${res2.data.cards[0].suit}`
  );
}

// part3
// let deck_id = null; declared above in part 2!
let $btn = $("button");
let $cardArea = $("#card-area");
// Shuffle the deck ONCE upon page load
$(document).ready(async function () {
  deck_id = await shuffle();
  console.log(`Deck ID: ${deck_id}`);
  return deck_id;
});

$btn.on("click", async function () {
  deck_id = deck_id;
  res = await axios.get(`${url}/${deck_id}/draw/?count=1`);
  let cardImage = res.data.cards[0].image;
  $cardArea.append($("<img>").attr("src", cardImage));
  if (res.data.remaining === 0) alert("Game Over!");
});
