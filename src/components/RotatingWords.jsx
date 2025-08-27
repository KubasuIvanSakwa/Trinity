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

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pauseTime]);

  return (
    <span className="underline decoration-2 decoration-black/70">
      {text}
    </span>
  );
};

export default function RotatingWords() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 mt-8 bg-white">
    <p className="uppercase tracking-widest text-gray-500 font-medium mb-2 text-sm sm:text-base">
      Catholic Parish
    </p>

    <h1 className="
      text-lg sm:text-xl md:text-2xl lg:text-4xl 
      font-bold leading-snug 
      w-full sm:w-full md:w-4/5 lg:w-2/3 
      text-black/70
    ">
      Through the Sacraments, Prayer, and Faith in Christ, 
      Our Catholic Church guides souls on the path of Grace, 
      Salvation, and{" "}
      <TypewriterWords
        words={["Hope", "Charity", "Peace"]}
        typingSpeed={120}
        pauseTime={3000}
      />
      .
    </h1>

    <p className="mt-4 font-semibold text-base sm:text-lg text-black/70">
      Fr. Michael O'Connor
    </p>
    <p className="text-gray-500 text-sm sm:text-base">Parish Priest</p>
  </div>
  );
}

