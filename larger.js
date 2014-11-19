var first = process.argv[2];
var second = process.argv[3];


var fl = (first.length);
var sl = (second.length);



if ( fl > sl ){
  console.log(first.slice(0, -(fl/2)))
}else{
  console.log(second.slice(0, -(sl/2)))
};







//var flf = Math.floor(fl/2);
//var slf = Math.floor(sl/2);




















console.log(fl);
console.log(fl/2);
console.log(flf);
console.log(sl);
console.log(sl/2);
console.log(slf);
