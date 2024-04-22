var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}
const videoThumbnails = document.querySelectorAll(
    ".video-gallery .all-videos .thumbnail"
);
const videoPlayer = document.querySelector(
    ".video-gallery .featured-video iframe"
);
const videoTitle = document.querySelector(".video-gallery .video-title");

const showVideo = (videoId, title) => {
    let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    videoPlayer.setAttribute("src", videoUrl);
    videoTitle.innerHTML = title;
};

videoThumbnails.forEach((v) => {
    v.addEventListener("click", () => {
        showVideo(v.dataset.id, v.dataset.title);
    });
});
let elements = document.querySelectorAll(".video-gallery .all-videos .video");

elements.forEach((i) => {
    i.addEventListener("click", function (e) {
        document.querySelector(".video.active").classList.remove("active");
        this.classList.add("active");
    });
});