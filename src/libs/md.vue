<template>
    <div class="md-wrap">
        <div v-html="valued">

        </div>
    </div>
</template>
<script>
    import showdown from "showdown";
    import hljs from "highlight.js";
    hljs.initHighlightingOnLoad();
    let converter = new showdown.Converter();
    export default {
        props: ["model"],
        computed: {
            valued() {
                return converter.makeHtml(this.model);
            }
        }
    }
</script>