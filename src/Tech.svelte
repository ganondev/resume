<script>
    import SectionHeader from "./SectionHeader.svelte";
    import SkillBar from "./SkillBar.svelte";
</script>

<style lang="scss">
    @import 'global.scss';
    .bars {
      display: flex;
      // TODO not supported in iridium on laptop!!! update needed?
      row-gap: 7px;
      flex-direction: column;
    }
    .claim {
      font-family: "Daytona W05 Regular", serif;
      font-size: 12px;
      font-style: italic;
      & > a {
        font-weight: bold;
        color: $background_orange;
      }
    }
</style>

<SectionHeader>Tech</SectionHeader>
<div class="bars">
    <SkillBar
        percentage={95}
        tools={['Flask', 'Django', 'PyUnit', 'Extensions API']}>
        Python
    </SkillBar>
    <!-- TODO need better java skills these kinda suckzzz -->
    <SkillBar percentage={97} tools={['Spring', 'Gradle', 'Hibernate', 'Kotlin', 'Scala']}>Java</SkillBar>
    <SkillBar percentage={97} tools={['ASP.NET', 'EntityFramework', 'C#', 'Mono']}>.NET</SkillBar>
    <SkillBar percentage={97} tools={['TypeScript', 'React', 'Angular', 'Sass', 'Svelte', 'Electron']}>Front-End</SkillBar>
    <SkillBar percentage={97} tools={['MS SQL', 'NoSQL', 'Oracle', 'Redis', 'DynamoDB', 'Redshift']}>Databases</SkillBar>
    <SkillBar percentage={97} tools={['Bash', 'AWS', 'Kafka', 'Git', 'CI/CD', 'Serverless', 'Kubernetes']}>Infra</SkillBar>
    <SkillBar percentage={97} tools={['MSVC', 'MSBuild', 'Windows Driver Foundation']}>Windows</SkillBar>
    <SkillBar percentage={97} tools={['C/C++', 'Embedded', 'Kernel Modules', 'HID']}>Linux (and friends)</SkillBar>
    <SkillBar percentage={97} tools={['UE4', 'Unity', 'Godot', 'Networking', 'Shaders']}>Gamedev</SkillBar>
    <SkillBar percentage={0} tools={['Agile', 'Debugging', 'JWT', 'GraphQL', 'XSL', 'IAM', 'SSO', 'DevOps']}>Other</SkillBar>
    <!-- TODO for some reason this is clipped in browser but correct in pdf -->
    <div class="claim">This resume built using <a href="https://svelte.dev/">Svelte</a></div>
</div>