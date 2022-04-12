//---------- 한글만 입력 -----------
$("#text__ko1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/gi, ''));
  }
});

$("#text__ko2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/gi, ''));
  }
});

//---------- 영문만 입력 -----------
$("#text__eng1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^[a-zA-Z]*$/gi, ''));
  }
});

$("#text__eng2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^[a-zA-Z]*$/gi, ''));
  }
});


//---------- 숫자만 입력 -----------
$("#text__num1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#text__num2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#text__num3").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#text__num4").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

//---------- 이메일 입력 -----------
$("#text__email1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/gi, ''));
  }
});

$("#text__email2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/gi, ''));
  }
});

//********** 미체크 시 알림창 ***********
function Checkform() {
  if (frm.confirm.checked !=true){
      alert("예약내역 확인 후 체크해주세요.");
      frm.confirm.focus();
      return false;
    }
}

// ********** 운임 정보 ***********
function onpenCloseTog() {
  if(document.getElementById('toggle__content').style.display === 'block') {
    document.getElementById('toggle__content').style.display = 'none';
    document.getElementById('toggle').textContent = '';
  } else {
    document.getElementById('toggle__content').style.display = 'block';
    document.getElementById('toggle').textContent = '';
  }
}

// ********** 자동 입력 ***********
function check1(f){
  if (f.checked) {
    $('#text__ko2').val($('#text__ko1').val());

    $('#text__num3').val($('#text__num1').val());

    $('#text__email2').val($('#text__email1').val());

    $('#text__num4').val($('#text__num2').val());
  } else{
      $('#text__ko2').val('');

      $('#text__num3').val('');

      $('#text__email2').val('');

      $('#text__num4').val('');
    }
}

// function agreeCheck(frm)
// {
//    if (frm.checkButton.disabled==true)
//     frm.checkButton.disabled=false
//    else
//     frm.checkButton.disabled=true
// }