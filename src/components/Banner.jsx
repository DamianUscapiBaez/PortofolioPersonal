import { Container, Grid, Typography } from "@mui/material";
import bannerProgram from '../assets/img/program-banner.svg';
import { useEffect, useState } from "react";

export const Bannner = () => {
    const [text, setText] = useState('');
    const phrases = ['Desarrollador web'];
    const typingSpeed = 80; // Velocidad de escritura en milisegundos
    const delay = 2000; // Retraso antes de empezar a escribir en milisegundos
    useEffect(() => {
        let currentIndex = 0;
        let currentText = '';
        let intervalId;

        const startTyping = () => {
            if (currentIndex === phrases.length) {
                clearInterval(intervalId);
                return;
            }

            if (currentText.length === phrases[currentIndex].length) {
                setTimeout(() => {
                    setText('');
                    currentIndex++;
                    startTyping();
                }, delay);
                return;
            }

            currentText = phrases[currentIndex].substring(0, currentText.length + 1);
            setText(currentText);
            intervalId = setTimeout(startTyping, typingSpeed);
        };

        setTimeout(startTyping, delay);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <Container id="inicio">
            <Grid container alignItems="center" sx={{ height: "100vh" }}>
                <Grid item xs={12} sm={6} md={6} sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <Typography variant="h3" sx={{ color: "#fff", fontWeight: 700 }}>Bienvenida a mi Portafolio</Typography>
                    <div className="typing-animation">
                        <span style={{ color: "#fff", fontSize: "22px" }}>¡Hola! Soy Damian  {text}</span>
                    </div>
                    <Typography variant="h4" sx={{ mt: 2, fontWeight: 700, color: "#1787BA" }}>Juntos haremos tus proyectos realidad</Typography>
                </Grid>
                <Grid item xs={0} sm={6} md={6} sx={{ display: { xs: "none", sm: "block" } }}>
                    <img style={{ width: "100%", height: "800px" }} src={bannerProgram} />
                </Grid>
            </Grid>
        </Container >
    );
}