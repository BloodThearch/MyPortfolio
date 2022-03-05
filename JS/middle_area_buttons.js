// Global variables

var skillList = [
                    document.querySelector(".middle-area-1").querySelector(".flex-column-container")
                    .querySelector(".purple-textbox-2").querySelector(".programming-menu"),
                    document.querySelector(".middle-area-1").querySelector(".flex-column-container")
                    .querySelector(".purple-textbox-2").querySelector(".graphic-design-menu"),
                    document.querySelector(".middle-area-1").querySelector(".flex-column-container")
                    .querySelector(".purple-textbox-2").querySelector(".gnuLinux-menu")
                ];

var skillButtons = document.querySelectorAll(".skill-button");


// Functions

function addHide(n)
{
    if(skillList[n].classList.length != 4)
    {
        skillList[n].classList.add("hide");
    }
}

function removeHide(n)
{
    if(skillList[n].classList.length != 5)
    {
        skillList[n].classList.remove("hide");
    }
}

function changeSkillMenu(i) {

    if (i==0)
    {
        removeHide(0);
        addHide(1);
        addHide(2);
    }
    else if (i==1)
    {
        removeHide(1);
        addHide(0);
        addHide(2);
    }
    else if (i==2)
    {
        removeHide(2);
        addHide(0);
        addHide(1);
    }
}

// Button scripts

skillButtons[0].addEventListener("click", function () {
    removeHide(0);
    addHide(1);
    addHide(2);
    skillButtons[0].style.backgroundColor = "rgba(19,105,218,0.7)";
    skillButtons[1].style.backgroundColor = "rgba(19, 105, 218 ,0)";
    skillButtons[2].style.backgroundColor = "rgba(19, 105, 218 ,0)";
});

skillButtons[1].addEventListener("click", function () {
    removeHide(1);
    addHide(0);
    addHide(2);
    skillButtons[0].style.backgroundColor = "rgba(19,105,218,0)";
    skillButtons[1].style.backgroundColor = "rgba(19, 105, 218 ,0.7)";
    skillButtons[2].style.backgroundColor = "rgba(19, 105, 218 ,0)";
});

skillButtons[2].addEventListener("click", function () {
    removeHide(2);
    addHide(0);
    addHide(1);
    skillButtons[0].style.backgroundColor = "rgba(19,105,218,0)";
    skillButtons[1].style.backgroundColor = "rgba(19, 105, 218 ,0)";
    skillButtons[2].style.backgroundColor = "rgba(19, 105, 218 ,0.7)";
});


// Some Driver code
addHide(1);
addHide(2);

skillButtons[0].style.backgroundColor = "rgba(19, 105, 218 ,0)";
skillButtons[1].style.backgroundColor = "rgba(19, 105, 218 ,0)";
skillButtons[2].style.backgroundColor = "rgba(19, 105, 218 ,0)";

skillButtons[0].style.backgroundColor = "rgba(19,105,218,0.7)";