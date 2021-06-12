/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   test.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 21:28:39 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 21:47:07 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

const testStr:string = `name=honlee;Expires=${(new Date()).toUTCString()};HttpOnly;Path=/`;

interface ICookie extends Object{
	name: string,
	Expires: string,
	HttpOnly: string,
	Path: string
}

const parseCookie = (cookie:string = '') : Object => {
	return (cookie
		.split(';')
		.reduce((acc, cur) => {
			acc[cur.split('=')[0]] = cur.split('=')[1];
			return acc;
		}, {}));
}

const cookie = parseCookie(testStr);
console.log(cookie.hasOwnProperty('name'));

console.log(parseCookie(testStr));