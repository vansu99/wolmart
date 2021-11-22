<template>
  <div class="description-tabs">
    <ul class="tab-list">
      <li class="tab" @click="tabClickIdx = 0" :class="{ active: tabClickIdx === 0 }">Description</li>
      <li class="tab" @click="tabClickIdx = 1" :class="{ active: tabClickIdx === 1 }">Specification</li>
      <li class="tab" @click="tabClickIdx = 2" :class="{ active: tabClickIdx === 2 }">
        Customer Review ({{ review}})
      </li>
    </ul>

    <div class="tab__body" v-show="tabClickIdx === 0">
      <h4 class="tab__heading">Chi tiết</h4>
      <div class="tab__text">
        <p class="tab__description">
          {{ product.description }}
        </p>
        <ul>
          <li>
            <i class="fas fa-check"></i> Nunc nec porttitor turpis. In eu risus enim. In vitae
            mollis elit.
          </li>
          <li><i class="fas fa-check"></i>Vivamus finibus vel mauris ut vehicula.</li>
          <li><i class="fas fa-check"></i>Vivamus finibus vel mauris ut vehicula.</li>
        </ul>
        <ol>
          <li>
            <p class="tab__sub-title">Free Shipping & Return</p>
            <p class="tab__detail">We offer free shipping for products on orders above 50$ and offer free delivery for all orders in US.</p>
          </li>
          <li>
            <p class="tab__sub-title">Free and Easy Returns</p>
            <p class="tab__detail">We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>
          </li>
          <li>
            <p class="tab__sub-title">Special Financing</p>
            <p class="tab__detail">Get 20%-50% off items over 50$ for a month or over 250$ for a year with our special credit card.</p>
          </li>
        </ol>
      </div>
    </div>
    <div class="tab__body" v-show="tabClickIdx === 1">
      <p class="tab__text tab__text--specification">
        <ul>
          <li>
            <h6>Model</h6>
            <p>Skysuite 320</p>
          </li>
          <li>
            <h6>Color</h6>
            <p>Black</p>
          </li>
          <li>
            <h6>Size</h6>
            <p>Large, Small</p>
          </li>
          <li>
            <h6>Guarantee Time</h6>
            <p>3 Months</p>
          </li>
        </ul>
      </p>
    </div>
    <div class="tab__body" v-show="tabClickIdx === 2">
      <div class="tab__text tab__text--description">
        <div class="rating">
          <div class="rating__avg">
            <h4>3.3</h4>
            <div class="rating__avg-content">
              <div class="rating__text">Average Rating</div>
              <ProductRating :star="star" :review="review"/>
            </div>
          </div>
          <div class="rating__recommended">
            <h5>66.7%</h5>
            <div class="rating__text">Recommended <span class="rating__description">(2 of 3)</span></div>
          </div>
          <div class="rating__graph" v-for="(rating, starRating) in ratingList" 
              :key="`rating-${starRating}`">
            <RatingStar :star="5 - starRating"/>
              <div class="rating__progress-bar" ><span :style="`width:${rating}%`"></span></div>
          </div>
        </div>
        <div class="review">
          <h2 class="review__heading">Submit Your Review</h2>
          <div class="review__description">Your email address will not be published. Required fields are marked *</div>
          <div class="review__own-rating">Your Rating Of This Product : 
            <span class="review__stars">
              <span 
                v-for="index in 5" :key="index"
                @mouseover="hoverStar = index" @mouseleave="hoverStar = -1"
                @click="
                saveChooseRating == index ? saveChooseRating = -1 : saveChooseRating = index; "
              >  <!-- Your Rating Of This Product -->
                <i class="fas fa-star" 
                :class="(saveChooseRating >= index || hoverStar >= index) ? 'check' : ''"
              ></i>
              </span>
            </span>
          </div>
          <textarea type="text" class="review__input" placeholder="Write Your Review Here..." ></textarea>
          <div class="review__info">
            <input type="text" class="review__name" placeholder="Your Name">
            <input type="email" class="review__email" placeholder="Your Email">
          </div>
          <button class="review__summit">Summit review</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductRating from '@/components/RatingStarWithDescription/RatingStarWithDescription';
import RatingStar from '@/components/RatingStar/RatingStar';
export default {
  name: 'DescriptionTabs',
  data() {
    return {
      tabClickIdx: 0,
      hoverStar: -1,
      saveChooseRating: -1,
      ratingList: [60, 20, 30, 0, 10],
    };
  },
  components: { RatingStar, ProductRating },
  props: { product: Object, star: Number, review: Number},
};
</script>

<style lang="scss" scoped>
@import 'DescriptionTabs';
</style>