
let btn = document.getElementById('btn');
let h1 = document.getElementById('person-name');
let table = document.getElementById('person-stats');

btn.addEventListener('click', function() {
    fetch('https://swapi.py4e.com/api/people/1')
        .then(response => response.json())
        .then(data => {
            h1.textContent = data.name
            table.innerHTML = ''

            let header = document.createElement('tr')

            let th1 = document.createElement('th')
            th1.textContent = 'Height'
            header.appendChild(th1)

            let th2 = document.createElement('th')
            th2.textContent = 'Weight'
            header.appendChild(th2)

            let th3 = document.createElement('th')
            th3.textContent = 'Eye color'
            header.appendChild(th3)

            let th4 = document.createElement('th')
            th4.textContent = 'Hair color'
            header.appendChild(th4)

            table.appendChild(header);

            let row = document.createElement('tr')

            let td1 = document.createElement('td')
            td1.textContent = data.height
            row.appendChild(td1);

            let td2 = document.createElement('td')
            td2.textContent = data.mass
            row.appendChild(td2);

            let td3 = document.createElement('td')
            td3.textContent = data.eye_color
            row.appendChild(td3);

            let td4 = document.createElement('td')
            td4.textContent = data.hair_color
            row.appendChild(td4)

            table.appendChild(row)
        })
        .catch(err => {
            console.log('Error fetching StarWars person:', err)
        })
});
