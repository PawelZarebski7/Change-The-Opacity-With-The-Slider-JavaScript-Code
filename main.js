var input = document.querySelector("input");
input.addEventListener("change", updateValue)
input.addEventListener("mousemove", updateValue)

function updateValue() {
	
	var percent = document.querySelector("span");
	percent.textContent = this.value;
	
	document.documentElement.style.setProperty("--light", 
	this.value/100)
}