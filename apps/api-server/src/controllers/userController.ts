import type { Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';


dotenv.config();

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if(!username || !password) res.status(401).json({
        message: "credentials missing!!"
    });

    try{
        console.log(1);
        const user = await prismaClient.user.findFirst({
            where: {
                username: username
            }
        });
        console.log(2);

        if(!user) res.status(403).json({
            message: "user not found in db | invalid credentials!!"
        });

        const secret = process.env.JWT_SECRET;

        const token = jwt.sign({id: user!.id}, secret!, {expiresIn: "12h"});

        return res.status(200).json({
            message: "login done!!", 
            token
        });

    }catch(err){
        console.log("error while login: ", err);
        return res.status(500).json({
            message: "internal server error while login!!"
        });
    }
}





export const register = async (req: Request, res: Response) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) return res.status(401).json({
        message: 'invalid/missing credentials!!'
    });

    const existingUser = await prismaClient.user.findFirst({
        where: {
            username
        }
    });

    if(existingUser) {
        return res.status(409).json({
            message: "conflict | user already exists"
        });
    }

    try{
        const userId = uuidv4();
        const createUser = await prismaClient.user.create({
            data: {
                id: userId, 
                username, 
                email, 
                password
            }
        });

        const secret = process.env.JWT_SECRET;

        const token = jwt.sign({id: createUser.id}, secret!, {expiresIn: "12h"});

        return res.status(200).json({
            message: "signup done!!", 
            token
        });

    }catch(err){
        console.log("error while signup: ", err);
        return res.status(500).json({
            message: "internal server error while signup!!"
        });
    }
}