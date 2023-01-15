gdjs.TutorialCode = {};
gdjs.TutorialCode.forEachIndex3 = 0;

gdjs.TutorialCode.forEachObjects3 = [];

gdjs.TutorialCode.forEachTemporary3 = null;

gdjs.TutorialCode.forEachTotalCount3 = 0;

gdjs.TutorialCode.GDBackgroundObjects1= [];
gdjs.TutorialCode.GDBackgroundObjects2= [];
gdjs.TutorialCode.GDBackgroundObjects3= [];
gdjs.TutorialCode.GDBackgroundObjects4= [];
gdjs.TutorialCode.GDBackgroundObjects5= [];
gdjs.TutorialCode.GDFadeInOutObjects1= [];
gdjs.TutorialCode.GDFadeInOutObjects2= [];
gdjs.TutorialCode.GDFadeInOutObjects3= [];
gdjs.TutorialCode.GDFadeInOutObjects4= [];
gdjs.TutorialCode.GDFadeInOutObjects5= [];
gdjs.TutorialCode.GDTopWallObjects1= [];
gdjs.TutorialCode.GDTopWallObjects2= [];
gdjs.TutorialCode.GDTopWallObjects3= [];
gdjs.TutorialCode.GDTopWallObjects4= [];
gdjs.TutorialCode.GDTopWallObjects5= [];
gdjs.TutorialCode.GDBottomWallObjects1= [];
gdjs.TutorialCode.GDBottomWallObjects2= [];
gdjs.TutorialCode.GDBottomWallObjects3= [];
gdjs.TutorialCode.GDBottomWallObjects4= [];
gdjs.TutorialCode.GDBottomWallObjects5= [];
gdjs.TutorialCode.GDLeftWallObjects1= [];
gdjs.TutorialCode.GDLeftWallObjects2= [];
gdjs.TutorialCode.GDLeftWallObjects3= [];
gdjs.TutorialCode.GDLeftWallObjects4= [];
gdjs.TutorialCode.GDLeftWallObjects5= [];
gdjs.TutorialCode.GDRightWallObjects1= [];
gdjs.TutorialCode.GDRightWallObjects2= [];
gdjs.TutorialCode.GDRightWallObjects3= [];
gdjs.TutorialCode.GDRightWallObjects4= [];
gdjs.TutorialCode.GDRightWallObjects5= [];
gdjs.TutorialCode.GDBlockObjects1= [];
gdjs.TutorialCode.GDBlockObjects2= [];
gdjs.TutorialCode.GDBlockObjects3= [];
gdjs.TutorialCode.GDBlockObjects4= [];
gdjs.TutorialCode.GDBlockObjects5= [];
gdjs.TutorialCode.GDBlockStrength_95TextObjects1= [];
gdjs.TutorialCode.GDBlockStrength_95TextObjects2= [];
gdjs.TutorialCode.GDBlockStrength_95TextObjects3= [];
gdjs.TutorialCode.GDBlockStrength_95TextObjects4= [];
gdjs.TutorialCode.GDBlockStrength_95TextObjects5= [];
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects1= [];
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects2= [];
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects3= [];
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects4= [];
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects5= [];
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects1= [];
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects2= [];
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects3= [];
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects4= [];
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects5= [];
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects1= [];
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects2= [];
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects3= [];
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects4= [];
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects5= [];
gdjs.TutorialCode.GDExtraBallObjects1= [];
gdjs.TutorialCode.GDExtraBallObjects2= [];
gdjs.TutorialCode.GDExtraBallObjects3= [];
gdjs.TutorialCode.GDExtraBallObjects4= [];
gdjs.TutorialCode.GDExtraBallObjects5= [];
gdjs.TutorialCode.GDLargePlayButtonObjects1= [];
gdjs.TutorialCode.GDLargePlayButtonObjects2= [];
gdjs.TutorialCode.GDLargePlayButtonObjects3= [];
gdjs.TutorialCode.GDLargePlayButtonObjects4= [];
gdjs.TutorialCode.GDLargePlayButtonObjects5= [];
gdjs.TutorialCode.GDSuperPowerUpObjects1= [];
gdjs.TutorialCode.GDSuperPowerUpObjects2= [];
gdjs.TutorialCode.GDSuperPowerUpObjects3= [];
gdjs.TutorialCode.GDSuperPowerUpObjects4= [];
gdjs.TutorialCode.GDSuperPowerUpObjects5= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.TutorialCode.conditionTrue_1 = {val:false};
gdjs.TutorialCode.condition0IsTrue_1 = {val:false};
gdjs.TutorialCode.condition1IsTrue_1 = {val:false};
gdjs.TutorialCode.condition2IsTrue_1 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDExtraBallObjects4Objects = Hashtable.newFrom({"ExtraBall": gdjs.TutorialCode.GDExtraBallObjects4});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBlockObjects4Objects = Hashtable.newFrom({"Block": gdjs.TutorialCode.GDBlockObjects4});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) >= 0);
}
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) < 5);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("255;209;102");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) >= 5);
}
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) < 10);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("239;71;111");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) >= 10);
}
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) < 15);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("6;214;160");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) >= 15);
}
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) < 20);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("17;138;178");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) >= 20);
}
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.TutorialCode.GDBlockObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TutorialCode.GDBlockObjects4[0].getVariables()).get("BlockStrength"))), 25) < 25);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("255;255;255");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);

