import { v4 as uuidv4 } from 'uuid';
 export async function POST(req, res) {
     const {user, password} = await req.json()
     let message = "", options = {};
    if (user== process.env.DEFAULT_USER && password === process.env.DEFAULT_PASSWORD) {
        message = JSON.stringify({
            accessToken: uuidv4()
        })
        options = {
            status: 200,
        }
    } else { 
        message = "Unauthorized"
        options = {
            status: 401
        }
    }
    return new Response(message, options)
    
 } 