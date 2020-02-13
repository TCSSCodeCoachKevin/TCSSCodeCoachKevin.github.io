//SCRATCH START
function AngryBirdsMaterials() {
	if (!$("#ab_element1").length) {
		$("#angryBirds").append("<div><a id='ab_element1' href='materials/angryBirds/Birds.sprite3'>Angry Bird Sprite</a></div>");
		$("#ab_element1").after("<div><a id='ab_element2' href='materials/angryBirds/Background.png'>Background</a></div>");
		$("#ab_element2").after("<div><a id='ab_element3' href='materials/angryBirds/Pig.sprite3'>Enemy Pig</a></div>");
	} else {
		$("#ab_element1").remove();
		$("#ab_element2").remove();
		$("#ab_element3").remove();
	}
}

function AstroInvadersMaterials() {
	if (!$("#ai_element1").length) {
		$("#astroInvaders").append("<div><a id='ai_element1' href='materials/astroInvaders/Mothership.sprite3'>MotherShip</a></div>");
		$("#ai_element1").append("<div><a id='ai_element2' href='materials/astroInvaders/Ufo.sprite3'>Ufo</a></div>");
	} else {
		$("#ai_element1").remove();
		$("#ai_element2").remove();
	}
}

function BurgerShopMaterials() {
	if (!$("#bs_element1").length) {
		$("#burgerShop").append("<div><a id='bs_element1' href='materials/burgerShop/Background.svg'>Background</a></div>");
		$("#bs_element1").after("<div><a id='bs_element2' href='materials/burgerShop/Ingredients.sprite3'>Ingredients</a></div>");
		$("#bs_element2").after("<div><a id='bs_element3' href='materials/burgerShop/Spatula.sprite3'>Spatula</a></div>");
		$("#bs_element3").after("<div><a id='bs_element4' href='materials/burgerShop/Patties.sprite3'>Patties</a></div>");
	} else {
		$("#bs_element1").remove();
		$("#bs_element2").remove();
		$("#bs_element3").remove();
		$("#bs_element4").remove();
	}
}

function CatchTheDotsMaterials() {
	if (!$("#ctd_element1").length) {
		$("#catchTheDots").append("<div><a id='ctd_element1' href='materials/catchTheDots/Controller.sprite3'>Controller</a></div>");
		$("#ctd_element1").after("<div><a id='ctd_element2' href='materials/catchTheDots/Dot.sprite3'>Dots</a></div>");
	} else {
		$("#ctd_element1").remove();
		$("#ctd_element2").remove();
	}
}

function CreateYourOwnWorld() {
	if (!$("#cyow_element1").length) {
		$("#createYourOwnWorld").append("<div><a id='cyow_element1' href='materials/createYourOwnWorld/Level1.png'>Level 1</a></div>");
		$("#cyow_element1").after("<div><a id='cyow_element2' href='materials/createYourOwnWorld/Level2.png'>Level 2</a></div>");
		$("#cyow_element2").after("<div><a id='cyow_element3' href='materials/createYourOwnWorld/Level3.png'>Level 3</a></div>");
		$("#cyow_element3").after("<div><a id='cyow_element4' href='materials/createYourOwnWorld/Player.sprite3'>Player</a></div>");
		$("#cyow_element4").after("<div><a id='cyow_element5' href='materials/createYourOwnWorld/Person.sprite3'>Person</a></div>");
		$("#cyow_element5").after("<div><a id='cyow_element6' href='materials/createYourOwnWorld/Chest.sprite3'>Chest</a></div>");
		$("#cyow_element6").after("<div><a id='cyow_element7' href='materials/createYourOwnWorld/Sign.sprite3'>Sign</a></div>");
		$("#cyow_element7").after("<div><a id='cyow_element8' href='materials/createYourOwnWorld/Key.sprite3'>Key</a></div>");
		$("#cyow_element8").after("<div><a id='cyow_element9' href='materials/createYourOwnWorld/Door.sprite3'>Door</a></div>");
		$("#cyow_element9").after("<div><a id='cyow_element10' href='materials/createYourOwnWorld/Coin.sprite3'>Coin</a></div>");
	} else {
		$("#cyow_element1").remove();
		$("#cyow_element2").remove();
		$("#cyow_element3").remove();
		$("#cyow_element4").remove();
		$("#cyow_element5").remove();
		$("#cyow_element6").remove();
		$("#cyow_element7").remove();
		$("#cyow_element8").remove();
		$("#cyow_element9").remove();
		$("#cyow_element10").remove();
	}
}

