let api_key = '2679cd8e86daa9e8765bd08d6e3bcbc3';
let ciudad = 'Paris'
let difKelvin = 273.15
let urlBase = "http://api.openweathermap.org/geo/1.0/direct"

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }

})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&limit=5&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
    

}

function mostrarDatosClima(data){
   // console.log(data)
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML= ''

    const ciudadNombre = data[0].name
    const latitud = data[0].lat
    const longitud = data[0].lon
   

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `Ciudad: ${ciudadNombre}`

    const latitudInfo = document.createElement('p')
    latitudInfo.textContent = `La latitud es: ${latitud}`

    const longitudInfo = document.createElement('p')
    longitudInfo.textContent = `La longitud es: ${longitud}`

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(latitudInfo);
    divDatosClima.appendChild(longitudInfo);

}



    