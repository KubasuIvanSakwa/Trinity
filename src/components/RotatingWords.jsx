import React, { useEffect, useState } from "react";

const TypewriterWords = ({ words, typingSpeed = 100, pauseTime = 1000 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(words[index].substring(0, subIndex));
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pauseTime]);

  return (
    <span className="underline decoration-2 decoration-black/70">{text}</span>
  );
};

export default function RotatingWords() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 mt-8 bg-white">
      <p className="uppercase tracking-widest text-gray-500 font-medium mb-2 text-sm sm:text-base">
        Trinity Chapel Ruiru
      </p>

      <h1
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
               font-bold leading-snug 
               w-full sm:w-4/5 md:w-2/3 lg:w-[50%] 
               text-black/70"
      >
        Our church is a spiritual family where you will grow in faith, discover
        purpose, and experience life-changing{" "}
        <TypewriterWords
          words={["Faith", "Hope", "Love"]}
          typingSpeed={120}
          pauseTime={2500}
        />
        .
      </h1>

      <p className="mt-4 font-semibold text-base sm:text-lg text-black/70">
        Audacious Agents of Change
      </p>
      <p className="text-gray-500 text-sm sm:text-base">
        Growing Deep to Reach Wide
      </p>
    </div>
  );
}
