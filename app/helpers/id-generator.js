export default function (){
    var d = Date.now();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.floor((d + Math.random()*16) % 16);
        d = Math.floor(d/16);
        return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
    });
}
