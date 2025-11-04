import LeftSide from "./LeftSide";
import RighSide from "./RighSide";

const SignIn = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ background: "#E9ECF2" }}>

      <div
        className="absolute pointer-events-none"
        style={{
          width: '667px',
          height: '667px',
          top: '-247px',
          left: '633px',
          background: 'radial-gradient(circle, #E477F6, #FF6EC7, #A360FF)',
          opacity: 1,
          transform: 'rotate(0deg)',
          filter: 'blur(400px)',
          borderRadius: '50%', 
        }}
      />

      <div
        className="absolute"
        style={{
          width: '667px',
          height: '667px',
          top: '667px',
          left: '1073px',
          background: '#9E77F6',
          opacity: 1,
          transform: 'rotate(0deg)',
          filter: 'blur(400px)',
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: '813px',
          height: '813px',
          top: '646px',
          left: '-117px',
          background: '#B0D2E5',
          opacity: 0.6,
          borderRadius: '32%',
          transform: 'rotate(0deg)',
          filter: 'blur(800px)',
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: '807px',
          height: '807px',
          top: '-372px',
          left: '38px',
          background: '#9E77F6',
          opacity: 0.6,
          borderRadius: '32%',
          transform: 'rotate(0deg)',
          filter: 'blur(800px)',
        }}
      />

      <div className="relative w-full h-full max-w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        {/* Left Section */}
        <LeftSide />
        {/* Right Section */}
        <RighSide />
      </div>
    </div>
  );
};

export default SignIn;