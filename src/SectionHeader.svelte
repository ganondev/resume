<script>
    export let color = 'rgb(0, 74, 130)';
</script>

<style>
    span {
        font-family: "Daytona W05 Condensed",serif;
        font-size: 36px;
        font-weight: 500;
    }
</style>

<span style="color: {color}">
    <slot>No content</slot>
</span>