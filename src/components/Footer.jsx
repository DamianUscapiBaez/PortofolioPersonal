import { Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Container>
            <Grid container sx={{ mt: 10, mb: 10 }}>
                <Grid item xs={12}>
                    <Typography sx={{ color: "#fff", textAlign: "center" }}>Copyright 2023. Reservados todos los derechos</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}