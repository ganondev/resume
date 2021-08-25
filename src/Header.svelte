<script>
    import { FontAwesomeIcon } from 'fontawesome-svelte';
    import { faEnvelope, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import SectionHeader from "./SectionHeader.svelte";
</script>

<style lang="scss">

    @import 'global.scss';

    li {

        color: white;
        font-family: Daytona W05 Regular, serif;
        letter-spacing: 1px;
        font-weight: 500;

        &:not(:first-child, :last-child) {
            margin: 4px 0;
        }

        & :global(path) {
            stroke: $background_orange;
            stroke-width: 15px;
        }

    }
    ul {
        margin-block-start: 0;
        list-style-type: none;
        padding: 0;
    }
</style>


<SectionHeader color="white" condensed={true}>Edward Auttonberry</SectionHeader>
<ul>
    <li class="content"><span class="icon"><FontAwesomeIcon icon={faEnvelope} size="lg"/></span>&nbsp;edward@auttonberri.es</li>
    <li class="content"><span class="icon"><FontAwesomeIcon icon={faGlobeAmericas} size="lg"/></span>&nbsp;https://auttonberri.es</li>
    <li class="content"><span class="icon"><FontAwesomeIcon icon={faGithub} size="lg"/></span>&nbsp;zefaxet</li>
</ul>