const TextManager = (() => {
    // let value = "hello Lions!";
    let value = {data:"hello Lions!"};

    function innerTextManager() {}
    
    innerTextManager.prototype.getValue = function () {
        return value.data;
    }

    innerTextManager.prototype.setValue = function (newValue) {
        value = newValue;
    }
    return innerTextManager;
    
})();

const myInstance1 = new TextManager();
const myInstance2 = new TextManager();
const myInstance3 = new TextManager();
