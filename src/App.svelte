<script lang="ts">
    import Header from './Header.svelte'

	let columns = 80;
	let color = 'blue';
</script>

<style lang="scss">

    @import 'global.scss';

    .page {
      display: grid;
      grid-template-columns: repeat(100, 1%);
      grid-auto-rows: 8.02px
    }

    .header {
      background-color: $background_blue;
    }

    .top-margin {
      grid-row: 1 / 3;
      grid-column: 40 / 101;
    }

    .top-margin-header {
      grid-row: 1 / 4;
      grid-column: 1 / 40;
      border-right: solid 3px $background_blue_accent;
    }

    .left-margin-header {
      grid-row: 3 / 21;
      grid-column: 1 / 4;
      border-bottom: solid 3px $background_blue_accent;
    }

    .left-margin {
      grid-row: 21 / 139;
      grid-column: 1 / 3;
    }

    .middle-separator {
      grid-row: 3 / 139;
      grid-column: 40;
    }

    .right-margin {
      grid-row: 3 / 139;
      grid-column: 99 / 101;
    }

    .bottom-margin {
      grid-row: 139 / 141;
      grid-column: 1 / 101;
    }

    .header-block {
      grid-row: 3 / 21;
      grid-column: 3 / 40;
      border-bottom: solid 3px transparent;
      border-right: solid 3px transparent;
      background:
        linear-gradient($background_blue, $background_blue) padding-box,
        radial-gradient(
            ellipse farthest-corner at bottom right,
            $background_orange,
            $background_blue_accent 50%
        ) border-box;
    }

</style>

<div class="page">

    <!-- structural skeleton stuff that won't get printed out with the pdf -->

    <div class="structure top-margin"></div>
    <div class="structure top-margin-header header"></div>
    <div class="structure left-margin"></div>
    <div class="structure left-margin-header header"></div>
    <div class="structure middle-separator"></div>
    <div class="structure right-margin"></div>
    <div class="structure bottom-margin"></div>

    <div class="structure header-block header">
        <Header/>
    </div>

</div>
<!--<div class="page">-->
<!--    <p>Second <code>.page</code> element</p>-->
<!--    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
<!--    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>-->
<!--    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>-->
<!--    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>-->
<!--    <p>This sentence is preceded by a manual page break:<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;div class="page-break" contenteditable="false"&gt;&lt;/div&gt;</code></p>-->
<!--    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>-->
<!--    <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
<!--</div>-->