import React, { useEffect, useState } from "react";
// import { imageDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import firebaseStore from "./configFirebase";


export const uploadImgaeFirebase =async (imageUpload,imageFolder)=>{
    if(imageUpload == null) return;
    // console.log(imageUpload);
    // console.log(firebaseStore);
    const imgRef =  ref(firebaseStore,`${imageFolder}/${imageUpload.name + v4()}`);
    const result = await uploadBytes(imgRef,imageUpload).then(value=>{
        console.log(value.metadata);
        // getDownloadURL(value.ref).then(url=>{
        //     setImgUrl(data=>[...data,url])
        // })
        return `https://firebasestorage.googleapis.com/v0/b/marketplace-6d379.appspot.com/o/${imageFolder}%2F${value.metadata.name}?alt=media`
    })
    return result;


}
