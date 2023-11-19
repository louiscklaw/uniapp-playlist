<template>
  <view class="container">
    <view class="head-image">
      <img src="./images/cover_banner.jpg" />
    </view>

    <view class="buttons">
      <view class="button-container">
        <view class="button-icon">
          <view class="icon-container">
            <img class="icon" src="./images/coffee-icon.svg" />
          </view>
        </view>
        <view class="text">
          <view class="typeface-h2">點 單</view>
          <view class="typeface-h3">order</view>
        </view>
      </view>

      <view class="button-container">
        <view class="button-icon">
          <view class="icon-container">
            <img class="icon" src="./images/take-away.svg" />
          </view>
        </view>
        <view class="text">
          <view class="typeface-h2">自 取</view>
          <view class="typeface-h3">self-served</view>
        </view>
      </view>

      <view class="button-container">
        <view class="button-icon">
          <view class="icon-container">
            <img class="icon" src="./images/delivery.svg" />
          </view>
        </view>
        <view class="text">
          <view class="typeface-h2">外 賣</view>
          <view class="typeface-h3">takeaway</view>
        </view>
      </view>
    </view>

    <view class="plane-container">
      <view class="header">
        <view>
          <view class="title">Hi ~</view>
          <view class="subtitle">歡迎來到</view>
          <view class="subtitle">Life begins after coffee</view>
        </view>
        <view class="join-members-container">
          <view class="button">
            <view class="text">加入會員</view>
          </view>
        </view>
      </view>
      <view class="spacer"> <view class="horizontal-line"></view> </view>
      <view class="context">
        <view class="button-container">
          <img class="icon" src="./images/coffee-icon.svg" />
          <view class="button-label">充 值</view>
        </view>
        <view class="button-container">
          <img class="icon" src="./images/coupon.svg" />
          <view class="button-label">優惠劵</view>
        </view>
        <view class="button-container">
          <img class="icon" src="./images/rewards.svg" />
          <view class="button-label">積 分</view>
        </view>
      </view>
    </view>

    <view class="footer">
      <view class="button-container">
        <view class="button">
          <img class="icon" src="./images/customer-service.svg" />

          <view class="text"> 聯系客服</view>
        </view>
      </view>

      <view class="button-container">
        <view class="button">
          <img class="icon" src="./images/wifi.svg" />

          <view class="text"> 店舖 WIFI</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$base-dark: rgb(10, 4, 4);
$base-light-dark: rgba(10, 4, 4, 0.3);
$base-gray: rgb(206, 209, 202);
$base-light-gray: rgb(228, 228, 228);
//
$base-dark-font: rgba(10, 4, 4, 0.9);
$base-gray-font: rgba(206, 209, 202, 0.9);
$base-light-gray-font: rgba(228, 228, 228, 0.9);
//
$buttons-margin-horizontal: 5rem;
$buttons-width: calc((100vw - $buttons-margin-horizontal * 2) / 3);
$button-icon-dimension: calc($buttons-width * 0.55);
//
$font_size_h1: 1.2rem;
$font_size_h2: $font_size_h1 * 0.8;
$font_size_h3: $font_size_h1 * 0.7;
$font_size_h4: $font_size_h1 * 0.6;
$font_size_h5: $font_size_h1 * 0.5;
$font_size_h6: $font_size_h1 * 0.4;

.container {
  margin: 0rem 1rem;

  .head-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 66vw;
    }
  }

  .footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    .button-container {
      background-color: $base-light-gray;
      width: calc(100vw / 2 - 0.5rem);

      border-radius: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .button {
        padding: 1rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        .icon {
          width: 20px;
          height: 20px;
        }

        .text {
          font-size: $font_size_h3;
          font-weight: bold;
          letter-spacing: 0.2rem;
        }
      }
    }
  }
}

.buttons {
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-icon {
    background-color: $base-light-gray;

    width: $buttons-width;
    height: $buttons-width;
    border-radius: calc($buttons-width / 2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .icon {
        height: $button-icon-dimension;
        width: $button-icon-dimension;
      }
    }
  }

  .text {
    margin-top: 0.2rem;
  }

  .typeface-h2 {
    margin-top: 0.2rem;

    color: $base-dark-font;
    text-align: center;
    font-weight: 700;
    font-size: $font_size_h2;
  }
  .typeface-h3 {
    color: $base-light-dark;
    text-align: center;
    text-transform: uppercase;
    font-size: $font_size_h5;
    font-weight: bold;
  }
}

.plane-container {
  margin-top: 1rem;

  background-color: $base-light-gray;

  padding: 1rem 1.25rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .title {
      font-weight: bold;
      font-size: $font_size_h2;
    }

    .subtitle {
      font-weight: bold;
      font-size: $font_size_h4;
    }
  }

  .context {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0rem 1rem;
  }

  .spacer {
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    .horizontal-line {
      border-bottom: 1px solid $base-gray;
    }
  }

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: $button-icon-dimension;
      height: $button-icon-dimension;
    }

    .button-label {
      margin-top: 0.25rem;
      font-size: $font_size_h4;
      font-weight: bold;
    }
  }
}

.join-members-container {
  .button {
    background-color: $base-dark;
    color: $base-light-gray-font;
    border-radius: 1rem;
  }

  .text {
    margin: 0rem 0.5rem;
    padding: 0.2rem 0rem;
    font-size: $font_size_h5;
    font-weight: bold;
  }
}

// margin: 1rem;
</style>

