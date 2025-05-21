<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import Acc from "./Accomplishment.svelte"
</script>

<style lang="scss">
    @import "global.scss";
    h3, p {
        margin: 0;
    }
    .edu-body {
      margin-bottom: 7px;
    }
    ul {
      margin: 0;
    }
</style>

<div>
    <SectionHeader>Education</SectionHeader>
    <h3 class="highlight-text">Georgia Institute of Technology</h3>
    <div class="edu-body">
        <p class="body-text">M.Sc. Computer Science - Artificial Intelligence <i>(in progress)</i></p>
    </div>
    <h3 class="highlight-text">Louisiana Tech University</h3>
    <div class="edu-body">
        <p class="body-text">B.Sc. Computer Science, <i>cum laude</i></p>
    </div>
</div>