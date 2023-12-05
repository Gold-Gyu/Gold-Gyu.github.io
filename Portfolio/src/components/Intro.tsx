// import Intro1 from '../assets/Intro1.mp4';

function Intro() {
  return (
    <div className="introBox">
      <video
        className="introVideo"
        muted
        autoPlay
        loop
        src="/videos/stars.mp4"
      ></video>
      <div className="intro-font">인트로</div>
    </div>
  );
}

export default Intro;
