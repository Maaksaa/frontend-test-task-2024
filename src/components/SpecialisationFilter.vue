<template>
  <div class="specialisation-filter">
    <button
      v-for="specialisation in specialisations"
      :key="specialisation.id"
      :class="{ disabled: !isActive(specialisation.id) }"
      @click="selectSpecialisation(specialisation.id)"
    >
      {{ specialisation.name }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  specialisations: Array,
  doctors: Array
});

const emit = defineEmits(['updateActiveSpecialisation']);

function isActive(specId) {
  return props.doctors.some(doctor => doctor.specializationList.some(spec => spec.id === specId));
}

function selectSpecialisation(specId) {
  emit('updateActiveSpecialisation', specId);
}
</script>

<style scoped>
.specialisation-filter button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
.specialisation-filter .disabled {
  color: #ccc;
  cursor: not-allowed;
}
</style>
