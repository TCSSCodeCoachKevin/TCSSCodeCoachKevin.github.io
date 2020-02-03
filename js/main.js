function AngryBirdsMaterials() {
	if (!$("#ab_element1").length) {
		$("#angryBirds").append("<div><a id='ab_element1' href='materials/angryBirds/angryBirdSprite.svg'>Angry Bird Sprite</a></div>");
		$("#ab_element1").after("<div><a id='ab_element2' href='materials/angryBirds/Background.png'>Background</a></div>");
		$("#ab_element2").after("<div><a id='ab_element3' href='materials/angryBirds/pigSprite.svg'>Enemy Pig</a></div>");
	} else {
		$("#ab_element1").remove();
		$("#ab_element2").remove();
		$("#ab_element3").remove();
	}
}

function DonkeyKongMaterials() {
	if (!$("#dk_element1").length) {
		$("#donkeyKong").append("<div><a id='dk_element1' href='materials/donkeyKong/Level1_Background.png' >Level 1 (Background)</a></div>");
		$("#dk_element1").after("<div><a id='dk_element2' href='materials/donkeyKong/Mario.svg'>Mario (Idle)</a></div>");
		$("#dk_element2").after("<div><a id='dk_element3' href='materials/donkeyKong/MarioHoldingHammer.svg''>Mario (With Hammer)</a></div>");
		$("#dk_element3").after("<div><a id='dk_element4' href='materials/donkeyKong/Barrel.svg''>Barrel</a></div>");
		$("#dk_element4").after("<div><a id='dk_element5' href='materials/donkeyKong/Hammer.svg''>Hammer</a></div>");
	} else {
		$("#dk_element1").remove();
		$("#dk_element2").remove();
		$("#dk_element3").remove();
		$("#dk_element4").remove();
		$("#dk_element5").remove();
	}
}

function BurgerShopMaterials() {
	if (!$("#bs_element1").length) {
		$("#burgerShop").append("<div><a id='bs_element1' href='materials/burgerShop/Background.svg'>Background</a></div>");
		$("#bs_element1").after("<div><a id='bs_element2' href='materials/burgerShop/TopBun.png'>Top Bun</a></div>");
		$("#bs_element2").after("<div><a id='bs_element3' href='materials/burgerShop/BottomBun.png'>Bottom Bun</a></div>");
		$("#bs_element3").after("<div><a id='bs_element4' href='materials/burgerShop/Raw.svg'>Raw Patty</a></div>");
		$("#bs_element4").after("<div><a id='bs_element5' href='materials/burgerShop/Burnt.png'>Burnt Patty</a></div>");
		$("#bs_element5").after("<div><a id='bs_element6' href='materials/burgerShop/Cooked.png'>Cooked Patty</a></div>");
		$("#bs_element6").after("<div><a id='bs_element7' href='materials/burgerShop/Spatula.svg'>Spatula</a></div>");
		$("#bs_element7").after("<div><a id='bs_element8' href='materials/burgerShop/OrderSlip.svg'>Order Slip</a></div>");
		$("#bs_element8").after("<div><a id='bs_element9' href='materials/burgerShop/Cheese.png'>Cheese</a></div>");
		$("#bs_element9").after("<div><a id='bs_element10' href='materials/burgerShop/Lettuce.png'>Lettuce</a></div>");
		$("#bs_element10").after("<div><a id='bs_element11' href='materials/burgerShop/Onions.png'>Onions</a></div>");
		$("#bs_element11").after("<div><a id='bs_element12' href='materials/burgerShop/Pickles.png'>Pickels</a></div>");
		$("#bs_element12").after("<div><a id='bs_element13' href='materials/burgerShop/Tomato.svg'>Tomato</a></div>");
	} else {
		$("#bs_element1").remove();
		$("#bs_element2").remove();
		$("#bs_element3").remove();
		$("#bs_element4").remove();
		$("#bs_element5").remove();
		$("#bs_element6").remove();
		$("#bs_element7").remove();
		$("#bs_element8").remove();
		$("#bs_element9").remove();
		$("#bs_element10").remove();
		$("#bs_element11").remove();
		$("#bs_element12").remove();
		$("#bs_element13").remove();
	}
}