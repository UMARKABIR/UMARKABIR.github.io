var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="lenny";
names[3]="jason";
names[4]="justchecking";
names[5]="Jefferson";
names[6]="legend";
names[7]="paula";
names[8]="laurel";
names[9]="jam";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}