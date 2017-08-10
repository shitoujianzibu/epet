<template>
  <div>
    <span id="hour"></span>:
    <span id="minutes"></span>:
    <span id="second"></span>
  </div>
</template>
<script>
  export default {
    created () {
      var leftTimer = function (year, month, day, hour, minute, second) {
        var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()) // 计算剩余的毫秒数
        // var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10) // 计算剩余的天数
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10) // 计算剩余的小时
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10)// 计算剩余的分钟
        var seconds = parseInt(leftTime / 1000 % 60, 10)// 计算剩余的秒数
        function checkTime (i) { // 将0-9的数字前面加上0，例1变为01
          if (i < 10) {
            i = '0' + i
          }
          return i
        }
        // days = checkTime(days)
        hours = checkTime(hours)
        minutes = checkTime(minutes)
        seconds = checkTime(seconds)
        if (document.getElementById('hour')) {
          document.getElementById('hour').innerHTML = hours
          document.getElementById('minutes').innerHTML = minutes
          document.getElementById('second').innerHTML = seconds
        }
      }
      // setInterval(leftTimer(2017, 8, 9, 12, 00, 00), 1000))
      setInterval(function () {
        return leftTimer(2017, 8, 23, 12, 0, 0)
      }, 1000)
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  #hour
    margin-left  -60px
    border 1px solid #ddd
    vertical-align middle
  #minutes
    border 1px solid #ddd
    vertical-align middle
  #second
    border 1px solid #ddd
    vertical-align middle
</style>
