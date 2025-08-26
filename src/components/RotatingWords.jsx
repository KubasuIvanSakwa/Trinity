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
    <div className="flex flex-col items-center justify-center text-center p-[2rem] mt-[2rem]  px-4 bg-white">
      <p className="uppercase tracking-widest text-gray-500 font-medium mb-2">
        Modern Church
      </p>
      <h1 className="text-4xl md:text-4xl font-bold leading-snug w-[50%] text-black/70">
        Our Church is the True Path to Overcoming Suffering & Difficulties in
        Life through Faith &{" "}
        <TypewriterWords words={["Joy", "Hope", "Love"]} typingSpeed={120} pauseTime={3000} />.
      </h1>
      <p className="mt-4 font-semibold text-lg text-black/70">Piter Bowman</p>
      <p className="text-gray-500">Lead Pastor</p>
    </div>
  );
}

