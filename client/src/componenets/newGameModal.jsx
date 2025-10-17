import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BasicMenu from './publisherlist';


function AddNewGameModel() {
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
    };
    
    return (
        <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Game</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit} id="subscription-form">
        <TextField
        autoFocus
        required
        margin="dense"
        id="title"
        name="title"
        label="Title"
        type="text"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="release_date"
        name="release_date"
        label="Release Date"
        type="date"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="start_date"
        name="start_date"
        label="Start Date"
        type="date"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="start_date"
        name="start_date"
        label="Start Date"
        type="date"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="end_date"
        name="end_date"
        label="End Date"
        type="date"
        fullWidth
        variant="standard"
        />
        <TextField
        autoFocus
        required
        margin="dense"
        id="description"
        name="description"
        label="Description"
        type="text"
        fullWidth
        variant="standard"
        />
        <BasicMenu />
        </form>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
        Add
        </Button>
        </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}

export default AddNewGameModel;