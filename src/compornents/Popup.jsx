import { useEffect } from 'react';
import { useState } from 'react';

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
		console.log('popup');
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
