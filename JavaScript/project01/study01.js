/* 
엄격모드 사용 명령어
모던자바스크립가 제공하는 '모듈'과 '클래스' 에서는 자동으로 적용되어 있기 때문에 이 둘을 사용중이라면 명령어를 사용할 필요가 없음
 */
"use strict";


/* 프로퍼티 확인하기 */

/**
 * getOwnPropertyDescriptor 메서드 사용 예시
 * @date 5/22/2023 - 8:41:00 PM
 */
function test1() {

	let user = {
		name: "John"
	};

	let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

	console.log(descriptor);

	alert(JSON.stringify(descriptor, null, 2));
	/* property descriptor:
	{
		"value": "John",
		"writable": true,
		"enumerable": true,
		"configurable": true
	}
	*/

}

/**
 * defineProperty 메서드 사용 예시
 * @date 5/22/2023 - 8:41:30 PM
 */
function test2() {

	/* 프로퍼티 생성 */
	let user = {};

	Object.defineProperty(user, "name", {
		value: "John"
	});

	let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

	alert(JSON.stringify(descriptor, null, 2));
	/*
	{
		"value": "John",
		"writable": false,
		"enumerable": false,
		"configurable": false
	}
	*/

	user['age'] = 1;

	descriptor = Object.getOwnPropertyDescriptor(user, 'age');

	alert(JSON.stringify(descriptor, null, 2));
	/* property descriptor:
	{
		"value": 1,
		"writable": true,
		"enumerable": true,
		"configurable": true
	}
	*/

}


/**
 * defineProperty 메서드를 활용한 writable 플래그 값 수정
 * @date 5/22/2023 - 8:42:48 PM
 */
function test3() {

	let user = {
		name: "John"
	};

	Object.defineProperty(user, "name", {
		writable: false
	});

	user.name = "Pete"; // Error: Cannot assign to read only property 'name'

}

function test4() {
	let user = {
		name: "John",
		toString() {
			return this.name;
		}
	};

	//커스텀 toString은 for...in을 사용해 열거할 수 있습니다.
	for (let key in user) alert(key); // name, toString

	alert(Object.keys(user));   // name, toString
}

function test5() {
	let user = {
		name: "John",
		toString() {
			return this.name;
		}
	};

	Object.defineProperty(user, "toString", {
		enumerable: false
	});

	// 이제 for...in을 사용해 toString을 열거할 수 없게 되었습니다.
	for (let key in user) alert(key);

	// 열거가 불가능한 프로퍼티는 Object.keys에도 배제됩니다.
	alert(Object.keys(user)); // name
}