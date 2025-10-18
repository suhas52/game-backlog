
import { useState, useEffect } from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import '../App.css'


function Gamelist() {
    const [gameList, setGameList] = useState([]);
    
    
    useEffect(() => {
        const getData = async () => {
            const response  = await fetch('http://localhost:3000/api/gamelist');
            const data = await response.json();
            console.log(data);
            setGameList(data)
        }
        
        getData();
    }, [])

    const handleDeleteGame = async (id) => {
      console.log(id);
      const response = await fetch('http://localhost:3000/api/deletegame', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: id})
      })
    }
    
    return (
  <main className="game-list">
    {gameList.map((game) => (
      <Card key={game.id} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={game.cover}
            alt={game.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {game.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => handleDeleteGame(game.id)}size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    ))}
  </main>
);
}

export default Gamelist;