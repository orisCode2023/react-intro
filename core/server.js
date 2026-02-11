import express from "express"
import cors from "cors"


const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500'
})
)

app.get('/data', (req, res) => {
    const data = {name: 'Yeuda', lastName: 'motherfucker'} 
    try {
        if (data) {
            res.json(data)
        }
    } catch (error) {
        console.log("data not found")
    }
});

app.listen(3000, () => {
    console.log("server run on port 3000")
})
