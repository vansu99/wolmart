<template>
  <div class="description-tabs">
    <ul class="tab-list">
      <li class="tab" @click="tabClickIdx = 0" :class="{ active: tabClickIdx === 0 }">Chi tiết</li>
      <li class="tab" @click="tabClickIdx = 1" :class="{ active: tabClickIdx === 1 }">Đặc tả</li>
      <li class="tab" @click="tabClickIdx = 2" :class="{ active: tabClickIdx === 2 }">
        Nhận xét của khách hàng ({{ review}})
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
            <p class="tab__sub-title">Vận chuyển miễn phí</p>
            <p class="tab__detail">Chúng tôi cung cấp dịch vụ miễn phí vận chuyển cho những sản phẩm thuộc đơn trị giá trên 3 triệu trên toàn lãnh thổ Việt Nam.</p>
          </li>
          <li>
            <p class="tab__sub-title">Hoàn tiền dễ dàng</p>
            <p class="tab__detail">Chúng tôi đảm bảo về chất lượng sản phẩm và bạn có thể nhận lại 100% số tiền của bạn trong vòng 30 ngày phản hồi.</p>
          </li>
          <li>
            <p class="tab__sub-title">Đăng ký thành viên</p>
            <p class="tab__detail">Cơ hội được giảm từ 20%-50% với những sản phẩm trên 3 triệu trong 1 tháng và trên 10 triệu đồng 1 năm với thẻ thành viên của chúng tôi.</p>
          </li>
        </ol>
      </div>
    </div>
    <div class="tab__body" v-show="tabClickIdx === 1">
      <p class="tab__text tab__text--specification">
        <ul>
          <li>
            <h6>Mẫu</h6>
            <p>Skysuite 320</p>
          </li>
          <li>
            <h6>Màu sắc</h6>
            <p>Đen</p>
          </li>
          <li>
            <h6>Kích cỡ</h6>
            <p>Lớn, Nhỏ</p>
          </li>
          <li>
            <h6>Thời hạn bảo hành</h6>
            <p>3 tháng</p>
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
              <div class="rating__text">Trung bình</div>
              <ProductRating :star="star" :review="review"/>
            </div>
          </div>
          <div class="rating__recommended">
            <h5>66.7%</h5>
            <div class="rating__text">Được đề xuất <span class="rating__description">(2 trên 3)</span></div>
          </div>
          <div class="rating__graph" v-for="(rating, starRating) in ratingList" 
              :key="`rating-${starRating}`">
            <RatingStar :star="5 - starRating"/>
              <div class="rating__progress-bar" ><span :style="`width:${rating}%`"></span></div>
          </div>
        </div>
        <div class="review">
          <h2 class="review__heading">Gửi nhận xét của bạn</h2>
          <div class="review__description">Địa chỉ email của bạn sẽ không được công khai. Những trường bắt buộc sẽ được đánh dấu *</div>
          <div class="review__own-rating">Bình chọn của bạn cho sản phẩm này: 
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
          <textarea type="text" class="review__input" placeholder="Viết nhận xét ở đây..." ></textarea>
          <div class="review__info">
            <input type="text" class="review__name" placeholder="Tên của bạn:">
            <input type="email" class="review__email" placeholder="Email của bạn:">
          </div>
          <button class="review__summit">Gửi nhận xét</button>
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