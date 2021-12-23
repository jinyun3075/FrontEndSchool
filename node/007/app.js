const fs = require('fs');

fs.readFile('./username.csv','utf8',(err,data)=>{
    console.log(data);
    data.split('\r\n').slice(1).map((data)=>data.split(', '))
    .forEach((data)=>{
        fs.mkdir(`./${data[0]}`, (err)=>{
            console.log(err);
        })
        fs.appendFile(`./${data[0]}/userinfo.txt`, `UserName : ${data[0]} Identifier : ${data[1]} job : ${data[2]}`,(err)=> {
            console.log(err);
        });

    }
    )
})

