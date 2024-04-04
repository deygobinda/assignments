const fs = require('fs');
const express = require("express");
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("Server working")
})

app.get('/todos',(req,res)=>{
    fs.readFile("todos.json" , "utf-8" , (err,data)=>{
        if(err) throw err
        res.json(JSON.parse(data))
    })
})

app.post('/todos' , (req,res) =>{
    const newTodo = {
        id : Math.floor(Math.random() * 10000),
        title: req.body.title,
        description : req.body.description
    }

    fs.readFile("todos.json", "utf-8", (err ,data)=>{
        if(err) throw err;
        const todos = JSON.parse(data)
        todos.push(newTodo)
        fs.writeFile("todos.json" , JSON.stringify(todos) , (err)=>{
            if(err) throw err ;
            res.status(201).json(newTodo)
        })
    })

})


app.put('/todos/:id' , (req,res)=>{
    fs.readFile("todos.json",'utf-8' , (err,data) =>{
        if(err) throw err
        const todos = JSON.parse(data)
        let idx = findIndex(todos,parseInt(req.params.id))
        if(idx == -1){
            res.status(404).status("Not found")
        }else{
            const todo = todos[idx]
            const updateTodo = {
                id : todo.id,
                title: req.body.title,
                description : req.body.description
            }
            todos[idx]= updateTodo
            fs.writeFile("todo.json",JSON.stringify(todos) ,(err)=>{
                if(err) throw err;
                res.status(200).json(todo)
            })
        }
    })
})

app.all('*',(req,res)=>{
    res.status(404).send("Route not found")
  })


app.listen(PORT,()=>{
    console.log(`The server is running at ${PORT} port`)
})

function findIndex(arr , id){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].id == id){
            return i;
        }
    }
    return -1;
}