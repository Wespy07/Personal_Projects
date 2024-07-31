const mainContainer = document.querySelector('.main-container')
const card = document.querySelector('.card')
const filterBox = document.querySelector('.filter-box')
const inputBox = document.querySelector('.inputbox')
const body = document.querySelector('body')
const darkModeBtn = document.querySelector('.dark-mode-toggle')
const moon = document.querySelector('nav .fa-moon')
const sun = document.querySelector('nav .fa-sun')
const darkModeText = document.querySelector('nav p span')

let allTheCountries
fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        loadCountries(data)
        allTheCountries = data
        // console.log(allTheCountries);
    })



filterBox.addEventListener('change', (e) => {
    // console.log(e.target.value);
    if (e.target.value === 'All') {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                loadCountries(data)
            })
    } else {
        fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                loadCountries(data)
            })
    }



})

function loadCountries(data) {
    mainContainer.innerHTML = ''
    data.forEach(countriesData => {
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

    })
}
// function noCountries() {
//     mainContainer.innerHTML = ''
//     mainContainer.innerHTML = '<p>No matching countries found.</p>'
// }

inputBox.addEventListener('input', (e) => {
    // console.log(e.target.value);
    const filteredInput = allTheCountries.filter((countryName) => countryName.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    // console.log(filteredInput);
    loadCountries(filteredInput)
    // else {
    //     noCountries()
    // }

})


// darkModeBtn.addEventListener('click', () => {
//     body.classList.toggle('dark-mode')
//     if (body.classList.contains('dark-mode')){
//         moon.style.display = 'none'
//     }
// })


// darkModeBtn.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         moon.style.display = 'none';
//         darkModeText.innerHTML = 'Light Mode';
//         sun.style.display = 'inline';
//     } else {
//         moon.style.display = 'inline';
//         sun.style.display = 'none';
//         darkModeText.innerHTML = 'Dark Mode';
//     }
// });
