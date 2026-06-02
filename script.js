const makeChange = (c) => {
  // your name here
	let a=c/25,b=(c-a)/10,l=(c-a-b)/10,e=(c-a-b-l);
	let result = {"q":a,"d":b,"n":l,"p":e};
	return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
