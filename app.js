const getFullName = require('./Modules/names');
const getHobbies = require('./Modules/hobbies');

const getAll = () => {
    const obj = {
        fullName : getFullName("Federico" , "Bargossi"),
        hobbies : getHobbies("calcio" , "basket" , "videogames"),
    }
    return obj
}


console.log(getFullName("Federico" , "Bargossi"));
console.log(getHobbies("calcio" , "bakeset" , "videogames"));

console.log(getAll());