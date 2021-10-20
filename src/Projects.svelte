<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import Project from "./Project.svelte";
    import Separator from "./Separator.svelte";
</script>

<style lang="scss">
    @import 'global.scss';
    h3 {
      margin: 0;
    }
    div {
      width: 100%;
      height: 4px;
      background: linear-gradient(to right, $background_orange, $background_blue);
      margin: 7px 0;
    }
</style>

<SectionHeader>Projects</SectionHeader>
<Project
    title="libant"
    link="https://github.com/zefaxet/libant"
    desc="Embedded cellular automata engine in C"
/>
<Separator/>
<Project
    title="network-priveleges"
    link="https://github.com/ganondev/network-priveleges"
    desc="UE4 plugin for role-based authorization"
/>
<Separator/>
<Project
    title="Godot Engine"
    link="https://github.com/godotengine/godot"
    desc="Contributor, build system and C# bindings"
/>