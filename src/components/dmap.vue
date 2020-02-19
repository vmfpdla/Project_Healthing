<template>

  <div id="dmap">
    <h1>{{msg}}</h1>
    <div id="map" style="width:100%; height:400px;"></div>
  </div>

</template>

<script>

  export default {
    name: 'dmap',
        data() {
      return {
        msg:"다음맵 테스트"
      }
    },
    mounted() {
      var container = document.getElementById('map');
        var mapOptions = {
            center: new daum.maps.LatLng(위도, 경도),
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        var map = new daum.maps.Map(container, mapOptions);
    }
  }
</script>

<style scoped>

</style>