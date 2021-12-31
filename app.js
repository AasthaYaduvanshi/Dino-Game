var charcter = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

// jump functionality

function jump(){
    if(charcter.classList == "animate"){
        return
    }
    charcter.classList.add("animate");
    setTimeout(function(){
        charcter.classList.remove("animate");
    },300)
}

document.body.onkeydown = function(e){
    console.log(e);
    if(e.keyCode == 32){
        jump();
    }
}

var checkDead = setInterval(function(){
    let characterTop = parseInt(
        window.getComputedStyle(charcter).getPropertyValue("top")
    );
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );

    // check collision
    if(blockLeft <20 && blockLeft > -20 && characterTop >= 130){
        block.style.animation = "none";
        alert("game over");
        counter = 0
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
})


