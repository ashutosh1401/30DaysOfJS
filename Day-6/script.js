const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");
const cities = [];
fetch(endpoint).then((res) => {
  res.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      cities.push(...data);
    }
  });
});
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function displayPlaces() {
  //console.log(this.value);
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span/>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span/>`
      );
      return `
            <li>
            <span class="name">${cityName}, ${stateName}</span> 
            <span class="population">${numberWithCommas(
              place.population
            )}</span>
            </li>
            `;
    })
    .join("");
  suggestion.innerHTML = html;
}
input.addEventListener("change", displayPlaces);
input.addEventListener("keyup", displayPlaces);
