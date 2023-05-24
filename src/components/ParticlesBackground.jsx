import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesJson from "./ParticlesJson.json";
import { useCallback } from "react";

export const ParticlesBackground = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);
    return (
        <Particles
            options={ParticlesJson}
            init={particlesInit}
        />
    );
}