const headMarkup = item => {
  `<li>
  <div class="slot__thumb">
          <a href="#">
            <img src="#" alt="#" />
          </a>
          <h2>namefilm</h2>
          <p>ganre</p>
          <p>2020</p>
		  </div>
        </li>`;
};

const watchedMarkup = item => {
  `<li>
  <div class="slot__thumb">
  <a href="#">
            <img src="#" alt="#" />
          </a>
          <h2>head</h2>
          <p>genre</p>
          <p>2020</p>
          <p>vote</p>
		  </div>
        </li>`;
};

const modalMarkup = item => {
  `<img src="#" alt="#" />
	 <h1>head</h1>
	 <table>
        <tr>
          <td>Vote / Votes</td>
          <td>7.3 /1260</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td></td>
        </tr>
        <tr>
          <td>Original Title</td>
          <td></td>
        </tr>
        <tr>
          <td>Genre</td>
          <td></td>
        </tr>
      </table>
	 <h2>ABOUT</h2>
	 <p></p>`;
};
