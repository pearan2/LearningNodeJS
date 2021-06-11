/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   func.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 13:39:39 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 13:42:41 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

import {odd, even} from './var'

export function checkOddOrEven(num) {
	if (num % 2) {
		return odd;
	} else {
		return even;
	}
}