/*!
 * resDateLogger will print out the JavaScript objects in strings 
 * and display in the inspect console or terminal window
 */

exports.resDateLogger = function (jsObj) {
  if(resData){
    console.log(JSON.stringify(jsObj))
  } else{
    console.log('The object is Null')
  }
}

module.exports = {
  resDateLogger
}