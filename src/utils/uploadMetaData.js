import * as axios from "./commonAPI";

const uploadMetaData =async (metaData) =>{
    const data = JSON.stringify(metaData);
    const result = await axios.updatePinata
    .post(`/pinJSONToIPFS`,data)
    .then(value =>{
        return value.data.IpfsHash;
    }
    );
    // console.log(result);
    return `https://azure-acute-bee-777.mypinata.cloud/ipfs/${result}`;
}
export {uploadMetaData}