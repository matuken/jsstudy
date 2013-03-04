// whileloop.js
function whileloop() {
	var x = 0,i = 0;
	while (i < 10) {
		i++;
		if (i % 2)
			continue;
		x = x + i;
	}
	document.write("whileloopで1-10の偶数の合計は",x,"<br>");
}
