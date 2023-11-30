import { useRef } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const windowsize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className="part-0">
      <div>{windowsize.current[0]}</div>
      <div>{windowsize.current[1]}</div>
      <div className="part-1">Check</div>
      <div className="part-2">Check2</div>
      <div className="part-3">Check2</div>
      <div className="part-1">Check2</div>
      <div className="part-2">Check2</div>
      {/* 나에 대해 나타내는 페이지 */}
      {/* 1. Still waters run deep */}
      {/* 2. 풀스택 주니어 개발자 이금규 */}

      {/* 나에 대한 이력 */}
      {/* 1. 주변 사람들의 평가 3개 */}
      {/* 2. 경력 */}
      {/* 3. 사용 기술 스택 */}
    </div>
  );
}

export default App;
