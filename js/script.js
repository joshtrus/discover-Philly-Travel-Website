function beginRandomizer() {
    console.log('Begin randomizer function called');
    fetch('/random_place')
        .then(response => {
            console.log('Fetch response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            if (data.place) {
                const place = data.place;
                document.getElementById("randImg").innerHTML = `
                    <img src="${place.image_url}" alt="${place.name}" />
                    <div class="button_container">
                        <button class="pill" onclick="beginRandomizer()">Skip Place</button>
                        <button class="pill" onclick="location.href='/place/${place.id}'">Take me there!</button>
                    </div>
                `;
            } else {
                document.getElementById("randImg").innerHTML = `<p>Error: ${data.error}</p>`;
            }
        })
        .catch(error => console.error('Error fetching random place:', error));
}
