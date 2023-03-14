//getScore return the saved local storeage item
/*
score = {
    name:"Name",
    score:34
}
*/


export function setScore(scoreObjs,name){

    let scores =  localStorage.getItem(name);
    if(!scores){
       localStorage.setItem(name,JSON.stringify([]));
    }   
    scores = JSON.parse(localStorage.getItem(name));

    scores.unshift(scoreObjs); //inserted the score

    let sortedList = scores.sort((a,b) => a.score - b.score) //sort in asecending order

    if(sortedList.length > 5){
        sortedList.pop();
    }

    localStorage.setItem(name,JSON.stringify(scores));
  }



export function getScores(name){
    return JSON.parse(localStorage.getItem(name));
}