const express=require('express')
const multer=require('multer')
let movies=require('./mock/movies.js')
const app=express()
app.use(express.jason())
app.use(express.urlencoded({extended: true}))
app.get('/movies',(req,res)=>{res.jason(movies)
})
app.get('/movies',(req,res)=>{
    const{language,name}=req.quary
    let filteredMovies=movies
    if(language){
        filteredMovies=filteredMovies(movies=>{
            return moviename===name
        })
    }
})
app.get('/movies/:movieID',(req,res)=>{
    const{movieID}=req.params
    const movie=movies.find((movie) =>{
        return movie.id===moviesID
    })
    if(movie){
        res.send(movie)
    }else{
        res.status(404).send({msg:'No Movies Found'})
    }
})

app.listen(8000,()=>{
    console.log("Server Started Successfully")
})