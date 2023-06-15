const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const optionList = [
    {value: 0.3 ,text:"outstanding"},
    {value: 0.2 ,text:"good"},
    {value: 0.15 ,text:"okay"},
    {value: 0.1,text:"bad"},

];

app.get('/calculateBill', (req, res) => {
    const { billAmount, serviceQuality, totalPeople } = req.query;
    let total = (billAmount * serviceQuality) / totalPeople; // here we have to done the floor value.....
    res.send({ value: total });
})



app.get('/getOptionsList',(req,res)=>{
    res.json(optionList);

})
app.listen(3000, () => {
    console.log("server is running in port no 3000");
})
