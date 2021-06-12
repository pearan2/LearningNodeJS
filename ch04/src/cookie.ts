/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cookie.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 17:58:00 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 22:52:45 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http';

// 클라이언트가 누구인지 기억하기 위해 서버는 요청에 대한 응답을 할 때 쿠키라는 것을 같이 보냅니다.
// 쿠키는 유효 기간이 있으며 name=zerocho 와 같이 단순한 키-값 쌍 입니다.
// 서버로부터 쿠키가 오면 웹 브라우저는 쿠키를 저장해두었다가, 다음 요청할 때 마다 쿠키를 동봉해서 보냅니다.
// 서버는 요청에 들어있는 쿠키를 읽어서 사용자가 누구인지 파악합니다.

// 브라우저는 쿠키가 있다면 자동으로 동봉해서 보내주므로 따로 처리 할 필요가 없습니다.
// 쿠키는 name=zerocho;year=1994 처럼 문자열 형식으로 존재합ㄴ다. 쿠키간에는 세미콜론으로 구분됩니다.
// 

const server = http.createServer((req, res) => {
	console.log(req.url, req.headers.cookie); // 두번째 요청 부터는 쿠키에 아래 내용이 적혀 옵니다.
	res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
	res.end('hello cookie');
});

server.listen(8080);
server.on('listening', () => {
	console.log('server start');
});