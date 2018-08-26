<template>
  <div>
    <h5>Pressed and un-pressed state</h5>
    <b-button :pressed="true" variant="success">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>

    <h5>Toggleable Button</h5>
    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
    <p>Pressed State: <strong>{{ myToggle }}</strong></p>

    <h5>In a button group</h5>
    <b-button-group size="sm">
      <b-button v-for="btn in buttons" :pressed.sync="btn.state" :variant="btn.variant" :key="btn.variant">
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>Pressed States: <strong>{{ btnStates }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myToggle: false,
      buttons: [
        { variant: "primary", caption: "Toggle 1", state: true },
        { variant: "danger", caption: "Toggle 2", state: false },
        { variant: "warning", caption: "Toggle 3", state: true },
        { variant: "success", caption: "No Toggle", state: null },
        { variant: "outline-success", caption: "Toggle 5", state: false },
        { variant: "outline-primary", caption: "Toggle 6", state: false }
      ]
    };
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state);
    }
  }
};
</script>

<!-- button-4.vue -->
