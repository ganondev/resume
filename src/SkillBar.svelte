<script lang="ts">
    export let tools: string[] = [];
    export let percentage: number = 50;
</script>

<style lang="scss">
  @import 'global.scss';
  .skill-section {
    display: flex;
    flex-direction: column;
    row-gap: 1px;
    width: 100%;
  }
  .skill-name {
    font-family: "Daytona W05 Condensed",serif;
    font-size: 20px;
  }
  .bar {
    width: 100%;
    height: 0.13in;
    background:
        linear-gradient(
            to right,
            $background_orange,
            $background_orange calc(var(--percentage) - 2%),
            $background_blue calc(var(--percentage) + 2%)
        );
    border-radius: 50px;
  }
  .tools {
    font-size: 12px;
  }
</style>

<div class="skill-section">
    <span class="skill-name"><slot>No title</slot></span>
    {#if percentage}
    <div class="bar" style="--percentage:{percentage}%"></div>
    {/if}
    <span class="tools">{tools.join(', ')}</span>
</div>