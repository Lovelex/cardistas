<template>
  <VAppBar color="primary" class="d-flex px-4">
    <h1>Cardistas</h1>

    <vBtn :to="{ name: 'LoginPage' }" class="ml-auto" variant="outlined" append-icon="mdi-logout">
      <span>{{ user.name }}</span>
    </vBtn>
  </VAppBar>
</template>

<script>
export default {
    data: () => ({
        user: {
            name: "Mock",
        }
    })
};
</script>
