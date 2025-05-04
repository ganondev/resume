<script>
    import { FontAwesomeIcon } from 'fontawesome-svelte';
    import { faEnvelope, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import SectionHeader from "./SectionHeader.svelte";
    import Separator from "./Separator.svelte";
</script>

<style lang="scss">
    @import 'global.scss';

    .header-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        width: 100%;
        gap: 2.5rem;
    }
    .name-headline-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        // gap: 0.5rem;
    }
    .name {
        flex-shrink: 0;
        margin-top: 0.1em;
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-end;
        min-width: 0;
        flex: 1 1 auto;
        max-width: 260px;
    }
    .link-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-width: 120px;
        max-width: 300px;
        color: white;
        font-family: Daytona W05 Regular, serif;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 1.05em;
    }
    .icon-col {
        flex: 0 0 2.1em;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 0.5em;
    }
    .text-col {
        flex: 1 1 auto;
        text-align: right;
        white-space: nowrap;
        overflow: hidden;
    }
    .split {
      color: $background_orange;
      margin: 0 0.25em;
    }
    .icon-col :global(path) {
        stroke: $background_orange;
        stroke-width: 15px;
    }
    .gradient-text {
        background: linear-gradient(90deg, white 0%, white 10%, $background_orange_accent 85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        display: inline-block;
    }
    .headline {
        color: white;
        font-family: Daytona W05 Regular, serif;
        font-size: 1em;
        max-width: 350px;
        // margin-top: 0.2em;
    }
    .link-item-group {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        gap: 0.1rem;
    }
</style>

<div class="header-row">
    <div class="name-headline-col">
        <div class="name">
            <!--
                The SVG below is used to render the name with a left-to-right gradient fill.
                This approach avoids print/PDF rendering artifacts that occur with CSS background-clip gradients.
                The width (420) was chosen to fit the available header space and avoid overflow/clipping.
            -->
            <svg width="420" height="70" viewBox="0 0 420 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                <defs>
                    <linearGradient id="name-gradient" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="white"/>
                        <stop offset="10%" stop-color="white"/>
                        <stop offset="85%" stop-color="#F8CBAD"/>
                    </linearGradient>
                </defs>
                <text x="0" y="54" font-family="Daytona W05 Condensed, Daytona W05 Regular, serif" font-size="54px" font-weight="500" fill="url(#name-gradient)">
                    Edward Auttonberry
                </text>
            </svg>
        </div>
        <div class="headline">
            <!-- TODO headline content should be parameterized based on a global profile template config-->
            Full-stack ML systems developer specializing in React, Python, and LangChain.
        </div>
    </div>
    <div class="links">
        <div class="link-item-group">
            <span class="link-item">
                <span class="icon-col"><FontAwesomeIcon icon={faEnvelope} size="lg"/></span>
                <span class="text-col">edward@auttonberri.es</span>
            </span>
            <Separator height="1px" margin="0" />
        </div>
        <div class="link-item-group">
            <span class="link-item">
                <span class="icon-col"><FontAwesomeIcon icon={faGlobeAmericas} size="lg"/></span>
                <span class="text-col">https://auttonberri.es</span>
            </span>
            <Separator height="1px" margin="0" />
        </div>
        <div class="link-item-group">
            <span class="link-item">
                <span class="icon-col"><FontAwesomeIcon icon={faGithub} size="lg"/></span>
                <span class="text-col">ganondev</span>
            </span>
            <Separator height="1px" margin="0" />
        </div>
    </div>
</div>