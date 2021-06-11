/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   util.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 22:48:58 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 22:56:24 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as util from 'util'
import * as crypto from 'crypto'

const dontUseMe = util.deprecate((x, y) => {
	console.log(x + y);
}, 'dontUseMe 함수는 deprecated 되었으니 더이상 사용하지 마십시오!');

dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
	.then((buf) => {
		console.log(buf.toString('base64'));
	})
	.catch((error) => {
		console.error(error);
	});

// util.deprecate : 함수가 deprecate 처리 되었음을 알립니다. 첫번째 인수로 넣은 함수를 사용 했을때 경고 메시지가 출력 됩니다.
// 두번째 인수로 경고 메시지 내용을 넣으면 됩니다. 함수가 조만간 사라지거나 변경될 때 알려줄 수있어 유용합니다.

// util.promisify : 콜백 패턴을 프로미스패턴으로 바꿔줍니다. 바꿀 함수를 인수로 제공하면 됩니다.
// 이렇게 바꿔두면 async/ await 패턴까지 사용 할 수있어 좋습니다.
// 프로미스를 콜백으로 바꾸는 util.callbackify 도 있지만 자주 사용되지는 않습니다.