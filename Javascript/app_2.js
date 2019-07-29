//関数

function addString(strA){ //関数名addString 引数strA
	var addStr = "Hello" + srtA; //変数宣言addstr
	return addStr;  //戻り値return
}

//使い方

var alertString;
alertString = addString("Webcamp");

alert(alertString);

function addString(strA){
	var addStr = "hello" + strA;
	return addStr;
}

//functionがメインの下にないと上手く動かない

//ブラウザ上での入力

//プロンプトウィンドウを使う

var promptStr = prompt('何か好きな文字を入力してください');
//promptは引数の文字列を表示し、ユーザーに入力を求める
//この場合promptStrにpromptウインドウで入力された値が
//alert関数でalertされる
alert(promptStr);