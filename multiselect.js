$(".jeu").on("mousedown",function(){
    if($(this).text()!="X"){
    debut=new Array(2);
    let c;
    let x,y;
    let id=$(this).attr("id");
    for(let i=0;i<id.length;i++){
        if(id[i]=="c"){
            c=i;
        }
    }
    x=id.substring(1,c);
    y=id.substring(c+1,id.length);
    debut[0]=x;
    debut[1]=y;
    
}
})
$(".jeu").on("mouseup",function(){
    let id=$(this).attr("id");
        for(let i=0;i<id.length;i++){
            if(id[i]=="c"){
                c=i;
            }
        }
    let x=id.substring(1,c);
    let y=id.substring(c+1,id.length);
    if(debut.length==2 && (debut[0]!=x || debut[1]!=y)){
        
        
        if(x==debut[0]){
            let d,f;
            if(debut[1]<y){
                d=debut[1];
                f=y;
            }else{
                d=y;
                f=debut[1];
            }
            for(let z=d;z<=f;z++){
            $("#l"+x+"c"+z).text(" ");
            $("#l"+x+"c"+z).css("background-color","black");
            $("#l"+x+"c"+z).css("color","black");
            grillejeu[x][z]=1;
            }
        }
        if(y==debut[1]){
            let d,f;
            if(debut[0]<x){
                d=debut[0];
                f=x;
            }else{
                d=x;
                f=debut[0];
            }
            for(let z=d;z<=f;z++){
            $("#l"+z+"c"+y).text(" ");
            $("#l"+x+"c"+z).css("color","black");
            $("#l"+z+"c"+y).css("background-color","black");
            grillejeu[z][y]=1;
            }
        }
        
    }
    debut=new Array();
})