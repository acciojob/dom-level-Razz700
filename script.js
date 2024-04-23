//your JS code here. If required.
 let t=document.getElementById("level");
        let count=1;
        let x=t.parentElement;
        while(x!=null){
            count++;
            x=x.parentElement;
        }
        alert(`The level of the element is: ${count}`);