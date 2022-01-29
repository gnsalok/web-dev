function printDateInLocalTZ(date){
    var localDate = new Date(date);
    console.log(localDate);
    console.log(localDate.toString().substr(25));
    return (localDate.toString()).replace((localDate.toString()).substr(25), ((localDate.toString()).substr(34)).replace(/[a-z,' ','(',')']/g,''));
}


time = printDateInLocalTZ("2021-06-07 06:58:12");
console.log(time); 