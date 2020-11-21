//  Pre-Loader
let preLoader = document.querySelector(".preloader");

function myLoader(){
    preLoader.style.display ="none";
}

// Toggle Button
$(document).ready(function(){
    $(".toggle_button").click(function(){
        $(".mobile-nav").toggle(500);
        $(".backdrop").toggle();
    });

    $(".backdrop").click(function(){
        $(".mobile-nav").toggle(500);
        $(".backdrop").toggle();
    });
});

// Type Writer Effect
const TypeWriter = function(txtElement, words, wait){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}


//  Type Method
TypeWriter.prototype.type = function(){
    //  Current Index Of Word
    const current = this.wordIndex % this.words.length;

    //  Get Full Text Of Current Index
    const fullTxt = this.words[current];

    if(this.isDeleting){
        //  Remove Char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else{
        // Add Char
        this.txt = fullTxt.substring(0, this.txt.length + 1);   
    }

    //  Insert Text Into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //  Initial Type Speed
    let typeSpeed = 100;
    if(this.isDeleting){
        typeSpeed = typeSpeed / 2;
    }

    //  If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 100;
    }

    setTimeout(() => {
        this.type();
    },typeSpeed);
}

//  Init On DOM Load
document.addEventListener("DOMContentLoaded",init);

//  Init App

function init(){
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    //  Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}