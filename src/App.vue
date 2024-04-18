<template>
  <div class="container">
    <div class="filter-section">
      <specialisation-filter
        :specializations="specializations"
        :doctors="doctors"
        @updateActiveSpecialisation="updateActiveSpecialisation"
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
import { fetchspecializations, fetchDoctors } from './services/api';
import DoctorCard from './components/DoctorCard.vue';
import SpecialisationFilter from './components/SpecialisationFilter.vue';


const specializations = ref([]);
const doctors = ref([]);
const activeSpecialisation = ref(null);



onMounted(async () => {
  specializations.value = await fetchspecializations() || [];
  doctors.value = await fetchDoctors() || [];
});


const updateActiveSpecialisation = (specId) => {
  activeSpecialisation.value = specId;
};

const filteredDoctors = computed(() => {
  if (activeSpecialisation.value === null) return doctors.value;
  return doctors.value.filter(doctor =>
    doctor.specializationList.some(spec => spec.id == activeSpecialisation.value)
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