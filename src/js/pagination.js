import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const paganation = new Pagination('#tui-pagination-container', {
  totalItems: 0,
  itemsPerPage: 30,
  visiblePages: 5,
  page: 1,
});

const page = paganation.getCurrentPage();
