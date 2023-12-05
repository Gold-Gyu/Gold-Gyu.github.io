import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Intro from './components/Intro';
import Profile from './components/Profile';
import Skillset from './components/Skillset';
import Project from './components/Project';

function App() {
  // const [count, setCount] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          // 현재 브라우저의 가로, 세로 길이로 셋팅
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
      window.addEventListener('resize', handleResize);

      // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
      handleResize();

      // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return () =>
        window.removeEventListener('resize', () => {
          return null;
        });
    }
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행

  // ObserverAPI
  // const observer = new IntersectionObserver((element) => {
  //   console.log(element);

  //   element.forEach((box) => {
  //     if (box.isIntersecting) {
  //       console.log(box);
  //     }
  //   });
  // });
  // const div = document.querySelectorAll('div');
  // observer.observe(div[0]);
  // observer.observe(div[1]);
  // observer.observe(div[2]);
  // observer.observe(div[3]);

  return (
    <div >
      {/* <div>{windowSize.width}</div>
      <div>{windowSize.height}</div> */}
      <div
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        <Intro />
      </div>
      <div
        className="part-2"
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        <Profile />
      </div>
      <div
        className="part-3"
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        <Skillset />
      </div>
      <div
        className="part-1"
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        <Project />
      </div>

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
