<template>
    <h1>User Profiles</h1>
    <hr>
    <div class="maindiv">
        <div v-for="user in users" :key="user.id" class="cardbody">
            <img :src="user.avatar" alt="User avatar" />
            <h2>Name:{{ user.name }}</h2>
            <p>Email:{{ user.email }}</p>
            <p>Contact:{{ user.phone }}</p>
            <p>Address:{{ user.address.street }}, {{ user.address.suite }}</p>
            <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
            <p>Website:{{ user.website }}</p>
            <p>Company:{{ user.company.name }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    website: string;
    company: {
        name: string;
    };
    avatar: string;
}

const users = ref<User[]>([]);

const fetchUsers = async () => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    users.value = response.data.map((user) => ({
        ...user,
        avatar: `https://i.pravatar.cc/150?u=${user.id}`,
    }));
};

onMounted(() => {
    fetchUsers();
});
</script>
  
<style>
h1 {
    text-align: center;
}

.cardbody {
    background-color: rgb(203, 197, 197);
    width: 300px;
    padding: 30px;
    text-align: center;
    margin: 20px;
}

img {
    border-radius: 100px;
}

.maindiv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>