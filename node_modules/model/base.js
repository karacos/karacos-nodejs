function Base() {
    
}

Base.prototype = new Document();

Base.prototype.constructor = Base;