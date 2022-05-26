import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MediaCardLocal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={require('./img/salento.jpg')}
        alt="torre pisa"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" onClick={handleOpen}>
          Salento
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Salento
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Descripcion del lugar
            </Typography>
          </Box>
        </Modal>
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
        >
            <LocationOnIcon sx={{color: "#FF6647"}} />
            <Typography variant="body2" color="text.secondary"  >
                Salento, Colombia
            </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}