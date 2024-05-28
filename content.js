// The URL of the new profile picture
const newProfilePicUrl = chrome.runtime.getURL("img.jpg");

// Function to replace profile pictures
function replaceProfilePictures() {
  // Select all profile pictures in the feed
  const profilePics = document.querySelectorAll(
    "img.feed-shared-actor__avatar-image, img.artdeco-entity-image--circle-2, img.entity-result__image--profile, img.pv-top-card-profile-picture__image, img.ivm-view-attr__img--centered, img.update-components-actor__avatar, img.presence-entity__image"
  );

  profilePics.forEach((pic) => {
    // Change the src attribute to the new profile picture URL
    console.log(pic.src);
    console.log(newProfilePicUrl);
    pic.src = newProfilePicUrl;
    console.log(pic.src);
  });
}

// Run the function to replace profile pictures
replaceProfilePictures();

// Set up a MutationObserver to detect changes in the feed
const observer = new MutationObserver(replaceProfilePictures);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
