import { useEffect } from 'react';
import { useState } from 'react';
// useEffect : 컴포넌트의 생성, 변화, 소멸의 특정 상태마다 원하는 이벤트를 연결 가능
// useEffect (실행할함수, 의존성배열)
// 의존성배열이 비어있는 상태에서 함수안쪽에서 구문을 입력하면 (컴포넌트 마운트시 한 번만 실행)
// 의존성배열이 비어있는 상태에서 리턴되는 함수 안쪽에 구문을 입력하면 (컴포넌트 언마운트시 한 번만 실행)
// 의존성배열에 특정 state 를 담아두고 함수 안쪽에 구문을 입력하면 (해당 state 값이 변경될때마다 실행)

function Popup() {
	const [Num, setNum] = useState(0);
	useEffect(() => {
		//컴포넌트 mount시 한번만 실행
		console.log('Popup생성');

		return () => {
			//컴포넌트가 unmount시 한번만 실행
			console.log('Popup소멸');
		};
	}, []);

	useEffect(() => {
		console.log('popup의 Num상태');
	}, []);

	return (
		<aside>
			<h1>{Num}</h1>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
