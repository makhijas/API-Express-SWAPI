//gives us access to variable in our .env file
require ('dotenv').config()

//see variables using process.env
console.log(process.env)
console.log(process.env.API_KEY)
