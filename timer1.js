const args = process.argv.slice(2);
for (arg of args){
  if (arg >= 0 && typeof(arg) === Number){
    setTimeout (()=>{
    console.log('beep');
  },arg)
  }
}