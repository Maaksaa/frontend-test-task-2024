<template>
  <div class="doctor-card">
    <h3 class="doctor-h3">{{ fullName }}</h3>
    <p> {{ specialisationNames.join(', ') }}</p>
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
  border: 1px solid #ECECEC;
  color: #0f5a5f;
  margin: 10px;
  padding: 20px;
  border-radius: 18px;
  width: 200px;
  height: 250px;
}
.doctor-h3 {
  font-weight: 700;
  margin-top: 170px;
  height: 40px;
}
</style>
