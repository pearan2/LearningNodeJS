/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   destructuring.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 11:20:42 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 12:34:05 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 다음은 객체의 속성을 같이 이름의 변수에 대입하는 코드입니다.
const candyMachine = {
	stat: {name: 'node', count: 5},

	getCandy() {
		this.stat.count--;
		return (this.stat.count)
	}
}

const {getCandy, stat: {count} } = candyMachine

// 이는 유효한 문법입니다. candyMachine 객체 안의 속성을 찾아 변수와 매칭합니다. count 처럼 여러단계안의 속성도 찾을 수 있습니다.
// getCandy 와 count 변수가 초기화 된 것입니다.
// 다만 구조분해할당 을 사용하면 함수의 this 가 달라질수 있습니다. getCandy 함수르 사용해 보세요. 달라진 this 를 원래대로 바꿔주려면
// bind 함수를 사용해야 합니다.
const getCandy_binded = getCandy.bind(candyMachine);

console.log(getCandy_binded())
console.log(getCandy_binded())


// 배열에 대한 구조분해 할당 문법도 존재합니다.

var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// 다음과 같이 바꿀수 있습니다.
// 구조분해할당 문법도 코드 줄수를 상당히 줄여 줄수 있으므로 상당히 유용합니다.
// 특히 노드는 모듈시스템을 사용함로 이러한 방식을 자주 씁니다.

const array2 = ['nodejs', {}, 10, true];
const [node2, obj2, , bool2] = array;