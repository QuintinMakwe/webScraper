let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs')


axios.get('https://www.freetutorialsus.com/request-course/')
    .then(response =>{
        if(response.status === 200) {
            //Get the html file 
            const html = response.data;
            //Give cheerio access to the files 
            const $ = cheerio.load(html)
            //Initialized empty array to store the returned object and the id of the needed fields 
            let inputArr = [];
            let inputId = []
            $('input').each((i,element)=>{
                inputArr.push(element)
                //Based on the data structure, I selected the id after gruesome hours of studying the data structures
                let id = inputArr[i]["attribs"]["id"]
                inputId.push(id)
                //I trimed the id array of undefined array elements
                inputId = inputId.filter((item)=>{
                    return item !== undefined
                })
            })
            console.log(inputId);
            // Write a function to make a post request using axios
            function makePostRequest(){
                let firstName = ['kelvin', 'quintin', 'daze','charles','jewel','kelechi'];
                let lastName = ['makwe', 'ikuchu', 'ani', 'eze', 'cheya','chigbo'];
                let email = ['kelvinmakwe@gmail.com', 'quintinmakwe@gmail.com', 'frankpeterani@gmail.com','ezehcharles19@gmail.com','cheyajewel@gmail.com','kelechichigbo24@gmail.com'];
                let lengthOfLoop = firstName.length;
                for(let i = 0; i < lengthOfLoop; i++){
                    let fName = firstName[i];
                    let lName = lastName[i];
                    let rEmail = email[i];
                    let courseName = "MERN Stack Front to Back: Full Stack React, Redux and Node js";
                    let courseLink = "https://www.udemy.com/course/mern-stack-front-to-back/"
                    $("input").find(inputId[0]).attr('value') = fName;
                    $("input").find(inputId[1]).attr('value') = lName;
                    $("input").find(inputId[2]).attr('value') = rEmail;
                    $("input").find(inputId[3]).attr('value') = courseName;
                    $("input").find(inputId[4]).attr('value') = courseLink;
                }
                 
            }
        }
    }, error => console.log(err)
    
    )