<script lang="ts">
    export let title = "title?";
    export let start = "Mo YYYY";
    export let end = "Present?";
    export let employer = "employer?";
</script>

<style lang="scss">
    @import "global.scss";
    .gig-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h3 {
        margin: 0;
    }
    .meta {
        font-family: "Daytona W05 Condensed", serif;
        font-size: 14px;
        text-align: right;
        & > :nth-child(1) {
            color: $background_blue;
        }
    }
    ul {
      margin: 0;
    }
</style>

<div>
    <div class="gig-header">
        <h3 class="highlight-text">{title}</h3>
        <div class="meta">
            <div>{start} &mdash; {end}</div>
            <div>{employer}</div>
        </div>
    </div>
    <ul>
        <slot></slot>
    </ul>
</div>

