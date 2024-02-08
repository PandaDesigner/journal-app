import { SaveOutlined } from '@mui/icons-material';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

const TimeJurnal = ({ timeText }) => {
  return (
    <Typography
      sx={{
        fontSize: 'clamp(0.7rem, -0.7969rem + 5.75vw, 2.4375rem)',
        fontWeight: 'light'
      }}
    >
      {timeText}
    </Typography>
  );
};

export const NoteView = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'start',
        alignItems: 'start',
        minHeight: 'calc(100vh - 110px)',
        padding: 2,
        boxSizing: 'border-box',
        gap: 2
      }}
    >
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
      >
        <TimeJurnal timeText="28 de Enero, 2024" />
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold' }}
        >
          <SaveOutlined sx={{ fontSize: '30px', mr: 1 }} />
          Guardar
        </Button>
      </Stack>
      <TextField
        type="text"
        variant="filled"
        fullWidth
        placeholder="Ingrese un titulo"
        label="Titulo"
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="¿Que sucedio en el dia de hoy?"
        minRows={5}
      />
      <ImageGallery />
    </Stack>
  );
};
