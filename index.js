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
            let inputName = []
            $('input').each((i,element)=>{
                inputArr.push(element)
                //Based on the data structure, I selected the id after gruesome hours of studying the data structures
                let id = inputArr[i]["attribs"]["id"]
                let formFieldName = inputArr[i]["attribs"]["name"]
                inputId.push(id)
                inputName.push(formFieldName)
                //I trimed the id array of undefined array elements
                inputId = inputId.filter((item)=>{
                    return item !== undefined
                })
            })
            console.log(inputId);
            console.log(inputName);
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
                    // //select the input fields and fill them up with the appropriate field values from our array.
                    let inputFields = {
                        fieldFirstName : $("input").find(inputId[0]).attr('value'),
                        fieldLasttName : $("input").find(inputId[1]).attr('value'),
                        fieldEmail : $("input").find(inputId[2]).attr('value'),
                        fieldCourseName : $("input").find(inputId[3]).attr('value'),
                        fieldCourseLink : $("input").find(inputId[4]).attr('value'),
                    };
                
                    // $("input").find(inputId[0]).attr('value')= fName;
                    // $("input").find(inputId[1]).attr('value') = lName;
                    // $("input").find(inputId[2]).attr('value') = rEmail;
                    // $("input").find(inputId[3]).attr('value') = courseName;
                    // $("input").find(inputId[4]).attr('value') = courseLink;
                    //Make the post request
                    axios.post('https://www.freetutorialsus.com/request-course/',{
                        [$("input").find(inputId[0]).attr('value')]: fName,
                        [$("input").find(inputId[1]).attr('value')] : lName,
                        [$("input").find(inputId[2]).attr('value')] : rEmail,
                        [$("input").find(inputId[3]).attr('value')]: courseName,
                        [$("input").find(inputId[4]).attr('value')]: courseLink

                    }).then(response =>{console.log(response.statusText)}, error =>{console.log(error)})
                }
                 
            }
            makePostRequest();
        }
    }, error => console.log(err)
    
    )