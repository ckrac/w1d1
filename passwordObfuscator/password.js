var password = process.argv[2];

function obfscate(password){
 password = password
 .replace(/[a]/g, '4')
 .replace(/[e]/g, '3')
 .replace(/[o]/g, '0')
 .replace(/[l]/g, '1');

// I could use method .map as well
 return password;
}
console.log(obfscate(password));