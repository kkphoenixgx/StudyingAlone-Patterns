class Observable{
    
    //Utilize essa pattern quando precisar notificar todos de algo. 
    constructor(){
        this.observers = [];
    }

    addObserver(observer){
        this.observers.push(observer);
    }

    removeObserver(observer){
        this.observer.pop(observer);
    }

    notifyAllObservers(){

        

    }

}