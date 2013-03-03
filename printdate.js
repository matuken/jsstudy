// printdate.js
function print_date(){
	var d = new Date();
	var day = d.getDate();
	x = "今日は" + day + "日です";
	if (day <= 15)
		x = x + "<br>月の前半です<br>";
	else
		x = x + "<br>月の後半です<br>";
	return x;
}	
