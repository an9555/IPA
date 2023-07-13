for (i=0; i<45;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        switch (buttonInnerHTML){
            case "i:":
                new Audio("sound/vowel/F1.mp3").play();
            break;
            case "ɜ:":
                new Audio("sound/vowel/M1.mp3").play();
            break;
            case "u:":
                new Audio("sound/vowel/B1.mp3").play();
            break;
            case "eɪ":
                new Audio("sound/vowel/D1.mp3").play();
            break;
            case "ɪə":
                new Audio("sound/vowel/D6.mp3").play();
            break;
            case "ɪ":
                new Audio("sound/vowel/F2.mp3").play();
            break;
            case "ə":
                new Audio("sound/vowel/M2.mp3").play();
            break;
            case "ʊ":
                new Audio("sound/vowel/B2.mp3").play();
            break;
            case "əʊ":
                new Audio("sound/vowel/D2.mp3").play();
            break;
            case "eə":
                new Audio("sound/vowel/D7.mp3").play();
            break;
            case "e":
                new Audio("sound/vowel/F3.mp3").play();
            break;
            case "ʌ":
                new Audio("sound/vowel/M3.mp3").play();
            break;
            case "ɔ:":
                new Audio("sound/vowel/B3.mp3").play();
            break;
            case "ɑɪ":
                new Audio("sound/vowel/D3.mp3").play();
            break;
            case "ʊə":
                new Audio("sound/vowel/D8.mp3").play();
            break;
            case "ae":
                new Audio("sound/vowel/F4.mp3").play();
            break;
            case "ɒ":
                new Audio("sound/vowel/B4.mp3").play();
            break;
            case "aʊ":
                new Audio("sound/vowel/D4.mp3").play();
            break;
            case "a":
                new Audio("sound/vowel/F5.mp3").play();
            break;
            case "a:":
                new Audio("sound/vowel/B5.mp3").play();
            break;
            case "ɔɪ":
                new Audio("sound/vowel/D5.mp3").play();
            break;
            case "p":
            new Audio("sound/consonant/C1.mp3").play();
            break;
            case "t":
            new Audio("sound/consonant/C2.mp3").play();
            break;
            case "k":
            new Audio("sound/consonant/C3.mp3").play();
            break;
            case "f":
            new Audio("sound/consonant/C4.mp3").play();
            break;
            case "θ":
            new Audio("sound/consonant/C5.mp3").play();
            break;
            case "ʃ":
            new Audio("sound/consonant/C6.mp3").play();
            break;
            case "tʃ":
            new Audio("sound/consonant/C7.mp3").play();
            break;
            case "s":
            new Audio("sound/consonant/C8.mp3").play();
            break;
            case "h":
            new Audio("sound/consonant/C9.mp3").play();
            break;
            case "b":
            new Audio("sound/consonant/C10.mp3").play();
            break;
            case "d":
            new Audio("sound/consonant/C11.mp3").play();
            break;
            case "g":
            new Audio("sound/consonant/C12.mp3").play();
            break;
            case "v":
            new Audio("sound/consonant/C13.mp3").play();
            break;
            case "ð":
            new Audio("sound/consonant/C14.mp3").play();
            break;
            case "ʒ":
            new Audio("sound/consonant/C15.mp3").play();
            break;
            case "dʒ":
            new Audio("sound/consonant/C16.mp3").play();
            break;
            case "z":
            new Audio("sound/consonant/C17.mp3").play();
            break;
            case "l":
            new Audio("sound/consonant/C18.mp3").play();
            break;
            case "r":
            new Audio("sound/consonant/C19.mp3").play();
            break;
            case "j":
            new Audio("sound/consonant/C20.mp3").play();
            break;
            case "w":
            new Audio("sound/consonant/C21.mp3").play();
            break;
            case "m":
            new Audio("sound/consonant/C22.mp3").play();
            break;
            case "n":
            new Audio("sound/consonant/C23.mp3").play();
            break;
            case "ŋ":
            new Audio("sound/consonant/C24.mp3").play();
            break;
            default: console.log(buttonInnerHTML);}})}