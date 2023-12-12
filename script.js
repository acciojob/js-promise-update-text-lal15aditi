//your JS code here. If required.
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hello, world!');
	}, 1000)
})

p.then((data) => {
	output.innerText = data;
})