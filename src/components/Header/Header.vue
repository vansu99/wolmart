<template>
  <div id="header">
    <div class="wrapper">
		<div class="container">
			<div class="row d-flex">
				<div class="header-left">
					<p class="welcome-msg">Welcome to Wolmart Store message or remove it!</p>
				</div>
				<div class="header-right d-flex">
					<div class="item drop-down">
						<p class="selected-lang">USD</p>
						<div class="select-box">
							<p class="type-money">USD</p>
							<p class="type-money">EUR</p>
						</div>
					</div>
					<div class="item drop-down">
						<div class="select-lang">
							<img src="../../assets/images/Header/eng.png" alt="" />
							<span class="language">USD</span>
						</div>
						<div class="select-box">
							<div class="type-langs">
								<img src="../../assets/images/Header/eng.png" alt="" />
								<span class="language">USD</span>
							</div>
							<div class="type-langs">
								<img src="../../assets/images/Header/fra.png" alt="" />
								<span class="language">FRA</span>
							</div>
						</div>
					</div>
					<div class="item menu">
						<a class="text-decoration" href="#">Blogs</a>
						<a class="text-decoration" href="#">Contact Us</a>
						<a class="text-decoration" href="#">My Account</a>
						<a class="text-decoration" href="#">Sign In</a>
						<span>/</span>
						<a class="text-decoration" href="#">Register</a>
					</div>
				</div>
			</div>
		</div>
    </div>
    <div class="container header-middle">
      <div class="row d-flex">
        <div class="header-left d-flex">
        <div class="logo">
            <a href="#"><img src="../../assets/images/Header/logo.png" alt="" /></a>
        </div>
        <div class="form d-flex">
            <div class="search-input"><input type="text" name="" placeholder="Search in..." id="" /></div>
            <div class="btn-search"><button class="search">
				<img class="icon-search" src="../../assets/images/Header/Icon/search-solid.svg" alt="">
				</button></div>
        </div>
        </div>
        <div class="header-right d-flex">
			<div class="contact items d-flex">
			<div><img src="../../assets/images/Header/Icon/phone-volume-solid.svg" alt=""></div> <!-- width: 3rem-->
            <div>
				<a class="text-decoration live-chat" href="">Live Chat </a>
				<span> or : </span>
				<div>
					<a href="" class="telephone text-decoration">0(800)123-456</a>
				</div>
			</div>
			</div>
			<div class="wishlist items"><a class="text-decoration" href="">
				<img src="../../assets/images/Header/Icon/heart-regular.svg" alt="">	<span class="d-block">Wishlist</span></a>
			</div>
			<div class="compare items"><a class="text-decoration" href="">
				<img src="../../assets/images/Header/Icon/balance-scale-solid.svg" alt=""><span class="d-block">Compare</span></a></div>
			<div class="cart items" values="2" ><a class="text-decoration" href="">
				<img src="../../assets/images/Header/Icon/shopping-bag-solid.svg" alt=""><span class="d-block">Cart</span></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import './Header';
</style>
