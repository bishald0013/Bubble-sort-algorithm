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
const ctx = myCanvas.getContext('2d');

const maxColumnHeight=200

//display all the value of canvas in deff location
for(let i=0; i<array.length; i++){
    const x = i*spacing+spacing/2+margin;
    const y = myCanvas.height-margin-i*3;
    const width = spacing-4;
    const height=maxColumnHeight*array[i];
    cols[i] = new Column(x,y,width,height);
    // cols[i].draw(ctx);
}

let move=bubbleSort(array)
console.log(move)

animate()

//bubble-sort algorithm
function bubbleSort(){
    const moves = []
    do {
        var swapped=false;
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
                swapped=true;
                [array[i-1],array[i]]=[array[i],array[i-1]];
                moves.push(
                    {indices:[i-1,i],swap:true}
                );
            }else{
                moves.push(
                    {indices:[i-1,i],swap:false}
                );
            }
        }
    } while (swapped);

    return moves;
}

//animate frames
function animate(){
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
    for(let i=0; i<cols.length;i++){
        cols[i].draw(ctx)
    }
    requestAnimationFrame(animate)
}

