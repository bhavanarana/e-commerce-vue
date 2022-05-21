app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(x, index) in reviews" :key="index">
          {{ x.name }} gave this {{ x.rating }} stars
          <br/>
          "{{ x.review }}"
          <br/>
          <!-- solution -->
          Recommended: {{ x.recommend }}
          <!-- solution -->
        </li>
      </ul>
    </div>
  `,
});
