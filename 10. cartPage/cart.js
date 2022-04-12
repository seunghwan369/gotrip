function selectAll(selectAll)  {
  const checkboxes 
     = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("img__slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


function showConfirm(){
  if (confirm("해당 상품을 장바구니에서 삭제하시겠습니까?"))
  {
    alert("확인 버튼을 눌렀습니다.");
  } else 
  {
    alert("취소 버튼을 눌렀습니다.");
  }
}


function selectDelete(){
  if (confirm("선택 상품을 장바구니에서 삭제하시겠습니까?"))
  {
    alert("확인 버튼을 눌렀습니다.");
  } else 
  {
    alert("취소 버튼을 눌렀습니다.");
  }
}