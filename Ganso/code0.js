gdjs.SelectionCode = {};
gdjs.SelectionCode.GDBubbleObjects2_1final = [];

gdjs.SelectionCode.GDNarratorObjects2_1final = [];

gdjs.SelectionCode.GDPlayerX2Objects1= [];
gdjs.SelectionCode.GDPlayerX2Objects2= [];
gdjs.SelectionCode.GDPlayerX2Objects3= [];
gdjs.SelectionCode.GDPlayerX3Objects1= [];
gdjs.SelectionCode.GDPlayerX3Objects2= [];
gdjs.SelectionCode.GDPlayerX3Objects3= [];
gdjs.SelectionCode.GDPlayerX4Objects1= [];
gdjs.SelectionCode.GDPlayerX4Objects2= [];
gdjs.SelectionCode.GDPlayerX4Objects3= [];
gdjs.SelectionCode.GDClassicLevelObjects1= [];
gdjs.SelectionCode.GDClassicLevelObjects2= [];
gdjs.SelectionCode.GDClassicLevelObjects3= [];
gdjs.SelectionCode.GDEmptyLevelObjects1= [];
gdjs.SelectionCode.GDEmptyLevelObjects2= [];
gdjs.SelectionCode.GDEmptyLevelObjects3= [];
gdjs.SelectionCode.GDMessageObjects1= [];
gdjs.SelectionCode.GDMessageObjects2= [];
gdjs.SelectionCode.GDMessageObjects3= [];
gdjs.SelectionCode.GDBubbleObjects1= [];
gdjs.SelectionCode.GDBubbleObjects2= [];
gdjs.SelectionCode.GDBubbleObjects3= [];
gdjs.SelectionCode.GDArrowObjects1= [];
gdjs.SelectionCode.GDArrowObjects2= [];
gdjs.SelectionCode.GDArrowObjects3= [];
gdjs.SelectionCode.GDNarratorObjects1= [];
gdjs.SelectionCode.GDNarratorObjects2= [];
gdjs.SelectionCode.GDNarratorObjects3= [];
gdjs.SelectionCode.GDGoose1Objects1= [];
gdjs.SelectionCode.GDGoose1Objects2= [];
gdjs.SelectionCode.GDGoose1Objects3= [];
gdjs.SelectionCode.GDGoose2Objects1= [];
gdjs.SelectionCode.GDGoose2Objects2= [];
gdjs.SelectionCode.GDGoose2Objects3= [];
gdjs.SelectionCode.GDGoose3Objects1= [];
gdjs.SelectionCode.GDGoose3Objects2= [];
gdjs.SelectionCode.GDGoose3Objects3= [];
gdjs.SelectionCode.GDGoose4Objects1= [];
gdjs.SelectionCode.GDGoose4Objects2= [];
gdjs.SelectionCode.GDGoose4Objects3= [];
gdjs.SelectionCode.GDControlsObjects1= [];
gdjs.SelectionCode.GDControlsObjects2= [];
gdjs.SelectionCode.GDControlsObjects3= [];

gdjs.SelectionCode.conditionTrue_0 = {val:false};
gdjs.SelectionCode.condition0IsTrue_0 = {val:false};
gdjs.SelectionCode.condition1IsTrue_0 = {val:false};
gdjs.SelectionCode.condition2IsTrue_0 = {val:false};
gdjs.SelectionCode.conditionTrue_1 = {val:false};
gdjs.SelectionCode.condition0IsTrue_1 = {val:false};
gdjs.SelectionCode.condition1IsTrue_1 = {val:false};
gdjs.SelectionCode.condition2IsTrue_1 = {val:false};


gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDNarratorObjects3Objects = Hashtable.newFrom({"Narrator": gdjs.SelectionCode.GDNarratorObjects3});
gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDBubbleObjects3Objects = Hashtable.newFrom({"Bubble": gdjs.SelectionCode.GDBubbleObjects3});
gdjs.SelectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.SelectionCode.GDBubbleObjects2.length = 0;

gdjs.SelectionCode.GDNarratorObjects2.length = 0;


