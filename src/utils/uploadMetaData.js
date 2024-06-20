import * as axios from "./commonAPI";

const uploadMetaData =async (metaData) =>{
    try {
        const data = JSON.stringify(metaData);
        const result = await axios.updatePinata
        .post(`/pinJSONToIPFS`,data)
        .then(value =>{
            return value.data.IpfsHash;
        }
        );
        return {
            result:`https://azure-acute-bee-777.mypinata.cloud/ipfs/${result}`,
            status : true
        }
       
    } catch (error) {
        return {
            result : error,
            status : false
        }
    }  
}
export {uploadMetaData}