const baseURL = "http://numbersapi.com";
const favNumber = 32;

// Part 1
async function numFact() {
  let res = await axios.get(`${baseURL}/${favNumber}?json`);
  console.log(res.data.text);
}

// Part 2

async function multiFacts(one, two, three) {
  let p1Promise = axios.get(`${baseURL}/${one}?json`);
  let p2Promise = axios.get(`${baseURL}/${two}?json`);
  let p3Promise = axios.get(`${baseURL}/${three}?json`);

  let p1 = await p1Promise;
  let p2 = await p2Promise;
  let p3 = await p3Promise;

  console.log(`3 facts: ${p1.data.text}, ${p2.data.text}, ${p3.data.text}`);
}

// Part 3
async function randomFacts() {
  let res1 = await axios.get(`${baseURL}/${favNumber}?json`);
  let res2 = await axios.get(`${baseURL}/${favNumber}?json`);
  let res3 = await axios.get(`${baseURL}/${favNumber}?json`);
  let res4 = await axios.get(`${baseURL}/${favNumber}?json`);
  console.log(res1.data.text);
  console.log(res2.data.text);
  console.log(res3.data.text);
  console.log(res4.data.text);
}
// or...
async function parallelFacts() {
  let results = await Promise.all([
    axios.get(`${baseURL}/${favNumber}?json`),
    axios.get(`${baseURL}/${favNumber}?json`),
    axios.get(`${baseURL}/${favNumber}?json`),
    axios.get(`${baseURL}/${favNumber}?json`),
  ]);
  console.log(`${results[0].data.text}`);
  console.log(`${results[1].data.text}`);
  console.log(`${results[2].data.text}`);
  console.log(`${results[3].data.text}`);
}
