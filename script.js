let array = [];
let prevDir;
let dir;
let p;
let temporarilyIgnore = false;
let cleanDir;

let gi = 0,
  gj = 0,score=0;
let length = 1;
let cont = document.getElementById("container");
let scoreDiv = document.getElementById('score')
// const scoreDivContent = scoreDiv.innerText.value
// alert(scoreDivContent)
scoreDiv.textContent = `score: ${score}`
let div = document.createElement("div");
let itterx = parseInt(cont.offsetWidth / (30 ));
// alert(itterx)
let itterh = parseInt(cont.offsetHeight / (30));
for (let j = 0; j < parseInt(itterh); j++) {
  array[j] = [];
  for (let i = 0; i < parseInt(itterx); i++) {
    let div = document.createElement("div");
    div.style.minWidth = "30px";
    div.style.minHeight = "30px";
    div.style.background = "black";
    div.style.borderRadius='100%'
    cont.appendChild(div);
    array[j][i] = div;
  }
}



array[0][4].classList.add('box')
function box(i,j){
  let foodi,foodj
  array[i][j].classList.remove('box')
  array[i][j].style.backgroundColor='lightgreen'
  score++;
  scoreDiv.textContent = `score: ${score}`
  length++;
  do{
     foodi = parseInt(Math.random()*itterh)
     foodj = parseInt(Math.random()*itterx)
  }while(array[foodi][foodj].style.backgroundColor=='lightgreen' || array[foodi][foodj].style.backgroundColor=='darkgreen')
    array[foodi][foodj].classList.add('box')
 
}
array[gi][gj].style.backgroundColor='darkgreen';
function clean() {
  if (prevDir == "right") {
    let j = (gj - length + 1) % itterx;
    let i = gi;
    let k = 0;
    let tj = gj;
    let p = 0;
    // if (length > itterx) {
      while ((array[i][tj].style.backgroundColor == "lightgreen"||array[i][tj].style.backgroundColor == "darkgreen") && k < itterx) {
        tj--;
        tj = tj < 0 ? itterx - 1 : tj;
        k++;
      }
      p = k;
      tj++;
      setTimeout(() => {
        cleanDir=setInterval(() => {
          if (p > 1) {
            tj %= itterx;
            array[i][tj].style.backgroundColor = "black";
            p--;
            tj++;
          } else return 0;
        }, 100);
      }, (length - k) * 100);
    // } else {
    //   let temp = setInterval(() => {
    //     if (k <= length) {
    //       array[i][j < 0 ? itterx + j : j].style.backgroundColor = "black";
    //       k++;
    //       j++;
    //       j%=itterx
    //     } else {
    //       clearInterval(temp);
    //     }
    //   }, 100);
    // }
  } else if (prevDir == "left") {
    let j = (gj + length - 1)
    let i = gi;
    let k = 0;
    let tj = gj;
    let p = 0;
    // if (length > itterx) {
      while ((array[i][tj].style.backgroundColor == "lightgreen" || array[i][tj].style.backgroundColor == "darkgreen") && k < itterx) {
        tj++;
        tj = tj >= itterx ? 0 : tj;
        k++;
      }
      p = k;
      tj--;

      setTimeout(() => {
        cleanDir=setInterval(() => {
          if (p > 1) {
            tj = tj < 0 ? itterx - 1 : tj;
            array[i][tj].style.backgroundColor = "black";
            p--;
            tj--;
          } else return 0;
        }, 100);
      }, (length - k) * 100);
    // } else {
    //   let temp = setInterval(() => {
    //     if (k <= length) {
    //       array[i][
    //         j >= itterx ? j - length - (itterx - length) : j
    //       ].style.backgroundColor = "black";
    //       k++;
    //       j--;
    //       j=j<0?itterx:j
    //     } else {
    //       clearInterval(temp);
    //     }
    //   }, 100);
    // }
  } else if (prevDir == "up") {
    let j = gj;
    let i = (gi + length - 1)
    let k = 0;
    let ti = gi;
    let p = 0;
    // if (length > itterh) {
      while ((array[ti][j].style.backgroundColor == "lightgreen"||array[ti][j].style.backgroundColor == "darkgreen") && k < itterh) {
        ti++;
        ti = ti >= itterh ? 0 : ti;
        k++;
      }
      p = k;
      ti--;

      setTimeout(() => {
        cleanDir=setInterval(() => {
          if (p > 1) {
            ti = ti < 0 ? itterh - 1 : ti;
            array[ti][j].style.backgroundColor = "black";
            p--;
            ti--;
          } else return 0;
        }, 100);
      }, (length - k) * 100);
    // } else {
    //   let temp = setInterval(() => {
    //     if (k <= length) {
    //       array[i >= itterh ? i - length - (itterh - length) : i][
    //         j
    //       ].style.backgroundColor = "black";
    //       k++;
    //       i--;
    //       i=i<0?itterh:i
    //     } else {
    //       clearInterval(temp);
    //     }
    //   }, 100);
    // }
  } else if (prevDir == "down") {
    let j = gj;
    let i = (gi - length + 1) % itterh;
    let ti = gi;
    let k = 0;
    let p = 0;
    // if (length > itterh) {
      while ((array[ti][j].style.backgroundColor == "lightgreen"||array[ti][j].style.backgroundColor == "darkgreen") && k < itterh) {
        ti--;
        ti = ti < 0 ? itterh - 1 : ti;
        k++;
      }
      p = k;
      ti++;
      setTimeout(() => {
       cleanDir= setInterval(() => {
          if (p > 1) {
            ti %= itterh;
            array[ti][j].style.backgroundColor = "black";
            p--;
            ti++;
          } else return 0;
        }, 100);
      }, (length - k) * 100);
    // } else {
    //   let temp = setInterval(() => {
    //     if (k <= length) {
    //       array[i < 0 ? itterh + i : i][j].style.backgroundColor = "black";
    //       k++;
    //       i++;
    //       i%=itterh
    //     } else {
    //       clearInterval(temp);
    //     }
    //   }, 100);
    // }
  }
}
let keys = ['ArrowUp', "ArrowDown","ArrowRight","ArrowLeft",'w','a','s','d']
function move(e) {
  if (
    ((prevDir == "up" && (e.key == "ArrowDown" || e.key == "s")) ||
    (prevDir == "down" && (e.key == "ArrowUp" || e.key == "w")) ||
    (prevDir == "left" && (e.key == "ArrowRight" || e.key == "d")) ||
    (prevDir == "right" && (e.key == "ArrowLeft" || e.key == "a"))  )||!keys.includes(e.key)
  )
    return 0;
  if(temporarilyIgnore){
    return 0
  }
  temporarilyIgnore=true
  clearInterval(dir);
  if (e.key == "ArrowRight" || e.key == "d") {
    clean();
    prevDir = "right";
    dir = setInterval(() => {      
      gj++;
      gj %= itterx;
      if(array[gi][gj].style.backgroundColor=='lightgreen' && (length<itterx || length>itterx)){
        gameOver();
        return 0
      }
      if(array[gi][gj].classList.contains('box')){
        box(gi,gj)
      }
      array[gi][gj].style.backgroundColor='darkgreen'
      if(gj!=0){
        array[gi][gj-1].style.backgroundColor = "lightgreen";
      }
      if(gj==0){
          array[gi][itterx-1].style.background = 'lightgreen';
        }
      if (length != itterx && length < itterx)
        array[gi][
          gj < length ? itterx + (gj - length) : gj - length
        ].style.backgroundColor = "black";
          temporarilyIgnore=false

    }, 100);
  } else if (e.key == "ArrowLeft" || e.key == "a") {
    clean();
    prevDir = "left";
    dir = setInterval(() => {
      gj = gj - 1 == -1 ? itterx - 1 : gj - 1;
      if(array[gi][gj].style.backgroundColor=='lightgreen' && (length<itterx || length>itterx)){
        
        gameOver()
        return 0
      }
      if(array[gi][gj].classList.contains('box')){
        box(gi,gj)
      }
      array[gi][gj].style.backgroundColor = "darkgreen";
       if(gj!=(itterx-1))
        array[gi][gj+1].style.backgroundColor = "lightgreen";
      if(gj==itterx-1){
          array[gi][0].style.background = 'lightgreen';
        }
      if (length != itterx && length < itterx)
        array[gi][
          gj + length >= itterx ? gj + length - itterx : gj + length
        ].style.backgroundColor = "black";
         temporarilyIgnore=false

    }, 100);
  } else if (e.key == "ArrowDown" || e.key == "s") {
    clean();
    prevDir = "down";
    dir = setInterval(() => {
      gi++;
      gi %= itterh;
      if(array[gi][gj].style.backgroundColor=='lightgreen' && (length<itterh || length>itterh)){
        
        gameOver()
        return 0
      }
      if(array[gi][gj].classList.contains('box')){
        box(gi,gj)
      }
      array[gi][gj].style.backgroundColor = "darkgreen";
      if(gi!=0){
        array[gi-1][gj].style.backgroundColor = "lightgreen";
      }
      if(gi==0){
          array[itterh-1][gj].style.background = 'lightgreen';
        }
      if (length != itterh && length < itterh)
        array[gi < length ? itterh + (gi - length) : gi - length][
          gj
        ].style.backgroundColor = "black";
         temporarilyIgnore=false
    }, 100);
  } else if (e.key == "ArrowUp" || e.key == "w") {
    clean();
    prevDir = "up";
    dir = setInterval(() => {
      gi = gi - 1 == -1 ? itterh - 1 : gi - 1;
      if(array[gi][gj].style.backgroundColor=='lightgreen' && (length<itterh || length>itterh)){
        gi--
        gameOver()
        return 0
      }
      if(array[gi][gj].classList.contains('box')){
        box(gi,gj)
      }
      array[gi][gj].style.backgroundColor = "darkgreen";
       if(gi!=(itterh-1))
        array[gi+1][gj].style.backgroundColor = "lightgreen";
      if(gi==itterh-1){
          array[0][gj].style.background = 'lightgreen';
        }
      if (length != itterh && length < itterh)
        array[gi + length >= itterh ? gi + length - itterh : gi + length][
          gj
        ].style.backgroundColor = "black";
         temporarilyIgnore=false
    }, 100);
  }
}
let gameOverCleanInterval;
// let retry = document.getElementById("retry");
let gameitter
function gameOver(){
  clearInterval(dir)
  clearInterval(cleanDir)
  clearInterval()
  document.getElementById('gameOverFalse').classList.add('gameOver')
  let i = 0
  
     for( let i =0;i<itterh;i++)
      for(let j =0;j<itterx;j++)
        array[i][j].classList.add('over')
    document.getElementById('parent').style.border='none';
        
     
  temporarilyIgnore=true

}
retry.onclick=()=>{
  gi=0
  gj=0
  score =0;
  scoreDiv.textContent = `score: ${score}`
  length=1
  temporarilyIgnore=false
   for( let i =0;i<itterh;i++)
      for(let j =0;j<itterx;j++){
        array[i][j].classList.remove('over')
        array[i][j].style.backgroundColor='black'
      }
        
  document.getElementById('gameOverFalse').classList.remove('gameOver')
  clearInterval(gameOverCleanInterval)
  array[gi][gj].style.backgroundColor = "darkgreen";
  document.getElementById('parent').style.border='2px solid white';

}
window.addEventListener("keydown", move)
