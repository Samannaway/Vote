var BJP = 0
var TMC = 0

function modisVote() {
    var newModiVal = ++BJP
    console.log(newModiVal);
    
    const alert = ()=>{
        alert("hi")
    }
    
    document.getElementsByClassName("vote").addEventListener("click",alert())
}

function MamtaVote() {
    var newMamtaVal = ++TMC
    console.log(newMamtaVal);
}

function modiEnding() {
    document.getElementById("yourVote").innerHTML= ` your vote to BJP is ${BJP}`
    if (BJP > 1) {
        document.getElementById("yourVote").innerHTML = "you have already voted to someone"
    }else if (TMC > 0) {
        document.getElementById("yourVote").innerHTML = "you have already voted to someone"
    }

    
}


function mamtaEnding() {
    document.getElementById("yourVote").innerHTML = `your vote to TMC is ${TMC}`
    if (TMC > 1) {
        document.getElementById("yourVote").innerHTML = "you have already voted to someone"
    }else if (BJP > 0) {
        document.getElementById("yourVote").innerHTML = "you have already voted to someone"
    }
}

function finalVote() {
    if (BJP >= 1) {
        console.log(modiEnding());
    }else if (TMC >= 1) {
        console.log(mamtaEnding());
    }

}