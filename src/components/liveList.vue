<template>
    <div id="list-list">
        <div class="live-wrap">
            <template v-for="video in videos">
                <div class="live-item" @click="gotoRoom(video)">
                    <img width=400px height=250px v-bind:src="video.img" />
                    <div>{{ video.title }}</div>
                </div>
                
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'

    export default {

        computed: {
            ...mapGetters({
                messages: 'currentMessages',
                lastMessage: 'lastMessage'
            }),
            ...mapState({
                videos: state => state.videos
            })
        },
        methods: {
            gotoRoom: function(video) {
                this.$router.replace({name:"live", params: video})
            }
        }
    }
</script>

<style>
    .live-item {
        display: inline-block;
        padding-right: 20px;
    }
</style>