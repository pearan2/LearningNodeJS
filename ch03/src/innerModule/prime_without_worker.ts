/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   prime_without_worker.ts                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 13:20:27 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 14:46:16 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

const min: number = 2;
const max: number = 10000000;
const primes: number[] = [];

function generatePrimes(start: number, end: number): void {
	for (let i: number = start; i < end; i++)
	{
		let isPrime: boolean = true;
		for (let j: number = min; j < Math.sqrt(end); j++)
		{
			if (i !== j && i % j === 0) {
				isPrime = false;
				break ;
			}
		}
		if (isPrime) primes.push(i);
	}
}
console.log('primes length : ', primes.length);   // out >> primes length :  0

console.log('generate start');
generatePrimes(min, max + 1);   // 이 함수가 실행되는 동안에는 아래 라인이 실행되지 않음.
console.log('generate end');

console.log('primes length : ', primes.length);    // out >> 반드시 664579 라는 값을 출력함