gdjs.SelectionCode.condition0IsTrue_0.val = false;
gdjs.SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelectionCode.condition0IsTrue_0.val ) {
{
{gdjs.SelectionCode.conditionTrue_1 = gdjs.SelectionCode.condition1IsTrue_0;
gdjs.SelectionCode.GDBubbleObjects2_1final.length = 0;gdjs.SelectionCode.GDNarratorObjects2_1final.length = 0;gdjs.SelectionCode.condition0IsTrue_1.val = false;
gdjs.SelectionCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Narrator"), gdjs.SelectionCode.GDNarratorObjects3);
gdjs.SelectionCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDNarratorObjects3Objects, runtimeScene, true, false);
if( gdjs.SelectionCode.condition0IsTrue_1.val ) {
    gdjs.SelectionCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.SelectionCode.GDNarratorObjects3.length;j<jLen;++j) {
        if ( gdjs.SelectionCode.GDNarratorObjects2_1final.indexOf(gdjs.SelectionCode.GDNarratorObjects3[j]) === -1 )
            gdjs.SelectionCode.GDNarratorObjects2_1final.push(gdjs.SelectionCode.GDNarratorObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bubble"), gdjs.SelectionCode.GDBubbleObjects3);
gdjs.SelectionCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDBubbleObjects3Objects, runtimeScene, true, false);
if( gdjs.SelectionCode.condition1IsTrue_1.val ) {
    gdjs.SelectionCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.SelectionCode.GDBubbleObjects3.length;j<jLen;++j) {
        if ( gdjs.SelectionCode.GDBubbleObjects2_1final.indexOf(gdjs.SelectionCode.GDBubbleObjects3[j]) === -1 )
            gdjs.SelectionCode.GDBubbleObjects2_1final.push(gdjs.SelectionCode.GDBubbleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SelectionCode.GDBubbleObjects2_1final, gdjs.SelectionCode.GDBubbleObjects2);
gdjs.copyArray(gdjs.SelectionCode.GDNarratorObjects2_1final, gdjs.SelectionCode.GDNarratorObjects2);
}
}
}}
if (gdjs.SelectionCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("NeedToChangeMessage").setNumber(1);
}}

}


{


gdjs.SelectionCode.condition0IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "ChangeBuble");
}if (gdjs.SelectionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("NeedToChangeMessage").setNumber(1);
}}

}


{


gdjs.SelectionCode.condition0IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("NeedToChangeMessage")) == 1;
}if (gdjs.SelectionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.SelectionCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bubble"), gdjs.SelectionCode.GDBubbleObjects1);
/* Reuse gdjs.SelectionCode.GDMessageObjects1 */
{for(var i = 0, len = gdjs.SelectionCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDMessageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelectionCode.GDBubbleObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDBubbleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelectionCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDArrowObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowBuble");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "ShowBuble");
}}

}


};gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDPlayerX2Objects2Objects = Hashtable.newFrom({"PlayerX2": gdjs.SelectionCode.GDPlayerX2Objects2});
gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDPlayerX3Objects2Objects = Hashtable.newFrom({"PlayerX3": gdjs.SelectionCode.GDPlayerX3Objects2});
gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDPlayerX4Objects1Objects = Hashtable.newFrom({"PlayerX4": gdjs.SelectionCode.GDPlayerX4Objects1});
gdjs.SelectionCode.eventsList1 = function(runtimeScene) {

{


gdjs.SelectionCode.condition0IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SelectionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerX2"), gdjs.SelectionCode.GDPlayerX2Objects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerX3"), gdjs.SelectionCode.GDPlayerX3Objects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerX4"), gdjs.SelectionCode.GDPlayerX4Objects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX2Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX3Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX3Objects2[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX4Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX4Objects2[i].setOpacity(127);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerX2"), gdjs.SelectionCode.GDPlayerX2Objects2);

