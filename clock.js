setInterval(() => {
    let d  = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    hHand_rotation = 30*htime + mtime/2;
    mHand_rotation = 6*mtime;
    sHand_rotation = 6*stime;

    document.querySelector("#hrsHand")
       .style.transform = `rotate(${hHand_rotation}deg)`; 

    document.querySelector("#minsHand")
       .style.transform = `rotate(${mHand_rotation}deg)`; 
       
    document.querySelector("#secndsHand")
       .style.transform = `rotate(${sHand_rotation}deg)`; 
},1000);