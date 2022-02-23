// create a function

let damage = 0;

// boxMaker("Bob"," is cool");
// boxMaker("Jerry"," is cool");
// boxMaker("Sheila"," is cool");

function boxMaker(mess,number){
    let ele=document.createElement("div");
    let nameEle=document.createElement("h1");
    nameEle.innerHTML=mess+number;
    ele.appendChild(nameEle);
    document.body.appendChild(ele);
}


let button = document.createElement("button");
button.innerHTML="Fire Attack";
let button2 = document.createElement("button");
button2.innerHTML="Ice Attack";
let button3 = document.createElement("button");
button3.innerHTML="Poison Attack";


button.addEventListener("click",function (){
    damage=damage+3-1;
    boxMaker("Dragon Damage: ", damage)
    // button.innerHTML= damage;
    if (damage>=10){
        document.body.innerHTML= "You won!"
    }
})
button2.addEventListener("click",function (){
    damage=damage+1+1;
    boxMaker("Dragon Damage: ", damage)
    // button2.innerHTML= damage;
    if (damage>=10){
        document.body.innerHTML= "You won!"
    }
})
button3.addEventListener("click",function (){
    damage=damage+4;
    boxMaker("Dragon Damage: ", damage)
    // button3.innerHTML= damage;
    if (damage>=10){
        document.body.innerHTML= "You won!"
    }
})


// document.body.innerHTML="Dragon Damage: " + damage + " ";

document.body.appendChild(button);
document.body.appendChild(button2);
document.body.appendChild(button3);

