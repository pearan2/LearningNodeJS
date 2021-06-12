/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   readFile.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 15:02:43 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 15:10:53 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as fs from 'fs';

fs.readFile('./src/innerModule/readme.txt', (err, data) => {
	if (err) console.error(err);
	else {
		console.log(data);
		console.log(data.toString());
	}
});
// console.log(data) 를 했더니 웬 Buffer 라는 이상한 것이 출력됩니다. 그래서 data 에 toString()
// 을 붙여서 찍었더니 정상적인 문자열이 출력됩니다.
// readFile 의 결과물은 Buffer 라는 형식으로 제공됩니다. 지금은 단순히 버퍼를 메모리의 데이터 라고 생각하면 됩니다.
// fs 는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 불편합니다. 따라서 fs 모듈을 프로미스 형식으로 바꿔주는 방법을 사용합니다.

const fs_promise = fs.promises;

fs_promise.readFile('./src/innerModule/readme.txt')
	.then((data) => {
		console.log(data.toString());
	})
	.catch((error) => {
		console.error(error);
	})