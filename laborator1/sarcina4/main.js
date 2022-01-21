function upFirst(name) {
    return name.replace(name.substring(0,1), name.substring(0,1).toUpperCase());
}
//console.log('rezultat functii - ', upFirst('ion'))
console.log(upFirst('ion') == 'Ion');
