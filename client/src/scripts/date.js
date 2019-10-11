module.exports.get=function (which) {
	month=["Jan", "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	date=which.getDate();
	str=date.toString().split('');
	stri=str[str.length-1];
	if(stri==='1') {
		daga='st,';
	} else if(stri==='2') {
		daga='nd,'
	} else if(stri==='3'){
		daga='rd,'
	} else {
		daga='th,'
	}
	return month[which.getMonth()]+' '+date+daga+' '+which.getFullYear();
}