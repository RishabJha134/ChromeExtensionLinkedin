// The URL of the new profile picture
const newProfilePicUrl =
  "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png";


function replaceProfilePictures() {
 
  const profilePics = document.querySelectorAll(
    "img.feed-shared-actor__avatar-image, img.artdeco-entity-image--circle-2, img.entity-result__image--profile, img.pv-top-card-profile-picture__image, img.ivm-view-attr__img--centered, img.update-components-actor__avatar"
  );

  profilePics.forEach((pic) => {
   
    console.log(pic.src);
    console.log(newProfilePicUrl);
    pic.src = newProfilePicUrl;
    console.log(pic.src);
  });
}


replaceProfilePictures();

// Set up a MutationObserver to detect changes in the feed
const observer = new MutationObserver(replaceProfilePictures);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
