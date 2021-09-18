<!--<template>
  <div id="content-wrapper">
    <div class="column">
      <img id="featured" src="images/shoe1.jpg" />

      <div id="slide-wrapper">
        <img id="slideLeft" class="arrow" src="images/arrow-left.png" />

        <div id="slider">
          <img class="thumbnail active" src="images/shoe1.jpg" />
          <img class="thumbnail" src="images/shoe2.jpg" />
          <img class="thumbnail" src="images/shoe3.jpg" />

          <img class="thumbnail" src="images/preset1.png" />
          <img class="thumbnail" src="images/preset2.jpg" />
          <img class="thumbnail" src="images/preset3.jpg" />
          <img class="thumbnail" src="images/preset4.jpg" />
        </div>

        <img id="slideRight" class="arrow" src="images/arrow-right.png" />
      </div>
    </div>

    <div class="column">
      <h1>Awesome Shoes</h1>
      <hr />
      <h3>$89.99</h3>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>

      <input value="1" type="number" />
      <a class="btn btn-dark" href="#">Add to Cart</a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
};
</script>
<script type="text/javascript">
let thumbnails = document.getElementsByClassName('thumbnail');

let activeImages = document.getElementsByClassName('active');

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', function () {
    console.log(activeImages);

    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active');
    }

    this.classList.add('active');
    document.getElementById('featured').src = this.src;
  });
}

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function () {
  document.getElementById('slider').scrollLeft -= 180;
});

buttonRight.addEventListener('click', function () {
  document.getElementById('slider').scrollLeft += 180;
});
</script>
<style>
#content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.column {
  width: 600px;
  padding: 10px;
}

#featured {
  max-width: 500px;
  max-height: 600px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid black;
}

.thumbnail {
  object-fit: cover;
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  opacity: 0.5;
  margin: 5px;
  border: 2px solid black;
}

.thumbnail:hover {
  opacity: 1;
}

.active {
  opacity: 1;
}

#slide-wrapper {
  max-width: 500px;
  display: flex;
  min-height: 100px;
  align-items: center;
}

#slider {
  width: 440px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

#slider::-webkit-scrollbar {
  width: 8px;
}

#slider::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#slider::-webkit-scrollbar-thumb {
  background-color: #dede2e;
  outline: 1px solid slategrey;
  border-radius: 100px;
}

#slider::-webkit-scrollbar-thumb:hover {
  background-color: #18b5ce;
}

.arrow {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.arrow:hover {
  opacity: 0.5;
  width: 35px;
  height: 35px;
}
</style>
-->