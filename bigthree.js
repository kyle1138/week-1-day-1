var fir = process.argv[2];
var sec = process.argv[3];
var last = process.argv[4];

fir = parseInt(fir)
sec = parseInt(sec)
last = parseInt(last)

if ((fir > sec) && (fir > last)){
  console.log(fir)
}
else {if (sec > last){
  console.log(sec)
}else{
  console.log(last)
};
};
