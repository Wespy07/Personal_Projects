const countryName = new URLSearchParams(window.location.search).get('name');
const myImage = document.querySelector('img')
const countryBox = document.querySelector('.country-info')
const backBtn = document.querySelector('.back-page')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => res.json()).then((data) => {
    console.log(data[0]);
    myImage.src = data[0].flags.svg
    myImage.alt = `${data[0].name.common}`

    countryBox.innerHTML = `
            <h2>${data[0].name.common}</h2>
            <div class="country-info-box">
                <div>
                    <p><strong>Official Name: </strong><span>${data[0].name.official}</span></p>
                    <p><strong>Population: </strong><span>${data[0].population.toLocaleString('en-IN')}</span></p>
                    <p><strong>Region: </strong><span>${data[0].region}</span></p>
                    <p><strong>Sub Region: </strong><span>${data[0].subregion}</span></p>
                    <p><strong>Capital: </strong><span>${data[0].capital[0]}</span></p>
                </div>
                <div>
                    <p><strong>Top Level Domain: </strong><span>${data[0].tld[0]}</span></p>
                    <p><strong>Currencies: </strong><span>Name</span></p>
                    <p><strong>Languages: </strong><span>Name</span></p>
                </div>
            </div>
            <div class="border-countries">
                <p><strong>Border Countries: &nbsp;&nbsp;</strong><span>Name</span><span>Name</span></p>
            </div>
    `
})


backBtn.addEventListener('click', () => {
    window.history.go(-1)
})