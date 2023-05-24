import './App.css'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Bannner } from './components/Banner'
import { Footer } from './components/Footer'
import { Skills } from './components/Skills'
import { ParticlesBackground } from './components/ParticlesBackground'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          zIndex: 1,
          background: "#242424"
        }}
      >
        <ParticlesBackground />
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Toolbar />
          <Bannner />
          <Skills />
          <Projects />
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App
