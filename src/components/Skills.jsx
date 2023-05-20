import { Container, Grid, Stack, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

export const Skills = () => {
    const skillsWeb = [
        { skill: "HTML", progress: 80 },
        { skill: "CSS", progress: 60 },
        { skill: "JavaScript", progress: 70 },
        { skill: "React", progress: 80 }
    ];
    const skillsWeb2 = [
        { skill: "PHP", progress: 70 },
        { skill: "NodeJs", progress: 20 },
        { skill: "MySQL", progress: 60 },
        { skill: "PostgreSQL", progress: 20 },
    ];
    const skillsWeb3 = [
        { skill: "Github", progress: 40 }
    ];
    return (
        <Container id="skills">
            <Grid container spacing={3}>
                <Grid item md={12} >
                    <Typography gutterBottom variant="h4" sx={{ color: "#fff" }}>Skills</Typography>
                    <Typography variant="body2" gutterBottom sx={{ color: "#fff", fontSize: "18px" }}>
                        Como desarrollador web, he adquirido una amplia gama de habilidades que me permiten crear aplicaciones web efectivas y atractivas. Estas son algunas de las habilidades en las que me destaco
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
                        Desarrollo front-end
                    </Typography>
                    {
                        skillsWeb.map((s, index) => (
                            <Stack key={index} direction={"row"} spacing={2} alignContent={"center"} sx={{ mt: 3 }}>
                                <Typography color="#fff">{s.skill}</Typography>
                                <ProgressBar value={s.progress} maxValue={100} />
                                <Typography color={"#fff"}>{s.progress}%</Typography>
                            </Stack>
                        ))
                    }
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
                        Desarrollo back-end - Base de Datos
                    </Typography>
                    {
                        skillsWeb2.map((s, index) => (
                            <Stack key={index} direction={"row"} spacing={2} alignContent={"center"} sx={{ mt: 3 }}>
                                <Typography color="#fff">{s.skill}</Typography>
                                <ProgressBar value={s.progress} maxValue={100} />
                                <Typography color={"#fff"}>{s.progress}%</Typography>
                            </Stack>
                        ))
                    }
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
                        Gestión de versiones
                    </Typography>
                    {
                        skillsWeb3.map((s, index) => (
                            <Stack key={index} direction={"row"} spacing={2} alignContent={"center"} sx={{ mt: 3 }}>
                                <Typography color="#fff">{s.skill}</Typography>
                                <ProgressBar value={s.progress} maxValue={100} />
                                <Typography color={"#fff"}>{s.progress}%</Typography>
                            </Stack>
                        ))
                    }
                </Grid>
            </Grid>
        </Container>
    );
}