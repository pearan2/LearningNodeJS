/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   writeFile.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 15:12:13 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 15:14:07 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import { promises as fs } from 'fs'

const fileName : string = './src/innerModule/writeme.txt';

fs.writeFile(fileName, '글이 입력됩니다.')
	.then(() => {
		return (fs.readFile(fileName));
	})
	.then((data: Buffer) => {
		console.log(data.toString());
	})
	.catch((error : Error) => {
		console.log(error.message);
	})