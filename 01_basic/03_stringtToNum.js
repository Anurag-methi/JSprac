//console.log("3" + (3+3)) //out 36
//console.log("3" + 3 + 3); //333
//console.log("3" * 3 + 4); // out 13
//console.log("3"*3); // out 9
//console.log("3"+3)
//console.log("3" * 3 + "4"); // 94 (3*3 as num 4 as string)
/*
string and number with "+" sign will convert the number to string and concatenate them
but string with number with "*,-" will convert the string to number and perform the operation 
*/

//console.log("2" - 3 + 3); //2
//console.log("3" - 3 + 4); // 4
//console.log("3" - 2); //1
//console.log(9 - "3");//6
//console.log("4" + 3 - "3"); // 40("4" is string which convert (3 - "3") to string but as there is "-" btw 3 and "3" so they will act as number)

let game = 11
gamer = ++game // first increment then assign
player = game++ // first assign then increment

console.log(gamer);
console.log(player);
console.log(game);
