var fir = process.argv[2];
var sec = process.argv[3];
var last = process.argv[4];

if ((parseInt(fir) > parseInt(sec)) && (parseInt(fir) > parseInt(last))){
  console.log(fir)
}
else {if (parseInt(sec) > parseInt(last)){
  console.log(sec)
}else{
  console.log(last)
};
};
