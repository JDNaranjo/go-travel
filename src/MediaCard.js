import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={require('./img/torre-pisa.jpg')}
        alt="torre pisa"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Torre inclinada de Pisa
        </Typography>
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
        >
            <LocationOnIcon sx={{color: "#FF6647"}} />
            <Typography variant="body2" color="text.secondary"  >
                Pisa, Italia
            </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}