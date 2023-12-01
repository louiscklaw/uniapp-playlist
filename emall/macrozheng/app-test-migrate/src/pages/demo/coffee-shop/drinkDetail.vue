<template>
  <view class="container">
    <view class="head-image">
      <img src="./images/coffee.jpg" />
    </view>
    <view class="item-name-plate">
      <view class="item-name">檸檬氣泡水</view>

      <view class="item-remain">庫存 999</view>

      <view class="item-price">
        <view class="item-price-currency">Y</view>
        <view class="item-price-value">8.8</view>
        <view class="item-price-unit">/杯</view>
      </view>
    </view>

    <view class="item-description-container">
      <view class="item-name">商品描述:</view>
      <view class="description-content">
        檸檬氣泡水是一款清新、爽口的飲料，結合了檸檬的酸爽和氣泡水的泡沫口感。這款飲料將您帶入一個令人愉悅的口味旅程，為您提供輕快的口感和天然的檸檬風味。
        主要特點: 1. 天然檸檬風味:
        檸檬氣泡水採用新鮮檸檬提取的天然風味，帶給您清新、酸爽的口感。 2.
        沁人口感:
        氣泡水的泡沫與檸檬風味完美結合，為您帶來愉悅的口感，讓您感受到每一口的清新。
        3. 無添加糖: 檸檬氣泡水不含任何添加糖分，適合追求健康生活方式的人士。 4.
        適宜飲用場合:
        檸檬氣泡水是一款多功能飲料，在各種場合中都能為您帶來愉悅，無論是休閒時刻、派對聚會或餐桌上的佳品都非常適合。
        5. 方便攜帶:
        檸檬氣泡水採用方便的罐裝設計，容易攜帶，讓您隨時隨地都能享受到清新的口感。
        成分: 水、二氧化碳、檸檬提取物、天然檸檬香精、酸度調節劑等。 飲用建議: -
        您可以直接從罐中飲用，或倒入玻璃杯中搭配冰塊飲用，以增添清涼感。 -
        建議冷藏後飲用，以保持最佳口感。 -
        可以單獨享用，也可與其他飲料或烹飪配料混合，創造出屬於您自己的特色飲品。
        請注意: - 請避免暴露於陽光直射或高溫環境下。 - 本產品不適合嬰幼兒飲用。
        檸檬氣泡水將為您帶來一份清新、爽口的味覺體驗，無論是享受片刻寧靜還是與親朋好友共享美好時光，都是您的理想選擇。嚐一口，讓檸檬氣泡水為您帶來活力和愉悅的口感。
        this is the end
      </view>
    </view>

    <view class="footer-spacer">helloworld</view>

    <view class="footer">
      <view class="footer-left">
        <view class="icon-button">
          <img class="icon" src="./images/home.svg" />
          <view class="icon-text">首頁</view>
        </view>

        <view class="icon-button">
          <img class="icon" src="./images/share.svg" />
          <view class="icon-text">分享</view>
        </view>

        <view class="icon-button">
          <img class="icon" src="./images/cart.svg" />
          <view class="icon-text">購物車</view>
        </view>
      </view>
      <view class="footer-right">
        <view class="button">
          <view>去結算</view>
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
$base-assent: rgb(213, 167, 115);
$base-dark: rgb(10, 4, 4);
$base-light-dark: rgba(10, 4, 4, 0.3);
$base-gray: rgb(206, 209, 202);
$base-light-gray: rgb(228, 228, 228);
//
$base-dark-font: rgba(10, 4, 4, 0.9);
$base-light-dark-font: rgba(10, 4, 4, 0.4);

$base-gray-font: rgba(206, 209, 202, 0.9);
$base-light-gray-font: rgba(228, 228, 228, 0.9);
//
$base-white-font: rgba(255, 255, 255, 0.9);
//
$buttons-margin-horizontal: 5rem;
$buttons-width: calc((100vw - $buttons-margin-horizontal * 2) / 3);
$button-icon-dimension: calc($buttons-width * 0.55);
//
$font_size_h1: 1.5rem;
$font_size_h2: $font_size_h1 * 0.8;
$font_size_h3: $font_size_h1 * 0.7;
$font_size_h4: $font_size_h1 * 0.6;
$font_size_h5: $font_size_h1 * 0.5;
$font_size_h6: $font_size_h1 * 0.4;

$footer-height: 75px;
$footer-spacer: calc($footer-height * 1.2);

.container {
  overflow-x: hidden;

  .head-image {
    height: 40vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 40vh;
    }
  }

  .item-name-plate {
    padding: 1rem;

    .item-name {
      font-size: $font_size_h1;
      font-weight: bold;
    }

    .item-remain {
      font-weight: bold;
      color: $base-light-dark-font;

      margin-top: 0.2rem;
    }

    .item-price {
      font-size: $font_size_h1;

      display: flex;
      flex-direction: row;
      align-items: baseline;

      font-weight: bold;
      gap: 0.2rem;

      .item-price-currency {
        font-size: $font_size_h2;
        color: $base-light-dark-font;
      }

      .item-price-value {
        font-size: $font_size_h1;
      }

      .item-price-unit {
        color: $base-light-dark-font;
        font-size: $font_size_h2;
      }
    }
  }

  .item-description-container {
    padding: 1rem;

    .item-name {
      font-size: $font_size_h3;
      font-weight: bold;
    }
  }

  .footer-spacer {
    height: $footer-height;
  }

  .footer {
    position: fixed;

    background-color: white;
    border-top: 1px solid $base-light-dark;

    height: $footer-height;
    width: 100%;
    bottom: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .footer-left {
      width: 55%;

      display: flex;
      flex-direction: row;
      justify-content: space-around;

      font-size: $font_size_h4;
      font-weight: bold;
    }

    .footer-right {
      width: calc(100% - 55%);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .button {
        height: 50px;
        min-width: 160px;
        background-color: $base-assent;
        color: $base-white-font;
        border-radius: calc(50px / 2);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: $font_size_h2;
      }
    }

    .icon-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}

// margin: 1rem;
</style>

