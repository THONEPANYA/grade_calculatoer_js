let score = prompt(" Enter Your're Score : ")

if (score >= 80){

    document.getElementById("result").innerHTML = ("You're Grade is A")

}else if(score >= 70){

    document.getElementById("result").innerHTML = ("You're Grade is B")

}else if(score >= 60){

    document.getElementById("result").innerHTML = ("You're Grade is C")

}else if(score >= 50){

    document.getElementById("result").innerHTML = ("You're Grade is D")

}else if(score >= 40){

    document.getElementById("result").innerHTML = ("You're Grade is F")

}
else {

    document.getElementById("result").innerHTML = ("You're Grade is F+")

}