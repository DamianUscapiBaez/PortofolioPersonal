import { Container, Grid, Typography } from "@mui/material";
import { CardProjects } from "./CardProjects";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Projects = () => {
    const projects = [
        {
            title: "IncasPath",
            description: "Plantilla Web HTML, CSS, JavaScript y PHP",
            imgUrl: projImg1,
        },
        {
            title: "Sim System",
            description: "Sistema de venta y inventario",
            imgUrl: projImg2,
        },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg1,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg2,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
    ];

    return (
        <Container id="projects" sx={{ mt: 20}}>
            <Grid container spacing={3} sx={{ background: "#242424" }}>
                <Grid item md={12}>
                    <Typography gutterBottom variant="h4" sx={{ color: "#fff" }}>Proyectos</Typography>
                    <Typography variant="body2" gutterBottom sx={{ color: "#fff", fontSize: "18px" }}>
                        En esta sección, te presento algunos de los proyectos en los que he trabajado. Cada proyecto representa una oportunidad para aplicar mis habilidades y conocimientos en el desarrollo web y ofrecer soluciones creativas a los desafíos planteados.
                    </Typography>
                </Grid>
                {
                    projects.map((project, index) => {
                        return (
                            <CardProjects
                                key={index}
                                {...project}
                            />
                        )
                    })
                }
            </Grid>
        </Container>
    );
}