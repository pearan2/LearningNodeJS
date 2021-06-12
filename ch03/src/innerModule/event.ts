/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   event.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42seoul.kr>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/12 15:42:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/12 15:52:44 by honlee           ###   ########seoul.kr  */
/*                                                                            */
/* ************************************************************************** */

// 우리가 직접 이벤트를 만들 수 있습니다.

import { EventEmitter } from 'events';

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
	console.log('event 1');
});
myEvent.on('event2', () => {
	console.log('event 2');
});
myEvent.on('event2', () => {
	console.log('add event 2');
});
myEvent.once('event3', () => {
	console.log('event 3 just once');
});

myEvent.emit('event1'); // event call
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
	console.log('event 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // not work

const listener = () => {
	console.log('event5');
};
myEvent.on('event5', listener);
myEvent.emit('event5');
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // not work

console.log(myEvent.listenerCount('event2'));

// on(eventName, cb) : eventName 과 cb 을 연결합니다. 이렇게 연결하는 동작을 이벤트 리스닝이라고 합니다.
// event2 처럼 하나의 이벤트에 여러개를 달아줄 수 있습니다.

// addListener(이벤트명, 콜백) : on 과 기능이 같습니다.

// emit(이벤트명) : 이벤트를 호출하는 메서드 입니다. 이벤트 이름을 인수로 넣으면 미리 등록해뒀던 이벤트 콜백이 실행됩니다.

// once(이벤트명, 콜백) : 한번만 실행되는 이벤트입니다. myEvent.emit('event3') 을 두번 연속 호출하지만,
// 콜백은 한번만 실행됩니다.

// removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 제거합니다.

// removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거합니다. 리스너를 넣어야 한다는 것을 잊지 마세요.

// off(이벤트명, 콜백) : 노드 10버전에서 추가된 메서드로, removeListener 와 기능이 같습니다.

// listenerCount(이벤트명) : 현재 리스너가 몇개 연결되어있는지 확인합니다.


// 이제는 스트림에서 봤던 on('data') 와 on('end') 에 대해서도 어느정도 감이 올것입니다.
// 겉으로 이 이벤트를 호출하는 코드는 없지만, 내부적으로는 chunk 를 전달할때마다 data 이벤트를 emit 하고 있습니다.
// 완료되었을 경우 end 이벤트를 emit 한것 입니다.
