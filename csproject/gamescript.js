console.log("BruhScript Version 3");

var roundNumber = 4; // hidden round wowo
var itemNumber = 6; // hidden item wowo
var hintUsed = false;
var submitBox = `<h5>What TWICE song is this?</h5>
                    <form>
                        <label for="userinput">Song Title:</label>
                            <br>
                        <input type="text" id="userinput" name="userinput">
                            <br>
                            <br>
                    </form>
                    <button onclick="submission()"class="rounded buttonstyles">Submit</button>

                    <h4 id="consoleLog"></h4>

                    <br>

                    <h5>Current Score:</h5>
                    <h3 id="userScore">`+ score + `</h3>

                    <br>

                    <h5>Having Trouble?</h5>
		                <a href='#' onclick="hintTime()">Ask for a hint!</a>
			            <br>
		                <a href='../aboutmechanics.html'>Game Mechanics and Info</a>
                        <br>
                        <a href='#' onclick="skipItem()">Skip the Item [-3]</a>
	                </div>
                    `; // pain

function startRound1(){
    console.log("Round one has started")
    roundNumber = 1;
    itemNumber = 1;
    document.getElementById("round-information").innerHTML = submitBox;
    return generateRound1Item();
};

function startRound2(){
    console.log("Round two has started")
    roundNumber = 2;
    itemNumber = 1;
    document.getElementById("round-information").innerHTML = submitBox;
    return generateRound2Item();
};

function startRound3(){
    console.log("Round three has started")
    roundNumber = 3;
    itemNumber = 1;
    document.getElementById("round-information").innerHTML = submitBox;
    return generateRound3Item();
}

function generateRound1Item(){
    if (itemNumber <= 5){
        console.log("Generating Item " + itemNumber);
        hintUsed = false;
        document.getElementById("round-subheader").innerHTML = "ITEM " + itemNumber;
        var currentItem = itemNumber - 1; //This is to compensate for the stinky arrays
        var audioFile = ["round1/LIKE-OOH-AAH-Trimmed.mp3", "round1/CRY-FOR-ME-Trimmed.mp3", "round1/TOUCHDOWN-Trimmed.mp3", "round1/THE-BEST-THING-I-EVER-DID-Trimmed.mp3", "round1/BREAKTHROUGH-Trimmed.mp3"];
        return document.getElementById("audioFile").innerHTML = `
                                                                <div class="col-sm">
                                                                    <audio src=`+ audioFile[currentItem] +` controls> 
                                                                    Your browser does not support the audio element. lmao what a sad life you must lead
                                                                    </audio>
                                                                </div>`; //messess up the original css i don't know how to fix that unfortunately
    }else{
        nextRound();
    }
};

function generateRound2Item(){
    if (itemNumber <= 5){
        console.log("Generating Item " + itemNumber);
        hintUsed = false;
        document.getElementById("round-subheader").innerHTML = "ITEM " + itemNumber;
        var currentItem = itemNumber - 1;
        var lyrics = 
        [`Nareul gamsihaneun jeo Spot spot spotlight <br>
        Bichulsurok eodum sogeuro ppallyeo deureo <br>
        Kkeuchi boineunde I know it's not right <br>
        I can't stop me, can't stop me <br>`,
        `BB keurim papapa ripseutigeul mammamma <br>
        Kamerae damabolkka yeppeuge <br>
        Igeo bomyeon useojwo geurigo kkok nulleojwo <br>
        Jeo mite angjeungmajgo <br>
        Saeppalgan Heart Heart <br>`,
        `Like a bulldozer, like a tank, like a soldier <br> 
        Kowasu yo kimi no kokoro no gaado <br>
        Hitotsu nokorazu ubau yo haato <br>`,
        `Yeah yeah yeah yeah <br>
        Come and be my love <br>
        Come and be my love baby <br>
        Yeah yeah yeah yeah <br>
        Come and be my love <br>
        Come and be my love baby <br>`,
        `Signal bonae signal bonae <br>
        jjirit jjirit jjirit jjirit <br>
        nan neoreul wonhae nan neoreul wonhae <br>
        wae baneungi eobtni <br>`]              // I hate this ngl frfr
        return document.getElementById("center").innerHTML = `
                                                            <br>				
                                                            <div class="col-sm">
                                                                <h3>
                                                                    `+ lyrics[currentItem] +`
                                                                </h3>
                                                            </div>
                                                            `
        
    }else{
            nextRound();
    }
}

function generateRound3Item(){
    if (itemNumber <= 5){
        console.log("Generating Item " + itemNumber);
        hintUsed = false;
        document.getElementById("round-subheader").innerHTML = "ITEM " + itemNumber;
        var currentItem = itemNumber - 1;
        var picture = [`src="round3/DANCETHENIGHTAWAY.jpg" alt="dance the night away"`, `src="round3/FANCY.jpg" alt="fancy yo  oo o ou"`, `src="round3/FEELSPECIAL.jpg" alt="yOU MAKE ME FEEL SPECIA A A AL"`,`src="round3/YESORYES.jpg" alt="lmao no... unless 😳"`, `src="round3/WHATISLOVE.jpg" alt="its the worst life-binding business transaction"`];
        return document.getElementById("center").innerHTML = `<br>
                                                            <img style="width:100%; height:80%"` + picture[currentItem] + `>`
        
    }else{
            nextRound();
    }
}

