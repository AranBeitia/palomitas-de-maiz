<template>
  <section>
    <b-button v-b-modal.modal-1 class="modal__button" size="lg">
      <font-awesome-icon icon="play" class="icon-play"/>
    </b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </section>
</template>

<style lang="scss" scoped>
  .modal__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #6c0000;
    border-color: #6c0000;
    padding: 1rem 1rem;
  }

  .icon-play {
    font-size: 2rem;
  }
</style>
