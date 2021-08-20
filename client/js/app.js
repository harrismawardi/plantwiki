

document.querySelector('#new_plant_form').addEventListener('submit', addplant)


loadFirstPlant()



function loadFirstPlant() {
    fetch('http://localhost:3000/plants')
    .then(resp => resp.json())
    .then(data => {console.log(data)})
    .catch()
}

// fetch post to 
function addplant(e) {
    e.preventDefault();

    const plantData = {
        species: e.target.species.value,
        type: e.target.type.value,
        height: e.target.height.value,
        growthPeriod: e.target.growth_period.value
    }

    const options = {
        method: 'POST', 
        body: JSON.stringify(plantData),
        headers: { "Content-Type": "application/json"}
    }

    fetch('http://localhost:3000/plants', options)
    .then( resp => resp.json() )
    .then( data => console.log(data))
    .then(() => e.target.reset())
    .catch( err => console.log(err))
}