function DigDugMaterials() {
	if (!$("#dd_element1").length) {
		$("#digDug").append("<div><a id='dd_element1' href='materials/digDug/DigDug.sprite3'>Dig Dug Sprite</a></div>");
		$("#dd_element1").after("<div><a id='dd_element2' href='materials/digDug/Dragon.sprite3'>Dragon Sprite</a></div>");
		$("#dd_element2").after("<div><a id='dd_element3' href='materials/digDug/Enemy.sprite3'>Enemy Sprite</a></div>");
		$("#dd_element3").after("<div><a id='dd_element4' href='materials/digDug/Rock.sprite3'>Rock Sprite</a></div>");
		$("#dd_element4").after("<div><a id='dd_element5' href='materials/digDug/Background.png'>Level Background</a></div>");
	} else {
		$("#dd_element1").remove();
		$("#dd_element2").remove();
		$("#dd_element3").remove();
		$("#dd_element4").remove();
		$("#dd_element5").remove();
	}
}

function DuckHuntMaterials() {
	if (!$("#dh_element1").length) {
		$("#duckHunt").append("<div><a id='dh_element1' href='materials/duckHunt/Background.svg'>Background</a></div>");
		$("#dh_element1").after("<div><a id='dh_element2' href='materials/duckHunt/Duck.sprite3'>Duck</a></div>");
		$("#dh_element2").after("<div><a id='dh_element3' href='materials/duckHunt/Shell.sprite3'>Shell</a></div>");
		$("#dh_element3").after("<div><a id='dh_element4' href='materials/duckHunt/Dog.sprite3'>Dog</a></div>");
	} else {
		$("#dh_element1").remove();
		$("#dh_element2").remove();
		$("#dh_element3").remove();
		$("#dh_element4").remove();
	}
}

function DonkeyKongMaterials() {
	if (!$("#dk_element1").length) {
		$("#donkeyKong").append("<div><a id='dk_element1' href='materials/donkeyKong/Level1_Background.png'>Level 1 (Background)</a></div>");
		$("#dk_element1").after("<div><a id='dk_element2' href='materials/donkeyKong/Mario.sprite3'>Mario</a></div>");
		$("#dk_element2").after("<div><a id='dk_element3' href='materials/donkeyKong/Barrel.sprite3'>Barrel</a></div>");
		$("#dk_element3").after("<div><a id='dk_element4' href='materials/donkeyKong/Hammer.sprite3'>Hammer</a></div>");
	} else {
		$("#dk_element1").remove();
		$("#dk_element2").remove();
		$("#dk_element3").remove();
		$("#dk_element4").remove();
	}
}

function GoldMinerMaterials() {
	if (!$("#gm_element1").length) {
		$("#goldMiner").append("<div><a id='gm_element1' href='materials/goldMiner/Claw.sprite3'>Claw</a></div>");
		$("#gm_element1").after("<div><a id='gm_element2' href='materials/goldMiner/ShopItems.sprite3'>Shop Items</a></div>");
	} else {
		$("#gm_element1").remove();
		$("#gm_element2").remove();
	}
}

