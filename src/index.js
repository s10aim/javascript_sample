/**
 * 変数宣言
 */
// var
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// let
let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言"

// const
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可能
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "あやね",
  age: 23
};
console.log(val4);

val4.name = "ayane";
val4.address = "Okinawa";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ayane";
// const age = 23;

// 「私の名前はayaneです。年齢は23歳です。」
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str) {
//    return str;
//  }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
// 処理が簡単な場合は省略して書ける
// const func3 = (num1, num2) => num1 + num2
console.log(func3(1, 3));

/**
 * 分割代入
 */
// オブジェクト
// const myProfile = {
//   name: 'ayane',
//   age: 23
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1)

// const { name, age } = myProfile
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

// 配列
const myProfile = ["ayane", 23];
const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
