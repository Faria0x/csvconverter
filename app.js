const Processor = require("./Processor")
let Reader = require("./Reader")
let Table = require("./Table")
let HtmlParser = require("./HtmlParser")
let Writer = require("./Writer")

let leitor = new Reader()
let escritor = new Writer()



async function main(){
    let dados = await leitor.Read("./Pasta1.csv")
    let dadosProcessados = Processor.Process(dados)
    let usuarios = new Table(dadosProcessados)

    let html = await HtmlParser.Parse(usuarios)
    escritor.Write(Date.now() + ".html",html)
}

main()