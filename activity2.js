function back(){
    window.location= "actviry 1.html";
}

function get(){
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML= "<h1>Score = "+score+"</h1>";
}