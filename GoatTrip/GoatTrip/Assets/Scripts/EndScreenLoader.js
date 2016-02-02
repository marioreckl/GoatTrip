#pragma strict
var numberOfCansTextbox : UnityEngine.UI.Text;
var totalCansTextbox : UnityEngine.UI.Text;
var numberOfCans: int;
var totalCansKey: String = "totalCans";
var totalCans: int;


function Start () {
	numberOfCans = PlayerPrefs.GetInt("numCans",0);

	numberOfCansTextbox.text = ("X " + numberOfCans.ToString());
	totalCans = PlayerPrefs.GetInt(totalCansKey, 0) + numberOfCans;
	PlayerPrefs.SetInt(totalCansKey, totalCans);
	totalCansTextbox.text = ("Total Cans = " + totalCans);
	PlayerPrefs.Save();
}
