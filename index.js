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
  