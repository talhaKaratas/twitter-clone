<template>
  <div class="feed">
    <div class="feed__header">
      <h3>Home</h3>
    </div>
    <div class="feed__inputBox">
      <div class="feed__avatar">
        <i class="fas fa-user-circle"></i>
      </div>
      <div class="inputBox__content">
        <input
          class="feed__inputBoxInput"
          type="text"
          placeholder="What's happening?"
          v-model="inputEmptyControl"
        />
        <div class="inputBox__bottom">
          <div class="inputBox__icon">
            <i class="far fa-images"></i>
            <i class="fas fa-film"></i>
            <i class="far fa-chart-bar"></i>
            <i class="far fa-smile-beam"></i>
            <i class="far fa-calendar-alt"></i>
          </div>
          <div class="inputBoxTweet__button">
            <button :class="inputEmpty">Tweet</button>
          </div>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="post__avatar">
        <img
          src="https://pbs.twimg.com/profile_images/849156645317988352/J2Ab_rMt_bigger.jpg"
          width="50"
          height="50"
          alt
        />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="postHeader__text">
            <h4>Düzce Üniversitesi</h4>
            <span>@duzceuniversite</span>
          </div>
        </div>
        <div class="postHeader__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a quisquam suscipit placeat cumque delectus odio tenetur hic iste blanditiis explicabo nam id accusantium, rerum reiciendis provident cupiditate dolorum omnis.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputEmptyControl: "",
    };
  },
  computed: {
    inputEmpty() {
      if (this.inputEmptyControl === "") {
        return { "button-disabled": true };
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.button-disabled {
  opacity: 0.5;
}
</style>