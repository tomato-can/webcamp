/* var hello = 'Hello World';
//var =　変数宣言関数
 //文字列と数値を代入可能
var self = "to me";
alert(hello + self);
//文字列の結合は+
*/

//条件式
/* if(条件式1)｛
	処理
   }else if(条件){
	処理
   }else{
	処理
   }

var orange = 100;
var apple = 120;

if(orange < apple){
	alert('orange is cheaper than apple');
}else if(orange == apple){
	alert('orange and apple are at a same price');
}else{
	alert('orange is more expensive than apple')
}
*/

//繰り返し処理
//while
/*
var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num*2;
	count = count +1;
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です')；

//do-while

do{
	最低一回は行われる処理
}while(条件式);

//for
決められた回数の繰り返し処理

whileとの違いは
	繰り返しで利用する変数の初期値を設定しないといけない
	繰り返し条件を満たす場合の処理を記述しなければならない

簡単な決められた回数の繰り返しを行いたいときによく使われる

for(初期値;繰り返し条件;処理後の変化式){
	処理
}

var i; //変数iの宣言
var num = 0;　//numの宣言と初期値0

for(i = 1; i < 11; i++){　　//iの初期値0で、iが11いかの場合の時繰り返し、処理後iに1を足す　i++はi = i +1
	num = num +i
}

alert('1から10まで足し算した結果は'+num+'です');

