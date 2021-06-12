/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cookie2.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 18:09:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 21:52:19 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http'
import * as fs from 'fs/promises'
import * as url from 'url'
import * as qs from 'querystring'

const parseCookie = (cookie:string = '') : any => {
	return (cookie
		.split(';')
		.reduce((acc, cur) => {
			acc[cur.split('=')[0]] = cur.split('=')[1];
			return acc;
		}, {}));
}

const server = http.createServer(async (req, res) => {
	const cookies = parseCookie(req.headers.cookie);

	// 주소가 /login 으로 시작하는 경우
	if (req.url?.startsWith('/login')) {
		const { query } = url.parse(req.url);
		const { name } = qs.parse(query as string);
		const expires = new Date();
		expires.setMinutes(expires.getMinutes() + 5); // 쿠키 유효시간을 현재 +5분으로 설정
		res.writeHead(302, {
			Location: '/',
			'Set-Cookie' : `name=${encodeURIComponent(name as string)}; Expires=${expires.toUTCString()}; HttpOnly; Path=/`
		});
		res.end();
	} else if (cookies.name) {
		res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
		res.end(`${cookies.name}`)
	} else {
		try {
			const data = await fs.readFile('./html/cookie2.html');
			res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
			res.end();
		} catch (err) {
			res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'})
			console.error(err);
		}
	}
});

server.listen(8080, () => {
	console.log('server started');
});