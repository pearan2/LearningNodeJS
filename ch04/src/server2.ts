/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server2.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 16:40:17 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 16:43:47 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http';
import * as fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
	try {
		const data = await fs.readFile('./html/server2.html');
		res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
		res.end(data);
	} catch (err) {
		console.error(err);
		res.writeHead(500, {'Content-type' : 'text/plain; charset=utf-8'});
		res.end(err);
	}
});

server.listen(8080);

server.on('listening', () => {
	console.log('server:8080 started...');
});
