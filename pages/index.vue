<template>
    <div>Loading...</div>
    <DataTable :value="data" sortMode="multiple" tableStyle="min-width: 50rem; border: 1px solid black; opacity: 0;">
        <Column field="code" header="Code" sortable style="width: 50px"></Column>
        <Column field="name" header="Name" sortable style="width: 25%"></Column>
        <Column field="description" header="Description" sortable style="width: 25%"></Column>
        <Column field="type" header="Type" sortable style="width: 100px"></Column>
        <Column field="created" header="Created" sortable style="width: 25%"></Column>
        <Column field="lastUpdated" header="Last Updated" sortable style="width: 25%"></Column>
        <Column field="status" header="Status" sortable style="width: 25%"></Column>
    </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
onMounted(() => {
    useRouter().push('/administration/service')
});
</script>