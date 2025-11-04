import React from "react";

const TextInput = ({
  icon, // can be an image path (string) or React component
  type = "text",
  placeholder,
  register,
  error,
  name,
}) => {
  const isImageIcon = typeof icon === "string";

  return (
    <div className="w-[381px]">
      {/* Input wrapper with fixed height to keep icon centered even when error appears */}
      <div className="relative">
        {/* Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
          {isImageIcon ? (
            <img
              src={icon}
              alt="icon"
              className="w-5 h-5 object-contain"
              style={{
                filter: "brightness(0)", // ✅ makes the image icon black
              }}
            />
          ) : (
            icon && <icon.type size={20} className="text-black" /> // ✅ black for SVG/react icons
          )}
        </div>

        {/* Input */}
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full h-[57px] rounded-lg text-gray-700 placeholder-gray-400 transition-all duration-200 ease-in-out shadow-sm
            ${
              error
                ? "ring-2 ring-red-500"
                : "focus:outline-none focus:ring-2 focus:ring-[#9414FF]"
            } 
            pl-12 pr-4`}
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            border: "2px solid rgba(255, 255, 255, 1)",
            borderRadius: "8px",
            fontFamily: "ABeeZee, sans-serif",
            opacity: 1,
          }}
        />
      </div>

      {/* Error message (kept outside to not affect icon alignment) */}
      {error && (
        <p className="mt-1 text-sm text-red-500 ml-1">{error.message}</p>
      )}
    </div>
  );
};

export default TextInput;
