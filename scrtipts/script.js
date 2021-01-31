"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?" , 0);

const  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    for (let i = 0; i < 2; i++){
       let a = prompt("Один из последних просмотренных фильмов",""),
        b = prompt("На сколько оцените его ?", "");

        if (a != null && b != null, a.length != '' && b.length != '' && a.length < 50 && b.length < 50)
        {
            console.log('done')
            personalMovieDB.movies[a] = b;
        }
        else
        {
            console.log('error');
            i--;
        }
        
    }
    let who = document.getElementById('watcher');
    if (numberOfFilms <= 10 && numberOfFilms > 0 ){
       who.textContent = "Просмотрено довольно мало фильмов";
    }
     else if (numberOfFilms > 10 || numberOfFilms < 30){
        who.textContent = "Вы обычный зритель";
    }
     else if (numberOfFilms > 30){
        who.textContent = "Вы киноман";
    }
    else{
        who.textContent = "Ошибка";
    }
console.log(personalMovieDB);


