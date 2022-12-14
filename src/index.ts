import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 9876;

app.get('/fizzbuzz/From/:from/To/:to', (req: Request, res: Response) => {
    res.json({

        result:fizzbuzzapp()

    })

    function fizzbuzzapp(){

        var i = Number(req.params.from)
        var j = Number(req.params.to)
        var k = 0

        let fizzbuzz: Array<string> = []


        for(i; i<=j; i++){
            if(i % 3 == 0 && i % 7 == 0 ){
                fizzbuzz[k] = "FizzBuzz"
                k++
            }else if(i % 3 == 0){
                fizzbuzz[k] = "Fizz"
                k++
            }else if(i % 7 == 0){
                fizzbuzz[k] = "Buzz"
                k++
            }else{
                fizzbuzz[k] = i.toString()
                k++
            }
        }

        let json = JSON.stringify(fizzbuzz)
        console.log({"result":json});
        return json

    }

});

app.listen(port, () => console.log('The application is on listen 9876'))