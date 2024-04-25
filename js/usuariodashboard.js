// Datos de ejemplo de viajes
const trips = [
    {
        duration: '2 horas',
        date: '2024-04-20',
        origin: 'Origen 1',
        destination: 'Destino 1',
        driver: 'Conductor 1'
    },
    {
        duration: '1.5 horas',
        date: '2024-04-18',
        origin: 'Origen 2',
        destination: 'Destino 2',
        driver: 'Conductor 2'
    },
    {
        duration: '2.5 horas',
        date: '2024-04-21',
        origin: 'Origen 3',
        destination: 'Destino 3',
        driver: 'Conductor 3'
    },
    
];

// Función para mostrar los últimos 4 viajes del usuario
function showLastTrips() {
    const lastTripsList = document.getElementById('lastTrips');
    lastTripsList.innerHTML = ''; // Limpia la lista antes de mostrar los viajes

    for (let i = 0; i < 4; i++) {
        const trip = trips[i];
        const tripItem = document.createElement('li');
        tripItem.textContent = `Duración: ${trip.duration}, Fecha: ${trip.date}, Origen: ${trip.origin}, Destino: ${trip.destination}, Conductor: ${trip.driver}`;
        lastTripsList.appendChild(tripItem);
    }
}

// Función para mostrar todos los viajes del usuario
function showAllTrips() {
    const allTripsList = document.getElementById('allTrips');
    allTripsList.innerHTML = ''; // Limpia la lista antes de mostrar los viajes

    trips.forEach(trip => {
        const tripItem = document.createElement('li');
        tripItem.textContent = `Duración: ${trip.duration}, Fecha: ${trip.date}, Origen: ${trip.origin}, Destino: ${trip.destination}, Conductor: ${trip.driver}`;
        allTripsList.appendChild(tripItem);
    });
}

// Mostrar los últimos 4 viajes cuando la página se carga
document.addEventListener('DOMContentLoaded', showLastTrips);
