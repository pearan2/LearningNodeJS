/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   error1.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 15:54:03 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 15:58:56 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 노드에서는 예외처리가 정말 중요합니다. 예외란 보통 처리하지 못한 에러를 말합니다.
// 이러한 예외는 실행중인 노드프로세스를 멈추게 만듭니다.

// 멀티스레드 프로그램에서는 스레드 하나가 멈추면 그 일을 다른 스레드가 대신합니다.
// 하지만 노드의 메인스레드는 하나뿐이므로 그 하나를 소중히 보호해야 합니다.

// 메인스레드가 에러로 인해 멈춘다는 것은 스레드를 갖고 있는 프로세스가 멈춘다는 것이고, 전체 서버도
// 멈춘다는 뜻과 같습니다. 아무리 신중을 기해 만들었다고 해도 항상 예기치 못한 에러는 발생하는 법입니다.

// 따라서 에러를 처리하는 방법을 잘 익혀 두어야 합니다. 에러 로그가 기록되더라도 작업은 계속 진행될 수 있어야 합니다.

// 문법상의 에러는 없다고 가정하겠습니다. 실제 배포용 코드에 문법 에러가 있어서는 절대 안됩니다.

setInterval(() => {
	console.log('start');
	try {
		throw new Error('server is down!');
	} catch (err) {
		console.error(err);
	}
}, 1000)

// setInterval 을 사용하는 것은 프로세스가 멈추는 여부를 체크하기 위함입니다.
// 프로세스가 에러로 인해 멈추면 setInterval 도 멈출것입니다. 

// 에러는 발생했지만 try - catch 로 잡았고 setInterval 도 직접 멈추기 전까진 계속 실행됩니다.