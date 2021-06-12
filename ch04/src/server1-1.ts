/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server1-1.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 16:32:45 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 16:34:34 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http';

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' }); // 헤더
	res.write('<h1>Hello Node!<h2>'); // 본문
	res.end('<p>Hello Server!</p>'); // 응답을 종료하는 메서드, 만약 인수가 있다면 이 데이터도 본문에 적음
})
//listen 메서드에 cb 을 넣는대신 다음과 같이 서버에 listening 이벤트 리스너를 붙여도 됩니다.
server.listen(8080);

server.on('listening', () => {
	console.log('server:8080 started');
});

server.on('error', (error) => {
	console.error(error);
});