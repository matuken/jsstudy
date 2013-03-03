// posneg.js
var n = prompt("数値を入力してください",0);
if (n > 0) {
	document.write(n,"は正の数です。3倍します<br>");
	n = 3 * n;
} else {
	document.write(n,"は負の数です。−2倍します<br>");
	n = -2 * n;
}
document.write("nは",n,"になりました<br>");
