const mainContainer = document.querySelector('.main-container')
const card = document.querySelector('.card')

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(countriesData => {
            console.log();

            const makeCard = document.createElement('div')
            makeCard.classList.add('card')
            makeCard.innerHTML = `
    <a href="#">
        <img src="${countriesData.flags.svg}">
        <div class="info-box">
            <h3>${countriesData.name.common}</h3>
            <p><strong>Population: </strong>${countriesData.population}</p>
            <p><strong>Region: </strong>${countriesData.region}</p>
            <p><strong>Capital: </strong> ${countriesData.capital}</p>
        </div>
    </a>
`
            mainContainer.append(makeCard)
        });
    })
