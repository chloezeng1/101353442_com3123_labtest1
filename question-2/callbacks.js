
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message':  'delayed success!'}
            resolve(success);
        }, 500);
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('delayed exception!')
        }, 500)
    })
}

resolvedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.error(e)
    })

rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.error({error: e});
    })