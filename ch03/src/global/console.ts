/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   console.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 13:50:32 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 13:58:20 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 지금까지 사용했던 console 도 노드에서는 window 대신 global 객체 안에 들어있으며,
// 브라우저에서의 console 과 거의 비슷합니다.
// console 객체는 보통 디버깅을 위해 사용합니다. 개발하면서 변수에 값이 제대로 들어있는지 확인하기 위해
// 사용하고, 에러발생 시 에러내용을 콘솔에 표시하기 위해 사용하며, 코드 실행 시간을 알아보려고
// 할때도 사용합니다. 대표적으로 console.log 메서드가 있습니다.


// console.time(레이블) : console.timeEnd(레이블) 과 대응되어 같은 레이블을 가진 time 과
// timeEnd 사이의 시간을 측정합니다.

// console.dir(obj, opt) : 객체를 콘솔에 표시 할 때 사용합니다. 첫번째 인수로 표시할 객체를 넣고
// 두번째 인수로 옵션을 넣습니다. 옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기가편합니다.
// depth 는 객체 안의 객체를 몇단계 까지 보여줄지 결정합니다. 기본값은 2 입니다.

const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
	outside: {
		inside : {
			key : 'value'
		}
	}
}

console.time('전체 시간');
console.log('평범한 로그입니다.');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error 에 담아주세요');

console.table([{name :'제로', birth: 1994}, {name:'hero', birth: 1988}])

console.dir(obj, { colors: false, depth : 2});
console.dir(obj, { colors: true, depth : 1});

console.time('시간 측정');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('시간 측정');

function b() {
	console.trace('에러 위치 추적')
}

function a() {
	b();
}
a();

console.timeEnd('전체 시간');