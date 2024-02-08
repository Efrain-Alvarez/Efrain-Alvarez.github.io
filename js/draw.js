const draw={};

draw.path=(ctx,path,color="black")=>{
    ctx.strokesStyle=color;
    ctx.lineWidth=3;
    ctx.beingPath();
    ctx.moveTo(...path[0]);
    for(let i=1; i<path.legnth;i++){
        ctx.lineTo(...path[i]);
    }
    ctx.stroke();
}