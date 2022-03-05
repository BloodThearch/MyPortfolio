// Global Variables

defaultProjectNumber = 0;

projectList = document.querySelectorAll(".project-window");

numberOfProjects = projectList.length;

arrowButtons = document.querySelectorAll(".project-arrow-button");


// Some Driver Code

for(var i = 1; i<numberOfProjects; i++){
    projectList[i].classList.add("hide")
}

arrowButtons[0].addEventListener("click", function() {
    defaultProjectNumber = (defaultProjectNumber-1);
    if(defaultProjectNumber<0)
    {
        defaultProjectNumber=numberOfProjects-1;
    }
    for(var i=0; i<numberOfProjects; i++){
        if(i==defaultProjectNumber){
            projectList[i].classList.remove("hide");
        }
        else{
            projectList[i].classList.add("hide");
        }
    }
})

arrowButtons[1].addEventListener("click", function() {
    defaultProjectNumber = (defaultProjectNumber+1)%numberOfProjects;
    for(var i=0; i<numberOfProjects; i++){
        if(i==defaultProjectNumber){
            projectList[i].classList.remove("hide");
        }
        else{
            projectList[i].classList.add("hide");
        }
    }
})