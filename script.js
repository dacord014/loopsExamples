// hace el loop un numero definido de veces
for (let i =0; i < 5; i ++) {
    console.log('Hello World', i);
}

// while
// es una argumento que crea yub loop que se ejecuta hasta que una condicion especifica es verdad
let age = 5
while (age < 10){

    console.log("Your age is less than  10");
    age++;

}

document.write("you are now over 10");


//for in
//en este loop el argumento loopea dentro de las propiedadesd de un objeto
let txt = "";
let person = {fname:"John", lname:"Doe", age:25}; 
let x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;

//for of
//es una argumento que loopea atreves de los valores de una objeto iterativo
let guitarras = ["ibanez", "Fender", "Gibson"];
let text ="";

for (let x of guitarras) {
    text += x + "<br>";
}

document.getElementById("demo2").innerHTML = text;


//do while
// es un loop que corre un argumento hasta que cierta condicion es true
let textTwo = ""
var i =0;
do {
    textTwo += "the number is" + i + "<br>";
    i++;
}

while (i < 10);

document.getElementById("demo3").innerHTML = textTwo;