export const convertRawToString=(labelValue, isSub=false)=>{
    console.log(labelValue);
    const num = Math.abs(Number(labelValue));

    if(num > 1.0e9){
        return(num/1.0e9).toFixed(0)+"B";
    }
    return
}