import { useEffect, useState } from "react";
import * as React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function PublisherMenu( { formData, setFormData }) {
    
    
    const [publishers, setPublishers] = useState([]);
    const [selectedPublisher, setSelectedPublisher] = useState('');

    const handleChange = (event) => {
        const publisherId = event.target.value;
        setSelectedPublisher(event.target.value);
        
        setFormData({
                ...formData, publisher: publisherId
            })
    };

    useEffect(() => {
        const getPublishers = async () => {
            const response = await fetch('http://localhost:3000/api/getpublishers');
            const data = await response.json();
            setPublishers(data);
            
        }

        getPublishers();
    }, [])

    return (<>
    <FormControl fullWidth>
      <InputLabel id="publishers">Publishers</InputLabel>
      <Select
        labelId="publishers"
        value={selectedPublisher}
        label="Plublisher"
        onChange={handleChange}
      >
        {publishers.map((publisher) => {
            return <MenuItem key={publisher.id} value={publisher.id}>{publisher.publisher}</MenuItem>
        })}
        

      </Select>
    </FormControl>
        </ >
    )
}

export default PublisherMenu;