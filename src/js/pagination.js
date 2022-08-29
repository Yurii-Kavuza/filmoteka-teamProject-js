const ulTag = document.querySelector('.pagination-btn');
/*  totalPage общее колличество страниц которые пришли с бекенда */
//let totalPage = 20;
/* currentPage  текущая страница которая отображвутся на екране */
//let currentPage = 5;

function pagination(totalPage, page) {
  let liTag = '';
  let activeLi = '';
  let beforPages = page - 1;
  let afterPages = page + 1;

  if (page > 1) {
    liTag += `<li class="btn prev" onclick="pagination(totalPage, ${
      page - 1
    })" >
          <span><i class="fa-solid fa-arrow-left"></i> </span>
        </li>`;
  }
  if (page > 2) {
    liTag += `<li class="numb" onclick="pagination(totalPage, 1)"><span>1</span></li>`;

    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page == totalPage) {
    beforPages = beforPages - 2;
  } else if (page == totalPage - 1) {
    beforPages = beforPages - 1;
  }

  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforPages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPage) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }

    if (page == pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="numb ${activeLi}"  onclick="pagination(totalPage, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPage - 1) {
    if (page < totalPage - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick="pagination(totalPage, ${totalPage})"><span>${totalPage}</span></li>`;
  }

  if (page < totalPage) {
    liTag += `<li class="btn next" onclick="pagination(totalPage, ${page + 1})">
          <span> <i class="fa-solid fa-arrow-right"></i></span>
        </li>`;
  }
  ulTag.innerHTML = liTag;
}
/* вызов функции пагинации */
/* console.log(currentPage);
pagination(totalPage, currentPage);
 */
export { pagination };
