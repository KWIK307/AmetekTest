"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 9876;
app.get('/fizzbuzz/From/:from/To/:to', (req, res) => {
    res.json({
        result: fizzbuzzapp()
    });
    function fizzbuzzapp() {
        var i = Number(req.params.from);
        var j = Number(req.params.to);
        var k = 0;
        let fizzbuzz = [];
        for (i; i <= j; i++) {
            if (i % 3 == 0 && i % 7 == 0) {
                fizzbuzz[k] = "FizzBuzz";
                k++;
            }
            else if (i % 3 == 0) {
                fizzbuzz[k] = "Fizz";
                k++;
            }
            else if (i % 7 == 0) {
                fizzbuzz[k] = "Buzz";
                k++;
            }
            else {
                fizzbuzz[k] = i.toString();
                k++;
            }
        }
        let json = JSON.stringify(fizzbuzz);
        console.log({ "result": json });
        return json;
    }
});
app.listen(port, () => console.log('The application is on listen 9876'));
