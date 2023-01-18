gdjs.MenuCode = {};
gdjs.MenuCode.GDGDevelop_95WaterMarkObjects1= [];
gdjs.MenuCode.GDGDevelop_95WaterMarkObjects2= [];
gdjs.MenuCode.GDGDevelop_95WaterMarkObjects3= [];
gdjs.MenuCode.GDGUIBackGroundObjects1= [];
gdjs.MenuCode.GDGUIBackGroundObjects2= [];
gdjs.MenuCode.GDGUIBackGroundObjects3= [];
gdjs.MenuCode.GDBreakOutTitleObjects1= [];
gdjs.MenuCode.GDBreakOutTitleObjects2= [];
gdjs.MenuCode.GDBreakOutTitleObjects3= [];
gdjs.MenuCode.GDPlay_95ButtonObjects1= [];
gdjs.MenuCode.GDPlay_95ButtonObjects2= [];
gdjs.MenuCode.GDPlay_95ButtonObjects3= [];
gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1= [];
gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects2= [];
gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects3= [];
gdjs.MenuCode.GDExampleWaterMarkObjects1= [];
gdjs.MenuCode.GDExampleWaterMarkObjects2= [];
gdjs.MenuCode.GDExampleWaterMarkObjects3= [];
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1= [];
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects2= [];
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects3= [];
gdjs.MenuCode.GDBreakOutExplainObjects1= [];
gdjs.MenuCode.GDBreakOutExplainObjects2= [];
gdjs.MenuCode.GDBreakOutExplainObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDGUIBackGroundObjects1Objects = Hashtable.newFrom({"GUIBackGround": gdjs.MenuCode.GDGUIBackGroundObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10716308);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlay_95ButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDPlay_95ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95ButtonObjects2[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Assets/select_003.ogg", false, 70, 100);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10716884);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game(Physics)", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Assets/select_003.ogg", false, 70, 100);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDGUIBackGroundObjects1, gdjs.MenuCode.GDGUIBackGroundObjects2);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariables().get("ButtonType")) == "Play_Button" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDGUIBackGroundObjects2[k] = gdjs.MenuCode.GDGUIBackGroundObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.MenuCode.GDPlay_95ButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPlay_95ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95ButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MenuCode.GDGUIBackGroundObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariables().get("ButtonType")) == "Physics_Play_Button" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDGUIBackGroundObjects1[k] = gdjs.MenuCode.GDGUIBackGroundObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Physics_Play_Button"), gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDGUIBackGroundObjects1Objects = Hashtable.newFrom({"GUIBackGround": gdjs.MenuCode.GDGUIBackGroundObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDGUIBackGroundObjects1, gdjs.MenuCode.GDGUIBackGroundObjects2);


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects2[i].getVariables().get("ButtonType")) == "Play_Button" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDGUIBackGroundObjects2[k] = gdjs.MenuCode.GDGUIBackGroundObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.MenuCode.GDPlay_95ButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPlay_95ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95ButtonObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.MenuCode.GDGUIBackGroundObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDGUIBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariableString(gdjs.MenuCode.GDGUIBackGroundObjects1[i].getVariables().get("ButtonType")) == "Physics_Play_Button" ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDGUIBackGroundObjects1[k] = gdjs.MenuCode.GDGUIBackGroundObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGUIBackGroundObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Physics_Play_Button"), gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1[i].setAnimation(0);
}
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BreakOutExplain"), gdjs.MenuCode.GDBreakOutExplainObjects1);
gdjs.copyArray(runtimeScene.getObjects("BreakOutPhysicsExplain"), gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExampleWaterMark"), gdjs.MenuCode.GDExampleWaterMarkObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDExampleWaterMarkObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExampleWaterMarkObjects1[i].setShadow("18;26;44", 7, 0, -(100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1[i].setShadow("18;26;44", 7, 0, -(100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDBreakOutExplainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBreakOutExplainObjects1[i].setShadow("18;26;44", 7, 0, -(100));
}
}{for(var i = 0, len = gdjs.MenuCode.GDExampleWaterMarkObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExampleWaterMarkObjects1[i].setItalic(true);
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GUIBackGround"), gdjs.MenuCode.GDGUIBackGroundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDGUIBackGroundObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GUIBackGround"), gdjs.MenuCode.GDGUIBackGroundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDGUIBackGroundObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDGDevelop_95WaterMarkObjects1.length = 0;
gdjs.MenuCode.GDGDevelop_95WaterMarkObjects2.length = 0;
gdjs.MenuCode.GDGDevelop_95WaterMarkObjects3.length = 0;
gdjs.MenuCode.GDGUIBackGroundObjects1.length = 0;
gdjs.MenuCode.GDGUIBackGroundObjects2.length = 0;
gdjs.MenuCode.GDGUIBackGroundObjects3.length = 0;
gdjs.MenuCode.GDBreakOutTitleObjects1.length = 0;
gdjs.MenuCode.GDBreakOutTitleObjects2.length = 0;
gdjs.MenuCode.GDBreakOutTitleObjects3.length = 0;
gdjs.MenuCode.GDPlay_95ButtonObjects1.length = 0;
gdjs.MenuCode.GDPlay_95ButtonObjects2.length = 0;
gdjs.MenuCode.GDPlay_95ButtonObjects3.length = 0;
gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects1.length = 0;
gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects2.length = 0;
gdjs.MenuCode.GDPhysics_95Play_95ButtonObjects3.length = 0;
gdjs.MenuCode.GDExampleWaterMarkObjects1.length = 0;
gdjs.MenuCode.GDExampleWaterMarkObjects2.length = 0;
gdjs.MenuCode.GDExampleWaterMarkObjects3.length = 0;
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects1.length = 0;
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects2.length = 0;
gdjs.MenuCode.GDBreakOutPhysicsExplainObjects3.length = 0;
gdjs.MenuCode.GDBreakOutExplainObjects1.length = 0;
gdjs.MenuCode.GDBreakOutExplainObjects2.length = 0;
gdjs.MenuCode.GDBreakOutExplainObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
