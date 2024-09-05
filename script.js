function makeid(l) {
  // write your code here
	var character='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var result='';
	for(let i=0; i<l; i++){
		result+=character.charAt(Math.floor(Math.random()*character.length));
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
