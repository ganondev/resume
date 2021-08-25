<script>
    export let color = 'rgb(0, 74, 130)';
    export let condensed = false;
    let font = condensed
        ? 'Condensed'
        : 'Regular'
</script>

<style>
    span {
        font-size: 36px;
        font-weight: 500;
    }
</style>

<span style="color: {color}; font-family: Daytona W05 {font}, serif;">
    <slot>No content</slot>
</span>