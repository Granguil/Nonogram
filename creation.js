$("#np").on("click",function(){
    if($("#col").val()>0 && $("#ligne").val()>0){
        $("#test").empty();
        col=$("#col").val();
        ligne=$("#ligne").val();
        creationGrille();
    }else{
        alert("Paramètres de Création Incorrects");
    }
})
function creationGrille(){
    grille=new Array(ligne)
    grillejeu=new Array(ligne);
    for(let i=0;i<ligne;i++){
        let g=new Array(col);
        grille[i]=g;
        let gj=new Array(col);
        grillejeu[i]=gj;
        for(let j=0;j<col;j++){
            let random=Math.floor(Math.random()*100);
            if(random>40){
                grille[i][j]=1;
            }else{
                grille[i][j]=0;
            }
            grillejeu[i][j]=0;
        }
    }
    indligne=new Array(ligne);
    indcol=new Array(col);
    let nbindl=0;
    let nbindlmax=0;
    for(let i=0;i<ligne;i++){
        indligne[i]=new Array();
        nbindl=0;
        for(let j=0;j<col;j++){
            if(grille[i][j]==1){
                let num=0;
                while(grille[i][j]==1){
                    num++;
                    j++;
                    if(j==col){
                        break;
                    }
                }
                indligne[i].push(num);
                nbindl++;
            }
        }
        if(nbindl>=nbindlmax){
            nbindlmax=nbindl;
        }
    }
    let nbindc=0;
    let nbindcmax=0;
    for(let i=0;i<col;i++){
        indcol[i]=new Array();
        nbindc=0;
        for(let j=0;j<ligne;j++){
            if(grille[j][i]==1){
                let num=0;
                while(grille[j][i]==1){
                    num++;
                    j++;
                    if(j==ligne){
                        break;
                    }
                }
                indcol[i].push(num);
                nbindc++;
            }
            
        }
        if(nbindc>=nbindcmax){
            nbindcmax=nbindc;
        }
    }
    
    let r;
    for(let i=-nbindcmax;i<ligne+nbindcmax;i++){
        r=$("<tr></tr>");
        let cell;
        
        for(let j=-nbindlmax;j<col+nbindlmax;j++){
            if(i<0){
            if(j<0 || j>=col){
            cell=$("<th></th>");
            cell.text(" ");
            }else{
                let nbc=j;
                let nbl=i+nbindcmax;
                cell=$("<th></th>");
                cell.text(indcol[nbc][nbl]);
            }
        }else if(i<ligne){
            if(j<0){
                cell=$("<th></th>");
                cell.text(indligne[i][j+nbindlmax]);
            }else if (j<col){
            let button=$("<button></button>");
            cell=$("<td></td>");
            button.attr("id","l"+i+"c"+j);
            button.attr("class","jeu");
            button.css("width","40px");
            button.css("height","40px");
            button.css("background-color","white");
            button.text(" ");
            button.on("click",function(){
                debut=new Array();
                if(grillejeu[i][j]==0 && $("#l"+i+"c"+j).text()=="X"){
                    $("#l"+i+"c"+j).text(" ");
                    $("#l"+i+"c"+j).css("background-color","white");
                    $("#l"+i+"c"+j).css("color","black");
                }else if(grillejeu[i][j]==0 && $("#l"+i+"c"+j).text()==" "){
                    $("#l"+i+"c"+j).text(" ");
                    $("#l"+i+"c"+j).css("background-color","black");
                    $("#l"+i+"c"+j).css("color","black");
                    grillejeu[i][j]=1;
                }else if(grillejeu[i][j]==1){
                    grillejeu[i][j]=0;
                    $("#l"+i+"c"+j).css("background-color","white");
                    $("#l"+i+"c"+j).css("color","red");
                    $("#l"+i+"c"+j).text("X");
                }
            })
            cell.append(button);
            }else{
                cell=$("<th></th>");
                cell.text(indligne[i][j-col]);
            }
        }else{
            if(j<0 || j>=col){
            cell=$("<th></th>");
            cell.text(" ");
            }else{
                let nbc=j;
                let nbl=i-ligne;
                cell=$("<th></th>");
                cell.text(indcol[nbc][nbl]);
            }
        }
        r.append(cell);
        }
        
        $("#test").append(r);
        $("#test").css("font-size","30px"); 
    }
    for(let i=0;i<ligne;i++){
        for(let j=0;j<col;j++){
            if(i==0){
                $("#l"+i+"c"+j).css("border-top","solid");
            }
            if(i==ligne-1){
                $("#l"+i+"c"+j).css("border-bottom","solid");
            }
            if(j==0){
                $("#l"+i+"c"+j).css("border-left","solid");
            }
            if(j==col-1){
                $("#l"+i+"c"+j).css("border-right","solid")
            }
        }
    }   
    
}