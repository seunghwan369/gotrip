//---------- 한/영만 입력 -----------
$("#cust__name").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^(ㄱ-힣a-zA-Z)]/gi, ''));
  }
});

//---------- 숫자만 입력 -----------
$("#cust__phone__a").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});
$("#cust__phone__b").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});
$("#cust__phone__c").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#number").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

//---------- radio event -----------
function div__OnOff(v, id){
  if (v == "email"){
    document.getElementById(id).style.display=""; //보여줌
  }else{
    document.getElementById(id).style.display="none"; //숨김
  }
}