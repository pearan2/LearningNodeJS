/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   treadpool.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 15:36:21 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 15:42:33 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as crypto from 'crypto';

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

// 실행할때마다 시간과 순서가 달라집니다. 스레드풀이 작업을 동시에 처리하므로 여덟개의 작업 중에서 어느것이
// 먼저 처리 될지 모릅니다.
// 하지만 1~4와 5~8 그룹으로 묶여져 있고 5~8 그룹이 1~4보다 시간이 더 소요됩니다.
// 바로 기본적인 스레드의 개수가 네개 이기 때문입니다.
// 우리는 스레드를 직접 컨트롤할수 없지만 개수를 조절 할 수는 있습니다.
// export UV_THREADPOOL_SIZE=1 로 입력한후 다시 실행하면 순차적으로 실행되는 것을 볼 수 있습니다.
// size 를 8로 하면 거의 동시적으로 처리되는 것을 볼 수있습니다.

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('1: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('2: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('3: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('4: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('5: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('6: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('7: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
	console.log('8: ', Date.now() - start);
});
