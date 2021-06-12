/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   exec.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 14:46:26 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 14:54:44 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import { exec } from 'child_process';

let process = exec('ls');

process.stdout?.on('data', function(data) {
	console.log(data.toString());
}); // 실행 결과

process.stderr?.on('data', function(data) {
	console.error(data.toString());
});

let process2 = exec('./src/innerModule/test.out');

process2.stdout?.on('data', function(data) {
	console.log(data.toString());
}); // 실행 결과

process2.stderr?.on('data', function(data) {
	console.error(data.toString());
});