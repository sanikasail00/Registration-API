const e = require('express');
const express = require('express')


const app=express()
app.use(express.json());

let events=[]
events.push(
    {   title:"Aerophilia",
        'desc':"showcasing the aero model",
        'image':"",
        capacity:200,
         
    })

events.push(
    {   title:"code blaze",
        'desc':"showcasing the coding skill",
        'image':"",
        capacity:100,
         
    })

events.push(
    {   title:"SSTH",
        'desc':"monitoring the school student ",
        'image':"",
        capacity:500,
         
    })

events.push(
    {   title:"DevHack",
        'desc':"36 hr hackthon",
        'image':"",
        capacity:300,
         
    })

events.push(
    {   title:"Competitative program",
        'desc':"coding",
        'image':"",
        capacity:200,
         
    })

app.get('/list-all',
    (req,res)=>{
    res.send(events)
});

app.post('/adding',
    (req,res)=>{
        let addition=req.body.addition
        events.push(addition)
        res.send(events)
        console.log(events)
    })

app.put('/updating',
    (req,res)=>{
        let updateEvent=req.body.updateEvent
        let eventIdx=events.findIndex((event)=>event.title==updateEvent.title)
        events[eventIdx]=updateEvent
        res.send(events)
    }
)

app.delete('/deleting',
    (req,res)=>{
        let deleteEvent=req.body.deleteEvent
        events=events.filter((event)=>event.title!=deleteEvent.title)
        res.send(events)
    }
)

app.listen(3000,()=>{
    console.log("i have port 3000")
});
