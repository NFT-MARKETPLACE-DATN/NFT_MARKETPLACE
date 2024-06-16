import axios from "axios";

const updatePinata = axios.create({
    baseURL: "https://api.pinata.cloud/pinning",
    headers:{
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${process.env.PINATA_JWT}`
    }
});

export {updatePinata};