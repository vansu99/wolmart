<template>
  <footer id="footer">
    <div class="newsletter">
      <div class="container d-flex footer-newsletter">
        <div class="d-flex newsletter-left">
          <div class="logo">
            <img src="../../assets/images/Footer/Icon/envelope-regular.svg" class="color-envelope-regular" alt="none image"/>            
          </div>
          <div class="box-content">
            <h4 class="text-transform box-title">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p class="introduce">Get all the latest information on Events, Sales and Offers.</p>
          </div>
        </div>
        <div class="form d-flex">
          <input type="text" name="" id="" placeholder="Your E-mail Address">
          <button class="text-transform d-flex"><span>SUBSCRIBE</span><img src="../../assets/images/Footer/Icon/arrow-right-solid.svg" class="color-arrow-right" alt=""/></button>
        </div>
      </div>
    </div>
    <div class="container d-flex footer-bottom">
      <div class="contact">
        <div class="logo"><a href=""><img src="../../assets/images/Footer/logo-footer.png" alt=""></a></div>
        <p class="widget-about-title">Got Question? Call us 24/7</p>
        <a class="text-decoration telephone" href="">1-800-570-7777</a>
        <p class="widget-about-desc">Register now to get updates on pronot get up icons & coupons ster now toon.</p>
        <div class="social-contact d-flex">
          <a class="text-decoration facebook" href=""><img src="../../assets/images/Footer/Icon/facebook-f-brands.svg" class="color-facebook" alt=""/></a>
          <a class="text-decoration twitter" href=""><img src="../../assets/images/Footer/Icon/twitter-brands.svg" class="color-twitter" alt=""/></a>
          <a class="text-decoration instagram" href=""><img src="../../assets/images/Footer/Icon/instagram-brands.svg" class="color-instagram" alt=""/></a>
          <a class="text-decoration youtube" href=""><img src="../../assets/images/Footer/Icon/youtube-brands.svg" class="color-youtube" alt=""/></a>
          <a class="text-decoration pinterest" href=""><img src="../../assets/images/Footer/Icon/pinterest-brands.svg" class="color-pinterest" alt=""/></a>
        </div>
      </div>
      <div class="company">
        <h3>COMPANY</h3>
        <ul class="text-decoration">
          <li v-for="(item,index) in customerServices" :key="index">
            <a class="text-decoration"  href="">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="my-account">
        <h3 class="text-decoration">MY ACCOUNT</h3>
        <ul>
          <li v-for="(item,index) in myAccounts" :key="index">
            <a class="text-decoration"  href="">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="customer-service">
        <h3 class="text-decoration">CUSTOMER SERVICE</h3>
        <ul>
          <li v-for="(item,index) in companys" :key="index">
            <a class="text-decoration"  href="">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      customerServices : ["Payment Methods","Money-back guarantee!","Product Returns","Support Center","Shipping","Term and Conditions"],
      myAccounts :       ["Track My Order","View Cart","Sign In","Help","My Wishlist","Privacy Policy"],
      companys :         ["About Us","Team Member","Career","Contact Us","Affilate","Order History"],
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'Footer';

</style>
