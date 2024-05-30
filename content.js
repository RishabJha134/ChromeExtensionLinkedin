const postContainer = document.querySelector(
  ".scaffold-finite-scroll__content"
);
const all_posts = [];

let src = {
  link: null,
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  src.link = message.message;
  updateProfilePic(all_posts, src);
  sendResponse({ response: "Hi there from content.js!" });
});

postContainer.childNodes.forEach((e) => {
  if (e.nodeName === "DIV") {
    all_posts.push(e);
  }
});

updateProfilePic(all_posts, src);

const mutationObserver = new MutationObserver((entries) => {
  const posts = [];
  entries.forEach((entry) => {
    if (entry.addedNodes[0] && entry.addedNodes[0].nodeName === "DIV") {
      posts.push(entry.addedNodes[0]);
      all_posts.push(entry.addedNodes[0]);
    }
  });
  updateProfilePic(posts, src);
});

mutationObserver.observe(postContainer, { childList: true, subtree: true });

function updateProfilePic(posts, src) {
  posts.forEach((post) => {
    const actorComponent = post.querySelector(".update-components-actor");
    console.log(actorComponent);
    if (actorComponent) {
      const imgWrappers = actorComponent.querySelectorAll(
        ".ivm-view-attr__img-wrapper"
      );

      imgWrappers.forEach((imgWrapper) => {
        if (imgWrapper.children[0] && imgWrapper.children[0].src && src.link) {
          imgWrapper.children[0].src = src.link;
          imgWrapper.children[0].style.objectFit = "cover";
        }
      });
    }
  });
}
