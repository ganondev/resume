<script lang="ts">
    export let title = 'Name?'
    export let link: string;
    export let desc: string;
</script>

<style lang="scss">
    @import "global.scss";

    h3 {
      margin: 2px 0;
    }

    h4 {
      margin: 0;
      font-weight: lighter;
      font-size: 12px;
      font-style: italic;
      line-height: 11px;
    }

    p {
        font-size: 15px;
        margin-top: 1px;
    }
</style>

<h3 class="highlight-text">{title}</h3>
<h4>{link}</h4>
<p>{desc}</p>