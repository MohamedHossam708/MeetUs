import React from "react";
import Logo from "../../assets/Images/logo.png";

const RighSide = () => {
  return (
    <div className="hidden lg:flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center relative">
        {/* centered rounded gradient (behind the logo) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[520px] h-[360px] rounded-[40%] bg-linear-to-br from-purple-600/40 via-pink-400/30 to-transparent filter blur-3xl opacity-80" />
        </div>

        <div className="relative z-20">
          <img
            src={Logo}
            alt="Logo"
            className="w-[1200px] max-h-[150vh] h-auto  drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default RighSide;
