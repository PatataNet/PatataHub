gdjs.GameSceneCode = {};
gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.GDIndicatorObjects1= [];
gdjs.GameSceneCode.GDIndicatorObjects2= [];
gdjs.GameSceneCode.GDIndicatorObjects3= [];
gdjs.GameSceneCode.GDHouseIconObjects1= [];
gdjs.GameSceneCode.GDHouseIconObjects2= [];
gdjs.GameSceneCode.GDHouseIconObjects3= [];
gdjs.GameSceneCode.GDMineIconObjects1= [];
gdjs.GameSceneCode.GDMineIconObjects2= [];
gdjs.GameSceneCode.GDMineIconObjects3= [];
gdjs.GameSceneCode.GDLumberIconObjects1= [];
gdjs.GameSceneCode.GDLumberIconObjects2= [];
gdjs.GameSceneCode.GDLumberIconObjects3= [];
gdjs.GameSceneCode.GDHouseObjectObjects1= [];
gdjs.GameSceneCode.GDHouseObjectObjects2= [];
gdjs.GameSceneCode.GDHouseObjectObjects3= [];
gdjs.GameSceneCode.GDMineObjectObjects1= [];
gdjs.GameSceneCode.GDMineObjectObjects2= [];
gdjs.GameSceneCode.GDMineObjectObjects3= [];
gdjs.GameSceneCode.GDLumberObjectObjects1= [];
gdjs.GameSceneCode.GDLumberObjectObjects2= [];
gdjs.GameSceneCode.GDLumberObjectObjects3= [];
gdjs.GameSceneCode.GDGoldTextObjects1= [];
gdjs.GameSceneCode.GDGoldTextObjects2= [];
gdjs.GameSceneCode.GDGoldTextObjects3= [];
gdjs.GameSceneCode.GDStoneTextObjects1= [];
gdjs.GameSceneCode.GDStoneTextObjects2= [];
gdjs.GameSceneCode.GDStoneTextObjects3= [];
gdjs.GameSceneCode.GDWoodTextObjects1= [];
gdjs.GameSceneCode.GDWoodTextObjects2= [];
gdjs.GameSceneCode.GDWoodTextObjects3= [];
gdjs.GameSceneCode.GDTutorialTextObjects1= [];
gdjs.GameSceneCode.GDTutorialTextObjects2= [];
gdjs.GameSceneCode.GDTutorialTextObjects3= [];
gdjs.GameSceneCode.GDBackgroundObjects1= [];
gdjs.GameSceneCode.GDBackgroundObjects2= [];
gdjs.GameSceneCode.GDBackgroundObjects3= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects1= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects2= [];
gdjs.GameSceneCode.GDBackgroundTreesObjects3= [];
gdjs.GameSceneCode.GDVignetteObjects1= [];
gdjs.GameSceneCode.GDVignetteObjects2= [];
gdjs.GameSceneCode.GDVignetteObjects3= [];
gdjs.GameSceneCode.GDIncomeTextObjects1= [];
gdjs.GameSceneCode.GDIncomeTextObjects2= [];
gdjs.GameSceneCode.GDIncomeTextObjects3= [];

gdjs.GameSceneCode.conditionTrue_0 = {val:false};
gdjs.GameSceneCode.condition0IsTrue_0 = {val:false};
gdjs.GameSceneCode.condition1IsTrue_0 = {val:false};
gdjs.GameSceneCode.condition2IsTrue_0 = {val:false};
gdjs.GameSceneCode.condition3IsTrue_0 = {val:false};


gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects1ObjectsGDgdjs_46GameSceneCode_46GDMineObjectObjects1ObjectsGDgdjs_46GameSceneCode_46GDLumberObjectObjects1Objects = Hashtable.newFrom({"HouseObject": gdjs.GameSceneCode.GDHouseObjectObjects1, "MineObject": gdjs.GameSceneCode.GDMineObjectObjects1, "LumberObject": gdjs.GameSceneCode.GDLumberObjectObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects2Objects = Hashtable.newFrom({"HouseObject": gdjs.GameSceneCode.GDHouseObjectObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDMineObjectObjects2Objects = Hashtable.newFrom({"MineObject": gdjs.GameSceneCode.GDMineObjectObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDLumberObjectObjects1Objects = Hashtable.newFrom({"LumberObject": gdjs.GameSceneCode.GDLumberObjectObjects1});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjects1, gdjs.GameSceneCode.GDIndicatorObjects2);


gdjs.GameSceneCode.condition0IsTrue_0.val = false;
gdjs.GameSceneCode.condition1IsTrue_0.val = false;
gdjs.GameSceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects2[i].isCurrentAnimationName("House") ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDIndicatorObjects2[k] = gdjs.GameSceneCode.GDIndicatorObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects2.length = k;}if ( gdjs.GameSceneCode.condition0IsTrue_0.val ) {
{
gdjs.GameSceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) >= 10;
}if ( gdjs.GameSceneCode.condition1IsTrue_0.val ) {
{
gdjs.GameSceneCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 10;
}}
}
if (gdjs.GameSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects2 */
gdjs.copyArray(gdjs.GameSceneCode.GDHouseObjectObjects1, gdjs.GameSceneCode.GDHouseObjectObjects2);

{runtimeScene.getVariables().getFromIndex(1).sub(10);
}{runtimeScene.getVariables().getFromIndex(2).sub(10);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects2Objects, (( gdjs.GameSceneCode.GDIndicatorObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects2[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjects1, gdjs.GameSceneCode.GDIndicatorObjects2);


gdjs.GameSceneCode.condition0IsTrue_0.val = false;
gdjs.GameSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects2[i].isCurrentAnimationName("Mine") ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDIndicatorObjects2[k] = gdjs.GameSceneCode.GDIndicatorObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects2.length = k;}if ( gdjs.GameSceneCode.condition0IsTrue_0.val ) {
{
gdjs.GameSceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 20;
}}
if (gdjs.GameSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects2 */
gdjs.copyArray(gdjs.GameSceneCode.GDMineObjectObjects1, gdjs.GameSceneCode.GDMineObjectObjects2);

{runtimeScene.getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDMineObjectObjects2Objects, (( gdjs.GameSceneCode.GDIndicatorObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects2[0].getPointY("")), "");
}}

}


{

/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
gdjs.GameSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isCurrentAnimationName("Lumber") ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;}if ( gdjs.GameSceneCode.condition0IsTrue_0.val ) {
{
gdjs.GameSceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 20;
}}
if (gdjs.GameSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
/* Reuse gdjs.GameSceneCode.GDLumberObjectObjects1 */
{runtimeScene.getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDLumberObjectObjects1Objects, (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), "");
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HouseIcon"), gdjs.GameSceneCode.GDHouseIconObjects2);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseIconObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDHouseIconObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDHouseIconObjects2[k] = gdjs.GameSceneCode.GDHouseIconObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseIconObjects2.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjects1, gdjs.GameSceneCode.GDIndicatorObjects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].setAnimationName("House");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MineIcon"), gdjs.GameSceneCode.GDMineIconObjects2);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineIconObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMineIconObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDMineIconObjects2[k] = gdjs.GameSceneCode.GDMineIconObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineIconObjects2.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjects1, gdjs.GameSceneCode.GDIndicatorObjects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects2[i].setAnimationName("Mine");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LumberIcon"), gdjs.GameSceneCode.GDLumberIconObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberIconObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDLumberIconObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDLumberIconObjects1[k] = gdjs.GameSceneCode.GDLumberIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberIconObjects1.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setAnimationName("Lumber");
}
}}

}


};gdjs.GameSceneCode.mapOfEmptyGDHouseObjectObjects = Hashtable.newFrom({"HouseObject": []});
gdjs.GameSceneCode.mapOfEmptyGDMineObjectObjects = Hashtable.newFrom({"MineObject": []});
gdjs.GameSceneCode.mapOfEmptyGDLumberObjectObjects = Hashtable.newFrom({"LumberObject": []});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects2ObjectsGDgdjs_46GameSceneCode_46GDMineObjectObjects2ObjectsGDgdjs_46GameSceneCode_46GDLumberObjectObjects2Objects = Hashtable.newFrom({"HouseObject": gdjs.GameSceneCode.GDHouseObjectObjects2, "MineObject": gdjs.GameSceneCode.GDMineObjectObjects2, "LumberObject": gdjs.GameSceneCode.GDLumberObjectObjects2});
gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HouseObject"), gdjs.GameSceneCode.GDHouseObjectObjects2);

