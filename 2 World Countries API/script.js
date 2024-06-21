const mainContainer = document.querySelector('.main-container')
const card = document.querySelector('.card')

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(countriesData => {
            // console.log(countriesData.name.common);
            // console.log(countriesData.tld.join(', '));


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

