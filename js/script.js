document.addEventListener('DOMContentLoaded', function () {
  // Initial number of photos displayed
  var visiblePhotos = 3;

  // Select the gallery and the "Show more" button
  var photoGallery = document.getElementById('photo-gallery');
  var showMoreBtn = document.getElementById('show-more-btn');
  var showLessBtn = document.getElementById('show-less-btn');

  // Function to show more photos
  function showMorePhotos() {
    // Increase the number of visible photos
    if(visiblePhotos === 3){
        visiblePhotos = 6
    } else {
        visiblePhotos += 100;
    }

    // Get all the photos in the gallery
    var photos = document.querySelectorAll('.gallery__item');
    var gallery = document.querySelectorAll('.gallery');

    // Show or hide each photo based on the visibility count
    photos.forEach(function (photo, index) {
      if (index < visiblePhotos) {
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });

    // Show or hide the "Show more" button based on the total number of photos
    if (visiblePhotos >= photos.length) {
      showMoreBtn.style.display = 'none';
      showLessBtn.style.display = 'inline-block';
    } else{
      showLessBtn.style.display = 'none';
      showMoreBtn.style.display = 'inline-block';
    }

    gallery.forEach(function (galler, index) {
      if (10 > visiblePhotos) {
        $(galler).addClass('gallery-1');
      } else {
        $(galler).removeClass('gallery-1');
        $(galler).addClass('gallery-2');
      }
    });


  }

  // Function to show more photos
  function showLessPhotos() {
    // Increase the number of visible photos
    if(visiblePhotos === 106){
        visiblePhotos -= 100;
    } else {
      visiblePhotos = 6        
    }

    // Get all the photos in the gallery
    var photos = document.querySelectorAll('.gallery__item');
    var gallery = document.querySelectorAll('.gallery');

    // Show or hide each photo based on the visibility count
    photos.forEach(function (photo, index) {
      if (index < visiblePhotos) {
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });

    // Show or hide the "Show more" button based on the total number of photos
    if (visiblePhotos < photos.length) {
      showMoreBtn.style.display = 'inline-block';
      showLessBtn.style.display = 'none';
    }

    gallery.forEach(function (galler, index) {
      if (10 > visiblePhotos) {
        $(galler).addClass('gallery-1');
        $(galler).removeClass('gallery-2');
      } else {
        $(galler).removeClass('gallery-1');
        $(galler).addClass('gallery-2');
      }
    });


  }

  // Attach the click event to the "Show more" button
  showMoreBtn.addEventListener('click', showMorePhotos);
  showLessBtn.addEventListener('click', showLessPhotos);

  // Initially, hide photos beyond the initial visible count
  showMorePhotos();
});