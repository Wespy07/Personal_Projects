const mainContainer = document.querySelector('.main-container')
const card = document.querySelector('.card')

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(countriesData => {
            console.log();

            const makeCard = document.createElement('a')
            makeCard.classList.add('card')
            makeCard.href = `./country.html?name=${countriesData.name.common}`
            makeCard.innerHTML = `
        <img src="${countriesData.flags.svg}">
        <div class="info-box">
            <h3>${countriesData.name.common}</h3>
            <p><strong>Population: </strong>${countriesData.population.toLocaleString('en-IN')}</p>
            <p><strong>Region: </strong>${countriesData.region}</p>
            <p><strong>Capital: </strong> ${countriesData.capital}</p>
        </div>
`
            mainContainer.append(makeCard)
        });
    })


// card.addEventListener('click', (e) => {
//     e.preventDefault;
//     window.location.href = 'http://127.0.0.1:3000/country.html';
// })