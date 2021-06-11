/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   worker_threads.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 22:57:12 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 23:06:28 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) { // 부모 일 때
	const worker = new Worker(__filename);
	worker.on('message', message => console.log('from worker', message));
	worker.on('exit', () => console.log('worker exit'));
	worker.postMessage('ping');
} else { // 워커일때
	parentPort.on('message', (value) => {
		console.log('from parent' ,value);
		parentPort.postMessage('pong');
		parentPort.close();
	});
}