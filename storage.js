// const getData = async()=>{


//     var data = await fetch("https://chatappserver-zop9.onrender.com/users")

//     return data.body

// }

// console.log(getData())


const getData = async () => {
    await fetch("https://chatappserver-zop9.onrender.com/users")
    .then((res)=>console.log(res))
    .catch((e)=>console.log(e))
  };