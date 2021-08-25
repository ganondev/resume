<script>
    import SectionHeader from "./SectionHeader.svelte";
    import SkillBar from "./SkillBar.svelte";
</script>

<style lang="scss">
    .bars {
      display: flex;
      // TODO not supported in iridium on laptop!!! update needed?
      row-gap: 5px;
      flex-direction: column;
    }
</style>

<SectionHeader>Tech</SectionHeader>
<div class="bars">
    <SkillBar
            percentage={95}
            tools={['Flask', 'Django', 'PyUnit', 'Extensions API']}>Python</SkillBar>
    <SkillBar tools={['this']}>Java</SkillBar>
</div>