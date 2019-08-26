var stopTime = new Date('2020-1-1 00:00:00').getTime();
var distence;
function timeDown(){
	var downTime = document.querySelectorAll('.cut-title .time');
	var nowTime = new Date().getTime();
	distence = stopTime-nowTime;
	var hours = Math.floor(distence/1000/60/60);
	var minutes = Math.floor(distence%(1000*60*60)/1000/60);
	var seconds = Math.floor((distence%(1000*60*60))%(1000*60)/1000);
	minutes = minutes.toString();
	seconds = seconds.toString();
	minutes = addZiro(minutes);
	seconds = addZiro(seconds);
	var hms = hours+minutes+seconds;
	var timeArr = hms.split('');
	for	(var i=0; i<timeArr.length; i++){
		downTime[downTime.length-1-i].innerHTML = timeArr[timeArr.length-1-i];
	}
}
timeDown();
setInterval(timeDown,1000);
function addZiro(sometime){
	if(sometime<10){
		sometime = '0'+sometime;
	}
	return sometime;
}
