/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   createServer.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 16:16:49 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 16:19:13 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as http from 'http';

http.createServer((req, res) => {
	// 여기에 어떻게 응답할지 적습니다.
});

// http 서버가 있어야 웹브라우저의 요청을 처리 할 수 있으므로 http 모듈을 사용 했습니다.
// http 모듈에는 createServer 라는 메서드가 있습니다. 인수로 요청에 대한 콜백함수를 넣을 수 있으며
// 요청이 들어올 떄마다 매번 콜백함수가 실행됩니다.
// 따라서 이 콜백함수에 응답을 적으면 됩니다.

// createServer 의 콜백 부분을 보면 req 와 res 매개변수가 있습니다. 보통 request 를 줄여 req 라 하고
// response 를 줄여 res 라 표현합니다. 아직 코드를 실행하도 아무일도 일어나지 않습니다.
// 요청에 대한 응답도 넣어주지 않았고 서버와 연결하지 않았기 때문입니다.
