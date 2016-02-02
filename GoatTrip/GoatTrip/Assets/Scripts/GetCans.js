
 
var numberOfCans : int = 0;
var CansKey: String = "numCans";

function Start(){
          
     }

function OnTriggerEnter (other : Collider) {
	if (other.tag == "Can") {
		Destroy(other.gameObject);
		numberOfCans++;
		}
		
		PlayerPrefs.SetInt(CansKey, numberOfCans);
        PlayerPrefs.Save();
	}
	
