function sConsole(event){
	event.preventDefault();
	const input = document.getElementById('inp');
	if(input.value != "RESET"){
		const textV = document.getElementById('lyrics');
		if(textV.innerHTML.length != 0) {
			textV.innerHTML = textV.innerHTML+"\n"+input.value;
		} else {
			textV.innerHTML = input.value;
		}
	} else {
		const textV = document.getElementById('lyrics');
		textV.innerHTML = '';
	}
	input.value = '';
}