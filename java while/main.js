
var i = 0
var arr = []
while(i != -1){
    var a = prompt("search any food you like")
    i++
    if(a == 'exit'){
        break;
    }
    else{
        arr[i] = a
        i++
    }
}




// var i = 0 // starting
// var arr = []
// while(i != -1) // barabar nahi hona chahiye (ending)
// {
//      var a = prompt('Enter any number')
//      if(a == 'exit')
//      {
//           break;
//      }else
//      {
//           arr[i] = a 
//           i++
//      }
// }
// document.write('<h2>You Searched For : </h2>')
// var j = 0
// while(j < arr.length)
// {
//      document.write(arr[j]+'<br>')
//      j++
// }
// // var a = ['Hassan','abc@gmail.com',123,'Address 123 Street']
// // document.write(a[3])