// Movies renting App
// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let movies = ['Titanic','The GodFather','The Lord Of The Rings','Mechanic','Blaze Runner']

let input = document.getElementById('srch')
let btn = document.getElementById('btn')
let result = document.getElementById('result')

btn.addEventListener('click',function(){
    let value = input.value.toLowerCase()
    let found = false
    for(let movie of movies){
        if(movie.toLowerCase() === value){
            found = true
        }
        if(found){
            result.textContent = "The movie can be rented"
            result.style.color = 'green'
        }else{
            result.textContent = "The movie can't be rented"
            result.style.color = 'red'
        }
    }
})