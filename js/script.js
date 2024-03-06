function beginRandomizer() {  
 
    var randomImage = new Array();  
      
    randomImage[0] = "https://i0.wp.com/billypenn.com/wp-content/uploads/2021/11/phillyzoo-luminature2021-lightshow-01crop.jpg?fit=2400%2C1350&ssl=1";  
    randomImage[1] = "https://www.visitphilly.com/wp-content/uploads/2017/12/First_Friday_Old_City_A.Ricketts1-2200x1237vp.jpg";  
    randomImage[2] = "https://www.visitphilly.com/wp-content/uploads/2017/12/Chinatown_arch2_G.Widman_2200x1237vp.jpg";  
    randomImage[3] = "https://www.visitphilly.com/wp-content/uploads/2021/05/blue-cross-riverrink-summerfest-above-new-jfusco-for-vp-2200x1237px-1400x787.jpg";  
    randomImage[4] = "https://media.cntraveler.com/photos/5a8da73899c77f4533dfbaec/16:9/w_2560,c_limit/Philadelphia-Museum-of-Art__2018_ext-7.jpg";  
    randomImage[5] = "https://www.visitphilly.com/wp-content/uploads/2017/12/academy-of-natural-sciences-dinosaur-hall-new-crtsy-mike-servedio-ans-2200x1237px.jpg";  
       
    var number = Math.floor(Math.random()*randomImage.length);  
    document.getElementById("randImg").innerHTML = '<img src="'+randomImage[number]+'" />';  

    document.getElementById("startButton").style.display = "none";
    
    // Create and append two new buttons below the image
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button_container";

    var button1 = document.createElement("button");
    button1.textContent = "Skip Place";
    button1.id = "button1";
    button1.addEventListener("click", beginRandomizer);

    var button2 = document.createElement("button");
    button2.textContent = "Take me there!";
    button2.id = "button2";
    button2.addEventListener("click", function() {
        window.location.href = "rating.html";
    });

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);

    document.getElementById("randImg").appendChild(buttonContainer);
    

}