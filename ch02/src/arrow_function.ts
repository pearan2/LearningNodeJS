/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   arrow_function.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 11:12:45 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 11:19:51 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 화살표함수 라는 새로운 함수가 추가되었으며 기존의 function() {} 도 그대로 사용 할 수있습니다.

function add1(x, y) {
	return (x + y);
}

const add2 = (x, y) => {
	return (x + y)
}

const add3 = (x, y) => (x + y)

function not1(x) {
	return (!x)
}

const not2 = x => !x

// 기존 function 과 다른점은 this 바인드 방식입니다. 

var relationship1 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends: function() {
		var that = this; // relationship1 을 가리키는 this를 that 에 저장
		this.friends.forEach(function (friend) {
			console.log(that.name, friend);
		})
	}
}
relationship1.logFriends();

const relationship2 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends() {
		this.friends.forEach(friend => {
			console.log(this.name, friend)
		})
	}
}
relationship2.logFriends();

// relationship1.logFriends() 안의 forEach 문에서 function 선언문을 사용했습니다.
// 각자 다른 함수 스코프의 this 를 가지므로 that 변수를 사용해서 relationship1 에 간접적으로 접근했습니다.

// 하지만 화살표함수는 바깥스코프인 logFriends() 의 this 를 그대로 사용 할 수 있습니다. 상위 스코프의 this 를 그대로 물려 받는 것입니다.