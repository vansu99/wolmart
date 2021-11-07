<template>
  <div class="clothing">
    <div class="container">
      <div class="clothing__top">
        <h2 class="section__title">Clothing & Apparel</h2>
        <a
          ><div>More Products</div>
          <img src="@/assets/images/Shared/arrow-right-solid.svg" alt="arrow" />
        </a>
      </div>
      <hr class="section__divider" />
      <div class="clothing__content">
        <div class="sidebar-banner">
          <div class="sidebar-banner__content">
            <div class="sidebar-banner__subtitle">weekend sale</div>
            <hr class="sidebar-banner__divider" />
            <div class="sidebar-banner__title">new arrivals</div>
            <div class="sidebar-banner__type">collection</div>
            <div class="sidebar-banner__link">shop now</div>
          </div>
        </div>
        <div class="products">
          <div class="product" v-for="(item, index) in products" :key="index">
            <div class="product__top">
              <a href="" class="product__link"
                ><img
                  :src="require(`@/assets/images/Home/Clothing/${item.image}`)"
                  :alt="item.image"
              /></a>
              <div class="product__btns">
                <a class="product__btn" title="Add to cart"
                  ><img
                    src="@/assets/images/Home/Clothing/icon/shopping-bag-solid.svg"
                    alt="add-to-cart"
                /></a>
                <a class="product__btn" title="Add to wishlist"
                  ><img
                    src="@/assets/images/Home/Clothing/icon/heart-solid.svg"
                    alt="add-to-wishlist"
                /></a>
              </div>
              <span class="product__sale" v-show="item.sale">{{ item.sale }}% off</span>
            </div>
            <div class="product__content">
              <div class="product__name"><a>Men’s Clothing</a></div>
              <div class="product__rating">
                <span class="product__stars" :star="`${item.star}.00`">
                  <img
                    class="check"
                    src="@/assets/images/Shared/star-solid.svg"
                    alt=""
                    v-for="n in item.star"
                    :key="n"
                  />
                  <img
                    src="@/assets/images/Shared/star-solid.svg"
                    alt="star"
                    v-for="n in 5 - item.star"
                    :key="n"
                  />
                </span>
                <a class="product__desription">({{ item.review }} reviews)</a>
              </div>
              <div class="product__price">
                <span class="product__price--new">$215.68</span>
                <span class="product__price--old">$230.45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clothing',
  data() {
    return {
      products: [
        { image: 'man-clothing.jpg', sale: 0, star: 2, review: 6 },
        { image: 'women-fashion.jpg', sale: 6, star: 3, review: 13 },
        { image: 'black-winter-skating.jpg', sale: 25, star: 1, review: 13 },
        { image: 'sport-women-wear.jpg', sale: 8, star: 3, review: 10 },
        { image: 'travel-bag.jpg', sale: 13, star: 4, review: 13 },
        { image: 'leather-shoes.jpg', sale: 6, star: 3, review: 11 },
        { image: 'man-wrist-watch.jpg', sale: null, star: 5, review: 13 },
        { image: 'women-hiking-hat.jpg', sale: 7, star: 3, review: 3 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './../shared/';
@import './Clothing';
</style>
