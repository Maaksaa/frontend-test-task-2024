<template>
  <div class="container">
    <div class="filter-section">
      <specialisation-filter
        :specialisations="specialisations"
        :doctors="doctors"
        @updateActiveSpecialisation="updateActiveSpecialisation"
      />
    </div>
    <div class="doctors-section">
      <doctor-card
        v-for="doctor in filteredDoctors"
        :key="doctor.id"
        :doctor="doctor"
        :specialisations="specialisations"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import DoctorCard from './components/DoctorCard.vue';
import SpecialisationFilter from './components/SpecialisationFilter.vue';

const specialisations = ref([
  { id: 2, name: "Терапевт" },
  { id: 1, name: "Психолог" },
  { id: 4, name: "Стоматолог-хирург" },
  { id: 3, name: "Стоматолог" },
  { id: 9, name: "Педиатр" },
  { id: 15, name: "Гастроэнтеролог" },
  { id: 16, name: "Гинеколог" },
  { id: 17, name: "Дерматолог" },
  { id: 21, name: "Невролог" }
]);

const doctors = ref([
  {
    id: 300425,
    lastName: "Керимов",
    firstName: "Орхан",
    middleName: "Илхамович",
    specializationList: [{ id: 4 }, { id: 2 }]
  },
  {
    id: 300421,
    lastName: "Прохоренкова",
    firstName: "Елизавета",
    middleName: "Алексеевна",
    specializationList: [{ id: 1 }]
  },
  {
    id: 300422,
    lastName: "Воеводина",
    firstName: "Марина",
    middleName: "Алексеевна",
    specializationList: [{ id: 9 }]
  }
]);

const activeSpecialisation = ref(null);

const updateActiveSpecialisation = (specId) => {
  activeSpecialisation.value = specId;
};

const filteredDoctors = computed(() => {
  if (activeSpecialisation.value === null) return doctors.value;
  return doctors.value.filter(doctor =>
    doctor.specializationList.some(spec => spec.id === activeSpecialisation.value)
  );
});
</script>

<style>
.container {
  display: flex;
  margin: 20px;
}

.filter-section {
  flex-basis: 20%;
  padding: 10px;
}

.doctors-section {
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
}

.doctor-card {
  width: 300px; /* Ширина карточки */
  margin: 10px; /* Отступ между карточками */
  /* Прочие стили карточки */
}
</style>