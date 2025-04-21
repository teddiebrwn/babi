import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-white dark:bg-[#0c0c0c] text-[#1a1a1a] dark:text-[#fafafa] font-sans">
      <h1 className="px-4 text-sm antialiased tracking-tight text-center md:text-base lg:text-xl">
        <Typewriter
          words={[
            "i choose u",
            "luv empe",
            "u feel like home",
            "love u",
            "miss u everyday",
            "1209e4",
            "it's always been u",
            "3007",
            "my peace, my person",
            "i saw u and knew",
            "this love feels rare",
            "in ur orbit",
            "she's the poem",
            "never just a phase",
            "loved u in silence",
            "slow dancing in my head",
            "ur name in my playlist",
            "forever starts here",
            "it's u, it's always u",
            "em chờ anh nhé",
            "anh sẽ cố gắng ",
            "có được em vào một mai",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
}
