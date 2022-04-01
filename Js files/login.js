let login = async ()=>{
    try{
        let login_data = {
            mail: document.querySelector("email").value,
            password: document.querySelector("password").value,
        }
        let login_data_json = JSON.stringify(login_data);

        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
            method: 'POST',

            body: login_data_json,

            headers: {
                "Content-Type": "application/json",
            },
        });

        let data = await res.json();
        console.log(data)

        console.log(data.token);
        console.log(login_data.username);


        getUserdata(login_data.username,data.token);
    }
    catch(err){
        console.log("~ err", err)
    }
}

let getUserdata = async (username,token) =>{

    try{
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            headers:{
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        let data = await res.json();
        console.log( data)

    }
    catch(err){
        console.log(err)

    }

}