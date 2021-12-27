const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
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
