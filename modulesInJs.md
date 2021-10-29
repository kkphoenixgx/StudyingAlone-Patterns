# Studying Alone

## Modules, import and Export with V6 js

To start using the modules, you have to use type = "module" in the main js index.
and using the type = "module" you can use atributes like:
defer and async.

### Exporting:

And in the script we have to use export to indicate that this function, variable, atribute, method or a hole class is exportable and if It is going to be exported, but on class generally you is doing a class file so to a class you generally are going to use "default" to indicate that is the default exportation. Exemple:

~~~javascript
Class Interface(){
    constructor(data, user = undefined){
        this._data = data;
        this._user = user;
    }

    SendToDB(){
        db.upload(this._data.JSON.parse());
    }
    importFromDb(){
        db.findOne(this._user);
    }
}
~~~

Lets speak that I wanna export the import to db,
that is not even real because it is a interface and that could't be recognized for others, but let's ignore it, my function can be exported in two ways, with an export on the end or a export in front of my interface, that the syntax to me looks better:

~~~javascript
export importToDb(){
    db.findOne(this._user);
}
// or in the end with a {} in the end of our code
importFromDb(){
    db.findOne(this._user);
}

export { importFromDb }

// on the default the same thing but with default to a class

export default Class Interface(){
    constructor(data, user = undefined){
        this._data = data;
        this._user = user;
    }

    SendToDB(){
        db.upload(this._data.JSON.parse());
    }

    export importFromDb(){
        db.findOne(this._user);
    }
}

//Or:

Class Interface(){
    constructor(data, user = undefined){
        this._data = data;
        this._user = user;
    }

    SendToDB(){
        db.upload(this._data.JSON.parse());
    }
    importFromDb(){
        db.findOne(this._user);
    }
}

export default Interface
export{importFromDB}
~~~

I prefer the syntax with it but that don't means nothing, you can use that in many ways. 

### Importing

To Import in js you have to use import x from y, x = what you are importing and y = from what path?

Exemple:

~~~javascript
import Interface from './controller/Interface.js'
~~~

A good thing to notice is that the name Interface is a variable anf can be modified as anything you want.<br>
If you want to import more than a thing you have to put in a object "{ }" with the name, and it has to be the name of the function, or anything else that you are calling, and to change the name in the script you can use **y as x**, x = the name you want and the y = the name of what you are calling.

~~~javascript
import Interface, {importFromDb} from './controller/Interface.js'

// to change the name:

import Model, {importFromDb as DbImport} from './controller/Interface.js'
~~~

Use bobble to do the conversion for support older browsers.
