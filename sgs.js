`use script`;


let object = {
    "Lera": "+380445554433",
    "Kate": "+380995554433",
    "Paul": "+38044454433"
}

let findPhoneByName = name => {
    for(const n in object) {
        if (n == name) {
            console.log(object[n])
        }
    }
}
findPhoneByName('Paul');