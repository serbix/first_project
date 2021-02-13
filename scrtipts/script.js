"use strict"

let who = document.getElementById('watcher');


const  personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false ,
    start : function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?" , "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count))
        {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?" , "");
        }
    } , 
    rememberFilms :  function () {
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
    } , 
    detectPersonalLevel :  function () {

        if (personalMovieDB.count <= 10 && personalMovieDB.count > 0 ){
           who.textContent = "Просмотрено довольно мало фильмов";
        }
         else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
            who.textContent = "Вы обычный зритель";
        }
         else if (personalMovieDB.count > 30){
            who.textContent = "Вы киноман";
        }
        else{
            who.textContent = "Ошибка";
        }
    
    } , 

    showMyDB : function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
        else{
            console.log("DataBase is lock");
            return;
        }
    } , 
    toggleVisibleMyDB : function () {
        if(personalMovieDB.privat)
        {
            personalMovieDB.privat = false;
        } 
        else {
            personalMovieDB.privat = true;
        }
    } , 
    writeYourGenres: function () {
        for ( let i = 1;  i <= 3 ; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
        }
    }

};


personalMovieDB.writeYourGenres();

