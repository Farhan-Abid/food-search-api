const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(json => displayCountries(json))
}

loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const h3 = document.getElementById('h3');
        h3.innerText = country.name ;
        countriesDiv.appendChild(h3);
        
    });
}
