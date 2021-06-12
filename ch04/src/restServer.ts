/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   restServer.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 17:22:37 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 17:51:17 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http';
import * as fs from 'fs/promises';

const users = {};

const server = http.createServer(async (req, res) => {
	try {
		console.log(req.method, req.url);
		if (req.method === 'GET') {
			if (req.url === '/') {
				const data = await fs.readFile('./html/restFront.html');
				res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});
				return res.end(data);
			} else if (req.url === '/about') {
				const data = await fs.readFile('./html/about.html');
				res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});
				return res.end(data);		
			} else if (req.url === '/users') {
				res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});
				return res.end(JSON.stringify(users))
			}
			// 주소가 / 도  /about 도 아니면
			try {
				const data = await fs.readFile(`.${req.url}`);
				return res.end(data);
			} catch (err) {

			}
		} else if (req.method === 'POST') {
			if (req.url === '/user') {
				let body = '';
				// 요청의 body 를 stream 형식으로 받음
				req.on('data', (data) => {
					body += data;
				});
				// 요청의 body 를 다 받은 후 실행됨
				return req.on('end', () => {
					console.log('POST 본문(body) : ', body);
					const {name} = JSON.parse(body);
					const id = Date.now();
					users[id] = name;
					res.writeHead(201);
					res.end('등록 성공');
				});
			}
		} else if (req.method === 'PUT') {
			if (req.url?.startsWith('/user/')) {
				const key = req.url.split('/')[2];
				let body = '';
				req.on('data', (data) => {
					body += data;
				});
				return req.on('end', () => {
					console.log('PUT 본문(body) : ', body);
					users[key] = JSON.parse(body).name;
					return res.end(JSON.stringify(users));
				});
			}
		} else if (req.method === 'DELETE') {
			if (req.url?.startsWith('/user/')) {
				const key = req.url.split('/')[2];
				delete users[key];
				return res.end(JSON.stringify(users));
			}
		}
		res.writeHead(404);
		return res.end('NOT FOUND');
	} catch (err) {
		console.error(err);
		res.writeHead(500, { 'Content-type' : 'text/plain; charset=utf-8'});
		res.end(err.message);
	}
});

server.listen(8080);
server.on('listening', () => {
	console.log('server:8080 started...');
})