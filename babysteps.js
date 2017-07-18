function sum(argv){
    if(argv.length == 0){
        return 0
    }
    return argv.shift() + sum(argv);
}

arr = [];

for(i = 0, j = 0; i < process.argv.length; i++){
    if(i != 0 && i != 1){
        arr[j] = Number(process.argv[i])
        j++
    }
}

console.log(sum(arr));