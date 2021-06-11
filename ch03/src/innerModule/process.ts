/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   process.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 14:16:13 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 14:31:22 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있습니다. 
// process 객체안에는 다양한 속성이 있습니다.

// process.version		// 설치된 노드의 버전입니다.
// process.arch			// 프로세스 아키텍처 정보입니다.
// process.platform		// 운영체제 플랫폼입니다. linux 나 darwin, win32, freebsd 등의 값일 수 있습니다.
// process.uptime()		// 프로세스가 시작된 후 흐른 시간입니다. 단위는 sec 입니다.
// process.pid			// 현재 프로세스 pid
// process.execPath		// 노드의 경로 입니다.
// process.cwd()		// 현재 프로세스가 실행되는 위치 입니다.
// process.cpuUsage()	// 현재 cpu 사용량 입니다.

// process.env			// 시스템의 환경변수
// 시스템 환경변수는 노드에 직접 영향을 미치기도 합니다. 대표적인 것으로는 UV_THREADPOOL_SIZE 와 NODE_OPTIONS 가 있습니다.
// 시스템 환경변수 외에도 임의로 환경변수를 저장 할 수 있습니다.
// process.env는 서비스의 중요한 키를 저장하는 공간으로도 사용됩니다. 서버나 데이터베이스의 비미런호와 각종 API 키를 코드에 직접
// 입력하는 것은 위험합니다.
// 따라서 중요한 비밀번호는 다음과 같이 process.env 의 속성으로 대체합니다.
// const secretId = process.env.SECRET_ID;
// const secretCode = process.env.SECRET_CODE;

// process.nextTick(cb)  //  이벤트루프가 다른 콜백함수들 보다 nextTick의 콜백함수를 우선으로 처리하도록 만듭니다.


// process.nextTick 은 setImmedate 나 setTimeout 보다 먼저 실행됩니다. 코드 맨 밑에 Promise를 넣는 것은
// resolve 된 Promise 도 nextTick 처럼 다른 콜백들보다 우선시 되기 때문입니다.
// 그래서 process.nextTick 과 Promise 를 마이크로테스트(microtask)라고 따로 구분지어 부릅니다.
setImmediate(() => {
	console.log('immedate');
});

process.nextTick(() => {
	console.log('nextTick');
});

setTimeout(() => {
	console.log('timeout');	
}, 0);

Promise.resolve().then(() => console.log('promise'));

// process.exit(code) 실행중인 노드 프로세스를 종료합니다.