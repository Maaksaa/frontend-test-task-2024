<template>
  <div class="specialization-filter">
    <h3 class="specialization-h3">Специальность врача</h3>
    <button
      v-for="specialization in specializations"
      :key="specialization.id"
      :class="{ active: specialization.id === selectedSpecId }"
      :disabled="!isActive(specialization.id)"
      @click="selectSpecialization(specialization.id)"
    >
      {{ specialization.name }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import { Specialization, Doctor } from '@/types/types';

interface Props {
  specializations: Specialization[];
  doctors: Doctor[];
}

const props = defineProps<Props>();
const emit = defineEmits(['updateActiveSpecialization']);
const selectedSpecId = ref<number | null>(null);

function isActive(specId: number): boolean {
  return props.doctors.some(doctor => 
    doctor.specializationList.some(spec => spec.id == specId)
  );
}

function selectSpecialization(specId: number): void {
  selectedSpecId.value = specId;
  emit('updateActiveSpecialization', specId);
}
</script>

<style scoped>
.specialization-filter button {
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
.specialization-filter .specialization-h3 {
  margin: 5px;
  color: #0f5a5f;

}
.specialization-filter button:not([disabled]):hover {
  background-color: #0f5a5f20;
}
.specialization-filter button:not([disabled]):active {
  background-color: #0f5a5f60;
}
.specialization-filter button[disabled] {
  color: #ccc;
  cursor: default;
}
.specialization-filter button.active {
  background-color: #0f5a5f; 
  color: #fff; 
}

</style>
