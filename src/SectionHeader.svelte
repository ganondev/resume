<script>
    export let color = 'rgb(0, 74, 130)';
    export let condensed = false;
    export let size = '36px';
    let font = condensed
        ? 'Condensed'
        : 'Regular'
</script>

<style>
    span {
        font-weight: 500;
    }
</style>

<span style="font-size: {size}; color: {color}; font-family: Daytona W05 {font}, serif;">
    <slot>No content</slot>
</span>