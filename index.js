var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("keydown", function(event) {
        makeSound(event);
        makeButtonAnimation(event);
    });

    function makeSound(event) {
        console.log(event.key)
        switch (event.key) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "a":
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            case "d":
                var tom_1 = new Audio('sounds/tom-1.mp3');
                tom_1.play();
            case "j":
                var tom_2 = new Audio('sounds/tom-2.mp3');
                tom_2.play();
            case "k":
                var tom_3 = new Audio('sounds/tom-3.mp3');
                tom_3.play();
            case "l":
                var tom_4 = new Audio('sounds/tom-4.mp3');
                tom_4.play();
            default:
                console.log(event.key);
                break;
        }
    }

    function makeButtonAnimation(event) {
        console.log(event.key);
        var activeButton = document.querySelector("." + event.key);

        activeButton.classList.add(".pressed");

        // setTimeout(function() {
        //     activeButton.classList.remove(".pressed");
        // }, 100);

    }

    var houseKeeper1 = {
        yearsOfExperience: 12,
        name: "Jane",
        cleaningRepertoire: ["bathroom", "lobby"]

    }

    function BellBoy(name, cleaningRepertoire, yearsOfExperience, moveSuitCase) {
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
        this.cleaningRepertoire = cleaningRepertoire;
        this.moveSuitCase = function() {
            alert("Move suit case!");
        }
    }

    var houseKeepr2 = new BellBoy("tri", 12, "lobby")
}