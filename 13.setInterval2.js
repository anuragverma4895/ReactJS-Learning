var i=setInterval(() => {
	console.log("Hello Incapp");
}, 2000);

setTimeout(() => {
	clearInterval(i)
}, 7000);