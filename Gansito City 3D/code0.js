gdjs.GameSceneCode = {};
gdjs.GameSceneCode.forEachIndex2 = 0;

gdjs.GameSceneCode.forEachIndex3 = 0;

gdjs.GameSceneCode.forEachObjects2 = [];

gdjs.GameSceneCode.forEachObjects3 = [];

gdjs.GameSceneCode.forEachTemporary2 = null;

gdjs.GameSceneCode.forEachTemporary3 = null;

gdjs.GameSceneCode.forEachTotalCount2 = 0;

gdjs.GameSceneCode.forEachTotalCount3 = 0;

gdjs.GameSceneCode.GDGoldTextObjects1= [];
gdjs.GameSceneCode.GDGoldTextObjects2= [];
gdjs.GameSceneCode.GDGoldTextObjects3= [];
gdjs.GameSceneCode.GDGoldTextObjects4= [];
gdjs.GameSceneCode.GDStoneTextObjects1= [];
gdjs.GameSceneCode.GDStoneTextObjects2= [];
gdjs.GameSceneCode.GDStoneTextObjects3= [];
gdjs.GameSceneCode.GDStoneTextObjects4= [];
gdjs.GameSceneCode.GDWoodTextObjects1= [];
gdjs.GameSceneCode.GDWoodTextObjects2= [];
gdjs.GameSceneCode.GDWoodTextObjects3= [];
gdjs.GameSceneCode.GDWoodTextObjects4= [];
gdjs.GameSceneCode.GDVignetteObjects1= [];
gdjs.GameSceneCode.GDVignetteObjects2= [];
gdjs.GameSceneCode.GDVignetteObjects3= [];
gdjs.GameSceneCode.GDVignetteObjects4= [];
gdjs.GameSceneCode.GDIncomeTextObjects1= [];
gdjs.GameSceneCode.GDIncomeTextObjects2= [];
gdjs.GameSceneCode.GDIncomeTextObjects3= [];
gdjs.GameSceneCode.GDIncomeTextObjects4= [];
gdjs.GameSceneCode.GDHouseButtonObjects1= [];
gdjs.GameSceneCode.GDHouseButtonObjects2= [];
gdjs.GameSceneCode.GDHouseButtonObjects3= [];
gdjs.GameSceneCode.GDHouseButtonObjects4= [];
gdjs.GameSceneCode.GDMineButtonObjects1= [];
gdjs.GameSceneCode.GDMineButtonObjects2= [];
gdjs.GameSceneCode.GDMineButtonObjects3= [];
gdjs.GameSceneCode.GDMineButtonObjects4= [];
gdjs.GameSceneCode.GDLumberButtonObjects1= [];
gdjs.GameSceneCode.GDLumberButtonObjects2= [];
gdjs.GameSceneCode.GDLumberButtonObjects3= [];
gdjs.GameSceneCode.GDLumberButtonObjects4= [];
gdjs.GameSceneCode.GDFloorGridObjects1= [];
gdjs.GameSceneCode.GDFloorGridObjects2= [];
gdjs.GameSceneCode.GDFloorGridObjects3= [];
gdjs.GameSceneCode.GDFloorGridObjects4= [];
gdjs.GameSceneCode.GDHouseObjectObjects1= [];
gdjs.GameSceneCode.GDHouseObjectObjects2= [];
gdjs.GameSceneCode.GDHouseObjectObjects3= [];
gdjs.GameSceneCode.GDHouseObjectObjects4= [];
gdjs.GameSceneCode.GDMineObjectObjects1= [];
gdjs.GameSceneCode.GDMineObjectObjects2= [];
gdjs.GameSceneCode.GDMineObjectObjects3= [];
gdjs.GameSceneCode.GDMineObjectObjects4= [];
gdjs.GameSceneCode.GDLumberObjectObjects1= [];
gdjs.GameSceneCode.GDLumberObjectObjects2= [];
gdjs.GameSceneCode.GDLumberObjectObjects3= [];
gdjs.GameSceneCode.GDLumberObjectObjects4= [];
gdjs.GameSceneCode.GDIndicatorObjectObjects1= [];
gdjs.GameSceneCode.GDIndicatorObjectObjects2= [];
gdjs.GameSceneCode.GDIndicatorObjectObjects3= [];
gdjs.GameSceneCode.GDIndicatorObjectObjects4= [];


gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDMineButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDLumberButtonObjects2Objects = Hashtable.newFrom({"HouseButton": gdjs.GameSceneCode.GDHouseButtonObjects2, "MineButton": gdjs.GameSceneCode.GDMineButtonObjects2, "LumberButton": gdjs.GameSceneCode.GDLumberButtonObjects2});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HouseButton"), gdjs.GameSceneCode.GDHouseButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberButton"), gdjs.GameSceneCode.GDLumberButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineButton"), gdjs.GameSceneCode.GDMineButtonObjects2);
{gdjs.evtsExt__Toolbar__UpdateToolSelection.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDMineButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDLumberButtonObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "None";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IndicatorObject"), gdjs.GameSceneCode.GDIndicatorObjectObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjectObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjectObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "None";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IndicatorObject"), gdjs.GameSceneCode.GDIndicatorObjectObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjectObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjectObjects1[i].hide(false);
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjectObjects2Objects = Hashtable.newFrom({"IndicatorObject": gdjs.GameSceneCode.GDIndicatorObjectObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDMineButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDLumberButtonObjects2Objects = Hashtable.newFrom({"HouseButton": gdjs.GameSceneCode.GDHouseButtonObjects2, "MineButton": gdjs.GameSceneCode.GDMineButtonObjects2, "LumberButton": gdjs.GameSceneCode.GDLumberButtonObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects3Objects = Hashtable.newFrom({"HouseObject": gdjs.GameSceneCode.GDHouseObjectObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDMineObjectObjects3Objects = Hashtable.newFrom({"MineObject": gdjs.GameSceneCode.GDMineObjectObjects3});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDLumberObjectObjects2Objects = Hashtable.newFrom({"LumberObject": gdjs.GameSceneCode.GDLumberObjectObjects2});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "House";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) >= 10;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjectObjects2, gdjs.GameSceneCode.GDIndicatorObjectObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDHouseObjectObjects2, gdjs.GameSceneCode.GDHouseObjectObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(1).sub(10);
}{runtimeScene.getScene().getVariables().getFromIndex(2).sub(10);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseObjectObjects3Objects, (( gdjs.GameSceneCode.GDIndicatorObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects3[0].getX()), (( gdjs.GameSceneCode.GDIndicatorObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects3[0].getY()), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "Mine";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 20;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameSceneCode.GDIndicatorObjectObjects2, gdjs.GameSceneCode.GDIndicatorObjectObjects3);

gdjs.copyArray(gdjs.GameSceneCode.GDMineObjectObjects2, gdjs.GameSceneCode.GDMineObjectObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDMineObjectObjects3Objects, (( gdjs.GameSceneCode.GDIndicatorObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects3[0].getX()), (( gdjs.GameSceneCode.GDIndicatorObjectObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects3[0].getY()), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "Lumber";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 20;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDIndicatorObjectObjects2 */
/* Reuse gdjs.GameSceneCode.GDLumberObjectObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(20);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDLumberObjectObjects2Objects, (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getX()), (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getY()), "");
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseButtonObjects1ObjectsGDgdjs_46GameSceneCode_46GDMineButtonObjects1ObjectsGDgdjs_46GameSceneCode_46GDLumberButtonObjects1Objects = Hashtable.newFrom({"HouseButton": gdjs.GameSceneCode.GDHouseButtonObjects1, "MineButton": gdjs.GameSceneCode.GDMineButtonObjects1, "LumberButton": gdjs.GameSceneCode.GDLumberButtonObjects1});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("IndicatorObject"), gdjs.GameSceneCode.GDIndicatorObjectObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjectObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjectObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIndicatorObjectObjects2Objects, 120, 104, 60, 52, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HouseButton"), gdjs.GameSceneCode.GDHouseButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseObject"), gdjs.GameSceneCode.GDHouseObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("IndicatorObject"), gdjs.GameSceneCode.GDIndicatorObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberButton"), gdjs.GameSceneCode.GDLumberButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LumberObject"), gdjs.GameSceneCode.GDLumberObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineButton"), gdjs.GameSceneCode.GDMineButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("MineObject"), gdjs.GameSceneCode.GDMineObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDMineButtonObjects2ObjectsGDgdjs_46GameSceneCode_46GDLumberButtonObjects2Objects, runtimeScene, true, false);
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineObjectObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMineObjectObjects2[i].getX() == (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getX()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDMineObjectObjects2[k] = gdjs.GameSceneCode.GDMineObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineObjectObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberObjectObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDLumberObjectObjects2[i].getX() == (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getX()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDLumberObjectObjects2[k] = gdjs.GameSceneCode.GDLumberObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberObjectObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseObjectObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDHouseObjectObjects2[i].getX() == (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getX()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDHouseObjectObjects2[k] = gdjs.GameSceneCode.GDHouseObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseObjectObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMineObjectObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMineObjectObjects2[i].getY() == (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDMineObjectObjects2[k] = gdjs.GameSceneCode.GDMineObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMineObjectObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDLumberObjectObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDLumberObjectObjects2[i].getY() == (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDLumberObjectObjects2[k] = gdjs.GameSceneCode.GDLumberObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDLumberObjectObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDHouseObjectObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDHouseObjectObjects2[i].getY() == (( gdjs.GameSceneCode.GDIndicatorObjectObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDIndicatorObjectObjects2[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameSceneCode.GDHouseObjectObjects2[k] = gdjs.GameSceneCode.GDHouseObjectObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDHouseObjectObjects2.length = k;
}
isConditionTrue_0 = !isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HouseButton"), gdjs.GameSceneCode.GDHouseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("IndicatorObject"), gdjs.GameSceneCode.GDIndicatorObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumberButton"), gdjs.GameSceneCode.GDLumberButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MineButton"), gdjs.GameSceneCode.GDMineButtonObjects1);
{gdjs.evtsExt__Toolbar__SetTool.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHouseButtonObjects1ObjectsGDgdjs_46GameSceneCode_46GDMineButtonObjects1ObjectsGDgdjs_46GameSceneCode_46GDLumberButtonObjects1Objects, "None", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjectObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjectObjects1[i].hide();
}
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IndicatorObject"), gdjs.GameSceneCode.GDIndicatorObjectObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDIndicatorObjectObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDIndicatorObjectObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "None";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfEmptyGDMineObjectObjectsEmptyGDLumberObjectObjectsEmptyGDHouseObjectObjects = Hashtable.newFrom({"MineObject": [], "LumberObject": [], "HouseObject": []});
gdjs.GameSceneCode.mapOfEmptyGDHouseObjectObjects = Hashtable.newFrom({"HouseObject": []});
gdjs.GameSceneCode.mapOfEmptyGDMineObjectObjects = Hashtable.newFrom({"MineObject": []});
gdjs.GameSceneCode.mapOfEmptyGDLumberObjectObjects = Hashtable.newFrom({"LumberObject": []});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects3});
gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects2Objects = Hashtable.newFrom({"IncomeText": gdjs.GameSceneCode.GDIncomeTextObjects2});
gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HouseObject"), gdjs.GameSceneCode.GDHouseObjectObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDHouseObjectObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.GameSceneCode.GDGoldTextObjects3);
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDHouseObjectObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDHouseObjectObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDHouseObjectObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDGoldTextObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGoldTextObjects3[0].getX()) + gdjs.randomFloatInRange(10, 70), (( gdjs.GameSceneCode.GDGoldTextObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDGoldTextObjects3[0].getY()) - gdjs.randomFloatInRange(0, 20), "UI");
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MineObject"), gdjs.GameSceneCode.GDMineObjectObjects2);

for (gdjs.GameSceneCode.forEachIndex3 = 0;gdjs.GameSceneCode.forEachIndex3 < gdjs.GameSceneCode.GDMineObjectObjects2.length;++gdjs.GameSceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("StoneText"), gdjs.GameSceneCode.GDStoneTextObjects3);
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;

gdjs.GameSceneCode.GDMineObjectObjects3.length = 0;


gdjs.GameSceneCode.forEachTemporary3 = gdjs.GameSceneCode.GDMineObjectObjects2[gdjs.GameSceneCode.forEachIndex3];
gdjs.GameSceneCode.GDMineObjectObjects3.push(gdjs.GameSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects3Objects, (( gdjs.GameSceneCode.GDStoneTextObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDStoneTextObjects3[0].getX()) + gdjs.randomFloatInRange(10, 70), (( gdjs.GameSceneCode.GDStoneTextObjects3.length === 0 ) ? 0 :gdjs.GameSceneCode.GDStoneTextObjects3[0].getY()) - gdjs.randomFloatInRange(0, 20), "UI");
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LumberObject"), gdjs.GameSceneCode.GDLumberObjectObjects1);

for (gdjs.GameSceneCode.forEachIndex2 = 0;gdjs.GameSceneCode.forEachIndex2 < gdjs.GameSceneCode.GDLumberObjectObjects1.length;++gdjs.GameSceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("WoodText"), gdjs.GameSceneCode.GDWoodTextObjects2);
gdjs.GameSceneCode.GDIncomeTextObjects2.length = 0;

gdjs.GameSceneCode.GDLumberObjectObjects2.length = 0;


gdjs.GameSceneCode.forEachTemporary2 = gdjs.GameSceneCode.GDLumberObjectObjects1[gdjs.GameSceneCode.forEachIndex2];
gdjs.GameSceneCode.GDLumberObjectObjects2.push(gdjs.GameSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDIncomeTextObjects2Objects, (( gdjs.GameSceneCode.GDWoodTextObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDWoodTextObjects2[0].getX()) + gdjs.randomFloatInRange(10, 70), (( gdjs.GameSceneCode.GDWoodTextObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDWoodTextObjects2[0].getY()) - gdjs.randomFloatInRange(0, 20), "UI");
}}
}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList7(runtimeScene);
}


};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDMineObjectObjectsEmptyGDLumberObjectObjectsEmptyGDHouseObjectObjects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8882044);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Income");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Income") > 1.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Income");
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDHouseObjectObjects));
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDMineObjectObjects));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDLumberObjectObjects));
}
{ //Subevents
gdjs.GameSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8892244);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("CameraElevationAngle").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CameraElevationAngle")) + gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 5, 15, 89));
}{runtimeScene.getScene().getVariables().get("CameraRotationAngle").add(gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 5);
}{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition.func(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, 800, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CameraRotationAngle")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CameraElevationAngle")), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameSceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("CameraElevationAngle").setNumber(30);
}{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition.func(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, 800, 0, 30, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Toolbar__SelectedTool.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "None";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.GameSceneCode.GDGoldTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StoneText"), gdjs.GameSceneCode.GDStoneTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodText"), gdjs.GameSceneCode.GDWoodTextObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGoldTextObjects1[i].setString("Gold: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDStoneTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStoneTextObjects1[i].setString("Stone: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDWoodTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWoodTextObjects1[i].setString("Wood: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}}

}


{


gdjs.GameSceneCode.eventsList0(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList11(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDGoldTextObjects1.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects2.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects3.length = 0;
gdjs.GameSceneCode.GDGoldTextObjects4.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects1.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects2.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects3.length = 0;
gdjs.GameSceneCode.GDStoneTextObjects4.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects1.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects2.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects3.length = 0;
gdjs.GameSceneCode.GDWoodTextObjects4.length = 0;
gdjs.GameSceneCode.GDVignetteObjects1.length = 0;
gdjs.GameSceneCode.GDVignetteObjects2.length = 0;
gdjs.GameSceneCode.GDVignetteObjects3.length = 0;
gdjs.GameSceneCode.GDVignetteObjects4.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects1.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects2.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects3.length = 0;
gdjs.GameSceneCode.GDIncomeTextObjects4.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects1.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects2.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects3.length = 0;
gdjs.GameSceneCode.GDHouseButtonObjects4.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects1.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects2.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects3.length = 0;
gdjs.GameSceneCode.GDMineButtonObjects4.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects1.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects2.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects3.length = 0;
gdjs.GameSceneCode.GDLumberButtonObjects4.length = 0;
gdjs.GameSceneCode.GDFloorGridObjects1.length = 0;
gdjs.GameSceneCode.GDFloorGridObjects2.length = 0;
gdjs.GameSceneCode.GDFloorGridObjects3.length = 0;
gdjs.GameSceneCode.GDFloorGridObjects4.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects1.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects2.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects3.length = 0;
gdjs.GameSceneCode.GDHouseObjectObjects4.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects1.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects2.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects3.length = 0;
gdjs.GameSceneCode.GDMineObjectObjects4.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects1.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects2.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects3.length = 0;
gdjs.GameSceneCode.GDLumberObjectObjects4.length = 0;
gdjs.GameSceneCode.GDIndicatorObjectObjects1.length = 0;
gdjs.GameSceneCode.GDIndicatorObjectObjects2.length = 0;
gdjs.GameSceneCode.GDIndicatorObjectObjects3.length = 0;
gdjs.GameSceneCode.GDIndicatorObjectObjects4.length = 0;

gdjs.GameSceneCode.eventsList12(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
