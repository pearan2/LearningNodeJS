/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   timer.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 13:59:29 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 14:06:54 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 타이머 기능을 제공하는 함수인 setTimeout, setinterval, setImmediate 는 노드에서 window 대신
// global 객체 안에 있습니다. setTimeout 과 setInterval은 웹 브라우저에서도 자주 사용됩니다.

// setTimeout(cb, ms) : 주어진 ms 이후에 cb 를 실행합니다.  // return : ID
// setInterval(cb, ms) : 주어진 ms 마다 cb 를 실행합니다.  // return : ID
// setImmediate(cb) : cb 를 즉시 실행합니다.			 // return : ID

// clearTimeout(아이디) : setTimeout을 취소합니다.
// clearInterval(아이디) : setInterval을 취소합니다.
// clearImmediate(아이디) : setImmedate를 취소합니다.

const timeout = setTimeout(() => {
	console.log('1.5 초후 실행');
}, 1500);

const interval = setInterval(() => {
	console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
	console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
	clearTimeout(timeout2);
	clearInterval(interval);
}, 2500);

const immedate = setImmediate(() => {
	console.log('즉시 실행');
});

const immedate2 = setImmediate(() => {
	console.log('실행되지 않습니다.');
});

clearImmediate(immedate2);