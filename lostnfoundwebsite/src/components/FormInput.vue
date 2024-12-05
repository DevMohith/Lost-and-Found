<template>
    <div class="form-group">
        <label :for="id" :style="{ color: labelColor }">{{ label }}</label>
        <input :type="type" :id="id" :value="modelValue" :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "text",
        },
        id: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
        labelColor: {
            type: String,
            default: "#000000",
        },
    },
};
</script>

<style scoped>
.form-group {
    margin-bottom: 15px;
    text-align: left;
    padding-left: 30px;
}

label {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
}

input {
    width: 85%;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
}
</style>
