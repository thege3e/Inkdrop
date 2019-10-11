<template >
    <div class="main">
        <SplitGrid :columnMinSizes="minSizes" :gutterSize="gutterSize" class="sb_sub-grid" id="sb_sub-grid">
            <SplitGridArea ><sidebar/></SplitGridArea>
            <SplitGridGutter id='grid-gutter'/>
            <SplitGridArea><notes/></SplitGridArea>
            <SplitGridGutter id='grid-gutter'/>
            <SplitGridArea :sizeValue="sizeValue"><noteboard/></SplitGridArea>
        </SplitGrid>
        
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import sidebar from './sidebar'
import notes from './notes'
import noteboard from './noteboard'
export default {
    data() {
        return {
            notes: [],
            id: '',
            noteName: '',
            isEdit: false,
            minSizes: {0:200, 1: 200, 2: 200, 4:400},
            gutterSize: 3,
            sizeValue: 2.5,
        }
    },
    mounted() {
    },
    components: {sidebar, notes, noteboard},
    methods: {
    }, 
}
</script>

<style scoped>
.main {
    display: flex;
    flex: 1 1 auto;
}
.vsg_split-grid {
    flex: 1 1 auto;
}
.vsg_area {
    display: flex;
}
#grid-gutter {
    background-color: #c3c2c2;
}
</style>