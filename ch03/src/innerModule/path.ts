/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   path.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 14:42:03 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 14:59:58 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 폴더와 파일의 경로를 쉽게 조작하도록 도와 주는 모듈입니다. 
// path 모듈이 필요한 이유중 하나는 운영체제별로 경로 구분자가 다르기 때문입니다. 크게 윈도 타입과 POSIX
// 타입으로 구분됩니다. POSIX는 유닉스 기반의 운영체제들을 의미하며, 맥과 리눅스가 속해 있습니다.

import path from "path/posix";

const string = __filename;

console.log('path.sep : ', path.sep);	// 경로 구분자 윈도는 \ , POSIX은 / 입니다.
console.log('path.delimeter : ', path.delimiter);	// 환경 변수 구분자 입니다. process.env.PATH 를 입력하면 여러개의 경로가 이 구분자로 구분되어 있습니다.
													// 윈도는 세미콜론(;) 이고, POSIX은 콜론(:) 입니다.
console.log('----------------------------------');
console.log('path.dirname() : ', path.dirname(string));		// 파일이 위치한 폴더 경로를 보여줍니다.
console.log('path.extname() : ', path.extname(string));		// 파일의 확장자를 보여줍니다.
console.log('path.basename() : ', path.basename(string));	// 파일의 이름(확장자 포함)을 표시합니다. 파일의 이름만 표시하고 싶다면, basename의 두번째 인수로 파일의 확장자를 넣으면 됩니다.
console.log('path.basename - extname : ', path.basename(string, path.extname(string)));
console.log('-------------------------------------');
console.log('path.parse() : ', path.parse(string));			// 파일 경로를 root, dir, base, ext, name 으로 분리합니다.
console.log('path.format() : ', path.format({				// path.parse() 한 객체를 파일 경로로 합칩니다.
	dir : 'C:\\users\\zerocho',
	name : 'path',
	ext: '.js',
}))
console.log('path.normalize() : ', path.normalize('C://users\\\\zerocho\\\path.js'))		// / 나 \를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환합니다.
console.log('-----------------------------------------------------')
console.log('path.isAbsolute(C:\\) : ', path.isAbsolute('C:\\'));							// 파일의 경로가 절대 경로인지 상대경로인지를 true 나 false 로 알립니다.
console.log('path.isAbsolute(./home) : ', path.isAbsolute('./home'));
console.log('-------------------------------------------');
console.log('path.relative() : ', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));	// relative(기준경로, 비교경로) 경로를 두개 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 가르쳐줍니다.
console.log('path.join() : ', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));	// join(경로, ...) 여러 인수를 넣으면 하나의 경로로 합칩니다. 상대경로인 ..와 현재경로 . 도 알아서 처리합니다.
console.log('path.resolve() : ', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));	// join 과 비슷하지만 차이가 있습니다. 

// /를 만나면 path.resolve 는 절대 경로로 인식해서 앞의 경로를 무시하고, path.join 은 상대경로로 처리합니다.