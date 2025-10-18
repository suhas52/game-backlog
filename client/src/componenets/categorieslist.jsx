import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function CategoriesList({ formData, setFormData }) {
    
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleChange = (event) => {
        const categoryId = event.target.value;
        setSelectedCategory(event.target.value);
        
        setFormData({
            ...formData, category: categoryId,
        })
    }
    
    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch('http://localhost:3000/api/getcategories');
            const data = await response.json();
            setCategories(data);
        } 
        
        getCategories();
    }, [])
    
    return (<>
        <FormControl fullWidth>
        <InputLabel id="categories">Categories</InputLabel>
        <Select
        labelId="categories"
        value={selectedCategory}
        label="Category"
        onChange={handleChange}
        >
        {categories.map((category) => {
            return <MenuItem key={category.id} value={category.id}>{category.category}</MenuItem>
        })}
        
        
        </Select>
        </FormControl>
        </ >
    )
}

export default CategoriesList;