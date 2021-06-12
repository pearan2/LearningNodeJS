/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   promise.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 12:40:29 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 23:44:21 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 자바스크립트와 노드에서는 주로 비동기를 사용합니다. 특히 이벤트리스너를 사용할때 콜백함수를 자주 사용합니다.
// ES2015 부터는 자바스크립트와 노드의 API 들이 콜백 대신 프로미스 기반으로 재구성되며, 악명높은 콜백지옥
// 현상을 극복했다는 평가를 받고 있습니다.

const condition = false; // true면 resolve, false 면 reject

// resolve 와 reject 에 넣어준 인수는 각각 then 과 catch 의 매개변수에서 받을 수 있습니다.
// 즉, reolsve('성공') 이 호출되면 then 의 message 가 '성공' 이 됩니다.
// 프로미스를 쉽게 설명하면, 실행은 하되 결과값은 나중에 받는 객체입니다.
// 결과값은 실행이 완료된 후 then 이나 catch 메서드를 통해 받습니다.
const promise = new Promise((resolve, reject) => {
	if (condition){
		resolve('성공!');
	} else {
		reject('실패!');
	}
});

// 다른 코드가 들어갈 수 있음

promise
	.then((message => {
		console.log(message); // 성공한 경우 실행
	}))
	.catch((error) => {
		console.log(error); // 실패한 경우 실행
	})
	.finally(() => {
		console.log('무조건!'); // 반드시 마지막에 실행
	});



// then 이나 catch 에서 다시 then 이나 catch 를붙일수 있습니다.
// 이전 then 의 리턴값을 다시 then 의 매개변수로 넘깁ㄴ디ㅏ. 프로미스를 return 한 경우에는 
// 프로미스가 수행 된 후 다음 then 이나 catch 가 호출됩니다.

promise
	.then((message) => {
		return new Promise((resolve, reject) => {
			resolve(message);
		});
	})
	.then((message2) => {
		return new Promise((resolve, reject) => {
			resolve(message2);
		});
	})
	.then((message3) => {
		console.log(message3);
	})
	.catch((error) => {
		console.log(error);
	});