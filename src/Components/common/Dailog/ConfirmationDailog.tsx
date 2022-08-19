import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  openDailog: boolean;
  setOpenDailog: (openDailog: boolean) => void;
  title: string;
  content: string;
  onRemove: () => void;
}

export default function ConfirmationDailog({openDailog, setOpenDailog, title, content, onRemove}: Props) {

  const handleClose = () => {
    setOpenDailog(false);
  };

  return (
    <Dialog
      open={openDailog}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpenDailog(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Not now</Button>
        <Button onClick={()=>onRemove()}>Delete Now</Button>
      </DialogActions>
    </Dialog>
  );
}