function GreenYourCityMaterials() {
	if (!$("#gyc_element1").length) {
		$("#greenYourCity").append("<div><a id='gyc_element1' href='materials/greenYourCity/Background.png'>Background</a></div>");
		$("#gyc_element1").after("<div><a id='gyc_element2' href='materials/greenYourCity/Helicopter.sprite3'>Helicopter</a></div>");
		$("#gyc_element2").after("<div><a id='gyc_element3' href='materials/greenYourCity/WaterDrops.sprite3'>Water Drops</a></div>");
		$("#gyc_element3").after("<div><a id='gyc_element4' href='materials/greenYourCity/RedFlower.sprite3'>Red Flower</a></div>");
		$("#gyc_element4").after("<div><a id='gyc_element5' href='materials/greenYourCity/BlueFlower.sprite3'>Blue Flower</a></div>");
		$("#gyc_element5").after("<div><a id='gyc_element6' href='materials/greenYourCity/PinkFlower.sprite3'>Pink Flower</a></div>");
		$("#gyc_element6").after("<div><a id='gyc_element7' href='materials/greenYourCity/GreenFlower.sprite3'>Green Flower</a></div>");
	} else {
		$("#gyc_element1").remove();
		$("#gyc_element2").remove();
		$("#gyc_element3").remove();
		$("#gyc_element4").remove();
		$("#gyc_element5").remove();
		$("#gyc_element6").remove();
		$("#gyc_element7").remove();
	}
}

function PaintBoxMaterials() {
	if (!$("#pb_element1").length) {
		$("#paintBox").append("<div><a id='pb_element1' href='materials/paintBox/Eraser.sprite3'>Eraser</a></div>");
	} else {
		$("#pb_element1").remove();
	}
}

function PitfallMaterials() {
	if (!$("#p_element1").length) {
		$("#pitfall").append("<div><a id='p_element1' href='materials/pitfall/Barrel_Level.svg'>Barrel Background</a></div>");
		$("#p_element1").after("<div><a id='p_element2' href='materials/pitfall/Swamp_Level.svg'>Swamp Background</a></div>");
		$("#p_element2").after("<div><a id='p_element3' href='materials/pitfall/Pit_Level.png'>Pit Background</a></div>");
		$("#p_element3").after("<div><a id='p_element4' href='materials/pitfall/Player.sprite3'>Player</a></div>");
		$("#p_element4").after("<div><a id='p_element5' href='materials/pitfall/Barrel.sprite3'>Barrel</a></div>");
		$("#p_element5").after("<div><a id='p_element6' href='materials/pitfall/Rope.sprite3'>Rope</a></div>");
		$("#p_element6").after("<div><a id='p_element7' href='materials/pitfall/Crocodiles.sprite3'>Crocodiles</a></div>");
	} else {
		$("#p_element1").remove();
		$("#p_element2").remove();
		$("#p_element3").remove();
		$("#p_element4").remove();
		$("#p_element5").remove();
		$("#p_element6").remove();
		$("#p_element7").remove();
	}
}

function SodaTapperMaterials() {
	if (!$("#st_element1").length) {
		$("#sodaTapper").append("<div><a id='st_element1' href='materials/sodaTapper/Player.sprite3'>Player</a></div>");
		$("#st_element1").after("<div><a id='st_element2' href='materials/sodaTapper/Soda.sprite3'>Soda</a></div>");
		$("#st_element2").after("<div><a id='st_element3' href='materials/sodaTapper/Background.svg'>Background</a></div>");
	} else { 
		$("#st_element1").remove();
		$("#st_element2").remove();
		$("#st_element3").remove();
	}
}

function SprintMaterials() {
	if (!$("#s_element1").length) {
		$("#sprint").append("<div><a id='s_element1' href='materials/sprint/Background.png'>Background</a></div>");
		$("#s_element1").after("<div><a id='s_element2' href='materials/sprint/FinishLine.sprite3'>Finish Line</a></div>");
	} else {
		$("#s_element1").remove();
		$("#s_element2").remove();
	}
}

function WhackAMoleMaterials() {
	if (!$("#wam_element1").length) {
		$("#whackAMole").append("<div><a id='wam_element1' href='materials/whackAMole/Background.svg'>Background</a></div>");
	} else {
		$("#wam_element1").remove();
	}
}

//SCRATCH END
