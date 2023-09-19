gdjs.GameSceneCode = {};
gdjs.GameSceneCode.forEachIndex2 = 0;

gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachObjects2 = [];

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachTemporary2 = null;

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTotalCount2 = 0;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.GDIndicatorObjects1= [];
gdjs.GameSceneCode.GDIndicatorObjects2= [];
gdjs.GameSceneCode.GDIndicatorObjects3= [];
gdjs.GameSceneCode.GDIndicatorObjects4= [];
gdjs.GameSceneCode.GDTower1_95IconObjects1= [];
gdjs.GameSceneCode.GDTower1_95IconObjects2= [];
gdjs.GameSceneCode.GDTower1_95IconObjects3= [];
gdjs.GameSceneCode.GDTower1_95IconObjects4= [];
gdjs.GameSceneCode.GDTower2_95IconObjects1= [];
gdjs.GameSceneCode.GDTower2_95IconObjects2= [];
gdjs.GameSceneCode.GDTower2_95IconObjects3= [];
gdjs.GameSceneCode.GDTower2_95IconObjects4= [];
gdjs.GameSceneCode.GDTowerBaseObjects1= [];
gdjs.GameSceneCode.GDTowerBaseObjects2= [];
gdjs.GameSceneCode.GDTowerBaseObjects3= [];
gdjs.GameSceneCode.GDTowerBaseObjects4= [];
gdjs.GameSceneCode.GDTowerHead1Objects1= [];
gdjs.GameSceneCode.GDTowerHead1Objects2= [];
gdjs.GameSceneCode.GDTowerHead1Objects3= [];
gdjs.GameSceneCode.GDTowerHead1Objects4= [];
gdjs.GameSceneCode.GDTowerHead2Objects1= [];
gdjs.GameSceneCode.GDTowerHead2Objects2= [];
gdjs.GameSceneCode.GDTowerHead2Objects3= [];
gdjs.GameSceneCode.GDTowerHead2Objects4= [];
gdjs.GameSceneCode.GDBulletObjects1= [];
gdjs.GameSceneCode.GDBulletObjects2= [];
gdjs.GameSceneCode.GDBulletObjects3= [];
gdjs.GameSceneCode.GDBulletObjects4= [];
gdjs.GameSceneCode.GDGoldTextObjects1= [];
gdjs.GameSceneCode.GDGoldTextObjects2= [];
gdjs.GameSceneCode.GDGoldTextObjects3= [];
gdjs.GameSceneCode.GDGoldTextObjects4= [];
gdjs.GameSceneCode.GDTutorialTextObjects1= [];
gdjs.GameSceneCode.GDTutorialTextObjects2= [];
gdjs.GameSceneCode.GDTutorialTextObjects3= [];
gdjs.GameSceneCode.GDTutorialTextObjects4= [];
gdjs.GameSceneCode.GDRoadObjects1= [];
gdjs.GameSceneCode.GDRoadObjects2= [];
gdjs.GameSceneCode.GDRoadObjects3= [];
gdjs.GameSceneCode.GDRoadObjects4= [];
gdjs.GameSceneCode.GDZombieObjects1= [];
gdjs.GameSceneCode.GDZombieObjects2= [];
gdjs.GameSceneCode.GDZombieObjects3= [];
gdjs.GameSceneCode.GDZombieObjects4= [];
gdjs.GameSceneCode.GDPointObjects1= [];
gdjs.GameSceneCode.GDPointObjects2= [];
gdjs.GameSceneCode.GDPointObjects3= [];
gdjs.GameSceneCode.GDPointObjects4= [];
gdjs.GameSceneCode.GDSpawnPointObjects1= [];
gdjs.GameSceneCode.GDSpawnPointObjects2= [];
gdjs.GameSceneCode.GDSpawnPointObjects3= [];
gdjs.GameSceneCode.GDSpawnPointObjects4= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects1= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects2= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects3= [];
gdjs.GameSceneCode.GDNextWaveButtonObjects4= [];
gdjs.GameSceneCode.GDGrassGroundObjects1= [];
gdjs.GameSceneCode.GDGrassGroundObjects2= [];
gdjs.GameSceneCode.GDGrassGroundObjects3= [];
gdjs.GameSceneCode.GDGrassGroundObjects4= [];
gdjs.GameSceneCode.GDRangeObjects1= [];
gdjs.GameSceneCode.GDRangeObjects2= [];
gdjs.GameSceneCode.GDRangeObjects3= [];
gdjs.GameSceneCode.GDRangeObjects4= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects1= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects2= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects3= [];
gdjs.GameSceneCode.GDFlatHeartBarObjects4= [];
gdjs.GameSceneCode.GDGreyButtonObjects1= [];
gdjs.GameSceneCode.GDGreyButtonObjects2= [];
gdjs.GameSceneCode.GDGreyButtonObjects3= [];
gdjs.GameSceneCode.GDGreyButtonObjects4= [];


gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects1});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.GameSceneCode.GDPointObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDPointObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects1, gdjs.GameSceneCode.GDZombieObjects3);

gdjs.GameSceneCode.GDPointObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDPointObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDPointObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDPointObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDPointObjects3[i].getVariableNumber(gdjs.GameSceneCode.GDPointObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameSceneCode.GDZombieObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameSceneCode.GDZombieObjects3[0].getVariables()).get("Count"))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDPointObjects3[k] = gdjs.GameSceneCode.GDPointObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDPointObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].valuePush(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].valuePush(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1), (( gdjs.GameSceneCode.GDPointObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPointObjects3[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].returnVariable(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().get("Count")).add(1);
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects1, gdjs.GameSceneCode.GDZombieObjects2);

{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Tween").addObjectPositionTween("Move", (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(0).getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1).getChild(0))), "linear", gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombieObjects2[i].getPointX("")), (gdjs.GameSceneCode.GDZombieObjects2[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(0).getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1).getChild(0)))) * 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), 0);
}}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameSceneCode.GDZombieObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects1[i].returnVariable(gdjs.GameSceneCode.GDZombieObjects1[i].getVariables().get("Count")).setNumber(1);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDFlatHeartBarObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDFlatHeartBarObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDFlatHeartBarObjects3[k] = gdjs.GameSceneCode.GDFlatHeartBarObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getVariableChildCount(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Tween").addObjectPositionTween("Move", (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0).getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1).getChild(0))), "linear", gdjs.evtTools.common.distanceBetweenPositions((gdjs.GameSceneCode.GDZombieObjects3[i].getPointX("")), (gdjs.GameSceneCode.GDZombieObjects3[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0).getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1).getChild(0)))) * 8, false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].rotateTowardPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0).getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(1).getChild(0))), 0, runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getVariableChildCount(gdjs.GameSceneCode.GDZombieObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.GameSceneCode.GDFlatHeartBarObjects3);
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatHeartBarObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].SetValue(gdjs.GameSceneCode.GDFlatHeartBarObjects3[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameSceneCode.GDZombieObjects2, gdjs.GameSceneCode.GDZombieObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects3[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects3[k] = gdjs.GameSceneCode.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDZombieObjects3 */
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerHead1Objects2Objects = Hashtable.newFrom({"TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.GameSceneCode.GDZombieObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameSceneCode.GDBulletObjects2});
gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameSceneCode.GDIndicatorObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerHead1Objects1ObjectsGDgdjs_46GameSceneCode_46GDRoadObjects1Objects = Hashtable.newFrom({"TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1, "Road": gdjs.GameSceneCode.GDRoadObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerBaseObjects1Objects = Hashtable.newFrom({"TowerBase": gdjs.GameSceneCode.GDTowerBaseObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerHead1Objects1Objects = Hashtable.newFrom({"TowerHead1": gdjs.GameSceneCode.GDTowerHead1Objects1});
gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isCurrentAnimationName("Tower1") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 10;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
gdjs.GameSceneCode.GDTowerBaseObjects1.length = 0;

/* Reuse gdjs.GameSceneCode.GDTowerHead1Objects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(10);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerBaseObjects1Objects, (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerHead1Objects1Objects, (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), "");
}}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tower1_Icon"), gdjs.GameSceneCode.GDTower1_95IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTower1_95IconObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTower1_95IconObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTower1_95IconObjects1[k] = gdjs.GameSceneCode.GDTower1_95IconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTower1_95IconObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setAnimationName("House");
}
}}

}


};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.GameSceneCode.GDPointObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPointObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setOpacity(200);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects, 32, 32, 64, -(32), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.GameSceneCode.GDGoldTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoldTextObjects1[i].setString("Gold: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NextWaveButton"), gdjs.GameSceneCode.GDNextWaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDNextWaveButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDNextWaveButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDNextWaveButtonObjects1[k] = gdjs.GameSceneCode.GDNextWaveButtonObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDNextWaveButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0)));
}{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(1), 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawning") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0)) > 0;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.GameSceneCode.GDSpawnPointObjects1);
gdjs.GameSceneCode.GDZombieObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawning");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDZombieObjects1Objects, (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDSpawnPointObjects1[0].getPointY("")), "");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).sub(1);
}
{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDZombieObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.GameSceneCode.GDZombieObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDZombieObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDZombieObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Tween").hasFinished("Move") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].variableRemoveAt(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(0), 0);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].variableRemoveAt(gdjs.GameSceneCode.GDZombieObjects2[i].getVariables().getFromIndex(1), 0);
}
}
{ //Subevents: 
gdjs.GameSceneCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDBulletObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.GameSceneCode.GDBulletObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDBulletObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDBulletObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDZombieObjects2[i].isCollidingWithPoint((( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDBulletObjects2[0].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDZombieObjects2[k] = gdjs.GameSceneCode.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDZombieObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDZombieObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDZombieObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents: 
gdjs.GameSceneCode.eventsList5(runtimeScene);} //Subevents end.
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDTowerHead1Objects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameSceneCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.GameSceneCode.GDZombieObjects2);
gdjs.GameSceneCode.GDTowerHead1Objects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDTowerHead1Objects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDTowerHead1Objects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerHead1Objects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDZombieObjects2Objects, 200, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead1Objects2[i].rotateTowardPosition((( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("")), (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTowerHead1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTowerHead1Objects2[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameSceneCode.GDTowerHead1Objects2[i].getPointX("BulletPoint")), (gdjs.GameSceneCode.GDTowerHead1Objects2[i].getPointY("BulletPoint")), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBulletObjects2Objects, (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointX("ShotPoint")), (( gdjs.GameSceneCode.GDZombieObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDZombieObjects2[0].getPointY("ShotPoint")), 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Range"), gdjs.GameSceneCode.GDRangeObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDRangeObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRangeObjects1[i].drawCircle((( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointX("")), (( gdjs.GameSceneCode.GDIndicatorObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjects1[0].getPointY("")), 200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Road"), gdjs.GameSceneCode.GDRoadObjects1);
gdjs.copyArray(runtimeScene.getObjects("TowerHead1"), gdjs.GameSceneCode.GDTowerHead1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTowerHead1Objects1ObjectsGDgdjs_46GameSceneCode_46GDRoadObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tower1_Icon"), gdjs.GameSceneCode.GDTower1_95IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTower1_95IconObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTower1_95IconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTower1_95IconObjects1[k] = gdjs.GameSceneCode.GDTower1_95IconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTower1_95IconObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTower1_95IconObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTower1_95IconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTower1_95IconObjects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTower1_95IconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTower1_95IconObjects1[i].enableEffect("White", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tower1_Icon"), gdjs.GameSceneCode.GDTower1_95IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTower1_95IconObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDTower1_95IconObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTower1_95IconObjects1[k] = gdjs.GameSceneCode.GDTower1_95IconObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTower1_95IconObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTower1_95IconObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTower1_95IconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTower1_95IconObjects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTower1_95IconObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTower1_95IconObjects1[i].enableEffect("White", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameSceneCode.GDIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDIndicatorObjects1.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDIndicatorObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDIndicatorObjects1[k] = gdjs.GameSceneCode.GDIndicatorObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDIndicatorObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDIndicatorObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorObjects4.length = 0;
gdjs.GameSceneCode.GDTower1_95IconObjects1.length = 0;
gdjs.GameSceneCode.GDTower1_95IconObjects2.length = 0;
gdjs.GameSceneCode.GDTower1_95IconObjects3.length = 0;
gdjs.GameSceneCode.GDTower1_95IconObjects4.length = 0;
gdjs.GameSceneCode.GDTower2_95IconObjects1.length = 0;
gdjs.GameSceneCode.GDTower2_95IconObjects2.length = 0;
gdjs.GameSceneCode.GDTower2_95IconObjects3.length = 0;
gdjs.GameSceneCode.GDTower2_95IconObjects4.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects1.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects2.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects3.length = 0;
gdjs.GameSceneCode.GDTowerBaseObjects4.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead1Objects4.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects1.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects2.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects3.length = 0;
gdjs.GameSceneCode.GDTowerHead2Objects4.length = 0;
gdjs.GameSceneCode.GDBulletObjects1.length = 0;
gdjs.GameSceneCode.GDBulletObjects2.length = 0;
gdjs.GameSceneCode.GDBulletObjects3.length = 0;
gdjs.GameSceneCode.GDBulletObjects4.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects1.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects2.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects3.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects4.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects1.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects2.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects3.length = 0;
gdjs.GameSceneCode.GDTutorialTextObjects4.length = 0;
gdjs.GameSceneCode.GDRoadObjects1.length = 0;
gdjs.GameSceneCode.GDRoadObjects2.length = 0;
gdjs.GameSceneCode.GDRoadObjects3.length = 0;
gdjs.GameSceneCode.GDRoadObjects4.length = 0;
gdjs.GameSceneCode.GDZombieObjects1.length = 0;
gdjs.GameSceneCode.GDZombieObjects2.length = 0;
gdjs.GameSceneCode.GDZombieObjects3.length = 0;
gdjs.GameSceneCode.GDZombieObjects4.length = 0;
gdjs.GameSceneCode.GDPointObjects1.length = 0;
gdjs.GameSceneCode.GDPointObjects2.length = 0;
gdjs.GameSceneCode.GDPointObjects3.length = 0;
gdjs.GameSceneCode.GDPointObjects4.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects1.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects2.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects3.length = 0;
gdjs.GameSceneCode.GDSpawnPointObjects4.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects1.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects2.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects3.length = 0;
gdjs.GameSceneCode.GDNextWaveButtonObjects4.length = 0;
gdjs.GameSceneCode.GDGrassGroundObjects1.length = 0;
gdjs.GameSceneCode.GDGrassGroundObjects2.length = 0;
gdjs.GameSceneCode.GDGrassGroundObjects3.length = 0;
gdjs.GameSceneCode.GDGrassGroundObjects4.length = 0;
gdjs.GameSceneCode.GDRangeObjects1.length = 0;
gdjs.GameSceneCode.GDRangeObjects2.length = 0;
gdjs.GameSceneCode.GDRangeObjects3.length = 0;
gdjs.GameSceneCode.GDRangeObjects4.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.GameSceneCode.GDFlatHeartBarObjects4.length = 0;
gdjs.GameSceneCode.GDGreyButtonObjects1.length = 0;
gdjs.GameSceneCode.GDGreyButtonObjects2.length = 0;
gdjs.GameSceneCode.GDGreyButtonObjects3.length = 0;
gdjs.GameSceneCode.GDGreyButtonObjects4.length = 0;

gdjs.GameSceneCode.eventsList9(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
