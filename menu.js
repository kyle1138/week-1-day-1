var food = process.argv[2];
food = food.toLowerCase();

if ((food == "fruit salad") || (food == "tofurkey")){
  console.log("This cuisine is vegan friendly!")
}
else if ((food == "steak") || (food == "pork chops")){
  console.log("Vegans beware!")
}
else
  {console.log("This item is not on the menu.")
};
