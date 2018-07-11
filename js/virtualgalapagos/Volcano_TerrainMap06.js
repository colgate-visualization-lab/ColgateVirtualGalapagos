var tog = false;

function ToggleDates() {
  if  (tog) {
    document.getElementById("gemap").src="/images/ge_map.png";
  } else {
    document.getElementById("gemap").src="/images/ge_map_volcdates.png";
  }
  tog = !tog;
}