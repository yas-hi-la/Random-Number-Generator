var usernum = document.getElementById("usernum")
var result = document.getElementById("result")
var score = document.getElementById("score")
var compnum = Math.floor(Math.random()*10) + 1
var s = 10

function check(){
    if(compnum == Number(usernum.value)){
        result.textContent = "Correct"
        alert("You Won")
        usernum.value = ""
    }
    else{
        result.textContent = "Wrong"
        s = s - 1
        if(s == 0){
            alert("You are Out")
        }
        score.textContent = "Score : "+s
        usernum.value = ""
    }
}