$("#verif").on("click",function(){
    let verifligne=new Array(ligne);
    let verifcol=new Array(col);
    for(let i=0;i<ligne;i++){
        verifligne[i]=new Array();
        for(let j=0;j<col;j++){
            if(grillejeu[i][j]==1){
                let num=0;
                while(grillejeu[i][j]==1){
                    num++;
                    j++;
                    if(j==col){
                        break;
                    }
                }
                verifligne[i].push(num);
                
            }
        }
    }
    
    for(let i=0;i<col;i++){
        verifcol[i]=new Array();
        
        for(let j=0;j<ligne;j++){
            if(grillejeu[j][i]==1){
                let num=0;
                while(grillejeu[j][i]==1){
                    num++;
                    j++;
                    if(j==ligne){
                        break;
                    }
                }
                verifcol[i].push(num);
                
            }
            
        }
        
    }
    if(JSON.stringify(indcol)==JSON.stringify(verifcol) && JSON.stringify(indligne)==JSON.stringify(verifligne)){
        alert("victoire");
        
    }else{
        alert("grille incorrecte");
    }
})