let _age = new Promise((resolve, reject)=>{
    let age = +prompt ("Enter age");
if (!NaN(age)){
    resolve('good');
}else{
    reject('bad');
}
})

console.log (_age);