// the countries page javascript, this is separate from my main js
const countryName = new URLSearchParams(window.location.search).get('name');
const myImage = document.querySelector('img')
const countryBox = document.querySelector('.country-info')
const backBtn = document.querySelector('.back-page')
const countryHeading = document.querySelector('.country-heading')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => res.json()).then(([countriesData]) => {
    // console.log(countriesData.currencies);
    myImage.src = countriesData.flags.svg
    myImage.alt = `${countriesData.name.common}`

    // official Name of the country     
    countryHeading.innerText = countriesData.name.common

    // native Name of the country 
    if (countriesData.name.nativeName) {
        nativeName.innerText = Object.values(countriesData.name.nativeName)[0].common;
    } else {
        nativeName.innerText = countriesData.name.common;
    }
    // population of the country
    if (countriesData.population) {
        population.innerText = countriesData.population.toLocaleString('en-IN')
    }

    // region of the country
    if (countriesData.region) {
        region.innerText = countriesData.region
    }

    // sub-region of the country
    if (countriesData.subregion) {
        subRegion.innerText = countriesData.subregion
    }

    // capital of the country
    if (countriesData.capital) {
        capital.innerText = countriesData.capital[0]
    }

    // top level domain of the country
    if (countriesData.tld) {
        topLevelDomain.innerText = countriesData.tld.join(', ')
    } else {
        topLevelDomain.innerText = countriesData.tld[0]
    }

    // currencies of the country
    if (countriesData.currencies) {
        currencies.innerText = Object.values(countriesData.currencies)[0].name
    }

    // languages of the country
    if (countriesData.languages) {
        languages.innerText = Object.values(countriesData.languages).join(', ')
    }

    // border countries of the country
    // console.log(countriesData.borders);


    if (countriesData.borders) {
        countriesData.borders.forEach(border => {
            // console.log(borderCountries);

            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountry]) => {
                    // console.log(borderCountry.name.common);
                    const borderCountryTag = document.createElement('a')
                    borderCountryTag.innerText = borderCountry.name.common
                    borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                    console.log(borderCountryTag);
                    borderCountries.append(borderCountryTag)
                });
        })
    }

})

backBtn.addEventListener('click', () => {
    window.history.go(-1)
})
