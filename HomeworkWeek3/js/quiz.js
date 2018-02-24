
var quizA={1:{Saturn:false,Jupiter:true,Neptun:false},2:{Šangaj:false,Tokio:true,Seul:false},3:{Sad:false,Indija:false,Kina:true},
4:{5000:false,68:false,17800:true},5:{kokosa:true,pomorandze:false,pirinča:false},6:{Amazona:true,Nil:false,Kongo:false},
7:{Apenini:false,Atlas:false,Ural:true},8:{Kina:false,Rusija:true,Kanada:false},9:{45:false,76:true,123:false},10:{Andromeda:true,Sombrero:false,Vir:false}}
var quizQ={1:"Koja je najveća planeta Sunčevog sistema?",2:"Koji je glavni grad Japana?",3:"Koja je najmnogoljudnija zemljana svijetu?",
4:"Indonezija se sastoji od koliko ostva?",5:"Maršalska ostrva su poznata kao veliki izvoznici:",6:"Koja je najveća rijeka na svijetu?",
7:"Planina koja dijeli Evropu od Azije?",8:"Koja je najveća država na svijetu?",9:"Svaki koliko godina Halejeva kometa prolazi pored zemlje?"
,10:"Koja je galaksija najbliža našoj?"}

var block = document.getElementById('block');
var end = document.getElementById('congradulation');
var group = document.getElementById('group');
var question = document.getElementById('q');
var answer1 = document.getElementById('a1');
var answer2 = document.getElementById('a2');
var answer3 = document.getElementById('a3');
var retry1 = document.getElementById('retry1');
var b1 = document.getElementById('b1');
var sorry = document.getElementById('sorry');
var an = document.getElementById('an');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');

var i = Math.floor((Math.random() * 10) + 1);
var x = document.getElementById("myAudio");
var counter = 0;
var bleep = new Audio();
bleep.src = "bleep.mp3";
var bleep2 = new Audio();
bleep2.src = "bleep2.mp3";
var list = [];

question.innerHTML = "1."+quizQ[i];
answer1.innerHTML = (Object.keys(quizA[i])[0]);
answer2.innerHTML = (Object.keys(quizA[i])[1]);
answer3.innerHTML = (Object.keys(quizA[i])[2]);
answer1.value = (Object.keys(quizA[i])[0]);
answer2.value = (Object.keys(quizA[i])[1]);
answer3.value = (Object.keys(quizA[i])[2]);

list.push(i);



const exist=(L,x)=>{
	var condition=true;
	for(var i=0;i<L.length;i++){
		if(L[i]==x){
			condition=false;
		}
	}

return condition;}




const next=(answer)=>{
	
	var text=answer.value;
	var condition=quizA[i][text];


	if(condition && counter<5){
		i = Math.floor((Math.random() * 10) + 1);
		while(!exist(list,i)){
			i = Math.floor((Math.random() * 10) + 1);
		}
			
		list.push(i);
		console.log(list);
		counter++;
		if(counter == 5){
			bleep2.play();
			end.id = "show";
			block.id = "congradulation";
			group.id = "congradulation";

		}

		question.innerHTML = (counter+1)+"."+quizQ[i];
		answer1.innerHTML = (Object.keys(quizA[i])[0]);
		answer2.innerHTML = (Object.keys(quizA[i])[1]);
		answer3.innerHTML = (Object.keys(quizA[i])[2]);
		answer1.value = (Object.keys(quizA[i])[0]);
		answer2.value = (Object.keys(quizA[i])[1]);
		answer3.value = (Object.keys(quizA[i])[2]);
		answer1.id = "answer1";
		answer2.id = "answer2";

		
	}
	else{


	    bleep.play();
	    var text1 = answer1.value;
		var condition1 = quizA[i][text1];

		if(condition1){
	    an.innerHTML = "Tačan ogovor na pitanje :  "+quizQ[i]+" je: "+answer1.value;}

		var text2 = answer2.value;
		var condition2=quizA[i][text2];

		if(condition2){ 
	    an.innerHTML = "Tačan ogovor na pitanje : "+quizQ[i]+" je: "+answer2.value;}

		var text3 = answer3.value;
		var condition3=quizA[i][text3];

		if(condition3){
	    an.innerHTML="Tačan ogovor na pitanje :  "+quizQ[i]+" je: "+answer3.value;}

		sorry.id = "show";
		block.id = "sorry";
		group.id = "sorry";

	}

}
    
		

answer1.onclick = () => {
	
	next(answer1);
}
answer2.onclick = () => {
	next(answer2);
}
answer3.onclick = () =>{
	next(answer3);
}

retry1.onclick = () =>{
	location = "quiz.html";
}
retry.onclick = () =>{
	location = "quiz.html";
}
b1.onclick=() => {

	location = "quiz.html";


}
b2.onclick=()=>{
	var text = answer1.value;
	var condition = quizA[i][text];
	if(!condition ){
		answer1.id = "sorry";
	}
	else{
		answer2.id = "sorry";
	}
	b2.id = "sorry";	
}

b3.onclick = () =>{
		i = Math.floor((Math.random() * 10) + 1);
		while(!exist(list,i)){
			i = Math.floor((Math.random() * 10) + 1);
		}
			
		
		list.push(i);


	counter++;
		if(counter == 5){
			end.id = "show";
			block.id = "congradulation";
			group.id = "congradulation";

		}
		question.innerHTML = counter+1+"."+quizQ[i];
		answer1.innerHTML = (Object.keys(quizA[i])[0]);
		answer2.innerHTML = (Object.keys(quizA[i])[1]);
		answer3.innerHTML = (Object.keys(quizA[i])[2]);
		answer1.value = (Object.keys(quizA[i])[0]);
		answer2.value = (Object.keys(quizA[i])[1]);
		answer3.value = (Object.keys(quizA[i])[2]);
		answer1.id = "answer1";
		answer2.id = "answer2";
		b3.id = "sorry";

}
