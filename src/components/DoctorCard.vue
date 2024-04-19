<template>
  <div class="doctor-card">
    <h3 class="doctor-h3">{{ fullName }}</h3>
    <p> {{ specializationNames.join(', ') }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { Doctor, Specialization } from '@/types/types';


const props = defineProps<{
  doctor: Doctor;
  specializations: Specialization[];
}>();


const fullName = computed(() => {
  return `${props.doctor.lastName} ${props.doctor.firstName} ${props.doctor.middleName}`;
});


const specializationNames = computed(() => {
  return props.doctor.specializationList.map(spec => {
    const foundSpec = props.specializations.find(s => s.id == spec.id);
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
