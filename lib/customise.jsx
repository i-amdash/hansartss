'use client'

import Circles from "@/components/Circles";
import Canvas from "@/components/canvas";
import Customizer from "@/components/Customizer";
import Home from "@/components/home";

const CustomisePage = () => {
  return (
  <div className="bg-primary/60 h-[100vh] transition-all ease-in">
    <Home />
    <Customizer />
    <Canvas />
    {/* <Circles /> */}
    </div>
  );
};

export default CustomisePage;