gdjs.copyArray(runtimeScene.getObjects("ExtraBall"), gdjs.TutorialCode.GDExtraBallObjects4);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtsExt__Sticker__IsStuck.func(runtimeScene, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDExtraBallObjects4Objects, "Sticker", gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBlockObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("7;59;76");
}
}}

}


{

gdjs.copyArray(gdjs.TutorialCode.GDBlockObjects3, gdjs.TutorialCode.GDBlockObjects4);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDBlockObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDBlockObjects4[i].getVariableBoolean(gdjs.TutorialCode.GDBlockObjects4[i].getVariables().get("SuperPowerup"), true) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDBlockObjects4[k] = gdjs.TutorialCode.GDBlockObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDBlockObjects4.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects4[i].setColor("7;59;76");
}
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.TutorialCode.GDBlockObjects2);

for(gdjs.TutorialCode.forEachIndex3 = 0;gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.GDBlockObjects2.length;++gdjs.TutorialCode.forEachIndex3) {
gdjs.TutorialCode.GDBlockObjects3.length = 0;


gdjs.TutorialCode.forEachTemporary3 = gdjs.TutorialCode.GDBlockObjects2[gdjs.TutorialCode.forEachIndex3];
gdjs.TutorialCode.GDBlockObjects3.push(gdjs.TutorialCode.forEachTemporary3);
if (true) {

{ //Subevents: 
gdjs.TutorialCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.TutorialCode.GDBlockObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDExtraBallObjects2Objects = Hashtable.newFrom({"ExtraBall": gdjs.TutorialCode.GDExtraBallObjects2});
gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.TutorialCode.GDFadeInOutObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDFadeInOutObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDFadeInOutObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.TutorialCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.TutorialCode.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("ExtraBall"), gdjs.TutorialCode.GDExtraBallObjects2);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBlockObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDExtraBallObjects2Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDBlockObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects2[i].setColor("7;59;76");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.TutorialCode.GDBlockObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDBlockObjects1[i].enableEffect("Outline", false);
}
}}

}


};gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TutorialCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDLargePlayButtonObjects2Objects = Hashtable.newFrom({"LargePlayButton": gdjs.TutorialCode.GDLargePlayButtonObjects2});
gdjs.TutorialCode.asyncCallback11256244 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TutorialCode.asyncCallback11256244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDLargePlayButtonObjects1Objects = Hashtable.newFrom({"LargePlayButton": gdjs.TutorialCode.GDLargePlayButtonObjects1});
gdjs.TutorialCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10703396);
}
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 0.5);
}}

}


{



}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDLargePlayButtonObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDLargePlayButtonObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDLargePlayButtonObjects1[i].setColor("74;74;74");
}
}}

}


};gdjs.TutorialCode.eventsList6 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(gdjs.TutorialCode.GDLargePlayButtonObjects1, gdjs.TutorialCode.GDLargePlayButtonObjects2);

{for(var i = 0, len = gdjs.TutorialCode.GDLargePlayButtonObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDLargePlayButtonObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDLargePlayButtonObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDLargePlayButtonObjects2[i].enableEffect("Outline", false);
}
}}

}


{



}


