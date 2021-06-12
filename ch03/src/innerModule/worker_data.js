/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   worker_data.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 13:10:55 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 13:20:05 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// new Worker 를 호출 할 때 두번째 인자로 데이터를 줄 수 있습니다.

if (isMainThread) {
	const threads = new Set();
	threads.add(new Worker(__filename, {
		workerData: {start: 1}
	}));
	threads.add(new Worker(__filename, {
		workerData: {start: 2}
	}));
	for (let worker of threads) {
		worker.on('message', message => console.log('from worker', message));
		worker.on('exit', () => {
			threads.delete(worker);
			if (threads.size == 0) {
				console.log('job done');
			}
		});
	}
} else {
	const data = workerData;
	parentPort.postMessage(data.start + 100);
}