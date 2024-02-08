import { StarOutline } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 110px)',
        background:
          'linear-gradient(-174.87deg, rgba(112, 151, 217, 1) -36.71897846239968%, rgba(30, 34, 170, 1) 103.47570081720376%)',
        borderRadius: 2,
        padding: 2,
        boxSizing: 'border-box'
      }}
    >
      <Stack
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={0.5}
        color={'#fff'}
      >
        <StarOutline sx={{ fontSize: 100 }} />
        <Typography variant="h6" component={'p'} lineHeight={1}>
          Selecciona o crea una nueva entrada
        </Typography>
      </Stack>
    </Stack>
  );
};
