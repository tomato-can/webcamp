//functionの位置は同じscript内であればどこでも問題なし
//別のところにアル場合、先に呼び出すとエラー
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

alert('あなたの選んだ手は'+ user_hand + 'です');

function getJShand(){
	var js_hand_num = Math.floor(Math.random()*3);
//Mathとは数学的な関数が入れられている組み込み関数。
//mathに.floorなどを付けることで様々な関数を呼べる
//MAth.floorは小数点以下を切り捨てる関数
//Math.randomは疑似ランダム(完全な乱数ではない)を
//0以上1未満の範囲で(浮動小数点を含む)返す
//つまりこの場合、*3をすることで、0-2の整数を割り出せる
	var js_hand;
	//varはどっちでもいけそうだけど、しておくほうが無難
	//ちなみにvarを付けるとスコープが小さくなって、他の関数に影響を与えない
	if(js_hand_num == 0){
		js_hand = "グー"
	}else if(js_hand_num ==1){
		js_hand = "チョキ"
	}else if(js_hand_num == 2){
		js_hand ="パー"
	}

	return js_hand;
}

alert(getJShand());


//実装

var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");

while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
	alert("グー・チョキ・パーのいずれかを入力して下さい");
	user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

//しつこく正しい入力を求める時はwhile使える
var js_hand = getJShand();

var judge = winlose(user_hand, js_hand);
if(user_hand != null){
	alert("あなたの選んだ手は"+ user_hand+"です。\nJavascriptの選んだ手は"+ js_hand + 'です。\n 結果は'　+ judge + 'です');
// \nで改行　==　￥n
}else{
	alert('またチャレンジしてね')
}
//alertウィンドウでキャンセルは値にnullをいれたことになる

function winlose(user, js){
	var winloseStr;
//宣言済みの変数に代入するときも;
	if(user == "グー"){
		if(js == "グー"){
			winloseStr = "あいこ";
		}else if(js == "チョキ"){
			winloseStr = "勝ち";
		}else if(js == "パー"){
			winloseStr = "負け";
		}
	}else if(user == "チョキ"){
		if(js = "グー"){
			winloseStr ="負け";
		}else if(js == "チョキ"){
			winloseStr = "あいこ";
		}else if(js == "パー"){
			winloseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winloseStr = "勝ち";
		}else if(js == "チョキ"){
			winloseStr = "負け";
		}else if(js == "パー"){
			winloseStr = "あいこ";
		}
	}

	return winloseStr;
}
 function getJShand(){
 	var js_hand_num = Math.floor(Math.random()*3);

 	var js_hand;

 	if(js_hand_num == 0){
 		js_hand = "グー";
 	}else if(js_hand_num == 1){
 		js_hand = "チョキ";
 	}else if(js_hand_num == 2){
 		js_hand = "パー";
 	}

 	return js_hand
 }