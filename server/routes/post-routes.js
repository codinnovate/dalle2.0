import express from 'express';
import * from 'dotenv';
import {v2 as cloudinary } from 'cloudinary';

export const createPost = async (req, res) => {
    const { title, content, image } = req.body;
    const result = await cloudinary.uploader.upload(image);
    const { secure_url } = result;
    
}