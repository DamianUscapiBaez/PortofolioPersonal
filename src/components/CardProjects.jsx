import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export const CardProjects = ({ title, description, imgUrl }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ background: "#212529", color: "#fff" }}>
                <CardMedia
                    sx={{ height: "200px" }}
                    image={imgUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}