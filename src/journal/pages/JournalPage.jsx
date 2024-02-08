import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../index';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: '#fff',
          backgroundColor: 'secondary.main',
          ':hover': {
            backgroundColor: 'secondary.main',
            opacity: 0.7
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined fontSize="30" />
      </IconButton>
    </JournalLayout>
  );
};