function submission(){
    var sentAnswer = document.getElementById("userinput").value.toLowerCase();//different from submittedAnswer
    console.log(sentAnswer + ` is submitted for round ` + roundNumber);
    document.getElementById("userinput").value = "";
    switch (roundNumber){
        case 1:
            round1Answer(sentAnswer);
            break;
        case 2:
            round2Answer(sentAnswer);
            break;
        case 3:
            round3Answer(sentAnswer);
            break;
        default:
            alert("YO STOP MESSING WITH THE CONSOLE");
    }
    return "yay";
}

function round1Answer(submittedAnswer){
    console.log("Entered round1Answer() with " + submittedAnswer);
    var correctAnswer = ["like ooh-aah", "cry for me", "touchdown", "the best thing i ever did", "breakthrough"];

    if (submittedAnswer == correctAnswer[itemNumber - 1]){
        console.log("correct answer POGGERS");
        itemNumber++;
        document.getElementById("consoleLog").innerHTML = "Correct Answer! Onto Item " + itemNumber + "...";
        setTimeout(function(){refreshLog()},1000);
        scoreManager();
        return generateRound1Item();
    }
    else{
        console.log("wrong answer Sadge");
        document.getElementById("consoleLog").innerHTML = "Wrong Answer. Try again :(";
        wrongAnswer();
        return setTimeout(function(){refreshLog()},1000);
    }
}

function round2Answer(submittedAnswer){
    console.log("Entered round2Answer() with " + submittedAnswer);
    var correctAnswer = ["i can't stop me", "likey", "bdz", "heart shaker", "signal"];

    if (submittedAnswer == correctAnswer[itemNumber - 1]){
        console.log("correct answer PagMan");
        itemNumber++;
        document.getElementById("consoleLog").innerHTML = "Correct Answer! Onto Item " + itemNumber + "...";
        setTimeout(function(){refreshLog()},1000);
        scoreManager();
        return generateRound2Item();
    }
    else{
        console.log("wrong answer PepeHands");
        document.getElementById("consoleLog").innerHTML = "Wrong Answer. Try again :(";
        wrongAnswer();
        return setTimeout(function(){refreshLog()},1000);
    }
}

function round3Answer(submittedAnswer){
    console.log("Entered round3Answer() with " + submittedAnswer);
    var correctAnswer = ["dance the night away", "fancy", "feel special", "yes or yes", "what is love?"];

    if (submittedAnswer == correctAnswer[itemNumber - 1]){
        console.log("correct answer PogU");
        itemNumber++;
        document.getElementById("consoleLog").innerHTML = "Correct Answer! Onto Item " + itemNumber + "...";
        setTimeout(function(){refreshLog()},1000);
        scoreManager();
        return generateRound3Item();
    }
    else{
        console.log("wrong answer FeelsBadMan");
        document.getElementById("consoleLog").innerHTML = "Wrong Answer. Try again :(";
        wrongAnswer();
        return setTimeout(function(){refreshLog()},1000);
    }
}

function scoreManager(){
    if (hintUsed == false){
        switch (roundNumber){
            case 1:
                score = score + 2;
                document.getElementById("userScore").innerHTML = score;
                break;
            case 2:
                score = score + 3;
                document.getElementById("userScore").innerHTML = score;
                break;
            case 3:
                score = score + 5;
                document.getElementById("userScore").innerHTML = score;
                break;
            default:
                alert("YO STOP MESSING WITH THE CONSOLE");
        }
    }else{
        switch (roundNumber){
            case 1:
            case 2:
            case 3:
                score++;
                document.getElementById("userScore").innerHTML = score;
                break;
            default:
                alert("YO STOP MESSING WITH THE CONSOLE");
        }
    }

}

function nextRound(){
    switch(roundNumber){
    case 1:
        sessionStorage.setItem("round1Score", score);
        return window.location.href = "../htmlround2/round2.html";
    case 2:
        sessionStorage.setItem("round2Score", score);
        return window.location.href = "../htmlround3/round3.html";
    case 3:
        sessionStorage.setItem("finalScore", score);
       if (score <= 0){
        return window.location.href = "../lose.html";
       }
       else{
        return window.location.href = "../victory.html"
       }
    default:
       alert("secret round wowo");
        return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // we do a little trolling
    }
}

function refreshLog(){
    console.log("Cleared the Console Log")
    return document.getElementById("consoleLog").innerHTML = "";
}

