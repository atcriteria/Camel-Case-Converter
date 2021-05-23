export default function ccconvert(str){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let temp = str.toLowerCase();
    let ans = "";
    for(let i = 0; i < str.length; i++){
        if(alphabet.includes(str[i])){
            if(i%2 === 0 || i === 0){
                ans += temp[i].toUpperCase()
            } else {
                ans += temp[i].toLowerCase()
            }
        } else {
            ans += temp[i];
        }
    }
    return ans
}