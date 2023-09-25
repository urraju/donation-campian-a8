

const getStoreData = () => {

    const StoredDonationData = localStorage.getItem("data")
    if(StoredDonationData){
        return JSON.parse(StoredDonationData)
    }
    return []
}

const storedDataSave = (id) => {
    const dataStoredDonation = getStoreData()
    const exsits = dataStoredDonation.find(jobId => jobId === id)
    if(!exsits){
        dataStoredDonation.push(id)
        localStorage.setItem('data', JSON.stringify(dataStoredDonation))
    }
}

export {storedDataSave , getStoreData}