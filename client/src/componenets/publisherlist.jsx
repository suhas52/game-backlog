import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [publishers, setPublishers] = React.useState([]);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    React.useEffect(() => {
        async function getPublishers() {
            const response = await fetch('http://localhost:3000/api/getpublishers');
            const data = await response.json();
            setPublishers(data);
        }

        getPublishers();
    }, [anchorEl])

    return (
        <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        Publishers
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
            list: {
                'aria-labelledby': 'basic-button',
            },
        }}
        >
        {publishers.map((publisher) => {
            return <MenuItem key={publisher.id}>{publisher.publisher}</MenuItem>
        })}
        </Menu>
        </div>
    );
}