

function Start () {

}
	
function OnTriggerEnter (other : Collider) {
	if (other.tag == "Finish") {

  transform.position.y = -18.34486;
        transform.position.x = 0.4389502;
        transform.position.z = -96.90543;
 Camera.main.transform.position.x = 0.4389502;
}
}