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
        title="note.soy"
        link="https://note.soy"
        desc="Markdown note-taking app, full serverless stack (React, AWS, Terraform)"
/>
<Separator/>
<Project
        title="shallnotpass.io"
        link="https://shallnotpass.io"
        desc="Stateless password manager (Svelte, AWS, Lambda, Terraform)"
/>
<Separator/>
<Project
        title="Godot Engine"
        link="https://github.com/godotengine/godot"
        desc="Contributor: C# bindings, build system (C++, C#)"
/>
<Separator/>
<Project
        title="jsx-email"
        link="https://github.com/shellscape/jsx-email"
        desc="Custom React renderer for email templates (React, Node.js)"
/>