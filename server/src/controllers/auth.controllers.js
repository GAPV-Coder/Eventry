/* import {catchASync} from "../helpers/catchAsycn.js  "
import {success} from "../helpers/serverResponses.js"
import  */

import loginUser from "../services/user.service.js";
import catchASync from "../helpers/catchAsycn.js  "
import {success} from "../helpers/serverResponses.js";
import {error} from "../helpers/serverResponses.js";

/* import config from "../config.js";
const {COOKIE_NAME} = config; */


/* export const loginUsers = async (req, res) => {
    try {
        
        return res
        .cookie(COOKIE_NAME, token, {httpOnly: true})
        .send({status:"success", message:"Logged in succesfully"})
    } catch (error) {
        console.log(`Failed to login user: ${error}`);
        return res
        .status(404)
        .send({ status: "error", error: "Failed to login user" });
    }

    

};  */



export const register = async (req,res) => {
    try {

        return res
        .status(200)
        .send({ status: "success", message: "User registered" });
    
      } catch (error) {
        console.log(`Failed to register user: ${error}`);
        return res
        .status(404)
        .send({ status: "error", error: "Failed to register user" });
    }
}



/* export const register = async (req,res) => {
    try {
    success({
        res,
        message: 'User logged in successfully',
        data: result,
        status: 200
    })
   } catch (error) {
    error({
        res,
        message : "user register failed",
        status: 404
    })
   }
} */