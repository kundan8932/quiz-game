const quiz= document.getElementById('quiz')
function submit1() {
    let score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }  
    
    if(score<3)
    {
    //    quiz.innerHTML =document.write("Your Failed .")
    //    quiz.innerHTML =document.writeln("Your score is :",score)
         alert("YOUR FAIL!!")
    }
    if(score>=3){
        quiz.innerHTML =`<a href="round2.html"><button value="submit" onclick="submit2()" class="btn-1" id="btn">Go To Secound Round</button></a> `
    }
    }
   
    function submit2() {
        let score = 0;
        if (document.getElementById('correct6').checked) {
            score++;
        }
        if (document.getElementById('correct7').checked) {
            score++;
        }
        if (document.getElementById('correct8').checked) {
            score++;
        }
        if (document.getElementById('correct9').checked) {
            score++;
        }
        if (document.getElementById('correct10').checked) {
            score++;
        }  
        console.log("your scoreis ",score)
        if(score<3)
        {
             alert("YOUR FAIL!!")
        }
        if(score>=3){
            quiz.innerHTML =`<a href="round3.html"><button value="submit" onclick="submit2()" class="btn" id="btn">Go To Last Round</button></a> `
        }
        }
        function submit3() {
            let score = 0;
            if (document.getElementById('correct11').checked) {
                score++;
            }
            if (document.getElementById('correct12').checked) {
                score++;
            }
            if (document.getElementById('correct13').checked) {
                score++;
            }
            if (document.getElementById('correct14').checked) {
                score++;
            }
            if (document.getElementById('correct15').checked) {
                score++;
            } 
            console.log("your score is ",score)

            quiz.innerHTML =`<a href="#"><button value="submit" onclick="submit2()" class="btn" id="btn">CONGRATS YOU wON ALL THE ROUNDS</button></a> `
}