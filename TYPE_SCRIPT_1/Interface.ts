interface operateInterface {
    shape:string,
    size:number
}

function operateInterfaceExample (x:operateInterface){
    console.log(x.shape);
    return  x.size * x.size;
}

console.log('Interface for Square'+operateInterfaceExample({shape:'Square',size:10}))


interface player {
    run():void;
    addLives(n:number):void;
    scores():number;
}

function createPlayer() : player{
    return {
        run : function() {},
        addLives : function(n:number){},
        scores : function(){
            return 10;
        }
    }
}


class Website {
    url : string;
    facebookLike : number;
}

let google = new Website();
google.url = 'www.goggle.com';
google.facebookLike = 20;

console.log('Google'+google);