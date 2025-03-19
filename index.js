function receivesAFunction(callback) {
    callback();
}

function named() {
}

function returnsANamedFunction() {
    return named;
}


function returnsAnAnonymousFunction(){
    return function () {
    }
}

