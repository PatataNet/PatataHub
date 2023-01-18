gdjs.StartCode = {};
gdjs.StartCode.GDStartButtonObjects1_1final = [];

gdjs.StartCode.GDControlsObjects1= [];
gdjs.StartCode.GDControlsObjects2= [];
gdjs.StartCode.GDControlsObjects3= [];
gdjs.StartCode.GDStartButtonObjects1= [];
gdjs.StartCode.GDStartButtonObjects2= [];
gdjs.StartCode.GDStartButtonObjects3= [];
gdjs.StartCode.GDGraveyardBackgroundObjects1= [];
gdjs.StartCode.GDGraveyardBackgroundObjects2= [];
gdjs.StartCode.GDGraveyardBackgroundObjects3= [];
gdjs.StartCode.GDSoundButtonObjects1= [];
gdjs.StartCode.GDSoundButtonObjects2= [];
gdjs.StartCode.GDSoundButtonObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};
gdjs.StartCode.condition3IsTrue_0 = {val:false};
gdjs.StartCode.conditionTrue_1 = {val:false};
gdjs.StartCode.condition0IsTrue_1 = {val:false};
gdjs.StartCode.condition1IsTrue_1 = {val:false};
gdjs.StartCode.condition2IsTrue_1 = {val:false};
gdjs.StartCode.condition3IsTrue_1 = {val:false};
gdjs.StartCode.conditionTrue_2 = {val:false};
gdjs.StartCode.condition0IsTrue_2 = {val:false};
gdjs.StartCode.condition1IsTrue_2 = {val:false};
gdjs.StartCode.condition2IsTrue_2 = {val:false};
gdjs.StartCode.condition3IsTrue_2 = {val:false};


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Music.wav", 1, true, 30, 1);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 800, 600, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


};gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects2});
gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.StartCode.GDSoundButtonObjects1});
gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.StartCode.GDStartButtonObjects1.length = 0;


gdjs.StartCode.condition0IsTrue_0.val = false;
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition0IsTrue_0;
gdjs.StartCode.GDStartButtonObjects1_1final.length = 0;gdjs.StartCode.condition0IsTrue_1.val = false;
gdjs.StartCode.condition1IsTrue_1.val = false;
{
gdjs.StartCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.StartCode.condition0IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects2);
{gdjs.StartCode.conditionTrue_2 = gdjs.StartCode.condition1IsTrue_1;
gdjs.StartCode.condition0IsTrue_2.val = false;
gdjs.StartCode.condition1IsTrue_2.val = false;
{
gdjs.StartCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_2.val ) {
{
gdjs.StartCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.StartCode.conditionTrue_2.val = true && gdjs.StartCode.condition0IsTrue_2.val && gdjs.StartCode.condition1IsTrue_2.val;
}
if( gdjs.StartCode.condition1IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDStartButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDStartButtonObjects1_1final.indexOf(gdjs.StartCode.GDStartButtonObjects2[j]) === -1 )
            gdjs.StartCode.GDStartButtonObjects1_1final.push(gdjs.StartCode.GDStartButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDStartButtonObjects1_1final, gdjs.StartCode.GDStartButtonObjects1);
}
}
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level0", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.StartCode.GDSoundButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
gdjs.StartCode.condition2IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDSoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition1IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition2IsTrue_0;
gdjs.StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10849444);
}
}}
}
if (gdjs.StartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7744804);
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.StartCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.StartCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSoundButtonObjects1[i].setAnimationName("Off");
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10739348);
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.StartCode.GDSoundButtonObjects1);
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.StartCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSoundButtonObjects1[i].setAnimationName("On");
}
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDControlsObjects1.length = 0;
gdjs.StartCode.GDControlsObjects2.length = 0;
gdjs.StartCode.GDControlsObjects3.length = 0;
gdjs.StartCode.GDStartButtonObjects1.length = 0;
gdjs.StartCode.GDStartButtonObjects2.length = 0;
gdjs.StartCode.GDStartButtonObjects3.length = 0;
gdjs.StartCode.GDGraveyardBackgroundObjects1.length = 0;
gdjs.StartCode.GDGraveyardBackgroundObjects2.length = 0;
gdjs.StartCode.GDGraveyardBackgroundObjects3.length = 0;
gdjs.StartCode.GDSoundButtonObjects1.length = 0;
gdjs.StartCode.GDSoundButtonObjects2.length = 0;
gdjs.StartCode.GDSoundButtonObjects3.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