function skipItem(){
    document.getElementById("consoleLog").innerHTML = "You have skipped item " + itemNumber + ". -3 points :(";
    setTimeout(function(){refreshLog()},1000);
    itemNumber++;
    score = score - 3;
    document.getElementById("userScore").innerHTML = score;
    switch(roundNumber){
        case 1:
            return generateRound1Item();
        case 2:
            return generateRound2Item();
        case 3:
            return generateRound3Item();
        default:
            alert("secret skip wowo");
            return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
}

function wrongAnswer(){
    console.log("Wrong Answer -1 point sadly");
    score = score - 1;
    document.getElementById("userScore").innerHTML = score;
}

function hintTime(){
    console.log("HINT WAS USED WEE WOO")
    hintUsed = true;
    switch(roundNumber){
        case 1:
            return round1Hint(itemNumber-1);
        case 2:
            return round2Hint(itemNumber-1);
        case 3:
            return round3Hint(itemNumber-1);
        default:
            alert("here's your hint for this round");
            return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
}

function round1Hint(bruh){
   var audio = [`LIKE OOH-AAH`,`CRY FOR ME`,`TOUCHDOWN`,`THE BEST THING I EVER DID`,`BREAKTHROUGH`];
   document.getElementById("consoleLog").innerHTML = "The hint for item " + itemNumber + " has been provided. Please listen to the updated audio";
   setTimeout(function(){refreshLog()},3000);
   return document.getElementById("audioFile").innerHTML = `
   <div class="col-sm">
       <audio src="roundhint1/` + audio[bruh] + `-Hint.mp3" controls> 
       Your browser does not support the audio element. lmao what a sad life you must lead
       </audio>
   </div>`
}

function round2Hint(bruh){
    var lyrics = [`...Kkeuchi boineunde I know it's not right <br>
    I can't stop me, can't stop me <br>`,`Seollenda Me Likey Me Likey Likey <br>
                                            Likey Me Likey Likey Likey <br>
                                            Dugeundugeundugeun Heart Heart <br>
                                            Me Likey Me Likey Likey Likey <br>
                                            Me Likey Likey Likey <br>
                                            Dugeundugeundugeun Heart Heart`,`Like a <i>bulldozer</i>, like a tank, like a soldier...`,`Isanghage saenggakaedo <br>
                                                                                                                                        Eojjeol su eopseo banhaesseunikka <br>
                                                                                                                                        You're my heart shaker, shaker <br>
                                                                                                                                        Notchigi shireo <br>
                                                                                                                                        You're my heart shaker, shaker <br>
                                                                                                                                        Eotteokae <br>`,                         `Signal bonae signal bonae <br>
                                                                                                                                                                                 jjirit jjirit jjirit jjirit <br>`];
    document.getElementById("consoleLog").innerHTML = "The hint for item " + itemNumber + " has been provided. The lyrics have now been changed";
    setTimeout(function(){refreshLog()},3000);
    return document.getElementById("center").innerHTML = `
                                                            <br>				
                                                            <div class="col-sm">
                                                                <h3>
                                                                    `+ lyrics[bruh] +`
                                                                </h3>
                                                            </div>
                                                            `
 }

 function round3Hint(bruh){
    var video = [`dancethenightaway`,`fancy`,`feelspecial`,`yesoryes`,`whatislove`];
    document.getElementById("consoleLog").innerHTML = "The hint for item " + itemNumber + " has been provided. The picture has now been changed to a video";
    setTimeout(function(){refreshLog()},3000);
    return document.getElementById("center").innerHTML = `<br>
                                                        <video width="100%" height="100%" autoplay muted>
                                                            <source src="roundhint3/`+ video[bruh] +`.mp4" type="video/mp4">
                                                            Your browser does not support video. Go like.. update it to something idk.
                                                        </video>`
                                                        
 }

 function loadScore(){
     console.log("Score has been presented");
    if (score <= 0){
        return document.getElementById("finalScore").innerHTML = "Your final score is: " + score + ". Bad Job :(";
    }
    else{
        return document.getElementById("finalScore").innerHTML = "Your final score is: " + score + ". Good Job!";
    }
 }

 function catJAM(event){
     if (event.altKey == true){
        document.getElementById("forTerror").innerHTML = `<span style="font-size:150px;"> catJAM waiting room. Wait 5 seconds for your turn...</span>`
        return setTimeout(function(){terrorMania()}, 5000)
     }
     else{
        return console.log("Bruh");
     }
 }
 
 function terrorMania(){
    alert('the catJAMmening has commenced');
    var catJAM = `<img src="https://media.discordapp.net/attachments/758956274385420299/758976054794125312/catJAM_gif.gif" alt="pain" class="img-fluid">`
    var condensedCatJAM = catJAM;
    for (i = 0; i < 200 ; i++){
        condensedCatJAM += catJAM;
    }
    document.getElementById("forTerror").innerHTML = condensedCatJAM;
    document.getElementById("forTerror").style.backgroundImage = `url('https://media.discordapp.net/attachments/758956274385420299/758976054794125312/catJAM_gif.gif')`;
    document.getElementById("forTerror").style.backgroundSize = "cover";
    document.getElementById("forTerror").style.backgroundRepeat = "repeat";

    return setTimeout(function(){window.location.replace('https://drive.google.com/file/d/15Jc6CIfS1g41Cvldtu0xC2_A2OkFX0qa/view')}, 5000)
 }