var nameVar = 'andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'frank';
console.log('nameConst', nameConst);

//block scoping

const fullName = 'nene daggy';
let firstName;
if (fullName) {
     firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)