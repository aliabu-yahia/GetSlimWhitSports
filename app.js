// hi my name is ali khames
/* 
i live in amman
i am a mechanical enginering
*/
console.log('hello hello in lab 04');
console.log(2**8);

var x = 6 ;
console.log(x);
console.log(x+=2);
console.log(x);
// x have a new value

// in comparison operators the answer while only true or false like :
console.log(x==8)
console.log(x!=8)

function welcomeuser() {
    var user =prompt('please inter your mane')
}

return Document.write('<h3>' + 'hello' + user + '<h3>')


var sports = prompt('What is your best sport?');

while(sports !=='football' & sports!=='bascetball' && sports!=='tennis'){
    sports =prompt('please choose one of football, bascetball or tennis ')
}

var star = prompt('how many stars you give this website?');

while(star > 5 ){
    star =prompt('please choose number from 1 to 5 ')
}


var massage = ''
var result = ''

if (sports ===  'football'){
    message =  'exellent chooes';
    result = '<img width="290" src="https://www.thestatesman.com/wp-content/uploads/2020/04/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg" />';

}else if ( sports === 'bascetball'){
        message = ' are you tall enough? ';
        result = '<img width="290" src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTE3NDcwMDI1/ask-history-who-invented-basketball-istock_000006523151large-2.jpg" />';
}else{
    message = 'its boring sports';
    result = '<img width="290" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFi_DbgIBjzfUjSWUigKIWQxLKDkhXd3-6A&usqp=CAU" />';
}

document.write('<br>' + message );

document.write( result );

for(var i = 1 ; i<= star ; i++){
    document.write('<br>'+'* ')};


