import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-white dark:bg-[#0c0c0c] text-[#1a1a1a] dark:text-[#fafafa] font-sans">
      <h1 className="text-sm md:text-base lg:text-xl tracking-tight antialiased text-center px-4">
        <Typewriter
          words={[
            "luv Jinnie",
            "3007",
            "i choose u",
            "u feel like home",
            "miss u everyday",
            "sunshine in human form",
            "it's always been u",
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
