/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   url.ts                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 21:53:45 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 22:35:18 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as url from 'url'

// url
// 인터넷 주소를 쉽게 조작하도록 도와주는 모듈 입니다. url 처리에는 크게 두가지 방식이 있습니다.
// 노드 버전 7에서 추가된 WHATWG(웹 표준을 정하는 단체 이름) 방식의 url 과 예전부터 노드에서
// 사용하던 방식의 url 이 있습니다. 두 가지 방법 다 알아두면 좋습니다.

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('new URL() : ', myURL);
console.log('url.format() : ', url.format(myURL));
console.log('------------------------------------------');

const parseUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse() : ', parseUrl);
console.log('url format() : ', url.format(parseUrl));


// url 모듈 안에 URL 생성자가 있습니다. 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리됩니다.
// 이 방식이 WHATWG 의 url 입니다. WHATWG 에만 있는 username, password, origin, searchParams 속성이 존재합니다.
// WHATWG 와 노드의 url 은 취향에 따라 사용하면 되지만, 노드의 url 형식을 꼭 사용해야 하는 경우가 있습니다.
// 예를들어 /book/bookList.apsx 처럼 host 부분없이 pathname 부분만 오는 주소인 경우 WHATWG 방식이 처리 할 수 없습니다.
// WHATWG 방식은 search 부분을 searchParams 라는 특수한 객체로 반환하므로 유용합니다.
// search 는 ? 로 시작하고 키=값 형식으로 데이터를 전달합니다.
// 여러키가 있을 경우 & 로 구분합니다.

const myURL2 = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('searchParams : ', myURL2.searchParams);
console.log('searchParams.getAll() : ', myURL2.searchParams.getAll('category')); // 키에 해당하는 모든 값
console.log('searchParams.get() : ', myURL2.searchParams.get('limit')); // 키에 해당하는 첫번째 값
console.log('searchParams.has() : ', myURL2.searchParams.has('page')); // 해당 키가 있는지 검사

console.log('searchParams.keys() : ', myURL2.searchParams.keys()); // iterator 형태로 키들을 가져옴
console.log('searchParams.values() : ', myURL2.searchParams.values()); // iterator 형태로 벨류들을 가져옴

myURL2.searchParams.append('filter', 'es3'); // 해당키를 추가함 (기존에 있던것 뒤에 추가함)
myURL2.searchParams.append('filter', 'es5');
console.log(myURL2.searchParams.getAll('filter'));

myURL2.searchParams.set('filter','es6');		// 같은 키를 모두 지우고 해당 키를 추가함.
console.log(myURL2.searchParams.getAll('filter'));

myURL2.searchParams.delete('filter');			// 해당 키를 제거함.
console.log(myURL2.searchParams.getAll('filter'));

console.log('searchParams.toString() : ', myURL2.searchParams.toString()); // 조작한 searchParams 를 다시 문자열로 만듦.
myURL2.search = myURL2.searchParams.toString();


// WHATWG 방식의 url 대신 기존 노드의 url 을 사용 할 때, search 부분을 사용하기 쉽게 객체로 만드는 모듈입니다.

import * as querystring from 'querystring'

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query as string); // url 의 query 부분을 자바스크립트 객체로 분해합니다.
console.log('querystring.parse() : ', query);console.log('querystring.stringify() : ', querystring.stringify(query)); // 분해된 query 객체를 문자열로 다시 조립합니다.
