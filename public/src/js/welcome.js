const sub = document.querySelector('button'); 
const inpRub = document.querySelector('input');
const form = document.querySelector('form');


console.log(`object`);
setTimeout(()=>{ 
   return fetch("http://localhost:3000/createClient" , { 
      method: 'POST', 
      body: { rub: `as`},
      headers: { 
       'Content-Type': 'application/json'
      }
 })
//  .then((responce)=>{ 
//     responce.json()
//  })
//  .then((data)=>{ 
//     console.log(data);
//  })
} , 4000);



// sub.addEventListener('click' , (event)=>{ 
//    // e.preventDefault();
//    event.preventDefault();
//    // console.log(`asd`);
//    // console.log(`object`);
//    //не работает
//    // function sendRequest( method , URL , body = null){ 

//    //    const headers = { 
//    //       'Content-Type': 'application/json'
//    //    }
   
//    // return fetch (URL , {
//    //    method: method, 
//    //    body: JSON.stringify(body),
//    //    headers: headers
//    // }).then(responce=> responce.json())
//    // }
   
//    fetch("http://localhost:3000/createClient" , { 
//         method: 'POST', 
//         body: `Kak tvoi dela`, 
//         headers: { 
//          'Content-Type': 'application/json'
//         }
//    }).then((responce)=>{ 
//       responce.json()
//    }).then((data)=>{ 
//       console.log(data);
//    })
   
   
//    // const body = { 
//    //    name: `Akhmed`, 
//    //    age: 25
//    // }
   
//    // sendRequest('POST' , 'http://localhost:3000/createClient' , inpRub.value)
//    // .then(data=> console.log(data))
//    // .then(()=>{ 
//    //    fetch4()
//    // })
//    // .catch(er=> console.log(er))
   
   
//    // const req = new XMLHttpRequest();

//    // req.open( 'POST' , 'http://localhost:3000/createClient'); 

//    // req.setRequestHeader('Content-type', 'multipart/form-data');

//    // const formData = new FormData(form);

//    // req.send(formData);

//    // req.addEventListener('load' , ()=>{ 
//    //    if (req.status === 200) { 
//    //       console.log(req.response);
//    //    }
//    // })

//    inpRub.value = '';

// })









// window.addEventListener('keydown', (e)=>{ 
//    if (e.key === 'Enter') { 
//       sub.click()
//    }
// })