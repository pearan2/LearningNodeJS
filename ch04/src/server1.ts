/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server1.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 16:19:46 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 16:25:49 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http';

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' }); // 헤더
	res.write('<h1>Hello Node!<h2>'); // 본문
	res.end('<p>Hello Server!</p>'); // 응답을 종료하는 메서드, 만약 인수가 있다면 이 데이터도 본문에 적음
})
	.listen(8080, () => {
		console.log('8080 port is ready');
	});