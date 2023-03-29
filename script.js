// Buttons//

const btn = [...document.querySelectorAll('.btn')];

btn.forEach(item =>
item.addEventListener("mouseover", (event) => {
        const x = (event.pageX - item.offsetLeft); 
        const y = (event.pageY - item.offsetTop);
        
        item.style.setProperty('--xPos', x + 'px');
        item.style.setProperty('--yPos', y + 'px');   
    }));


    

    
    
    
    




    
  










 
   











   




