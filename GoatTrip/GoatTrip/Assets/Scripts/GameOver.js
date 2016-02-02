#pragma strict

function OnTriggerEnter (other: Collider) {

	if(other.tag == "DeathBox")
	{
		Application.LoadLevel("End");
	}
}