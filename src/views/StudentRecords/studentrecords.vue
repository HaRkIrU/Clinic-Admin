<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue';
    import axios from 'axios';
    import $ from 'jquery';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { ref, onMounted } from 'vue';
    import AddStudentModal from '@/views/modal/add-student.vue';

    const records = ref([]);

    onMounted(async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/students');
            records.value = response.data;
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    });



</script>

<template>

    <AddStudentModal />
    <div class="container mx-auto">
        <Breadcrumbs parentTitle="Student Records"/>     
        <div class="grid grid-cols-12 gap-5">
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
        </div>
            <div class="col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title py-3">Student Records

                                <!-- Button
                                <BaseBtn 
                                class="mb-3 mr-3 bg-primary text-white float-right"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                              >
                                <i class="i-Add mr-1"></i>
                                Add Record 
                              </BaseBtn> -->

                            <div>
                                <button type="button" class="btn btn-primary" @click="openModal">Open Modal</button>
                                <!-- Include the modal component -->
                                <AddStudentModal />
                            </div>


                              
                            </div>
                        </div>     
                    </template>
                    <div
                        class="
                            block
                            w-full
                            overflow-x-auto
                            whitespace-nowrap
                            borderless
                            hover
                        "
                    >
                        <div
                            class="
                                dataTable-wrapper dataTable-loading
                                no-footer
                                fixed-columns
                            "
                        >
                            
                            <div
                                class="
                                    dataTable-container
                                    block
                                    w-full
                                    overflow-x-auto
                                    whitespace-nowrap
                                    borderless
                                    hover
                                "
                            >
                                <table
                                    class="
                                        table-3
                                        dataTable-table
                                        max-w-full
                                        w-full
                                    "
                                >
                                    <thead>
                                        <tr class="">
                                           
                                            
                                            <th
                                                class="
                                                    text-center
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                    text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Student ID
                                            </th>
                                            <th
                                                class="
                                                    text-center
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                     text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Last Name
                                            </th>
                                            <th
                                                class="
                                                    text-center
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                     text-gray-500
                                                    font-semibold
                                                "
                                            >
                                               First Name
                                            </th>
                                            <th
                                                class="
                                                    text-center 
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                     text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Middle Name
                                            </th>
                                            <th
                                            class="
                                                text-center 
                                                border-b
                                                pb-3
                                                mb-3
                                                 text-gray-500
                                                font-semibold
                                            "
                                        >
                                            Section
                                        </th>
                                            <th
                                                class="
                                                    text-center
                                                    border-b
                                                    pb-3
                                                    mb-3
                                                     text-gray-500
                                                    font-semibold
                                                "
                                            >
                                                Year Level
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            class="
                                                hover:bg-gray-100
                                                cursor-pointer
                                                
                                            "
                                            v-for="record in records" :key="record.student_id"
                                            
                                        >
    
                                            <td class="py-5  text-center"> {{record.student_id}} </td>

                                            <td class="py-5 text-center">{{record.last_name}}</td>
                                            <td class="py-5 text-center">{{record.middle_name}}</td>
                                            <td class="py-5 text-center">{{record.first_name}}</td>
                                            <td class="py-5 text-center">{{record.section}}</td>
                                            <td class="py-5 text-center">{{record.grade_level}}</td>
                                            <!-- 
                                            <td class="py-5  text-center">
                                                <span
                                                    class="
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        text-primary
                                                        border border-primary
                                                        mr-3
                                                        text-xs
                                                    "
                                                    >Ongoing</span
                                                >
                                            </td>
                                            
                                            <td class="py-5  text-center">
                                               
                                                <BaseBtn rounded class="border border-primary text-primary hover:bg-primary hover:text-white">
                                                   Details
                                                </BaseBtn>
                                            </td>
                                        -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="dataTable-bottom">
                                <div class="dataTable-info">
                                    Showing 1 to 8 of 8 entries
                                </div>
                                <nav class="dataTable-pagination">
                                    <ul class="dataTable-pagination-list"></ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>  
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Your modal content goes here...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  components: {
    AddStudentModal,
  },
  methods: {
    openModal() {
        const modal = document.getElementById('exampleModal');
        if (modal) {
            modal.classList.add('show');
            modal.style.display = 'block';
        }
    }
  },
};
</script>
