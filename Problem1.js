/* example: if n=5, print
    +
   ++
  +++
 ++++
+++++

*/

function pluses_and_space(s, p){
    let str = "";
    for(let i = 0; i < s; i++){
        str += " ";
    }
    for(let j = 0; j < p; j++){
        str += "+";
    }
    return str;
}

const lines = 7;

let spaces = lines-1;

while(spaces >= 0){
    let pluses = lines - spaces;
    console.log(pluses_and_space(spaces, pluses));
    spaces--;
}
