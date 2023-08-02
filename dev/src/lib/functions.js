//random number
function getRandomNumber(length, prevNumber = 0) {
    let randomNumber = Math.round(Math.random() * (length));
    while (randomNumber === prevNumber) {
      randomNumber = Math.round(Math.random() * (length));
    }
    return randomNumber; //has to store this number as prevNumber
  }
  
  
  
  
  
  //clone
  let clone = function (len, visibility) {
    let items = [];
    while (len > (items.length - 1)) {
      items.push(<div style={{ visibility: visibility }} key={items.length} className="child" id={"child" + items.length}></div>)
    }
    return items;
  }
  
