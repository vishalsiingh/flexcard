// import React, { useState } from "react";
import React, { useState, useRef } from "react";
import domtoimage from 'dom-to-image';

import html2canvas from "html2canvas";
import { FaEnvelope, FaGithub, FaLink } from "react-icons/fa";

const App = () => {
  const [name, setName] = useState("Your Name");
  const [tagline, setTagline] = useState("Frontend Dev | UI Designer");
  const [skills, setSkills] = useState("React, Figma");
  const [rate, setRate] = useState("$25/hr");
  const [email, setEmail] = useState("you@example.com");
  const [projectTitle, setProjectTitle] = useState("Cool Web App");
  const [projectLink, setProjectLink] = useState("https://yourproject.com");
  const [photo, setPhoto] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const cardRef = useRef(null);
  


  const popupCardId = "popupCapture";

//   const handleDownload = () => {
//   const node = cardRef.current;

//   const scale = 2; // for higher resolution and to avoid cropping
//   const style = {
//     transform: 'scale(' + scale + ')',
//     transformOrigin: 'top left',
//     width: node.offsetWidth + "px",
//     height: node.offsetHeight + "px"
//   };

//   domtoimage.toPng(node, {
//     width: node.offsetWidth * scale,
//     height: node.offsetHeight * scale,
//     style: style
//   })
//   .then((dataUrl) => {
//     const link = document.createElement("a");
//     link.download = "flexcard.png";
//     link.href = dataUrl;
//     link.click();
//   })
//   .catch((error) => {
//     console.error("Error generating image", error);
//   });
// };



  return (
    <div
      className="min-h-screen relative bg-gradient-to-br from-[#0C0C0C] via-[#481E14] to-[#9B3922] p-8 md:p-16 flex flex-col md:flex-row items-start gap-10 font-sans"
    >
      {/* Icons top-right */}
      <div className="absolute top-6 right-6 flex gap-4 z-50">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </div>

      {/* Floating heading top-left */}
      <div className="absolute top-6 left-6 text-white z-10">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-white">FlexCard ⚡</span>
          <span
            style={{
              background:
                "linear-gradient(to right, #f97316, #facc15)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 1px 3px rgba(249, 115, 22, 0.3)",
            }}
          >
            Builder
          </span>
        </h1>
        <p
          className="text-sm text-white/70 mt-1 tracking-wide"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Show your skills, your way.
        </p>
      </div>

      {/* Left: Form Section */}
      <div className="mt-20 md:mt-28 w-full md:w-1/2 p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl space-y-6 transition-all duration-500 hover:scale-[1.02]">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setPhoto(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
          className="w-full p-2 rounded-xl bg-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F2613F] file:text-white hover:file:brightness-110"
        />
        <input
          type="text"
          placeholder="Tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
        />
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
          />
          <input
            type="url"
            placeholder="Project Link"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
          />
        </div>
        <input
          type="text"
          placeholder="Rates (e.g. $20/hr)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 outline-none focus:ring-2 focus:ring-[#F2613F] transition-all"
        />

        <button
          onClick={() => setShowPopup(true)}
          className="relative overflow-hidden w-full mt-4 bg-gradient-to-r from-[#481E14] via-[#9B3922] to-[#F2613F] text-white py-3 rounded-xl font-semibold shadow-lg hover:brightness-110 transition-all"
        >
          <span className="relative z-10">FlexNow🔥</span>
          <span
            className="absolute top-0 left-[-100%] w-1/3 h-full rounded-lg rotate-[25deg] blur-md"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              animation: "shine 3.5s ease-in-out infinite",
              animationFillMode: "forwards",
            }}
          ></span>
        </button>

        <style>{`
          @keyframes shine {
            0% {
              left: -100%;
            }
            50% {
              left: 120%;
            }
            100% {
              left: 120%;
            }
          }
        `}</style>
      </div>

      {/* Right: Preview Card */}
      {/* <div 
      ref={cardRef}
      className="
 mt-20 md:mt-28 
  w-full md:w-2/5 max-w-md 
  mx-auto 
  p-8 

  rounded-3xl 
  bg-red/100 
  backdrop-blur-lg 
  border border-white/20 
  shadow-[0_4px_30px_rgba(255,255,255,0.1)]
  flex flex-col items-center 
  text-white 
  transition-all 
  animate-float 
  relative 
  overflow-hidden
"> */}
<div 
  ref={cardRef}
  style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
  className="
  w-[450px] 
  h-[650px] 
  mt-20 md:mt-28 
  mx-auto 
  p-8 
  rounded-3xl 
  backdrop-blur-lg 
  border border-white/20 
  shadow-[0_4px_30px_rgba(255,255,255,0.1)]
  flex flex-col items-center 
  text-white 
  // transition-all 
  animate-float 
  relative 
  overflow-hidden
"
>
        <div className="soft-shine absolute inset-0 pointer-events-none z-0"></div>
        <div className="w-24 h-24 rounded-full bg-white/20 mb-4 shadow-md overflow-hidden">
          {photo ? (
            <img
              src={photo}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="mt-1 text-white/90">{tagline}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {skills.split(",").map((skill, idx) => (
            <span
              key={idx}
              className="bg-white/30 px-3 py-1 rounded-full text-xs shadow-md"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
        <div className="mt-6 text-center text-sm">
          <p className="font-semibold">{projectTitle}</p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-xs flex items-center justify-center gap-1 mt-1 hover:text-yellow-300 transition"
          >
            <FaLink />
            {projectLink}
          </a>
        </div>
        <p className="mt-4 text-lg font-medium">{rate}</p>
        <p className="text-sm flex justify-center items-center gap-2 mt-2">
          <FaEnvelope />
          {email}
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
          <FaGithub />
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-50 p-4 gap-6"
  style={{
    background: `linear-gradient(135deg, #0C0C0C 0%, #481E14 60%, #9B3922 100%)`,
    backdropFilter: "blur(100px)",
    backgroundColor: "rgba(0,0,0,0.8)"
  }}
>
          {/* fisrt card */}
          <div
            id={popupCardId}
            // className="bg-gradient-to-br from-[#481E14] via-[#9B3922] to-[#F2613F] rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl relative"
            // className="rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl relative"
            className="relative rounded-3xl p-6 text-white text-center max-w-xs w-full shadow-2xl cursor-pointer
          transform scale-90  transition-transform duration-300
          hover:scale-95 hover:rotate-0 hover:translate-x-0 animate-bounce-on-hover"
  style={{
    background: "linear-gradient(135deg, #1E201E 0%, #3C3D37 40%, #697565 75%, #ECDFCC 100%)",
  }}
>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 left-85 text-white hover:text-yellow-400 text-2xl font-bold"
              aria-label="Close popup"
            >
              &times;
            </button>

            <div className="w-24 h-24 rounded-full bg-white/20 mb-4 shadow-md overflow-hidden mx-auto">
              {photo ? (
                <img
                  src={photo}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="mt-1">{tagline}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {skills.split(",").map((skill, idx) => (
                <span key={idx} className="bg-white/30 px-3 py-1 rounded-full text-xs shadow-md" >
                  {skill.trim()}
                </span>
              ))}
            </div>
            <div className="mt-6 text-center text-sm">
              <p className="font-semibold">{projectTitle}</p>
              <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-white underline text-xs flex items-center justify-center gap-1 mt-1 hover:text-yellow-300 transition" >
                <FaLink />
                {projectLink}
              </a>
            </div>
            <p className="mt-4 text-lg font-medium">{rate}</p>
            <p className="text-sm flex justify-center items-center gap-2 mt-2">
              <FaEnvelope />
              {email}
            </p>
            <div className="flex justify-center gap-4 mt-4 text-xl">
              <FaGithub />
            </div>
            <button
              onClick={handleDownload}
              className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
            >
              Download JPG
            </button>
          </div>

          {/* second card */}
             <div
            id={popupCardId}
            // className="bg-gradient-to-br from-[#481E14] via-[#9B3922] to-[#F2613F] rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl relative"
            // className="rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl relative"
             className="relative rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl cursor-pointer
          transform scale-90 transition-transform duration-300
          hover:scale-110 animate-bounce-on-hover"
 style={{
  background: "linear-gradient(135deg, #18230F 0%, #27391C 35%, #255F38 70%, #1F7D53 100%)"
}}


>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 left-85 text-white hover:text-yellow-400 text-2xl font-bold"
              aria-label="Close popup"
            >
              &times;
            </button>

            <div className="w-24 h-24 rounded-full bg-white/20 mb-4 shadow-md overflow-hidden mx-auto">
              {photo ? (
                <img
                  src={photo}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="mt-1">{tagline}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {skills.split(",").map((skill, idx) => (
                <span key={idx} className="bg-white/30 px-3 py-1 rounded-full text-xs shadow-md" >
                  {skill.trim()}
                </span>
              ))}
            </div>
            <div className="mt-6 text-center text-sm">
              <p className="font-semibold">{projectTitle}</p>
              <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-white underline text-xs flex items-center justify-center gap-1 mt-1 hover:text-yellow-300 transition" >
                <FaLink />
                {projectLink}
              </a>
            </div>
            <p className="mt-4 text-lg font-medium">{rate}</p>
            <p className="text-sm flex justify-center items-center gap-2 mt-2">
              <FaEnvelope />
              {email}
            </p>
            <div className="flex justify-center gap-4 mt-4 text-xl">
              <FaGithub />
            </div>
            <button
              onClick={handleDownload}
              className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
            >
              Download JPG
            </button>
            
          </div>

          {/* aur add krna h to kroo  */}
          <div
            id={popupCardId}
            // className="bg-gradient-to-br from-[#481E14] via-[#9B3922] to-[#F2613F] rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl relative"
            // className="rounded-3xl p-6 text-white text-center max-w-md w-full shadow-2xl relative"
            className="relative rounded-3xl p-6 text-white text-center max-w-xs w-full shadow-2xl cursor-pointer
          transform scale-90 transition-transform duration-300
          hover:scale-95 hover:rotate-0 hover:translate-x-0 animate-bounce-on-hover"
style={{
  background: "linear-gradient(135deg, #7F55B1 0%, #9B7EBD 40%, #F49BAB 75%, #FFE1E0 100%)"
}}


>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 left-85 text-white hover:text-yellow-400 text-2xl font-bold"
              aria-label="Close popup"
            >
              &times;
            </button>

            <div className="w-24 h-24 rounded-full bg-white/20 mb-4 shadow-md overflow-hidden mx-auto">
              {photo ? (
                <img
                  src={photo}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="mt-1">{tagline}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {skills.split(",").map((skill, idx) => (
                <span key={idx} className="bg-white/30 px-3 py-1 rounded-full text-xs shadow-md" >
                  {skill.trim()}
                </span>
              ))}
            </div>
            <div className="mt-6 text-center text-sm">
              <p className="font-semibold">{projectTitle}</p>
              <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-white underline text-xs flex items-center justify-center gap-1 mt-1 hover:text-yellow-300 transition" >
                <FaLink />
                {projectLink}
              </a>
            </div>
            <p className="mt-4 text-lg font-medium">{rate}</p>
            <p className="text-sm flex justify-center items-center gap-2 mt-2">
              <FaEnvelope />
              {email}
            </p>
            <div className="flex justify-center gap-4 mt-4 text-xl">
              <FaGithub />
            </div>
            <button
              
              className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
              onClick={ () => {handleDownload("popupCardId","flexcard")}}
            >
              Download JPG
            </button>
          </div>
      
     
        </div>
        
      )}
     


    </div>);
};

export default App;