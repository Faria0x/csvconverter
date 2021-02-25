// const fs = require("fs")

// fs.readFile("./usuario.json",{encoding: "utf-8"},(err,dados)=>{
//     if(err){
//         console.log(err)
//     }else{
//         let conteudo = JSON.parse(dados)
//         conteudo.idade = 22
//         console.log(conteudo)

//         fs.writeFile("./usuario.json",JSON.stringify(conteudo),(err)=> {
//            if(err){
//             console.log(err)
//            }
//         })
//     }
// })