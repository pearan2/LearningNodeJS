/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   error3.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 16:04:14 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 16:06:46 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import * as fs from 'fs/promises';

setInterval(() => {
	fs.unlink('asionefioasndifoandsiof')
		.then(() => {
			console.log('deleted');
		})
		.catch((error) => {
			console.error(error);
		})
}, 1000);

