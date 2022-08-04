import React from "react";
import particlesConfig from "./config/particle-config";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return <Particles params={particlesConfig}></Particles>;
}
