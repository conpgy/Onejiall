<template>
    <li class="message-list-item">
        <h5 class="message-nickname">{{ message.nickname }}</h5>
        <div class="message-time">{{ message.timestamp | time }}</div>
        <div class="message-text"> {{ message.text }}</div>
    </li>
</template>

<script>
    export default {
        name: 'Message',
        props: {
            message: Object
        }
    }
</script>
<style>

.message-time {
    color: #aad;
    float: right;
    font-size: 12px;
}

.message-text {
    clear: both;
    font-size: 14px;
    padding-top: 10px;
}

.message-nickname {
  color: #66c;
  float: left;
  font-size: 13px;
  margin: 0;
}

</style>