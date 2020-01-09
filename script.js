function insert(num) {
    document.form.textview.value = document.form.textview.value+num
}

function equal(){
    var res = document.form.textview.value ;
    if (res) {
        document.form.textview.value = eval(res)
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var res = document.form.textview.value;
    document.form.textview.value = res.substring(0,res.length-1)
}