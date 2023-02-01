gdjs.WaterCode = {};
gdjs.WaterCode.forEachIndex3 = 0;

gdjs.WaterCode.forEachObjects3 = [];

gdjs.WaterCode.forEachTemporary3 = null;

gdjs.WaterCode.forEachTotalCount3 = 0;

gdjs.WaterCode.GDVisionFieldObjects1= [];
gdjs.WaterCode.GDVisionFieldObjects2= [];
gdjs.WaterCode.GDVisionFieldObjects3= [];
gdjs.WaterCode.GDVisionFieldObjects4= [];
gdjs.WaterCode.GDWoodBackgroundObjects1= [];
gdjs.WaterCode.GDWoodBackgroundObjects2= [];
gdjs.WaterCode.GDWoodBackgroundObjects3= [];
gdjs.WaterCode.GDWoodBackgroundObjects4= [];
gdjs.WaterCode.GDTargetObjects1= [];
gdjs.WaterCode.GDTargetObjects2= [];
gdjs.WaterCode.GDTargetObjects3= [];
gdjs.WaterCode.GDTargetObjects4= [];
gdjs.WaterCode.GDBallObjects1= [];
gdjs.WaterCode.GDBallObjects2= [];
gdjs.WaterCode.GDBallObjects3= [];
gdjs.WaterCode.GDBallObjects4= [];
gdjs.WaterCode.GDBorderObjects1= [];
gdjs.WaterCode.GDBorderObjects2= [];
gdjs.WaterCode.GDBorderObjects3= [];
gdjs.WaterCode.GDBorderObjects4= [];
gdjs.WaterCode.GDInfoObjects1= [];
gdjs.WaterCode.GDInfoObjects2= [];
gdjs.WaterCode.GDInfoObjects3= [];
gdjs.WaterCode.GDInfoObjects4= [];
gdjs.WaterCode.GDNewBBTextObjects1= [];
gdjs.WaterCode.GDNewBBTextObjects2= [];
gdjs.WaterCode.GDNewBBTextObjects3= [];
gdjs.WaterCode.GDNewBBTextObjects4= [];
gdjs.WaterCode.GDNewBBText2Objects1= [];
gdjs.WaterCode.GDNewBBText2Objects2= [];
gdjs.WaterCode.GDNewBBText2Objects3= [];
gdjs.WaterCode.GDNewBBText2Objects4= [];

gdjs.WaterCode.conditionTrue_0 = {val:false};
gdjs.WaterCode.condition0IsTrue_0 = {val:false};
gdjs.WaterCode.condition1IsTrue_0 = {val:false};
gdjs.WaterCode.condition2IsTrue_0 = {val:false};


gdjs.WaterCode.eventsList0 = function(runtimeScene) {

};gdjs.WaterCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("VisionField"), gdjs.WaterCode.GDVisionFieldObjects2);
{for(var i = 0, len = gdjs.WaterCode.GDVisionFieldObjects2.length ;i < len;++i) {
    gdjs.WaterCode.GDVisionFieldObjects2[i].getBehavior("MarchingSquaresBehavior").ClearField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.WaterCode.GDBallObjects2);

for(gdjs.WaterCode.forEachIndex3 = 0;gdjs.WaterCode.forEachIndex3 < gdjs.WaterCode.GDBallObjects2.length;++gdjs.WaterCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("VisionField"), gdjs.WaterCode.GDVisionFieldObjects3);
gdjs.WaterCode.GDBallObjects3.length = 0;


gdjs.WaterCode.forEachTemporary3 = gdjs.WaterCode.GDBallObjects2[gdjs.WaterCode.forEachIndex3];
gdjs.WaterCode.GDBallObjects3.push(gdjs.WaterCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.WaterCode.GDVisionFieldObjects3.length ;i < len;++i) {
    gdjs.WaterCode.GDVisionFieldObjects3[i].getBehavior("MarchingSquaresBehavior").AddDisk((( gdjs.WaterCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.WaterCode.GDBallObjects3[0].getPointX("")), (( gdjs.WaterCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.WaterCode.GDBallObjects3[0].getPointY("")), 20, 5, "Addition", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("VisionField"), gdjs.WaterCode.GDVisionFieldObjects1);
{for(var i = 0, len = gdjs.WaterCode.GDVisionFieldObjects1.length ;i < len;++i) {
    gdjs.WaterCode.GDVisionFieldObjects1[i].clear();
}
}{for(var i = 0, len = gdjs.WaterCode.GDVisionFieldObjects1.length ;i < len;++i) {
    gdjs.WaterCode.GDVisionFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.WaterCode.eventsList2 = function(runtimeScene) {

};gdjs.WaterCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.WaterCode.GDBallObjects2);

for(gdjs.WaterCode.forEachIndex3 = 0;gdjs.WaterCode.forEachIndex3 < gdjs.WaterCode.GDBallObjects2.length;++gdjs.WaterCode.forEachIndex3) {
gdjs.WaterCode.GDBallObjects3.length = 0;


gdjs.WaterCode.forEachTemporary3 = gdjs.WaterCode.GDBallObjects2[gdjs.WaterCode.forEachIndex3];
gdjs.WaterCode.GDBallObjects3.push(gdjs.WaterCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.WaterCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.WaterCode.GDBallObjects3[i].getBehavior("Physics2").applyForceTowardPosition(-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100 / gdjs.evtTools.common.distanceBetweenPositions((gdjs.WaterCode.GDBallObjects3[i].getPointX("")), (gdjs.WaterCode.GDBallObjects3[i].getPointY("")), gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)), gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, 0);
}
}}
}

}


};gdjs.WaterCode.mapOfGDgdjs_46WaterCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.WaterCode.GDBallObjects2});
gdjs.WaterCode.mapOfGDgdjs_46WaterCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.WaterCode.GDBallObjects3});
gdjs.WaterCode.mapOfGDgdjs_46WaterCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.WaterCode.GDBallObjects3});
gdjs.WaterCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("Ball"), gdjs.WaterCode.GDBallObjects3);


