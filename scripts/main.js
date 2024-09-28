const myImage = document.querySelector("img");

myImage.onclick = ()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc === "images/foxcon.jpeg"){
        myImage.setAttribute("src","images/firefox_icon2.png");
    }
    else{
        myImage.setAttribute("src","images/foxcon.jpeg");
    }

};

let myButton  = document.querySelector('button');
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your Name.");
    if(myName){
    localStorage.setItem("name",myName);
    myHeading.textContent= `Mozilla is cool , ${myName}`;
    }
    else{
        setUserName();
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};