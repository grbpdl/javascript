
const myPromise = new Promise((resolve, reject) => {
    if(condition)
    {
    resolve("Promise was fulfilled");
    } 
    else
    {
    reject("Promise was rejected");
    }
    myPromise.then(result => { //then method is executed immediately after your promise is fulfilled with resolve
        console.log(result);
    });
    myPromise.catch(error => { //catch is the method used when your promise has been rejected.
        console.log(error);
    });
});