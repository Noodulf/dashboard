const express=require('express')
const app=express()
const ngrok = require('@ngrok/ngrok');
require('dotenv').config();


app.use(express.json())

app.get('/',(req,res)=>{

    res.send('Hello World')
}
)
app.post('/',(req,res)=>{
    const {game, team1, team2, score1, score2}=req.body

    res.send('Data received')
    console.log('game:',game)
    console.log('team1:',team1)
    console.log('team2:',team2)
    console.log('score1:',score1)
    console.log('score2:',score2)
})

// (async function() {
//     try {
//       const url = await ngrok.connect({
//         addr: 3000,
//         authtoken: '2jl5K5QiqpIqiYlO7SxoJ4XZnX7_44hXYzwnPYaXZoWmJBdtb',
//       });
//       console.log(`Server is running on ${url}`);
//     } catch (err) {
//       console.error('Error starting ngrok:', err);
//     }
//   })();





// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const ngrok = require('@ngrok/ngrok');
// require('dotenv').config();

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('gameData', (data) => {
//     const { game, team1, team2, score1, score2 } = data;
//     console.log('game:', game);
//     console.log('team1:', team1);
//     console.log('team2:', team2);
//     console.log('score1:', score1);
//     console.log('score2:', score2);

//     io.emit('scoreUpdate', { game, team1, team2, score1, score2 });
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });

//   // Example of handling another custom event
// //   socket.on('customEvent', (data) => {
// //     console.log('Received customEvent:', data);
// //   });
// });



app.listen(3000, () => {
  console.log('Server is running on port 3000');

  ngrok.connect({ addr: 3000, authtoken_from_env: true })
    .then(listener => console.log(`Ingress established at ${listener.url()}`))
    .catch(err => console.error('Error starting ngrok:', err));
});
