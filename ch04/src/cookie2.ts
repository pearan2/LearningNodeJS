/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cookie2.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 18:09:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/13 00:29:52 by honlee           ###   ########seoul.kr  */
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
	console.log(cookies);

	// 주소가 /login 으로 시작하는 경우
	if (req.url?.startsWith('/login')) {
		const { query } = url.parse(req.url);
		const { name } = qs.parse(query as string);
		const expires = new Date();
		expires.setMinutes(expires.getMinutes() + 5); // 쿠키 유효시간을 현재 +5분으로 설정
		res.writeHead(302, {
			Location: '/',
			'Set-Cookie' : `name=${encodeURIComponent(name as string)};Expires=${expires.toUTCString()};HttpOnly;Path=/`,
		});
		res.end();
	} else if (cookies.name) {
		res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
		res.end(`${cookies.name} 님 안녕하세요.`)
	} else {
		try {
			const data = await fs.readFile('./html/cookie2.html');
			res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
			res.end(data);
		} catch (err) {
			res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'})
			console.error(err);
		}
	}
});

server.listen(8080, () => {
	console.log('server started');
});

// 쿠키는 mycookie=test 같은 문자열 입니다.

// 주소가 /login 으로 시작 할 경우에는 url 과 querystring 모듈로 각각 주소와 주소에 딸려오는
// query 를 분석합니다. 그리고 쿠키의 만료시간도 지금으로부터 5분 뒤로 설정했습니다.
// 이제 302 응답코드, 리다이렉트 주소와 함께 쿠키를헤더에 넣습니다.
// 브라우저는 이 응답코드를 보고 페이지를 해당 주소로 리다이렉트합니다. 헤더에는 한글을 설정 할 수 없으므로
// name 변수를 encodeURIComponent 메서드로 인코딩했습니다.
// 또한 Set-Cookie의 값으로는 제한된 ASCII 코드만 들어가야 하므로 줄바꿈을 넣으면 안됩니다.

// 그 외에 경우 (/로 접속했을때) 먼저 쿠키가 있는지 없는지를 확인합니다. 쿠키가 없다면 로그인 할수있는 페이지를 보냅니다.
// 처음 방문한 경우에는 쿠키가 없으므로 cookie2.html 이 전송됩니다. 쿠키가 있다면 로그인한 상태로 간주하여 인사말을 보냅니다.

// 쿠키에 들어가면 안되는 글자들이 있는데, 대표적으로 한글과 줄바꿈입니다. 한글은 encodeURIComponent 로 감싸서 넣습니다.

// 쿠키명=쿠키값 : 기본적인 쿠키값입니다. mycookie=test 또는 name=zerocho 와 같이 설정합니다.

// Expires=날짜 : 만료기한입니다. 이 기한이 지나면 쿠키가 제거됩니다. 기본값은 클라이언트가 종료될때까지 입니다.

// Max-age=초 : Expires 와 비슷하지만 날짜 대신 초를 입력할 수 있습니다. 해당 초가 지나면 쿠키가 제거됩니다. Expires 보다 우선합니다.

// Domain=도메인명 : 쿠키가 전송될 도메인을 특정 할 수 있습니다. 기본값은 현재도메인 입니다.

// Path=URL : 쿠키가 전송될 URL을 특정할 수 있습니다. 기본값은 '/' 이고 이 경우 모든 URL 에서 쿠키를 전송 할 수 있습니다.

// Secure : HTTPS 일경우에만 쿠키가 전송됩니다.

// HttpOnly : 설정시 자바스크립트에서 쿠키에 접근 할 수 없습니다. 쿠키조작을 방지하기 위해 설정하는 것이 좋습니다.

