/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   crypto.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 22:23:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 22:47:21 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as crypto from 'crypto'
// 다양한 방식의 암호화를 도와주는 모듈입니다. 몇 가지 메서드는 익혀주면 실제 서비스에서도 적용 할수 있어 정말 유용합니다.

// 비밀번호는 보통 단방향 암호화 알고리즘을 사용합니다. 복호화 할 수 없으므로 암호화라고 표현하는 대신 해시함수 라고 부르기도 합니다.
// 단방향 알고리즘은 주로 해시 기법을 사용합니다. 해시 기법이란 어떠한 문자열을 고정 된 길이의 다른 문자열로 바꿔버리는 방식입니다.
// 예를 들면 abcdefgh 라는 문자열을 qvew 로 바꿔 버리고, ijklm 이라는 문자열을 zvsf 로 바꿔버리는 겁니다.
// 입력 문자열의 길이는 다르지만, 출력 문자열의 길이는 네자리로 고정 되어있습니다.
// 노드에서 해시 함수는 다음과 같이 사용합니다.

console.log('base64 : ', crypto.createHash('sha512').update('password').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('password').digest('hex'));
console.log('base64 : ', crypto.createHash('sha512').update('another password').digest('base64'));

// createHash(Algorithm) : 사용할 해시 알고리즘을 넣습니다. md5, sha1, sha256, sha512 등이 가능하지만,
// md5 와 sha1 은 이미 취약점이 발견되었습니다. 현재 sha512 정도로 충분합니다.

// update(string) : 변환할 문자열을 넣습니다.

// digest(encording) : 인코딩할 알고리즘을 넣습니다. base64, hex, latin1 이 주로 사용되는데, 그중 base64 가
// 결과 문자열이 가장 짧아 애용됩니다.

// 현재는 주로 pbkdf2 나 bcrypt, scrypt 라는 알고리즘으로 비밀번호를 암호화 하고 있습니다.
// 그중 노드에서 지원하면 pbkdf2 에 대해 알아보겠습니다. pbkdf2 는 간단히 말하면 기존 문자열에 salt 라고 불리는
// 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것입니다.

crypto.randomBytes(64, (err, buf) => {
	const salt = buf.toString('base64');
	console.log('salt : ',salt);
	crypto.pbkdf2('password', salt, 100000, 64, 'sha512', (err, key) => {
		console.log('password : ', key.toString('base64'));
	});
});
// 너무 많이 반복하는 것은 아닌지 걱정 될 수 있지만, 1초 정도 밖에 걸리지 않습니다.
// 싱글 스레드 프로그래밍에서 1초 동안 블로킹이 되는건 아닌지 걱정 할 수있습니다.
// 다행히 crypto.randomBytes 와 crypto.pbkdf2 메서드는 내부적으로 스레드풀을 사용해 멀티스레딩으로 동작합니다.

// randomBytes 이므로 매번 실행할 때마다 결과가 달라집니다. 따라서 salt 를 잘 보관하고 있어야 비밀번호도 찾을 수 있습니다.
// pbkdf2 는 간단하지만, bcrypt 나 scrypt 보다 취약아므로 나중에 더 나은 보안이 필요하다면 이 두가지 방식을 사용하면 됩니다.