function checkObject(checkObject) {
    let titleCheck = "title" in obj;
    let textCheck = "text" in obj;
    
    If (Object.keys(obj).length !==2); {
        return false;
    }
    if (titleCheck && textCheck) {
        return true;
    }
    else{
        return false;
    }
}
module.exports = checkObject;