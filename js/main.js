var added = false;

function AngryBirdsMaterials() {
	if (added === false) {
		$("#angryBirds").after("<br><a id='ab_element1' href='materials/angryBirds/angryBirdSprite.svg'>Angry Bird Sprite</a>");
		$("#ab_element1").after("<br><a id='ab_element2' href='materials/angryBirds/Background.png'>Background</a>");
		$("#ab_element2").after("<br><a href='materials/angryBirds/pigSprite.svg'>Enemy Pig</a>");
		added = true;
	}
}

function DonkeyKongMaterials() {
	if (added === false) {
		$("#donkeyKong").after("<br><a>Mario Sprite</a>")
	}
}