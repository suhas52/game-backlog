import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PublisherMenu from './publisherlist';
import { useState, useEffect} from 'react';


function AddNewGameModel() {
    
    const [open, setOpen] = useState(false);
    
    const [formData, setFormData] = useState({});
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        fetch("http://localhost:3000/api/addgame", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    };
    
    const handleChange = (e) => {
        
        setFormData( {
            ...formData, [e.target.name]: [e.target.value]
        });
        
    }
    
    return (
        <>
        <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
        </Button>
        
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Game</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit} id="subscription-form">
        {[
            { id: 'title', label: 'Title', type: 'text' },
            { id: 'release_date', label: 'Release Date', type: 'date' },
            { id: 'start_date', label: 'Start Date', type: 'date' },
            { id: 'end_date', label: 'End Date', type: 'date' },
            { id: 'description', label: 'Description', type: 'text' },
        ].map(({ id, label, type }) => (
            <TextField
            key={id}
            required
            margin="dense"
            id={id}
            name={id}
            label={label}
            type={type}
            fullWidth
            variant="standard"
            onChange={handleChange}
            />
        ))}
        
        <PublisherMenu formData={formData} setFormData={setFormData}/>
        </form>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
        Add
        </Button>
        </DialogActions>
        </DialogContent>
        
        
        </Dialog>
        </>
    );
}

export default AddNewGameModel;