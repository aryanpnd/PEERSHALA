import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Alert() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button fullWidth={"100%"} onClick={handleClickOpen} sx={{ marginY: 1 }} variant="contained" color="error">
                Logout
                <LogoutIcon sx={{ paddingX: 1 }} />
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {/* <DialogTitle>{"LOGOUT"}</DialogTitle> */}
                <DialogContent>
                    <DialogContentText fontWeight={"bold"} id="alert-dialog-slide-description">
                        Are you sure you want to logout ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>navigate("/login")} variant="contained" color="error">
                        Logout
                        <LogoutIcon sx={{ paddingX: 1 }} />
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}