gdjs.WaterCode.condition0IsTrue_0.val = false;
gdjs.WaterCode.condition1IsTrue_0.val = false;
{
gdjs.WaterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cooldown") >= gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "cooldown");
}if ( gdjs.WaterCode.condition0IsTrue_0.val ) {
{
gdjs.WaterCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.WaterCode.mapOfGDgdjs_46WaterCode_46GDBallObjects3Objects) < 500;
}}
if (gdjs.WaterCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WaterCode.GDBallObjects3 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WaterCode.mapOfGDgdjs_46WaterCode_46GDBallObjects3Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.WaterCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.WaterCode.GDBallObjects3[i].hide();
}
}}

}


};gdjs.WaterCode.asyncCallback7761668 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "cooldown");
}
{ //Subevents
gdjs.WaterCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.WaterCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.WaterCode.GDBallObjects2) asyncObjectsList.addObject("Ball", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.WaterCode.asyncCallback7761668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WaterCode.eventsList6 = function(runtimeScene) {

{


gdjs.WaterCode.condition0IsTrue_0.val = false;
{
gdjs.WaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.WaterCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaterCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.WaterCode.GDBallObjects2);

gdjs.WaterCode.condition0IsTrue_0.val = false;
gdjs.WaterCode.condition1IsTrue_0.val = false;
{
gdjs.WaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.WaterCode.condition0IsTrue_0.val ) {
{
gdjs.WaterCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.WaterCode.mapOfGDgdjs_46WaterCode_46GDBallObjects2Objects) < 500;
}}
if (gdjs.WaterCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}
{ //Subevents
gdjs.WaterCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.WaterCode.condition0IsTrue_0.val = false;
{
gdjs.WaterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}if (gdjs.WaterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Water", false);
}}

}


};gdjs.WaterCode.mapOfEmptyGDBallObjects = Hashtable.newFrom({"Ball": []});
gdjs.WaterCode.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.WaterCode.GDNewBBTextObjects1);
{runtimeScene.getGame().getVariables().get("water").setNumber(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WaterCode.mapOfEmptyGDBallObjects));
}{for(var i = 0, len = gdjs.WaterCode.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.WaterCode.GDNewBBTextObjects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("water")));
}
}}

}


};gdjs.WaterCode.eventsList8 = function(runtimeScene) {

{


gdjs.WaterCode.eventsList1(runtimeScene);
}


{


gdjs.WaterCode.eventsList6(runtimeScene);
}


{


gdjs.WaterCode.eventsList7(runtimeScene);
}


};

gdjs.WaterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WaterCode.GDVisionFieldObjects1.length = 0;
gdjs.WaterCode.GDVisionFieldObjects2.length = 0;
gdjs.WaterCode.GDVisionFieldObjects3.length = 0;
gdjs.WaterCode.GDVisionFieldObjects4.length = 0;
gdjs.WaterCode.GDWoodBackgroundObjects1.length = 0;
gdjs.WaterCode.GDWoodBackgroundObjects2.length = 0;
gdjs.WaterCode.GDWoodBackgroundObjects3.length = 0;
gdjs.WaterCode.GDWoodBackgroundObjects4.length = 0;
gdjs.WaterCode.GDTargetObjects1.length = 0;
gdjs.WaterCode.GDTargetObjects2.length = 0;
gdjs.WaterCode.GDTargetObjects3.length = 0;
gdjs.WaterCode.GDTargetObjects4.length = 0;
gdjs.WaterCode.GDBallObjects1.length = 0;
gdjs.WaterCode.GDBallObjects2.length = 0;
gdjs.WaterCode.GDBallObjects3.length = 0;
gdjs.WaterCode.GDBallObjects4.length = 0;
gdjs.WaterCode.GDBorderObjects1.length = 0;
gdjs.WaterCode.GDBorderObjects2.length = 0;
gdjs.WaterCode.GDBorderObjects3.length = 0;
gdjs.WaterCode.GDBorderObjects4.length = 0;
gdjs.WaterCode.GDInfoObjects1.length = 0;
gdjs.WaterCode.GDInfoObjects2.length = 0;
gdjs.WaterCode.GDInfoObjects3.length = 0;
gdjs.WaterCode.GDInfoObjects4.length = 0;
gdjs.WaterCode.GDNewBBTextObjects1.length = 0;
gdjs.WaterCode.GDNewBBTextObjects2.length = 0;
gdjs.WaterCode.GDNewBBTextObjects3.length = 0;
gdjs.WaterCode.GDNewBBTextObjects4.length = 0;
gdjs.WaterCode.GDNewBBText2Objects1.length = 0;
gdjs.WaterCode.GDNewBBText2Objects2.length = 0;
gdjs.WaterCode.GDNewBBText2Objects3.length = 0;
gdjs.WaterCode.GDNewBBText2Objects4.length = 0;

gdjs.WaterCode.eventsList8(runtimeScene);

return;

}

gdjs['WaterCode'] = gdjs.WaterCode;
