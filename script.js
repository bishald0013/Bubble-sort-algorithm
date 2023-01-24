const n = 20;
const array = []

for(let i=0; i<n; i++){
    array[i]=Math.random();
}

const cols = []
const spacing = myCanvas.width/n;
const ctx = myCanvas.getContext('2d');

//display all the value of canvas in deff location
for(let i=0; i<array.length; i++){
    const x = i*spacing+spacing/2;
    const y = myCanvas.height;
    const width = spacing;
    const height= myCanvas.height*array[i];
    cols[i] = new Column(x,y,width,height);
    cols[i].draw(ctx);
}

