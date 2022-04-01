let Register = async () => {

    try{
        let Register_data = {

            name: document.getElementById("name").value,
            mobile: document.getElementById("mbNum").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
    
        };

        Register_data = JSON.stringify(Register_data);

        let res = await fetch("https://marriott-bonvoy.herokuapp.com",   {
            method: 'POST',

            body: Register_data,

            headers: {
                "Content-Type": "application/json",
            }
        });

        let data = await res.json();

        console.log(data);
    }
    catch(err){
    console.log("~ err", err)
        
    }
};

export default Register;