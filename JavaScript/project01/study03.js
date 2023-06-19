/* 
엄격모드 사용 명령어
모던자바스크립가 제공하는 '모듈'과 '클래스' 에서는 자동으로 적용되어 있기 때문에 이 둘을 사용중이라면 명령어를 사용할 필요가 없음
 */
"use strict";


/* 화살표 함수 기본 */



/**
 * 화살표 함수 기본
 * @date 6/19/2023 - 7:14:28 PM
 */
function test1(){
	let sum = (a, b) => a + b;

	let value01	= prompt("값1", 0);
	let value02	= prompt("값2", 0);

	alert(sum(value01,value02));
}


function test2(){
	let age = prompt("나이를 알려주세요.", 18);

	let welcome = (age < 18) ? () => alert('안녕') : () => alert("안녕하세요!");
	
	welcome();
}

function test3(){
	let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
		let result = a + b;
		return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
	};
	
	  alert( sum(1, 2) ); // 3
}

function test4(){
	let ask = (question, yes, no) => {
		confirm(question) ? yes() : no();
	};

	ask(
		"동의하십니까?",
		function() { alert("동의하셨습니다."); },
		function() { alert("취소 버튼을 누르셨습니다."); }
	);

}
