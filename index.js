const http = require("http");
const fs = require("fs");



const server = http.createServer((req,res)=>{
    if(req.url.includes("omepage")){
        res.end(fs.readFileSync("./homepage.html"));
        return;
    } else  if(req.url.includes("bout")) {
        res.end(fs.readFileSync("./about.html"));
        return;
    } else if(req.url.includes("ontact")){
        res.end(fs.readFileSync("./contact.html"));
        return;
    } else if(req.url ==="/"){
        res.end(fs.readFileSync("./homepage.html"));
        return
    }
    res.end(fs.readFileSync("./404.html"));
});
server.listen(8080, () => console.log("Listening! -> 8080"));