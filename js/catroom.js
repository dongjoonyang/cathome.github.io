// 탭 메뉴
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab_content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => {
        c.classList.remove('active');
        if (c.getAttribute('data-content') === target) {
        c.classList.add('active');
        }
    });
  });
});

// 탭 메뉴 안 내용 클릭시 활성화
const boxBtn = document.querySelectorAll('.tab_content_area .box');
boxBtn.forEach(box => {
  box.addEventListener('click', () => {
    boxBtn.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
  });
});

// 뽑기 버튼 클릭시 탭안의 요소들 랜덤 선택
const btnBuzzer = document.querySelector('.btn_buzzer');
btnBuzzer.addEventListener('click', () => {
  const activeContent = document.querySelector('.tab_content.active');
  const boxes = activeContent.querySelectorAll('.box');
  const randomIndex = Math.floor(Math.random() * boxes.length);
  const selectedBox = boxes[randomIndex];

  boxBtn.forEach(b => b.classList.remove('active'));
  selectedBox.classList.add('active');

  // 선택된 박스의 내용을 alert로 표시
  const boxContent = selectedBox.querySelector('.box_content').textContent;
  alert(`선택된 박스: ${boxContent}`);
});