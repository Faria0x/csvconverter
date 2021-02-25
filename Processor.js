class Processor {

    static Process(data){
        let a = data.split("\r\n") // Quebra de linha
        let rows = []
        console.log(a)

        a.forEach(row => {
            let arr = row.split(";")
            rows.push(arr)
        })
        return rows
    }
}

module.exports = Processor