/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   class.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/11 12:34:21 by honlee            #+#    #+#             */
/*   Updated: 2021/06/11 12:40:06 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

class Human {
	type : string;

	constructor (type : string = 'human') 
	{
		this.type = type;
	};

	static isHuman(human : any) : boolean {
		return (human instanceof Human);
	};

	breathe() {
		console.log('h-a-a-a-m');
	}
}

class Zero extends Human {
	firstName : string;
	lastName : string;

	constructor(type : string, firstName : string, lastName : string) {
		super(type);
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayName() : void {
		super.breathe();
		console.log(`${this.firstName} ${this.lastName}`);
	}
}

const newZero = new Zero('human', 'Zero', 'Cho');
console.log(Human.isHuman(newZero));
newZero.breathe();
newZero.sayName();