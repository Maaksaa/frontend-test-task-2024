<template>
  <div class="specialisation-filter">
    <h3 class="specialisation-h3">Специальность врача</h3>
    <button
      v-for="specialisation in specializations"
      :key="specialisation.id"
      :class="{ active: specialisation.id === selectedSpecId }"
      :disabled="!isActive(specialisation.id)"
      @click="selectSpecialisation(specialisation.id)"
    >
      {{ specialisation.name }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  specializations: Array,
  doctors: Array
});

const emit = defineEmits(['updateActiveSpecialisation']);
const selectedSpecId = ref(null);

function isActive(specId) {
  return props.doctors.some(doctor => doctor.specializationList.some(spec => spec.id == specId));
}

function selectSpecialisation(specId) {
  selectedSpecId.value = specId;
  emit('updateActiveSpecialisation', specId);
}
</script>

<style scoped>
.specialisation-filter button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #ECECEC;
  background-color: #fff;
  color: #0f5a5f;
  font-weight: 700;
  transition-duration: 0.1s;
}
.specialisation-filter .specialisation-h3 {
  margin: 5px;
  color: #0f5a5f;

}
.specialisation-filter button:not([disabled]):hover {
  background-color: #0f5a5f20;
}
.specialisation-filter button:not([disabled]):active {
  background-color: #0f5a5f60;
}
.specialisation-filter button[disabled] {
  color: #ccc;
  cursor: default;
}
.specialisation-filter button.active {
  background-color: #0f5a5f; 
  color: #fff; 
}

</style>
