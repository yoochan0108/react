import { useState } from 'react';
import './style.scss';

function App() {
	console.log('app');
	//const [상태값, 상태변경전용함수] = useState(초기값);
	//리엑트 컴포넌트는 State값이 State변경함수로 변경되어야지만 컴포넌트가 재렌더링됨
	//숫자를 증가, 감소 시킬때 전위증강 연산자를 써야지만 해당 렌더링 사이클에서 바로 값이 변뎡되면서 다음번 렌더링에 반영됨
	let [Num, setNum] = useState(0);
	console.log(Num);

	return (
		<>
			<h1>{Num}</h1>
			<button onClick={() => setNum(--Num)}>minus</button>
			<button onClick={() => setNum(++Num)}>plus</button>
		</>
	);
}

export default App;
/*
	hooks
	- 리엑트가 16버전부터 새로나온 개념으로 리엑트에서 자주 쓰이는 상태관리, 생명주기에 관련된 내용들을
	- hook이라는 형태의 내장함수로 편의기능 재공
	- hook이 나오기 전 까지는 class방식으로 컴포넌트를 생성 및 기능확장을 비효율적으로 처리

	자주쓰는 hook 3대장
	useSate - 컴포넌트의 화면의 렌더링을 담당하는 중요한 정보값 관리
	useEffect - 컴포넌트의 생명주기에 관련된 함수 (생성, 변화, 소멸)
	useRef - 컴포넌트 안쪽에서 특정 값을 참조객체에 담을 때

	리엑트의 성능관리를 hook
	리엑트에서 memoization - 메모리점유율을 늘려서 성능을 개선
	자바스크립트는 기본적으로 Garbage collector에 의해서 메모리가 관리됨
	아래의 hook을 통해서 특정 값을 강제 메모이제이션 처리하면 가비지컬렉터에서 제외함
	memo (컴포넌트 자체를 메모이제이션)
	useCallback (컴포넌트 안쪽의 핸들러 함수 자체를 메모이제이션)
	useMemo (특정 핸들러함수의 리천값을 메모이제이션)
*/
