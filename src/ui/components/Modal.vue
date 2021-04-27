<template>
  <div>
    <b-button v-b-modal.modal-1 class="modal__button" size="lg">
      <font-awesome-icon icon="play"/>
    </b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
  .modal__button {
    border-radius: 50%;
    background-color: #6c0000;
    padding: 1rem 1rem;
  }
</style>