{

/* Reuse gdjs.TutorialCode.GDLargePlayButtonObjects1 */

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDLargePlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDLargePlayButtonObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDLargePlayButtonObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDLargePlayButtonObjects1[i].enableEffect("Outline", true);
}
}
{ //Subevents
gdjs.TutorialCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.TutorialCode.GDLargePlayButtonObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDLargePlayButtonObjects1[i].isVisible() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDLargePlayButtonObjects1[k] = gdjs.TutorialCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDLargePlayButtonObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TutorialCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.TutorialCode.GDLargePlayButtonObjects2);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDLargePlayButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.TutorialCode.GDFadeInOutObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 50, 2);
}{for(var i = 0, len = gdjs.TutorialCode.GDFadeInOutObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDFadeInOutObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.TutorialCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.TutorialCode.eventsList7(runtimeScene);
}


};gdjs.TutorialCode.eventsList9 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList3(runtimeScene);
}


{


gdjs.TutorialCode.eventsList8(runtimeScene);
}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDBackgroundObjects3.length = 0;
gdjs.TutorialCode.GDBackgroundObjects4.length = 0;
gdjs.TutorialCode.GDBackgroundObjects5.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects1.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects2.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects3.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects4.length = 0;
gdjs.TutorialCode.GDFadeInOutObjects5.length = 0;
gdjs.TutorialCode.GDTopWallObjects1.length = 0;
gdjs.TutorialCode.GDTopWallObjects2.length = 0;
gdjs.TutorialCode.GDTopWallObjects3.length = 0;
gdjs.TutorialCode.GDTopWallObjects4.length = 0;
gdjs.TutorialCode.GDTopWallObjects5.length = 0;
gdjs.TutorialCode.GDBottomWallObjects1.length = 0;
gdjs.TutorialCode.GDBottomWallObjects2.length = 0;
gdjs.TutorialCode.GDBottomWallObjects3.length = 0;
gdjs.TutorialCode.GDBottomWallObjects4.length = 0;
gdjs.TutorialCode.GDBottomWallObjects5.length = 0;
gdjs.TutorialCode.GDLeftWallObjects1.length = 0;
gdjs.TutorialCode.GDLeftWallObjects2.length = 0;
gdjs.TutorialCode.GDLeftWallObjects3.length = 0;
gdjs.TutorialCode.GDLeftWallObjects4.length = 0;
gdjs.TutorialCode.GDLeftWallObjects5.length = 0;
gdjs.TutorialCode.GDRightWallObjects1.length = 0;
gdjs.TutorialCode.GDRightWallObjects2.length = 0;
gdjs.TutorialCode.GDRightWallObjects3.length = 0;
gdjs.TutorialCode.GDRightWallObjects4.length = 0;
gdjs.TutorialCode.GDRightWallObjects5.length = 0;
gdjs.TutorialCode.GDBlockObjects1.length = 0;
gdjs.TutorialCode.GDBlockObjects2.length = 0;
gdjs.TutorialCode.GDBlockObjects3.length = 0;
gdjs.TutorialCode.GDBlockObjects4.length = 0;
gdjs.TutorialCode.GDBlockObjects5.length = 0;
gdjs.TutorialCode.GDBlockStrength_95TextObjects1.length = 0;
gdjs.TutorialCode.GDBlockStrength_95TextObjects2.length = 0;
gdjs.TutorialCode.GDBlockStrength_95TextObjects3.length = 0;
gdjs.TutorialCode.GDBlockStrength_95TextObjects4.length = 0;
gdjs.TutorialCode.GDBlockStrength_95TextObjects5.length = 0;
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects1.length = 0;
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects2.length = 0;
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects3.length = 0;
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects4.length = 0;
gdjs.TutorialCode.GDBlock_95Tutorial_95TextObjects5.length = 0;
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects1.length = 0;
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects2.length = 0;
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects3.length = 0;
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects4.length = 0;
gdjs.TutorialCode.GDExtraBall_95Tutorial_95TextObjects5.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects1.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects2.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects3.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects4.length = 0;
gdjs.TutorialCode.GDSuperPowerUp_95Tutorial_95TextObjects5.length = 0;
gdjs.TutorialCode.GDExtraBallObjects1.length = 0;
gdjs.TutorialCode.GDExtraBallObjects2.length = 0;
gdjs.TutorialCode.GDExtraBallObjects3.length = 0;
gdjs.TutorialCode.GDExtraBallObjects4.length = 0;
gdjs.TutorialCode.GDExtraBallObjects5.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects1.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects2.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects3.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects4.length = 0;
gdjs.TutorialCode.GDLargePlayButtonObjects5.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects1.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects2.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects3.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects4.length = 0;
gdjs.TutorialCode.GDSuperPowerUpObjects5.length = 0;

gdjs.TutorialCode.eventsList9(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
