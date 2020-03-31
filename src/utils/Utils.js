import querString from 'query-string';
let rootUrl='https://www.fastmock.site/mock/49cd6fb699beeca0a01277e1feb8a3cc/api';

let myFetch={
    get(url,queryParams){
        if(queryParams){
            url=rootUrl+url+"?"+querString.stringify(queryParams);
        }
        return fetch(rootUrl+url)
                .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application',
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
            .then((res)=>res.json())
    }
}


export {myFetch}; 