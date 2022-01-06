const createLikeButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createPreloader = () => `
  <div class="gooey">
    <span class="dot"></span>
      <div class="dots">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </div>
`;

export {createLikeButtonTemplate, createLikedButtonTemplate, createPreloader};
