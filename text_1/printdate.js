// printdate.js
function print_date(){
	var d = new Date();
	var day = d.getDate();
	x = "今日は" + day + "日です";
	switch (day) {
		case "1":
			x = x + "<br>月初です<br>";
			break;
		case "31":
			x = x + "<br>月末です<br>";
			break;
		default:
			x = x + "<br>月中です<br>";
	}
	return x;
}	
