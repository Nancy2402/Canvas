class Data{
    constructor(){
        this.drawing = null;
    }
    saveDrawing(){
        var ref = database.ref('drawing');
        var data={
            name: "nancy",
            drawing :this.drawing
        }
        ref.push(data);
    }
}