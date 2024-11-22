let personAge = 17;

function xyz(x){
    if (x >= 18){
        console.log("Pilngadīgs!");
    } else{
        console.log("Nepilngadīgs!");
    }
}

xyz(personAge);

namesArray = ["Jānis", "Anna", "Zaiga"];

i = namesArray.keys();

for(key of i) {
    console.log(namesArray[key]);
}

function sayHello(x){
    console.log("Labdien " + x + "!")
}

sayHello("Aleksis")