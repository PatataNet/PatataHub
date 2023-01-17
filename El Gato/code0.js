gdjs.GameCode = {};
gdjs.GameCode.GDblockObjects1= [];
gdjs.GameCode.GDblockObjects2= [];
gdjs.GameCode.GDblockObjects3= [];
gdjs.GameCode.GDblockObjects4= [];
gdjs.GameCode.GDtextwinObjects1= [];
gdjs.GameCode.GDtextwinObjects2= [];
gdjs.GameCode.GDtextwinObjects3= [];
gdjs.GameCode.GDtextwinObjects4= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewSpriteObjects4= [];
gdjs.GameCode.GDNewTextObjects1= [];
gdjs.GameCode.GDNewTextObjects2= [];
gdjs.GameCode.GDNewTextObjects3= [];
gdjs.GameCode.GDNewTextObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDblockObjects2Objects = Hashtable.newFrom({"block": gdjs.GameCode.GDblockObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDblockObjects1Objects = Hashtable.newFrom({"block": gdjs.GameCode.GDblockObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("block"), gdjs.GameCode.GDblockObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDblockObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDblockObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDblockObjects2[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDblockObjects2[k] = gdjs.GameCode.GDblockObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDblockObjects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDblockObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDblockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDblockObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDblockObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDblockObjects2[0].getVariables()).getFromIndex(0)))).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("block"), gdjs.GameCode.GDblockObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDblockObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDblockObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDblockObjects1[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDblockObjects1[k] = gdjs.GameCode.GDblockObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDblockObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDblockObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDblockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDblockObjects1[i].setAnimation(2);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDblockObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDblockObjects1[0].getVariables()).getFromIndex(0)))).setNumber(2);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(0 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentRow")))) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(1 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentRow")))) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(2 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentRow")))) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(0 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentColumn")))) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(3 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentColumn")))) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(6 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentColumn")))) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(2)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(4)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(6)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(0)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(4)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0).getChild(8)) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{


{
{runtimeScene.getVariables().get("CurrentRow").add(3);
}{runtimeScene.getVariables().get("CurrentColumn").add(1);
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentRow")) > 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("CurrentRow").setNumber(0);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentColumn")) >= 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("CurrentColumn").setNumber(0);
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textwin"), gdjs.GameCode.GDtextwinObjects2);
{for(var i = 0, len = gdjs.GameCode.GDtextwinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDtextwinObjects2[i].setString("X Gano");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textwin"), gdjs.GameCode.GDtextwinObjects1);
{for(var i = 0, len = gdjs.GameCode.GDtextwinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtextwinObjects1[i].setString("O Gano");
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) != 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8198988);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameCode.GDNewSpriteObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(1));
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDblockObjects1.length = 0;
gdjs.GameCode.GDblockObjects2.length = 0;
gdjs.GameCode.GDblockObjects3.length = 0;
gdjs.GameCode.GDblockObjects4.length = 0;
gdjs.GameCode.GDtextwinObjects1.length = 0;
gdjs.GameCode.GDtextwinObjects2.length = 0;
gdjs.GameCode.GDtextwinObjects3.length = 0;
gdjs.GameCode.GDtextwinObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;
gdjs.GameCode.GDNewTextObjects3.length = 0;
gdjs.GameCode.GDNewTextObjects4.length = 0;

gdjs.GameCode.eventsList4(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
