// Declare a function named "setClock" with no parameters
function setClock() {
    // Create a variable named "currentDate" and assigned this variable with the new date() constructor. This will give me the exact current time that I run it on
    let currentDate = new Date();

    // Now let's get the hours(hrs) from my "currentDate" variable by creating a variable named "hrs" and assigned it to currentDate and use the getHours() constructor
    let hrs = currentDate.getHours();

    // Now let's get the minutes(min) from our "currentDate" variable by creating a variable named "min" and assigned it to currentDate and use the getMinutes() constructor
    let min = currentDate.getMinutes();

    // Now let's get the seconds(seconds) from our "currentDate" variable by creating a variable named "seconds" and assigned it to currentDate and use the getSeconds() constructor
    let seconds = currentDate.getSeconds();

    // Create a variable named "session" and grab the <span> tag with the id name of "session" from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
    var session = document.getElementById('session');

    // I used an if/else statement to create a condition where if hours(hrs) is greater than or equal to 12 then sessions in my HTML will pass by 'PM' or else sessions in my HTML will pass by 'AM'
    if(hrs >= 12){
        session.innerHTML ='PM';
    }else{
        session.innerHTML ='AM';
    }

    // I used another if statement to create a condition where if hours(hrs) is greater than 12 then hours(hrs) is equal to hours(hrs) minus 12 and this allows me to use 24 hours format.
    if(hrs > 12){
        hrs = hrs - 12;
    }

    //I grabbed the <span> tag with the id name of "hours" inner HTML from the DOM by using the document.getElementById() method and assigned it to my "hrs" variable
    document.getElementById('hours').innerHTML = hrs;

    //I grabbed the <span> tag with the id name of "minutes" inner HTML from the DOM by using the document.getElementById() method and assigned it to my "min" variable
    document.getElementById('minutes').innerHTML = min;


    //I grabbed the <span> tag with the id name of "hours" inner HTML from the DOM by using the document.getElementById() method and assigned it to my "seconds" variable
    document.getElementById('seconds').innerHTML = seconds;
}

// I used the setInterval() method to make the clock update for every 1000 milliseconds second by calling my "setClock" function.
setInterval(setClock, 1000);