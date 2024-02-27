import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Photo } from "../../../types/places";

interface Props {
  title: string;
  latitude: number;
  longitude: number;
  photos: Photo[];
}

const ClickComponent = styled(Link)({
  "&": {
    cursor: "pointer",
    textDecoration: "none",
  },
});

const CardPlace = ({ title, latitude, longitude, photos }: Props) => {
  const mapURL: string = `https://www.google.com/maps/place/${latitude},${longitude}`;
  let imageUrl: string = `https://via.placeholder.com/200`;
  const apiKey: string = "AIzaSyAljLSwR2S312HatZnMJKDWz7SADlOL6AM";

  if (photos.length > 0) {
    const photoReference = photos[0].photo_reference;
    imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
  }

  return (
    <ClickComponent href={mapURL} target="_blank" rel="noreferrer">
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            minWidth: { xs: "120px", md: "200px" },
            width: { xs: "120px", md: "200px" },
            height: { xs: "120px", md: "200px" },
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            aspectRatio: '(3/2)'
          }}
          image={imageUrl}
          alt="Placeholder"
        />
        <Grid container direction="column">
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                -
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </ClickComponent>
  );
};

export default CardPlace;
