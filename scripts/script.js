function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function closeMenu() {
    var x = document.getElementById("menu");
    x.className = "topnav";
}

function openWhoWantsToBeAMilionaireGame() {
    window.open('https://silviqmiteva.github.io/millionaire-quiz-game');
}

function closeInfo() {
    document.getElementById("info").style = "";
}

function showProjectInfo(name) {
    document.getElementById("info").style.display = "block";
    let projectName = "";
    let images = [];
    switch (name) {
        case "culinaryBook": projectName = "The culinary book"; images = ["recipe.png", "recipe4.png", "recipe3.png", "recipe2.png", "recipe5.png"]; break;
        case "omd": projectName = "OMD"; images = ["omd1.png", "omd2.png", "omd3.png", "omd4.png", "omd5.png", "media1.gif"]; break;
    }
    let html = `<h1>${projectName}</h1>`;
    for (let i in images) {
        html += "<img class='image-container' src='./images/" + images[i] + "' >";
    }
    document.getElementById("projectContent").innerHTML = " <span onclick='closeInfo()' class='close'>&times;</span>" + html;

}