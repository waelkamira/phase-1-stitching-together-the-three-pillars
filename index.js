/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  const glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  const colorStates = {
    "red" : "",
    "": "red"
  };
  
  const articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    const heart = e.target;
    mimicServerCall()
      .then(function(serverMessage){
        // STEP 2: Uncomment the 3 lines after the alert.
        // Here we're using Pillar 1 (DOM Manipulation) to update the screen and
        // mimicking Pillar 3 (Server Communication) to only update the screen if
        // the sending of information to the server succeeds.
        alert("You notified the server!");
        // alert(serverMessage);
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  }
  
  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  
  function mimicServerCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Pretend remote server notified of action!");
      }, 300);
    });
  }
  