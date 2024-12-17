const accountId = 1732
let accountEmail = "anuragkhandelwal@gmail.com" // prefer to use "let"
var accountPassword = "Ajio@12#34" // avoid using "var"
accountCity = "jaipur" // it will work but not a good practice

console.log(accountPassword);
console.table([accountEmail, accountId, accountPassword, accountCity])
accountEmail = "AudioWorklet@google.com"
console.table([accountEmail, accountId, accountPassword, accountCity])

