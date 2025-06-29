//! one line return without return keyword
// const abcd = ()=> "harsh";
// console.log("Hey " + abcd());

//! for object, return in one line return, use ()
// const abcd = ()=>({name:"mayur", age:15});
// console.log(abcd());

//! if one parameter is needed, no need of ()
// const abcd = x=> x*100;
// console.log(abcd(5));

//! map, filter -> dono hi array pe chalte h, aur dono ka kaam hai array par kuch perform karna and "ek naya array return karna"

//? map -> har element par kuch karo and naye array mein rakho
// var arr = [1,2,3,4,5];
// var new_arr = arr.map(e=> e*1000); //! map ke andar return karne ke wajah se hi elements naye array mein place hote hai
// console.log(new_arr);

// var state = [11,22,3,4,5,6,7,8,9,10,11,12,13,14];
// var new_state = state.map(e=> e>5 ? e*1000 : e);
// console.log(new_state)

//? filter -> ek array mein se saare wo number hata do jo ki 5 se choote hai
// var arr = [1,2,3,4,5,6];
// const ans = arr.filter(e=> e>4);
// console.log(ans);

var arr = [
    {name: "mayur", gender: "male"},
    {name: "diya", gender: "female"},
    {name: "robert", gender: "male"}
]
const ans = arr.filter(e=> e.gender === "male");
console.log(ans);