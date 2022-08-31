import Pagination from 'tui-pagination';

import throttle from 'lodash.throttle';
import paginationMarkup from './paginationMarkup';

const container = document.getElementById('pagination');

const options = {
  totalItems: 480,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',

  template: {
    page: '<a href="#" class="tui-page-btn pagination__page">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected pagination__page--current">{{page}}</strong>',
    moveButton: type => {
      let tpl = '';
      let customIconClass = '';
      let customBtnClass = '';
      let value = '';

      if (type.type === 'first') {
        value = '1';
        customBtnClass = 'pagination__move-btn-first';
      } else if (type.type === 'last') {
        value = Math.ceil(options.totalItems / options.itemsPerPage);
        customBtnClass = 'pagination__move-btn-last';
      } else if (type.type === 'prev') {
        customIconClass = 'pagination__icon-left';
        customBtnClass = 'pagination__move-btn pagination__move-btn--prev';
      } else if (type.type === 'next') {
        customIconClass = 'pagination__icon-right';
        customBtnClass = 'pagination__move-btn pagination__move-btn--next';
      }

      tpl =
        `<span class="tui-page-btn tui-is-disabled tui-${type.type} ${customBtnClass}">` +
        `<span class="tui-ico-${type.type} ${customIconClass}">${value}</span>` +
        '</span>';
      return tpl;
    },

    disabledMoveButton: type => {
      let tpl = '';
      let customIconClass = '';
      let customBtnClass = '';
      let value = '';

      if (type.type === 'first') {
        value = '1';
        customBtnClass = 'pagination__move-btn-first';
      } else if (type.type === 'last') {
        value = Math.ceil(options.totalItems / options.itemsPerPage);
        customBtnClass = 'pagination__move-btn-last';
      } else if (type.type === 'prev') {
        customIconClass = 'pagination__icon-left';
        customBtnClass = 'pagination__move-btn pagination__move-btn--prev';
      } else if (type.type === 'next') {
        customIconClass = 'pagination__icon-right';
        customBtnClass = 'pagination__move-btn pagination__move-btn--next';
      }

      tpl =
        `<span class="tui-page-btn tui-is-disabled tui-${type.type} ${customBtnClass}">` +
        `<span class="tui-ico-${type.type} ${customIconClass}">${value}</span>` +
        '</span>';
      return tpl;
    },
    moreButton: type => {
      let customBtnClass = 'pagination__more-btn-prev';
      if (type.type === 'next') {
        customBtnClass = 'pagination__more-btn-next';
      }

      let tpl =
        `<a href="#" class="tui-page-btn tui-${type.type}-is-ellip pagination__btn--hidden custom-class-${type.type} ${customBtnClass}">` +
        `<span class="tui-ico-ellip">...</span>` +
        `</a>`;
      return tpl;
    },
  },
};

let instance;

function matchStylesToMedia() {
  let refs = {
    prevEllipBtn: document.querySelector('.tui-prev-is-ellip'),
    nextEllipBtn: document.querySelector('.tui-next-is-ellip'),
    moveBtnFirst: document.querySelector('.pagination__move-btn-first'),
    moveBtnLast: document.querySelector('.pagination__move-btn-last'),
  };
  if (matchMedia('(max-width: 768px)').matches) {
    refs.prevEllipBtn?.classList.add('pagination__btn--hidden');
    refs.nextEllipBtn?.classList.add('pagination__btn--hidden');
    refs.moveBtnFirst?.classList.add('pagination__btn--hidden');
    refs.moveBtnLast?.classList.add('pagination__btn--hidden');
    return;
  } else {
    let hiddenElements = document.querySelectorAll('.pagination__btn--hidden');
    hiddenElements.forEach(element => {
      element.classList.remove('pagination__btn--hidden');
    });
  }
}

function onPageChange(currentPage = 1) {
  let firstBtn = document.querySelector('.pagination__move-btn-first');
  let lastBtn = document.querySelector('.pagination__move-btn-last');

  let totalPages = Math.floor(options.totalItems / options.itemsPerPage);
  let totalBatches = Math.ceil(totalPages / options.visiblePages);
  let currentBatch = Math.ceil(currentPage / options.visiblePages);

  matchStylesToMedia();

  if (totalPages <= 1) {
    container.classList.add('pagination__move-btn--hidden');
  } else {
    container.classList.remove('pagination__move-btn--hidden');
  }

  if (currentPage <= options.visiblePages) {
    firstBtn.classList.add('pagination__move-btn--hidden');
  } else {
    firstBtn.classList.remove('pagination__move-btn--hidden');
  }

  if (currentBatch === totalBatches) {
    lastBtn.classList.add('pagination__move-btn--hidden');
  } else {
    lastBtn.classList.remove('pagination__move-btn--hidden');
  }
}

export function resetTotalHits(hits) {
  createPagination(hits);
}

function createPagination(totalItems = 480) {
  options.totalItems = totalItems;
  container.innerHTML = '';
  instance = new Pagination(container, options);

  onPageChange();

  instance.on('afterMove', event => {
    const currentPage = event.page;

    onPageChange(currentPage);
    paginationMarkup(currentPage);
  });
}

export function showPagination(isShown) {
  if (isShown) {
    return container.classList.remove('pagination--hidden');
  }

  container.classList.add('pagination--hidden');
}

window.addEventListener('resize', throttle(matchStylesToMedia, 200));

// const container = document.getElementById('tui-pagination-container');
// export const pagination = new Pagination(container, {
//   page: 1,
//   totalItems: 0,
//   itemsPerPage: 20,
//   visiblePages: 5,

//   centerAling: false,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// });
