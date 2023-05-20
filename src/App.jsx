import './App.css'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Bannner } from './components/Banner'
import { Footer } from './components/Footer'
import { useEffect } from 'react'
import { Skills } from './components/Skills'

function App() {
  
  useEffect(() => {
    if (window.particlesJS) {
      particlesJS('particle-background', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
      });
    }
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: 'relative',
          zIndex: 1,
          background: "#242424"
        }}
      >
        <div id="particle-background" className="particles"></div>
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Toolbar />
          <Bannner />
          <Skills/>
          <Projects />
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App
