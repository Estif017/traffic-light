let circle = document.querySelectorAll('.circle');

function switchLight(index, time) {
	return new Promise((resolve, reject) => {
		// console.log(circle[index].attributes[1].value + ' on');
		circle[index].style.backgroundColor = circle[index].getAttribute('color');
		setTimeout(() => {
			circle[index].style.backgroundColor = 'black';
			// console.log(circle[index].attributes[1].value + ' off');
			index += 1;
			resolve(index);
		}, time);
	});
}

(async function () {
	try {
		while (true) {
			await switchLight(0, 4000);
			await switchLight(1, 2000);
			await switchLight(2, 6000);
		}
	} catch (e) {
		console.log(e);
	}
})();
