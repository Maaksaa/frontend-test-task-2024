<template>
  <div class="container">
    <div class="filter-section">
      <specialization-filter
        :specializations="specializations"
        :doctors="doctors"
        @updateActiveSpecialization="updateActiveSpecialization"
      />
    </div>
    <div class="doctors-section">
      <doctor-card
        v-for="doctor in filteredDoctors"
        :key="doctor.id"
        :doctor="doctor"
        :specializations="specializations"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { fetchSpecializations, fetchDoctors } from './services/api';
import DoctorCard from './components/DoctorCard.vue';
import SpecializationFilter from './components/SpecializationFilter.vue';


const specializations = ref([]);
const doctors = ref([]);
const activeSpecialization = ref(null);



onMounted(async () => {
  specializations.value = await fetchSpecializations() || [];
  doctors.value = await fetchDoctors() || [];
});


const updateActiveSpecialization = (specId) => {
  activeSpecialization.value = specId;
};

const filteredDoctors = computed(() => {
  if (activeSpecialization.value === null) return doctors.value;
  return doctors.value.filter(doctor =>
    doctor.specializationList.some(spec => spec.id == activeSpecialization.value)
  );
});
</script>

<style scoped>
.container {
  display: flex;
  margin: 20px;
}

.filter-section {
  width: 250px;
  padding: 10px;
}

.doctors-section {

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
}


</style>