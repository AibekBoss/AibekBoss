const axios = require('axios')



// function log(text) {
//     setTimeout(()=>{
//     console.log(text)
        
//     },3000)
//     // console.log(text)
// }

// function logNums() {
//     log(0)
//     console.log(1)
//     log(2)
//     console.log(2)
//     log(3)
//     console.log(4)
//     log(5)
// }
// logNums()

// async/await
// const test = async()=> console.log('afasdfa')

//    async  function getDate(){
//         const date = await axios.get(
//             'https://jsonplaceholder.typicode.com/posts/1'
//             ).then(res => res.date)
//            console.log(date)
//     }

// console.log(getDate().then(res => res))


// console.log('hello')


axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=> console.log(res))
    .then(date => date.title)
    .then(title => console.log(title))
    .finally(()=>console.log('hello'))
    .catch(arr => console.log(arr.message))
    
    
    
    // console.log(date)















