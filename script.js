myCanvas.width=400;
myCanvas.height=300;
const margin=30;
const n = 20;
const array = []

for(let i=0; i<n; i++){
    array[i]=Math.random();
}

const cols = []
const spacing = (myCanvas.width-margin*2)/n;
console.log(spacing)
const ctx = myCanvas.getContext('2d');

const maxColumnHeight=200

//display all the value of canvas in deff location
for(let i=0; i<array.length; i++){
    const x = i*spacing+spacing/2+margin;
    const y = myCanvas.height-margin;
    const width = spacing-3;
    const height= (myCanvas.height-margin*2)*array[i];
    cols[i] = new Column(x,y,width,height);
    cols[i].draw(ctx);
}