gdjs.SelectionCode.condition0IsTrue_0.val = false;
gdjs.SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDPlayerX2Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.SelectionCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SelectionCode.GDPlayerX2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerX3"), gdjs.SelectionCode.GDPlayerX3Objects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerX4"), gdjs.SelectionCode.GDPlayerX4Objects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX2Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX3Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX4Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX4Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX3Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX3Objects2[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX4Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX4Objects2[i].setOpacity(127);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerX3"), gdjs.SelectionCode.GDPlayerX3Objects2);

gdjs.SelectionCode.condition0IsTrue_0.val = false;
gdjs.SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDPlayerX3Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerX2"), gdjs.SelectionCode.GDPlayerX2Objects2);
/* Reuse gdjs.SelectionCode.GDPlayerX3Objects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerX4"), gdjs.SelectionCode.GDPlayerX4Objects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX2Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX3Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX4Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX4Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX2Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX2Objects2[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX4Objects2.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX4Objects2[i].setOpacity(127);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerX4"), gdjs.SelectionCode.GDPlayerX4Objects1);

gdjs.SelectionCode.condition0IsTrue_0.val = false;
gdjs.SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDPlayerX4Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerX2"), gdjs.SelectionCode.GDPlayerX2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerX3"), gdjs.SelectionCode.GDPlayerX3Objects1);
/* Reuse gdjs.SelectionCode.GDPlayerX4Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX2Objects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX3Objects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX4Objects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX2Objects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX2Objects1[i].setOpacity(127);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDPlayerX3Objects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDPlayerX3Objects1[i].setOpacity(127);
}
}}

}


};gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDClassicLevelObjects1ObjectsGDgdjs_46SelectionCode_46GDEmptyLevelObjects1Objects = Hashtable.newFrom({"ClassicLevel": gdjs.SelectionCode.GDClassicLevelObjects1, "EmptyLevel": gdjs.SelectionCode.GDEmptyLevelObjects1});
gdjs.SelectionCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ClassicLevel"), gdjs.SelectionCode.GDClassicLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmptyLevel"), gdjs.SelectionCode.GDEmptyLevelObjects1);

gdjs.SelectionCode.condition0IsTrue_0.val = false;
gdjs.SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectionCode.mapOfGDgdjs_46SelectionCode_46GDClassicLevelObjects1ObjectsGDgdjs_46SelectionCode_46GDEmptyLevelObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.SelectionCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SelectionCode.GDClassicLevelObjects1 */
/* Reuse gdjs.SelectionCode.GDEmptyLevelObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setString((gdjs.RuntimeObject.getVariableString(((gdjs.SelectionCode.GDEmptyLevelObjects1.length === 0 ) ? ((gdjs.SelectionCode.GDClassicLevelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SelectionCode.GDClassicLevelObjects1[0].getVariables()) : gdjs.SelectionCode.GDEmptyLevelObjects1[0].getVariables()).get("Name"))));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.SelectionCode.GDEmptyLevelObjects1.length === 0 ) ? ((gdjs.SelectionCode.GDClassicLevelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SelectionCode.GDClassicLevelObjects1[0].getVariables()) : gdjs.SelectionCode.GDEmptyLevelObjects1[0].getVariables()).get("Bomb"))));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.SelectionCode.GDEmptyLevelObjects1.length === 0 ) ? ((gdjs.SelectionCode.GDClassicLevelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SelectionCode.GDClassicLevelObjects1[0].getVariables()) : gdjs.SelectionCode.GDEmptyLevelObjects1[0].getVariables()).get("Flame"))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.SelectionCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.SelectionCode.condition0IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SelectionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("NeedToChangeMessage").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.SelectionCode.GDMessageObjects1);

gdjs.SelectionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SelectionCode.GDMessageObjects1.length;i<l;++i) {
    if ( gdjs.SelectionCode.GDMessageObjects1[i].isVisible() ) {
        gdjs.SelectionCode.condition0IsTrue_0.val = true;
        gdjs.SelectionCode.GDMessageObjects1[k] = gdjs.SelectionCode.GDMessageObjects1[i];
        ++k;
    }
}
gdjs.SelectionCode.GDMessageObjects1.length = k;}if (gdjs.SelectionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SelectionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.SelectionCode.condition0IsTrue_0.val = false;
gdjs.SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "ShowBuble");
}if ( gdjs.SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.SelectionCode.condition1IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "ShowBuble"));
}}
if (gdjs.SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.SelectionCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bubble"), gdjs.SelectionCode.GDBubbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs.SelectionCode.GDMessageObjects1);
{for(var i = 0, len = gdjs.SelectionCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDMessageObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild(gdjs.evtTools.common.toString(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getVariables().getFromIndex(0)) - 1)))));
}
}{for(var i = 0, len = gdjs.SelectionCode.GDMessageObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDMessageObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDBubbleObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDBubbleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SelectionCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDArrowObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "ShowBuble");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChangeBuble");
}{runtimeScene.getVariables().get("NeedToChangeMessage").setNumber(0);
}}

}


{


gdjs.SelectionCode.eventsList1(runtimeScene);
}


{


gdjs.SelectionCode.eventsList2(runtimeScene);
}


};

gdjs.SelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectionCode.GDPlayerX2Objects1.length = 0;
gdjs.SelectionCode.GDPlayerX2Objects2.length = 0;
gdjs.SelectionCode.GDPlayerX2Objects3.length = 0;
gdjs.SelectionCode.GDPlayerX3Objects1.length = 0;
gdjs.SelectionCode.GDPlayerX3Objects2.length = 0;
gdjs.SelectionCode.GDPlayerX3Objects3.length = 0;
gdjs.SelectionCode.GDPlayerX4Objects1.length = 0;
gdjs.SelectionCode.GDPlayerX4Objects2.length = 0;
gdjs.SelectionCode.GDPlayerX4Objects3.length = 0;
gdjs.SelectionCode.GDClassicLevelObjects1.length = 0;
gdjs.SelectionCode.GDClassicLevelObjects2.length = 0;
gdjs.SelectionCode.GDClassicLevelObjects3.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects1.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects2.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects3.length = 0;
gdjs.SelectionCode.GDMessageObjects1.length = 0;
gdjs.SelectionCode.GDMessageObjects2.length = 0;
gdjs.SelectionCode.GDMessageObjects3.length = 0;
gdjs.SelectionCode.GDBubbleObjects1.length = 0;
gdjs.SelectionCode.GDBubbleObjects2.length = 0;
gdjs.SelectionCode.GDBubbleObjects3.length = 0;
gdjs.SelectionCode.GDArrowObjects1.length = 0;
gdjs.SelectionCode.GDArrowObjects2.length = 0;
gdjs.SelectionCode.GDArrowObjects3.length = 0;
gdjs.SelectionCode.GDNarratorObjects1.length = 0;
gdjs.SelectionCode.GDNarratorObjects2.length = 0;
gdjs.SelectionCode.GDNarratorObjects3.length = 0;
gdjs.SelectionCode.GDGoose1Objects1.length = 0;
gdjs.SelectionCode.GDGoose1Objects2.length = 0;
gdjs.SelectionCode.GDGoose1Objects3.length = 0;
gdjs.SelectionCode.GDGoose2Objects1.length = 0;
gdjs.SelectionCode.GDGoose2Objects2.length = 0;
gdjs.SelectionCode.GDGoose2Objects3.length = 0;
gdjs.SelectionCode.GDGoose3Objects1.length = 0;
gdjs.SelectionCode.GDGoose3Objects2.length = 0;
gdjs.SelectionCode.GDGoose3Objects3.length = 0;
gdjs.SelectionCode.GDGoose4Objects1.length = 0;
gdjs.SelectionCode.GDGoose4Objects2.length = 0;
gdjs.SelectionCode.GDGoose4Objects3.length = 0;
gdjs.SelectionCode.GDControlsObjects1.length = 0;
gdjs.SelectionCode.GDControlsObjects2.length = 0;
gdjs.SelectionCode.GDControlsObjects3.length = 0;

gdjs.SelectionCode.eventsList3(runtimeScene);

return;

}

gdjs['SelectionCode'] = gdjs.SelectionCode;
