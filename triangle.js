function checkTriangle() {
	let inputside1 = document.getElementById("side1").value;
	let inputside2 = document.getElementById("side2").value;
	let inputside3 = document.getElementById("side3").value;
	let result = document.querySelector(".result");

	if (inputside1 != "" && inputside2 != "" && inputside3 != "") {
		if (inputside1 === "0" && inputside2 === "0" && inputside3 === "0") {
			result.innerHTML = "incorect";
			//console.log("incorect");
		} else if (
			inputside1 + inputside2 <= inputside3 ||
			inputside1 + inputside3 <= inputside2 ||
			inputside2 + inputside3 <= inputside1
		) {
			//console.log("incorect");
			result.innerHTML = "incorect";
		} else if (inputside1 === inputside2 && inputside2 === inputside3) {
			//console.log("Equilateral");
			result.innerHTML = "Equilateral";
		} else if (inputside1 === inputside3 || inputside3 === inputside1) {
			//console.log("Isosceles");
			result.innerHTML = "Isosceles";
		} else {
			//console.log("Scalene");
			result.innerHTML = "Scalene";
		}
	} else {
		//console.log("please enter all fields");
		result.innerHTML = "please enter all fields";
	}
}
