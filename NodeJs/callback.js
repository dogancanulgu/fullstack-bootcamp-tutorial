function writeName(name, callback){
    console.log(name);
    callback();
}

writeName('Doğancan', function(){
    console.log('Hoşgeldiniz.')
});
