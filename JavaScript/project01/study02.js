/* 
엄격모드 사용 명령어
모던자바스크립가 제공하는 '모듈'과 '클래스' 에서는 자동으로 적용되어 있기 때문에 이 둘을 사용중이라면 명령어를 사용할 필요가 없음
 */
"use strict";


/* 프로퍼티 getter와 setter */



/**
 * 테스트 예제
 * @date 6/1/2023 - 8:33:11 PM
 */
function test1(){


	let obj = {
		get propName() {
			// getter, obj.propName을 실행할 때 실행되는 코드
		},

		set propName(value) {
			// setter, obj.propName = value를 실행할 때 실행되는 코드
		}
	};

}

function test2(){

	let user = {
		name: "John",
		surname: "Smith",

		get fullName() {
			return `${this.name} ${this.surname}`;
		}
	};

	alert(user.fullName); // John Smith

}

function test3(){

	let user = {
		name: "John",
		surname: "Smith",

		get fullName() {
			return `${this.name} ${this.surname}`;
		},

		set fullName(value) {
			[this.name, this.surname] = value.split(" ");
		}
	};

	// 주어진 값을 사용해 set fullName이 실행됩니다.
	user.fullName = "Alice Cooper";

	alert(user.name); // Alice
	alert(user.surname); // Cooper

}


function test4(){

	let user = {
		name: "John",
		surname: "Smith"
	};

	Object.defineProperty(user, 'fullName', {
		get() {
			return `${this.name} ${this.surname}`;
		},

		set(value) {
			[this.name, this.surname] = value.split(" ");
		}
	});

	alert(user.fullName); // John Smith

	for (let key in user) alert(key); // name, surname
}


function test5() {
	// Error: Invalid property descriptor.
	Object.defineProperty({}, 'prop', {
		get() {
			return 1
		},

		value: 2
	});
}


function test6(name, birthday) {
	this.name = name;
	this.birthday = birthday;

	// age는 현재 날짜와 생일을 기준으로 계산됩니다.
	Object.defineProperty(this, "age", {
		get() {
			let todayYear = new Date().getFullYear();
			return todayYear - this.birthday.getFullYear();
		}
	});

	let john = new User("John", new Date(1992, 6, 1));

	alert( john.birthday ); // birthday를 사용할 수 있습니다.
	alert( john.age );      // age 역시 사용할 수 있습니다.
}