for(gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDHouseObjectObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDHouseObjectObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDHouseObjectObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDHouseObjectObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDHouseObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDHouseObjectObjects3[0].getPointX("")) - 35, (( gdjs.GameSceneCode.GDHouseObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDHouseObjectObjects3[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setString("+Gold");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setZOrder((( gdjs.GameSceneCode.GDHouseObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDHouseObjectObjects3[0].getZOrder()) + 200);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "easeOutQuad", 1500, true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].getBehavior("Tween").addObjectPositionYTween("Up", (gdjs.GameSceneCode.GDIncomeTextObjects3[i].getY()) - 25, "easeOutCubic", 500, false);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MineObject"), gdjs.GameSceneCode.GDMineObjectObjects2);

for(gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDMineObjectObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDMineObjectObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDMineObjectObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDMineObjectObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDMineObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDMineObjectObjects3[0].getPointX("")) - 38, (( gdjs.GameSceneCode.GDMineObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDMineObjectObjects3[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setString("+Stone");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setZOrder((( gdjs.GameSceneCode.GDMineObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDMineObjectObjects3[0].getZOrder()) + 200);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "easeOutQuad", 1500, true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].getBehavior("Tween").addObjectPositionYTween("Up", (gdjs.GameSceneCode.GDIncomeTextObjects3[i].getY()) - 25, "easeOutCubic", 500, false);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LumberObject"), gdjs.GameSceneCode.GDLumberObjectObjects2);

for(gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDLumberObjectObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDLumberObjectObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDLumberObjectObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDLumberObjectObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDLumberObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLumberObjectObjects3[0].getPointX("")) - 42, (( gdjs.GameSceneCode.GDLumberObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLumberObjectObjects3[0].getPointY("")) - 30, "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setString("+Wood");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].setZOrder((( gdjs.GameSceneCode.GDLumberObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLumberObjectObjects3[0].getZOrder()) + 200);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].getBehavior("Tween").addObjectPositionYTween("Up", (gdjs.GameSceneCode.GDIncomeTextObjects3[i].getY()) - 25, "easeOutCubic", 500, false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIncomeTextObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIncomeTextObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "easeOutQuad", 1500, true);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseObject"), gdjs.GameSceneCode.GDHouseObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberObject"), gdjs.GameSceneCode.GDLumberObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineObject"), gdjs.GameSceneCode.GDMineObjectObjects2);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
gdjs.GameSceneCode.condition1IsTrue_0.val = false;
{
gdjs.GameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects2ObjectsGDgdjs_46GameSceneCode_46GDMineObjectObjects2ObjectsGDgdjs_46GameSceneCode_46GDLumberObjectObjects2Objects);
}if ( gdjs.GameSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDHouseObjectObjects2[i].getBehavior("ShakeObject_PositionAngleScale").IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameSceneCode.condition1IsTrue_0.val = true;
        gdjs.GameSceneCode.GDHouseObjectObjects2[k] = gdjs.GameSceneCode.GDHouseObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseObjectObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDMineObjectObjects2[i].getBehavior("ShakeObject_PositionAngleScale").IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameSceneCode.condition1IsTrue_0.val = true;
        gdjs.GameSceneCode.GDMineObjectObjects2[k] = gdjs.GameSceneCode.GDMineObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineObjectObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDLumberObjectObjects2[i].getBehavior("ShakeObject_PositionAngleScale").IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameSceneCode.condition1IsTrue_0.val = true;
        gdjs.GameSceneCode.GDLumberObjectObjects2[k] = gdjs.GameSceneCode.GDLumberObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberObjectObjects2.length = k;}}
if (gdjs.GameSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDHouseObjectObjects2 */
/* Reuse gdjs.GameSceneCode.GDLumberObjectObjects2 */
/* Reuse gdjs.GameSceneCode.GDMineObjectObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDHouseObjectObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHouseObjectObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 0, -(3), 0, 10, 0.3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.GameSceneCode.GDMineObjectObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMineObjectObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 0, -(3), 0, 10, 0.3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.GameSceneCode.GDLumberObjectObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLumberObjectObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.3, 0, -(3), 0, 10, 0.3, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseObject"), gdjs.GameSceneCode.GDHouseObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumberObject"), gdjs.GameSceneCode.GDLumberObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineObject"), gdjs.GameSceneCode.GDMineObjectObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseObjectObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDHouseObjectObjects1[i].getBehavior("ShakeObject_PositionAngleScale").IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDHouseObjectObjects1[k] = gdjs.GameSceneCode.GDHouseObjectObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseObjectObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineObjectObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMineObjectObjects1[i].getBehavior("ShakeObject_PositionAngleScale").IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDMineObjectObjects1[k] = gdjs.GameSceneCode.GDMineObjectObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineObjectObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberObjectObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDLumberObjectObjects1[i].getBehavior("ShakeObject_PositionAngleScale").IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDLumberObjectObjects1[k] = gdjs.GameSceneCode.GDLumberObjectObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberObjectObjects1.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Boop.wav", false, 25, gdjs.randomFloatInRange(0.7, 0.8));
}}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.GameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setOpacity(200);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtsExt__HexagonalGrid__SnapObjectToPointyToppedHexagonalGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects, 120, 140, 60, +(35), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.GameSceneCode.GDGoldTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StoneText"), gdjs.GameSceneCode.GDStoneTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodText"), gdjs.GameSceneCode.GDWoodTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoldTextObjects1[i].setString("Gold: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDStoneTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStoneTextObjects1[i].setString("Stone: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDWoodTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWoodTextObjects1[i].setString("Wood: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HouseObject"), gdjs.GameSceneCode.GDHouseObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumberObject"), gdjs.GameSceneCode.GDLumberObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineObject"), gdjs.GameSceneCode.GDMineObjectObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
gdjs.GameSceneCode.condition1IsTrue_0.val = false;
gdjs.GameSceneCode.condition2IsTrue_0.val = false;
{
gdjs.GameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameSceneCode.condition0IsTrue_0.val ) {
{
gdjs.GameSceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects1ObjectsGDgdjs_46GameSceneCode_46GDMineObjectObjects1ObjectsGDgdjs_46GameSceneCode_46GDLumberObjectObjects1Objects, true, runtimeScene, false);
}if ( gdjs.GameSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        gdjs.GameSceneCode.condition2IsTrue_0.val = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;}}
}
if (gdjs.GameSceneCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
gdjs.GameSceneCode.condition1IsTrue_0.val = false;
{
gdjs.GameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.GameSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        gdjs.GameSceneCode.condition1IsTrue_0.val = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;}}
if (gdjs.GameSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseIcon"), gdjs.GameSceneCode.GDHouseIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumberIcon"), gdjs.GameSceneCode.GDLumberIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineIcon"), gdjs.GameSceneCode.GDMineIconObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseIconObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDHouseIconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDHouseIconObjects1[k] = gdjs.GameSceneCode.GDHouseIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseIconObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineIconObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMineIconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDMineIconObjects1[k] = gdjs.GameSceneCode.GDMineIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineIconObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberIconObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDLumberIconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDLumberIconObjects1[k] = gdjs.GameSceneCode.GDLumberIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberIconObjects1.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDHouseIconObjects1 */
/* Reuse gdjs.GameSceneCode.GDLumberIconObjects1 */
/* Reuse gdjs.GameSceneCode.GDMineIconObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDHouseIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHouseIconObjects1[i].enableEffect("Black", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDMineIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMineIconObjects1[i].enableEffect("Black", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDLumberIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLumberIconObjects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDHouseIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHouseIconObjects1[i].enableEffect("White", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDMineIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMineIconObjects1[i].enableEffect("White", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDLumberIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLumberIconObjects1[i].enableEffect("White", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseIcon"), gdjs.GameSceneCode.GDHouseIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumberIcon"), gdjs.GameSceneCode.GDLumberIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineIcon"), gdjs.GameSceneCode.GDMineIconObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseIconObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDHouseIconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDHouseIconObjects1[k] = gdjs.GameSceneCode.GDHouseIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseIconObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineIconObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDMineIconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDMineIconObjects1[k] = gdjs.GameSceneCode.GDMineIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineIconObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberIconObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDLumberIconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDLumberIconObjects1[k] = gdjs.GameSceneCode.GDLumberIconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberIconObjects1.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameSceneCode.GDHouseIconObjects1 */
/* Reuse gdjs.GameSceneCode.GDLumberIconObjects1 */
/* Reuse gdjs.GameSceneCode.GDMineIconObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDHouseIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHouseIconObjects1[i].enableEffect("Black", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDMineIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMineIconObjects1[i].enableEffect("Black", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDLumberIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLumberIconObjects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDHouseIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHouseIconObjects1[i].enableEffect("White", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDMineIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMineIconObjects1[i].enableEffect("White", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDLumberIconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLumberIconObjects1[i].enableEffect("White", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible()) ) {
        gdjs.GameSceneCode.condition0IsTrue_0.val = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.GameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Income");
}}

}


{


gdjs.GameSceneCode.condition0IsTrue_0.val = false;
{
gdjs.GameSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Income") > 1.5;
}if (gdjs.GameSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDHouseObjectObjects));
}{runtimeScene.getVariables().getFromIndex(1).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDMineObjectObjects));
}{runtimeScene.getVariables().getFromIndex(2).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDLumberObjectObjects));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Income");
}
{ //Subevents
gdjs.GameSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDIndicatorObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects3.length = 0;
gdjs.GameSceneCode.GDHouseIconObjects1.length = 0;
gdjs.GameSceneCode.GDHouseIconObjects2.length = 0;
gdjs.GameSceneCode.GDHouseIconObjects3.length = 0;
gdjs.GameSceneCode.GDMineIconObjects1.length = 0;
gdjs.GameSceneCode.GDMineIconObjects2.length = 0;
gdjs.GameSceneCode.GDMineIconObjects3.length = 0;
gdjs.GameSceneCode.GDLumberIconObjects1.length = 0;
gdjs.GameSceneCode.GDLumberIconObjects2.length = 0;
gdjs.GameSceneCode.GDLumberIconObjects3.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects1.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects2.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects3.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects1.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects2.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects3.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects1.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects2.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects3.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects1.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects2.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects3.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects1.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects2.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects3.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects1.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects2.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects3.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects1.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects2.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects3.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects1.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects2.length = 0;
gdjs.GameSceneCode.GDBackgroundTreesObjects3.length = 0;
gdjs.GameSceneCode.GDVignetteObjects1.length = 0;
gdjs.GameSceneCode.GDVignetteObjects2.length = 0;
gdjs.GameSceneCode.GDVignetteObjects3.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects1.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects2.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.eventsList6(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
