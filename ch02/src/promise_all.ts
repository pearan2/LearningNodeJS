/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   promise_all.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 13:17:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 13:22:48 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// Promise.resolve 는 즉시 resolve 를 하는 프로미스를 만드는 방법입니다.
// 비슷한 것으로 즉시 reject 를 하는 Promise.reject 가 있습니다.
const promise1 = Promise.resolve('success1');
const promise2 = Promise.resolve('success2');

// 모든 프로미스가 resolve 되면 then 으로 넘어갑니다.
// then 의 매개변수에는 promise 들의 resolve 가 배열로 들어있습니다.
Promise.all([promise1, promise2])
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log('finally!');
	})