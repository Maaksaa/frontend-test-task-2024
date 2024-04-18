<template>
  <div class="doctor-card">
    <h3>{{ fullName }}</h3>
    <p>Специальности: {{ specialisationNames.join(', ') }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  doctor: Object,
  specialisations: Array
});

const fullName = computed(() => `${props.doctor.lastName} ${props.doctor.firstName} ${props.doctor.middleName}`);

const specialisationNames = computed(() => {
  return props.doctor.specializationList.map(spec => {
    const foundSpec = props.specialisations.find(s => s.id === spec.id);
    return foundSpec ? foundSpec.name : 'Неизвестная специальность';
  });
});
</script>

<style scoped>
.doctor-card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
