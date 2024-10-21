export const timeSince =(date)=>{
    const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);
    console.log(second);
}