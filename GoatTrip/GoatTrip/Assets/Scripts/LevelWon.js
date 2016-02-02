#pragma strict

function OnTriggerEnter (other: Collider) {

	if(other.tag == "WonLevel")
	{
		Application.LoadLevel("Level2");
	}
}