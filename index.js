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
                let firstname = ["kelvin", "Quintin", "Makwe"]
                let subFirstname, lastname, email, nameOfCourse, courselink
                
                 $("input").find("#wpforms-389-field_0").attr('value') = "kelvin"
            }
        }
    }, error => console.log(err)
    
    )