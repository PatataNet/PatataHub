gdjs.LevelSelectionCode = {};
gdjs.LevelSelectionCode.GDLevelButtonObjects1= [];
gdjs.LevelSelectionCode.GDLevelButtonObjects2= [];
gdjs.LevelSelectionCode.GDRandomButtonObjects1= [];
gdjs.LevelSelectionCode.GDRandomButtonObjects2= [];
gdjs.LevelSelectionCode.GDSummerBackgroundObjects1= [];
gdjs.LevelSelectionCode.GDSummerBackgroundObjects2= [];
gdjs.LevelSelectionCode.GDGrassObjects1= [];
gdjs.LevelSelectionCode.GDGrassObjects2= [];
gdjs.LevelSelectionCode.GDTreeObjects1= [];
gdjs.LevelSelectionCode.GDTreeObjects2= [];


gdjs.LevelSelectionCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.LevelSelectionCode.GDLevelButtonObjects1);
{for(var i = 0, len = gdjs.LevelSelectionCode.GDLevelButtonObjects1.length ;i < len;++i) {
    gdjs.LevelSelectionCode.GDLevelButtonObjects1[i].SetLabelText("Level " + (gdjs.RuntimeObject.getVariableString(gdjs.LevelSelectionCode.GDLevelButtonObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelButton"), gdjs.LevelSelectionCode.GDLevelButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectionCode.GDLevelButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectionCode.GDLevelButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectionCode.GDLevelButtonObjects1[k] = gdjs.LevelSelectionCode.GDLevelButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectionCode.GDLevelButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelSelectionCode.GDLevelButtonObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.LevelSelectionCode.GDLevelButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LevelSelectionCode.GDLevelButtonObjects1[0].getVariables()).getFromIndex(0))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RandomButton"), gdjs.LevelSelectionCode.GDRandomButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectionCode.GDRandomButtonObjects1.length;i<l;++i) {
    if ( gdjs.LevelSelectionCode.GDRandomButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectionCode.GDRandomButtonObjects1[k] = gdjs.LevelSelectionCode.GDRandomButtonObjects1[i];
        ++k;
    }
}
gdjs.LevelSelectionCode.GDRandomButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.LevelSelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectionCode.GDLevelButtonObjects1.length = 0;
gdjs.LevelSelectionCode.GDLevelButtonObjects2.length = 0;
gdjs.LevelSelectionCode.GDRandomButtonObjects1.length = 0;
gdjs.LevelSelectionCode.GDRandomButtonObjects2.length = 0;
gdjs.LevelSelectionCode.GDSummerBackgroundObjects1.length = 0;
gdjs.LevelSelectionCode.GDSummerBackgroundObjects2.length = 0;
gdjs.LevelSelectionCode.GDGrassObjects1.length = 0;
gdjs.LevelSelectionCode.GDGrassObjects2.length = 0;
gdjs.LevelSelectionCode.GDTreeObjects1.length = 0;
gdjs.LevelSelectionCode.GDTreeObjects2.length = 0;

gdjs.LevelSelectionCode.eventsList0(runtimeScene);

return;

}

gdjs['LevelSelectionCode'] = gdjs.LevelSelectionCode;
