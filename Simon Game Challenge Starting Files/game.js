gamePattern = [];
userClickedPattern = [];
keyPressed = false;
level = 0;

function nextSequence()
{
    var buttonColors = ["red", "blue", "green", "yellow"];
    var num = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[num];
    gamePattern.append(randomChosenColour);

    $("#" + randomChosenColor).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + String(level));
}

function playSound(name)
{
    var snd = new Audio("./sounds" + name + ".mp3");
    snd.play();
}

function startOver()
{
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    keyPressed = false;
}

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel])
        {
            if(length(userClickedPattern) == length(gamePattern))
            {
                setTimeout(nextSequence, 1000);
                userClickedPattern = [];
            }
        }
    else
    {
        // they got it wrong
        playSound("wrong");

        $("body").addClass("game-over").delay(200)
        .queue(function(next){
        $(this).removeClass('game-over');
        next();
        });

        $("h1").text("Game over, Press Any Key to restart");

        startOver();
    }
}

function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed").delay(100)
    .queue(function(next){
      $(this).removeClass('pressed');
      next();
    })
}

$("button").click(function(){
    userChosenColor = $(this).attr('id');
    userClickedPattern.append(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(length(userClickedPattern) - 1);
});

$("body").keypress(function(){
    if(!keyPressed)
    {
        nextSequence();
        $("h1").text("Level " + String(level));
        keyPressed = true;
    }
    alert("Bye");
});