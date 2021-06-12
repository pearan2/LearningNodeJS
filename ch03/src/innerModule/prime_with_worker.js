/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   prime_with_worker.js                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 14:02:20 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 14:44:17 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
const max = 10000000;
let primes = [];

function generatePrimes(start, end) {
	for (let i = start; i < end; i++)
	{
		let isPrime = true;
		for (let j = min; j < Math.sqrt(end); j++)
		{
			if (i !== j && i % j === 0) {
				isPrime = false;
				break ;
			}
		}
		if (isPrime) primes.push(i);
	}
}

if (isMainThread) {
	const threadCount = 8;
	const threads = new Set();
	const threadRange = Math.ceil( (max - min) / threadCount ) + 1;
	let start, end = min;

	console.time('prime');

	for (let i = 0; i < threadCount; i++)
	{
		start = end;
		end += (threadRange + 1);
		if (end > max + 1)
			end = max + 1;
		threads.add(new Worker(__filename, {
			workerData : {
				start,
				end
			}
		}));
	}
	for (let worker of threads)
	{
		worker.on('error', (err) => {
			throw err;
		});
		worker.on('exit', () => {
			threads.delete(worker);
			if (threads.size === 0)
			{
				console.timeEnd('prime');
				console.log(primes.length);
			}
		});
		worker.on('message', (msg) => {
			primes = primes.concat(msg);
		});
	}
} else {
	generatePrimes(workerData.start, workerData.end);
	parentPort.postMessage(primes);
}
